using System.Reflection;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    public abstract class MemberBinding
    {
        [Bridge.Name("btype")]
        public extern MemberBindingType BindingType { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern MemberInfo Member { get; private set; }

        internal extern MemberBinding();
    }
}