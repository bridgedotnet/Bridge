using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class CatchBlock
    {
        [Name(true)] //[Field]
        public extern ParameterExpression Variable { get; private set; }

        [Name(true)] //[Field]
        public extern Type Test { get; private set; }

        [Name(true)] //[Field]
        public extern Expression Body { get; private set; }

        [Name(true)] //[Field]
        public extern Expression Filter { get; private set; }

        internal extern CatchBlock();
    }
}