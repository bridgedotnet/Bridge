using System.Collections.Generic;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Contract
{
    public interface IInvocationInterceptor
    {
        IAbstractEmitterBlock Block
        {
            get;
        }

        InvocationExpression Expression
        {
            get;
        }

        InvocationResolveResult ResolveResult
        {
            get;
        }

        string Replacement
        {
            get;
        }

        bool Cancel
        {
            get; 
            set;
        }
    }

    public interface IReferenceInterceptor
    {
        IAbstractEmitterBlock Block
        {
            get;
        }

        MemberReferenceExpression Expression
        {
            get;
        }

        MemberResolveResult ResolveResult
        {
            get;
        }

        string Replacement
        {
            get;
        }

        bool Cancel
        {
            get;
            set;
        }
    }
}