using Bridge;

namespace System
{
    [External]
    public static class Activator
    {
        [Template("new {type}({*arguments})")]
        public static object CreateInstance(Type type, params object[] arguments)
        {
            return null;
        }

        [Template("new {T}({*arguments})")]
        public static T CreateInstance<T>(params object[] arguments)
        {
            return default(T);
        }

        [Template("new {type}()")]
        public static object CreateInstance(Type type)
        {
            return null;
        }

        [Template("new {T}()")]
        public static T CreateInstance<T>()
        {
            return default(T);
        }
    }
}
