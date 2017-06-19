using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;
using System;
using System.Collections.Generic;

namespace Bridge.Contract
{
    public interface IEmitter : ILog, IAstVisitor
    {
        IAssemblyInfo AssemblyInfo
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.AssignmentOperatorType AssignmentType
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.UnaryOperatorType UnaryOperatorType
        {
            get;
            set;
        }

        bool IsUnaryAccessor
        {
            get;
            set;
        }

        IAsyncBlock AsyncBlock
        {
            get;
            set;
        }

        bool AsyncExpressionHandling
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.SwitchStatement AsyncSwitch
        {
            get;
            set;
        }

        System.Collections.Generic.List<string> AsyncVariables
        {
            get;
            set;
        }

        bool Comma
        {
            get;
            set;
        }

        int CompareTypeInfosByName(ITypeInfo x, ITypeInfo y);

        int CompareTypeInfosByPriority(ITypeInfo x, ITypeInfo y);

        bool IsInheritedFrom(ITypeInfo x, ITypeInfo y);

        void SortTypesByInheritance();

        System.Collections.Generic.List<IPluginDependency> CurrentDependencies
        {
            get;
            set;
        }

        List<TranslatorOutputItem> Emit();

        bool EnableSemicolon
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.TypeSystem.IAttribute GetAttribute(System.Collections.Generic.IEnumerable<ICSharpCode.NRefactory.TypeSystem.IAttribute> attributes, string name);

        Mono.Cecil.CustomAttribute GetAttribute(System.Collections.Generic.IEnumerable<Mono.Cecil.CustomAttribute> attributes, string name);

        Mono.Cecil.TypeDefinition GetBaseMethodOwnerTypeDefinition(string methodName, int genericParamCount);

        Mono.Cecil.TypeDefinition GetBaseTypeDefinition();

        Mono.Cecil.TypeDefinition GetBaseTypeDefinition(Mono.Cecil.TypeDefinition type);

        string GetEntityName(ICSharpCode.NRefactory.CSharp.EntityDeclaration entity);

        string GetParameterName(ICSharpCode.NRefactory.CSharp.ParameterDeclaration entity);

        NameSemantic GetNameSemantic(IEntity member);

        string GetEntityName(ICSharpCode.NRefactory.TypeSystem.IEntity member);

        string GetTypeName(ICSharpCode.NRefactory.TypeSystem.ITypeDefinition type, TypeDefinition typeDefinition);

        string GetLiteralEntityName(ICSharpCode.NRefactory.TypeSystem.IEntity member);

        string GetInline(ICSharpCode.NRefactory.CSharp.EntityDeclaration method);

        string GetInline(ICSharpCode.NRefactory.TypeSystem.IEntity entity);

        string GetInline(Mono.Cecil.ICustomAttributeProvider provider);

        Tuple<bool, bool, string> GetInlineCode(ICSharpCode.NRefactory.CSharp.InvocationExpression node);

        Tuple<bool, bool, string> GetInlineCode(ICSharpCode.NRefactory.CSharp.MemberReferenceExpression node);

        bool IsForbiddenInvocation(InvocationExpression node);

        System.Collections.Generic.IEnumerable<string> GetScript(ICSharpCode.NRefactory.CSharp.EntityDeclaration method);

        int GetPriority(Mono.Cecil.TypeDefinition type);

        Mono.Cecil.TypeDefinition GetTypeDefinition();

        Mono.Cecil.TypeDefinition GetTypeDefinition(ICSharpCode.NRefactory.CSharp.AstType reference, bool safe = false);

        Mono.Cecil.TypeDefinition GetTypeDefinition(IType type);

        string GetTypeHierarchy();

        ICSharpCode.NRefactory.CSharp.AstNode IgnoreBlock
        {
            get;
            set;
        }

        bool IsAssignment
        {
            get;
            set;
        }

        bool IsAsync
        {
            get;
            set;
        }

        bool IsYield
        {
            get;
            set;
        }

        bool IsInlineConst(ICSharpCode.NRefactory.TypeSystem.IMember member);

        bool IsMemberConst(ICSharpCode.NRefactory.TypeSystem.IMember member);

        bool IsNativeMember(string fullName);

        bool IsNewLine
        {
            get;
            set;
        }

        int IteratorCount
        {
            get;
            set;
        }

        System.Collections.Generic.List<IJumpInfo> JumpStatements
        {
            get;
            set;
        }

        IWriterInfo LastSavedWriter
        {
            get;
            set;
        }

        int Level
        {
            get;
        }

        int InitialLevel
        {
            get;
        }

        int ResetLevel(int? level = null);

        InitPosition? InitPosition
        {
            get;
            set;
        }

        System.Collections.Generic.Dictionary<string, ICSharpCode.NRefactory.CSharp.AstType> Locals
        {
            get;
            set;
        }

        System.Collections.Generic.Dictionary<IVariable, string> LocalsMap
        {
            get;
            set;
        }

        System.Collections.Generic.Dictionary<string, string> LocalsNamesMap
        {
            get;
            set;
        }

        System.Collections.Generic.Stack<System.Collections.Generic.Dictionary<string, ICSharpCode.NRefactory.CSharp.AstType>> LocalsStack
        {
            get;
            set;
        }

        ILogger Log
        {
            get;
            set;
        }

        System.Collections.Generic.IEnumerable<Mono.Cecil.MethodDefinition> MethodsGroup
        {
            get;
            set;
        }

        System.Collections.Generic.Dictionary<int, System.Text.StringBuilder> MethodsGroupBuilder
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.AstNode NoBraceBlock
        {
            get;
            set;
        }

        Action BeforeBlock
        {
            get;
            set;
        }

        System.Text.StringBuilder Output
        {
            get;
            set;
        }

        string SourceFileName
        {
            get;
            set;
        }

        int SourceFileNameIndex
        {
            get;
            set;
        }

        string LastSequencePoint
        {
            get;
            set;
        }

        IEmitterOutputs Outputs
        {
            get;
            set;
        }

        IEmitterOutput EmitterOutput
        {
            get;
            set;
        }

        System.Collections.Generic.IEnumerable<Mono.Cecil.AssemblyDefinition> References
        {
            get;
            set;
        }

        bool ReplaceAwaiterByVar
        {
            get;
            set;
        }

        IMemberResolver Resolver
        {
            get;
            set;
        }

        bool SkipSemiColon
        {
            get;
            set;
        }

        System.Collections.Generic.IList<string> SourceFiles
        {
            get;
            set;
        }

        int ThisRefCounter
        {
            get;
            set;
        }

        string ToJavaScript(object value);

        System.Collections.Generic.IDictionary<string, Mono.Cecil.TypeDefinition> TypeDefinitions
        {
            get;
        }

        ITypeInfo TypeInfo
        {
            get;
            set;
        }

        System.Collections.Generic.Dictionary<string, ITypeInfo> TypeInfoDefinitions
        {
            get;
            set;
        }

        System.Collections.Generic.List<ITypeInfo> Types
        {
            get;
            set;
        }

        IValidator Validator
        {
            get;
        }

        System.Collections.Generic.Stack<IWriter> Writers
        {
            get;
            set;
        }

        IVisitorException CreateException(AstNode node);

        IVisitorException CreateException(AstNode node, string message);

        IPlugins Plugins
        {
            get;
            set;
        }

        EmitterCache Cache
        {
            get;
        }

        string GetFieldName(FieldDeclaration field);

        string GetEventName(EventDeclaration evt);

        Dictionary<string, bool> TempVariables
        {
            get;
            set;
        }

        Dictionary<string, string> NamedTempVariables
        {
            get;
            set;
        }

        Dictionary<string, bool> ParentTempVariables
        {
            get;
            set;
        }

        Tuple<bool, string> IsGlobalTarget(IMember member);

        BridgeTypes BridgeTypes
        {
            get;
            set;
        }

        ITranslator Translator
        {
            get;
            set;
        }

        void InitEmitter();

        IJsDoc JsDoc
        {
            get;
            set;
        }

        IType ReturnType
        {
            get;
            set;
        }

        string GetEntityNameFromAttr(IEntity member, bool setter = false);

        bool ReplaceJump
        {
            get;
            set;
        }

        string CatchBlockVariable
        {
            get;
            set;
        }

        Dictionary<string, string> NamedFunctions
        {
            get; set;
        }

        Dictionary<IType, Dictionary<string, string>> NamedBoxedFunctions
        {
            get; set;
        }

        bool StaticBlock
        {
            get;
            set;
        }

        bool IsJavaScriptOverflowMode
        {
            get;
        }

        bool IsRefArg
        {
            get;
            set;
        }

        Dictionary<AnonymousType, IAnonymousTypeConfig> AnonymousTypes
        {
            get; set;
        }

        List<string> AutoStartupMethods
        {
            get;
            set;
        }

        bool IsAnonymousReflectable
        {
            get; set;
        }

        string MetaDataOutputName
        {
            get; set;
        }

        IType[] ReflectableTypes
        {
            get; set;
        }

        Dictionary<string, int> NamespacesCache
        {
            get; set;
        }

        bool DisableDependencyTracking { get; set; }

        void WriteIndented(string s, int? position = null);
        string GetReflectionName(IType type);
        bool ForbidLifting { get; set; }

        Dictionary<IAssembly, NameRule[]> AssemblyNameRuleCache
        {
            get;
        }

        Dictionary<ITypeDefinition, NameRule[]> ClassNameRuleCache
        {
            get;
        }

        bool InConstructor { get; set; }
    }
}