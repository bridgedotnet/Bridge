using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class ElementInit
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern MethodInfo AddMethod { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern ElementInit();
    }
}