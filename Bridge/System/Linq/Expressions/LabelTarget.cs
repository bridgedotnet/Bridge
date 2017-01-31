using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    public sealed class LabelTarget
    {
        [Field]
        [Name("n")]
        public extern string Name { get; }

        [Field]
        [Name("t")]
        public extern Type Type { get; }

        internal extern LabelTarget();
    }
}