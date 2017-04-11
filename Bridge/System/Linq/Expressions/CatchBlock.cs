using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class CatchBlock
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern ParameterExpression Variable { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Type Test { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression Body { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression Filter { get; private set; }

        internal extern CatchBlock();
    }
}