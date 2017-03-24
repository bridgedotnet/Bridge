using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class ElementInit
    {
        [Name(true)] //[Field]
        public extern MethodInfo AddMethod { get; private set; }

        [Name(true)] //[Field]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern ElementInit();
    }
}