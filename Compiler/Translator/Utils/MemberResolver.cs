using System.Collections.Concurrent;
using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.CSharp.TypeSystem;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mono.Cecil;

namespace Bridge.Translator
{
    public class MemberResolver : IMemberResolver
    {
        private string lastFileName;
        private IList<ParsedSourceFile> sourceFiles;
        private ICompilation compilation;
        private CSharpAstResolver resolver;
        private IProjectContent project;
        private readonly ConcurrentDictionary<SyntaxTree, CSharpUnresolvedFile> typeSystemCache;

        public bool CanFreeze
        {
            get;
            set;
        }

        public CSharpAstResolver Resolver
        {
            get
            {
                return this.resolver;
            }
        }

        public ICompilation Compilation
        {
            get
            {
                return this.compilation;
            }
        }

        public IEnumerable<IAssemblyReference> Assemblies
        {
            get;
            private set;
        }

        public MemberResolver(IList<ParsedSourceFile> sourceFiles, IEnumerable<IAssemblyReference> assemblies, AssemblyDefinition assemblyDefinition)
        {
            this.project = null;
            this.lastFileName = null;
            this.sourceFiles = sourceFiles;
            this.Assemblies = assemblies;
            this.MainAssembly = assemblyDefinition;
            this.typeSystemCache = new ConcurrentDictionary<SyntaxTree, CSharpUnresolvedFile>();

            this.project = new CSharpProjectContent();
            this.project = this.project.AddAssemblyReferences(assemblies);
            this.project = this.project.SetAssemblyName(assemblyDefinition.FullName);
            this.AddOrUpdateFiles();
        }

        public AssemblyDefinition MainAssembly
        {
            get; set;
        }

        private void AddOrUpdateFiles()
        {
            this.typeSystemCache.Clear();
            var unresolvedFiles = new IUnresolvedFile[this.sourceFiles.Count];

            Parallel.For(0, unresolvedFiles.Length, i =>
            {
                var syntaxTree = this.sourceFiles[i].SyntaxTree;
                unresolvedFiles[i] = this.GetTypeSystem(syntaxTree);
            });

            this.project = this.project.AddOrUpdateFiles(unresolvedFiles);
            this.compilation = this.project.CreateCompilation();
        }

        private void InitResolver(SyntaxTree syntaxTree)
        {
            if (this.lastFileName != syntaxTree.FileName || string.IsNullOrEmpty(syntaxTree.FileName))
            {
                this.lastFileName = syntaxTree.FileName;
                var typeSystem = this.GetTypeSystem(syntaxTree);
                this.resolver = new CSharpAstResolver(this.compilation, syntaxTree, typeSystem);
            }
        }

        private CSharpUnresolvedFile GetTypeSystem(SyntaxTree syntaxTree)
        {
            CSharpUnresolvedFile existingTypeSystem;
            if (this.typeSystemCache.TryGetValue(syntaxTree, out existingTypeSystem))
            {
                return existingTypeSystem;
            }
            CSharpUnresolvedFile unresolvedFile = null;
            if (!string.IsNullOrEmpty(syntaxTree.FileName))
            {
                unresolvedFile = syntaxTree.ToTypeSystem();
            }
            this.typeSystemCache[syntaxTree] = unresolvedFile;
            return unresolvedFile;
        }

        public ResolveResult ResolveNode(AstNode node, ILog log)
        {
            var syntaxTree = node.GetParent<SyntaxTree>();
            this.InitResolver(syntaxTree);

            var result = this.resolver.Resolve(node);

            if (result is MethodGroupResolveResult && node.Parent != null)
            {
                var methodGroupResolveResult = (MethodGroupResolveResult)result;
                var parentResolveResult = this.ResolveNode(node.Parent, log);
                var parentInvocation = parentResolveResult as InvocationResolveResult;
                IParameterizedMember method = methodGroupResolveResult.Methods.LastOrDefault();
                bool isInvocation = node.Parent is InvocationExpression && (((InvocationExpression)(node.Parent)).Target == node);

                if (node is Expression)
                {
                    var conversion = this.Resolver.GetConversion((Expression)node);
                    if (conversion != null && conversion.IsMethodGroupConversion)
                    {
                        return new MemberResolveResult(new TypeResolveResult(conversion.Method.DeclaringType), conversion.Method);
                    }
                }

                if (isInvocation && parentInvocation != null)
                {
                    var or = methodGroupResolveResult.PerformOverloadResolution(this.compilation, parentInvocation.GetArgumentsForCall().ToArray());
                    if (or.FoundApplicableCandidate)
                    {
                        method = or.BestCandidate;
                        return new MemberResolveResult(new TypeResolveResult(method.DeclaringType), method);
                    }
                }

                if (parentInvocation != null && method == null)
                {
                    var typeDef = methodGroupResolveResult.TargetType as DefaultResolvedTypeDefinition;

                    if (typeDef != null)
                    {
                        var methods = typeDef.Methods.Where(m => m.Name == methodGroupResolveResult.MethodName);
                        method = methods.FirstOrDefault();
                    }
                }

                if (method == null)
                {
                    var extMethods = methodGroupResolveResult.GetEligibleExtensionMethods(false);

                    if (!extMethods.Any())
                    {
                        extMethods = methodGroupResolveResult.GetExtensionMethods();
                    }

                    if (!extMethods.Any() || !extMethods.First().Any())
                    {
                        throw new EmitterException(node, "Cannot find method defintion");
                    }

                    method = extMethods.First().First();
                }

                if (parentInvocation == null || method.FullName != parentInvocation.Member.FullName)
                {
                    MemberResolveResult memberResolveResult = new MemberResolveResult(new TypeResolveResult(method.DeclaringType), method);
                    return memberResolveResult;
                }

                return parentResolveResult;
            }

            if ((result == null || result.IsError) && log != null)
            {
                if (result is CSharpInvocationResolveResult && ((CSharpInvocationResolveResult)result).OverloadResolutionErrors != OverloadResolutionErrors.None)
                {
                    return result;
                }

                log.LogWarning(string.Format("Node resolving has failed {0}: {1}", node.StartLocation, node.ToString()));
            }

            return result;
        }
    }
}