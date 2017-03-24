using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class LabelTarget
    {
        [Name("n")]
        public extern string Name { get; }

        [Name("t")]
        public extern Type Type { get; }

        internal extern LabelTarget();
    }
}