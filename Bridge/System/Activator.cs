using Bridge;

namespace System
{
    [External]
    [Name("Object")]
    public static class Activator
    {
        [Template("new {type}({*arguments})")]
        public static extern object CreateInstance(Type type, params object[] arguments);

        [Template("new {T}({*arguments})")]
        public static extern T CreateInstance<T>(params object[] arguments);

        [Template("new {type}()")]
        public static extern object CreateInstance(Type type);

        [Template("new {T}()")]
        public static extern T CreateInstance<T>();
    }
}
