using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class ElementInit
    {
        [Field]
        public extern MethodInfo AddMethod { get; private set; }

        [Field]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern ElementInit();
    }
}