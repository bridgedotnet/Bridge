using Bridge;

namespace System
{
    [External]
    [Name("Object")]
    public static class Activator
    {
        [Template("Bridge.createInstance({type}, {arguments:array})", "Bridge.Reflection.applyConstructor({type}, {arguments:array})")]
        public static extern object CreateInstance(Type type, params object[] arguments);

        [Template("Bridge.createInstance({T}, {arguments:array})", "Bridge.Reflection.applyConstructor({T}, {arguments:array})")]
        public static extern T CreateInstance<T>(params object[] arguments);

        [Template("Bridge.createInstance({type})")]
        public static extern object CreateInstance(Type type);

        [Template("Bridge.createInstance({T})")]
        public static extern T CreateInstance<T>();
    }
}