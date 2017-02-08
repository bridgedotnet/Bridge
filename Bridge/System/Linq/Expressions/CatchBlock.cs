using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class CatchBlock
    {
        [Field]
        public extern ParameterExpression Variable { get; private set; }

        [Field]
        public extern Type Test { get; private set; }

        [Field]
        public extern Expression Body { get; private set; }

        [Field]
        public extern Expression Filter { get; private set; }

        internal extern CatchBlock();
    }
}