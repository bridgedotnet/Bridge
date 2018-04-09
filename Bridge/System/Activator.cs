namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    public static class Activator
    {
        [Bridge.Template("Bridge.createInstance({type}, {arguments:array})", "Bridge.Reflection.applyConstructor({type}, {arguments:array})")]
        public static extern object CreateInstance(Type type, params object[] arguments);

        [Bridge.Template("Bridge.createInstance({T}, {arguments:array})", "Bridge.Reflection.applyConstructor({T}, {arguments:array})")]
        public static extern T CreateInstance<T>(params object[] arguments);

        [Bridge.Template("Bridge.createInstance({type})")]
        public static extern object CreateInstance(Type type);

        [Bridge.Template("Bridge.createInstance({T})")]
        public static extern T CreateInstance<T>();
    }
}