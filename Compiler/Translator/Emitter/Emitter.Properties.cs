using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.Translator
{
    public partial class Emitter : Visitor
    {
        public const string ROOT = "Bridge";
        public const string DELEGATE_BIND = "fn.bind";
        public const string DELEGATE_BIND_SCOPE = "fn.bindScope";
        public const string DELEGATE_COMBINE = "fn.combine";
        public const string DELEGATE_REMOVE = "fn.remove";
        public const string CAST = "cast";
        public const string AS = "as";
        public const string IS = "is";
        public const string ENUMERATOR = "getEnumerator";
        public const string MOVE_NEXT = "moveNext";
        public const string GET_CURRENT = "getCurrent";
        public const string APPLY_OBJECT = "apply";
        public const string MERGE_OBJECT = "merge";
        public const string FIX_ARGUMENT_NAME = "__autofix__";

        internal static List<string> reservedStaticNames = new List<string> { "Name", "Arguments", "Caller", "Length", "Prototype" };

        private Dictionary<string, OverloadsCollection> overloadsCache;

        public Dictionary<string, OverloadsCollection> OverloadsCache
        {
            get
            {
                if (this.overloadsCache == null)
                {
                    this.overloadsCache = new Dictionary<string, OverloadsCollection>();
                }
                return this.overloadsCache;
            }
        }

        public IValidator Validator
        {
            get;
            private set;
        }

        public List<ITypeInfo> Types
        {
            get;
            set;
        }

        public bool IsAssignment
        {
            get;
            set;
        }

        public AssignmentOperatorType AssignmentType
        {
            get;
            set;
        }

        public UnaryOperatorType UnaryOperatorType
        {
            get;
            set;
        }

        public bool IsUnaryAccessor
        {
            get;
            set;
        }

        public Dictionary<string, AstType> Locals
        {
            get;
            set;
        }

        public Dictionary<string, string> LocalsMap
        {
            get;
            set;
        }

        public Dictionary<string, string> LocalsNamesMap
        {
            get;
            set;
        }

        public Stack<Dictionary<string, AstType>> LocalsStack
        {
            get;
            set;
        }

        public int Level
        {
            get;
            set;
        }

        public bool IsNewLine
        {
            get;
            set;
        }

        public bool EnableSemicolon
        {
            get;
            set;
        }

        public int IteratorCount
        {
            get;
            set;
        }

        public int ThisRefCounter
        {
            get;
            set;
        }

        public IDictionary<string, TypeDefinition> TypeDefinitions
        {
            get;
            protected set;
        }

        public ITypeInfo TypeInfo
        {
            get;
            set;
        }

        public StringBuilder Output
        {
            get;
            set;
        }

        public Stack<Tuple<string, StringBuilder, bool, Action>> Writers
        {
            get;
            set;
        }

        public bool Comma
        {
            get;
            set;
        }

        private HashSet<string> namespaces;

        protected virtual HashSet<string> Namespaces
        {
            get
            {
                if (this.namespaces == null)
                {
                    this.namespaces = this.CreateNamespaces();
                }
                return this.namespaces;
            }
        }

        public virtual IEnumerable<AssemblyDefinition> References
        {
            get;
            set;
        }

        public virtual IList<string> SourceFiles
        {
            get;
            set;
        }

        private List<IAssemblyReference> list;

        protected virtual IEnumerable<IAssemblyReference> AssemblyReferences
        {
            get
            {
                if (this.list != null)
                {
                    return this.list;
                }

                this.list = Emitter.ToAssemblyReferences(this.References, this.Log);

                return this.list;
            }
        }

        internal static List<IAssemblyReference> ToAssemblyReferences(IEnumerable<AssemblyDefinition> references, ILogger logger)
        {
            logger.Info("Assembly definition to references...");

            var list = new List<IAssemblyReference>();

            if (references == null)
            {
                return list;
            }

            foreach (var reference in references)
            {
                logger.Trace("\tLoading AssemblyDefinition " + (reference != null && reference.Name != null && reference.Name.Name != null ? reference.Name.Name : "") + " ...");

                var loader = new CecilLoader();
                loader.IncludeInternalMembers = true;

                list.Add(loader.LoadAssembly(reference));

                logger.Trace("\tLoading AssemblyDefinition done");
            }

            logger.Info("Assembly definition to references done");

            return list;
        }

        public IMemberResolver Resolver
        {
            get;
            set;
        }

        public IAssemblyInfo AssemblyInfo
        {
            get;
            set;
        }

        public Dictionary<string, ITypeInfo> TypeInfoDefinitions
        {
            get;
            set;
        }

        public List<IPluginDependency> CurrentDependencies
        {
            get;
            set;
        }

        public IEmitterOutputs Outputs
        {
            get;
            set;
        }

        public IEmitterOutput EmitterOutput
        {
            get;
            set;
        }

        public bool SkipSemiColon
        {
            get;
            set;
        }

        public IEnumerable<MethodDefinition> MethodsGroup
        {
            get;
            set;
        }

        public Dictionary<int, StringBuilder> MethodsGroupBuilder
        {
            get;
            set;
        }

        public bool IsAsync
        {
            get;
            set;
        }

        public List<string> AsyncVariables
        {
            get;
            set;
        }

        public IAsyncBlock AsyncBlock
        {
            get;
            set;
        }

        public bool ReplaceAwaiterByVar
        {
            get;
            set;
        }

        public bool AsyncExpressionHandling
        {
            get;
            set;
        }

        public AstNode IgnoreBlock
        {
            get;
            set;
        }

        public AstNode NoBraceBlock
        {
            get;
            set;
        }

        public Action BeforeBlock
        {
            get;
            set;
        }

        public IWriterInfo LastSavedWriter
        {
            get;
            set;
        }

        public List<IJumpInfo> JumpStatements
        {
            get;
            set;
        }

        public SwitchStatement AsyncSwitch
        {
            get;
            set;
        }

        public IPlugins Plugins
        {
            get;
            set;
        }

        public Dictionary<string, bool> TempVariables
        {
            get;
            set;
        }

        public Dictionary<string, bool> ParentTempVariables
        {
            get;
            set;
        }

        public BridgeTypes BridgeTypes
        {
            get;
            set;
        }

        public ITranslator Translator
        {
            get;
            set;
        }

        public IJsDoc JsDoc
        {
            get;
            set;
        }

        public IType ReturnType
        {
            get;
            set;
        }

        public bool ReplaceJump
        {
            get;
            set;
        }

        public bool StaticBlock
        {
            get;
            set;
        }

        public Dictionary<string, string> NamedFunctions
        {
            get;
            set;
        }

        public bool IsPrivateVarIntroduced
        {
            get;
            set;
        }
    }
}
