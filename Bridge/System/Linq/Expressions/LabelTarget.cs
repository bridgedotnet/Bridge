using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    public sealed class LabelTarget
    {
        [FieldProperty]
        [Name("n")]
        public extern string Name { get; }

        [FieldProperty]
        [Name("t")]
        public extern Type Type { get; }

        internal extern LabelTarget();
    }
}