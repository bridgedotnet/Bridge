using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator
{
    public class InvocationInterceptor : IInvocationInterceptor
    {
        public IAbstractEmitterBlock Block
        {
            get;
            internal set;
        }

        public InvocationExpression Expression
        {
            get; 
            internal set;
        }

        public InvocationResolveResult ResolveResult
        {
            get; 
            internal set;
        }

        public string Replacement
        {
            get;
            set;
        }

        public bool Cancel
        {
            get;
            set;
        }
    }

    public class ReferenceInterceptor : IReferenceInterceptor
    {
        public IAbstractEmitterBlock Block
        {
            get;
            internal set;
        }

        public MemberReferenceExpression Expression
        {
            get;
            internal set;
        }

        public MemberResolveResult ResolveResult
        {
            get;
            internal set;
        }

        public string Replacement
        {
            get;
            set;
        }

        public bool Cancel
        {
            get;
            set;
        }
    }
}
