using Bridge;
using System.Reflection;

namespace System
{
    [External]
    public sealed class AppDomain
    {
        private extern AppDomain();

        public extern Assembly[] GetAssemblies();

        public static extern AppDomain CurrentDomain
        {
            [Template("System.AppDomain")]
            get;
        }
    }
}