using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Contract
{
    public interface IMemberResolver
    {
        ResolveResult ResolveNode(AstNode node, ILog log);

        CSharpAstResolver Resolver
        {
            get;
        }

        ICompilation Compilation
        {
            get;
        }
    }
}