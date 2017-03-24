using Bridge;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public abstract class MemberBinding
    {
        [Name("btype")]
        public extern MemberBindingType BindingType { get; private set; }

        [Name(true)] //[Field]
        public extern MemberInfo Member { get; private set; }

        internal extern MemberBinding();
    }
}