using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.btype === 0")]
    public sealed class MemberAssignment : MemberBinding
    {
        [Field]
        public extern Expression Expression { get; private set; }

        internal extern MemberAssignment();
    }
}