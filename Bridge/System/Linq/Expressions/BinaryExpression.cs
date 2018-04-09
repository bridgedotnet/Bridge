using System.Reflection;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("[0,1,2,3,5,7,12,13,14,15,16,19,20,21,22,25,26,27,35,36,37,39,41,42,43,46,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80].indexOf({this}.ntype) >= 0")]
    public sealed class BinaryExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Left { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Right { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern MethodInfo Method { get; private set; }

        internal extern BinaryExpression();
    }
}