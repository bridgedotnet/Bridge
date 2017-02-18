namespace Bridge.Html5
{
    [External]
    [Namespace(false)]
    public sealed class RegExp
    {
        public extern RegExp(string pattern);

        public extern RegExp(RegExp pattern);

        public extern RegExp(string pattern, string flags);

        [Field]
        [Name("lastIndex")]
        public extern int LastIndex
        {
            get;
            set;
        }

        [Field]
        [Name("global")]
        public extern bool Global
        {
            get;
        }

        [Field]
        [Name("ignoreCase")]
        public extern bool IgnoreCase
        {
            get;
        }

        [Field]
        [Name("multiline")]
        public extern bool Multiline
        {
            get;
        }

        [Field]
        [Name("source")]
        public extern string Pattern
        {
            get;
        }

        [Field]
        [Name("source")]
        public extern string Source
        {
            get;
        }

        [Name("$1")]
        public static readonly string Match1;

        [Name("$2")]
        public static readonly string Match2;

        [Name("$3")]
        public static readonly string Match3;

        [Name("$4")]
        public static readonly string Match4;

        [Name("$5")]
        public static readonly string Match5;

        [Name("$6")]
        public static readonly string Match6;

        [Name("$7")]
        public static readonly string Match7;

        [Name("$8")]
        public static readonly string Match8;

        [Name("$9")]
        public static readonly string Match9;

        public static readonly string Input;

        public static readonly string LastMatch;

        public static readonly string LastParen;

        public static readonly string LeftContext;

        public static readonly string RightContext;

        public extern string[] Exec(string s);

        public extern bool Test(string s);
    }
}