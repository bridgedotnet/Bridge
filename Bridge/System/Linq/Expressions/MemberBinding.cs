using Bridge;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    public abstract class MemberBinding
    {
        [Name("btype")]
        [Field]
        public extern MemberBindingType BindingType { get; private set; }

        [Field]
        public extern MemberInfo Member { get; private set; }

        internal extern MemberBinding();
    }
}