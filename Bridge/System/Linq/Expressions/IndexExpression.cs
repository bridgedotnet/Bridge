using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 55")]
    public sealed class IndexExpression : Expression
    {
        [Name("obj")]
        [Field]
        public extern Expression Object { get; private set; }

        [Field]
        public extern PropertyInfo Indexer { get; private set; }

        [Field]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern IndexExpression();
    }
}