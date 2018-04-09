using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 6")]
    public sealed class MethodCallExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern MethodInfo Method { get; private set; }

        [Bridge.Name("obj")]
        public extern Expression Object { get; private set; }

        [Bridge.Name("args")]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern MethodCallExpression();
    }
}