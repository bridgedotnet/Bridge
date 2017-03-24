using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 6")]
    public sealed class MethodCallExpression : Expression
    {
        [Name(true)] //[Field]
        public extern MethodInfo Method { get; private set; }

        [Name("obj")]
        public extern Expression Object { get; private set; }

        [Name("args")]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern MethodCallExpression();
    }
}