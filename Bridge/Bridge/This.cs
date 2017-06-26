namespace Bridge
{
    [External]
    [Name("this")]
    public static class This
    {
        [Template("this")]
        public static object Instance;

        [Template("{this}[{name}].call(null, {args})")]
        public static extern void Call(string name, params object[] args);

        [Template("{this}[{name}].call(null, {args})")]
        public static extern T Call<T>(string name, params object[] args);

        [Template("{this}[{name}]")]
        public static extern object Get(string name);

        [Template("{this}[{name}]")]
        public static extern T Get<T>(string name);

        [Template("{this}[{name}] = {value}")]
        public static extern void Set(string name, object value);
    }
}