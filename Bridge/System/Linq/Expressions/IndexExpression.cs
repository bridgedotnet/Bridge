using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 55")]
    public sealed class IndexExpression : Expression
    {
        [Name("obj")]
        public extern Expression Object { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern PropertyInfo Indexer { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern IndexExpression();
    }
}