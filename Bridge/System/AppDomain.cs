using System.Reflection;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public sealed class AppDomain
    {
        private extern AppDomain();

        public extern Assembly[] GetAssemblies();

        public static extern AppDomain CurrentDomain
        {
            [Bridge.Template("System.AppDomain")]
            get;
        }
    }
}