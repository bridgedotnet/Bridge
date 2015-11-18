namespace Bridge
{
    [External]
    [Name("this")]
    public static class This
    {
        [Template("this")]
        public static ThisInstance Instance;

        [Template("{this}[{name}].call(null, {args})")]
        public static void Call(string name, params object[] args)
        {
        }

        [Template("{this}[{name}].call(null, {args})")]
        public static T Call<T>(string name, params object[] args)
        {
            return default(T);
        }

        [Template("{this}[{name}]")]
        public static object Get(string name)
        {
            return null;
        }

        [Template("{this}[{name}]")]
        public static T Get<T>(string name)
        {
            return default(T);
        }

        [Template("{this}[{name}] = {value}")]
        public static void Set(string name, object value)
        {
        }
    }

    [External]
    [Name("this")]
    public class ThisInstance
    {
    }
}
