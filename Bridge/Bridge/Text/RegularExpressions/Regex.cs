namespace Bridge.Text.RegularExpressions
{
    [External]
    [Name("RegExp")]
    public sealed class Regex
    {
        public Regex(string pattern)
        {
        }

        public Regex(string pattern, string flags)
        {
        }

        [Field]
        [Name("lastIndex")]
        public int LastIndex
        {
            get
            {
                return 0;
            }
            set
            {
            }
        }

        [Field]
        [Name("global")]
        public bool Global
        {
            get
            {
                return false;
            }
        }

        [Field]
        [Name("ignoreCase")]
        public bool IgnoreCase
        {
            get
            {
                return false;
            }
        }

        [Field]
        [Name("multiline")]
        public bool Multiline
        {
            get
            {
                return false;
            }
        }

        [Field]
        [Name("source")]
        public string Pattern
        {
            get
            {
                return null;
            }
        }

        [Field]
        [Name("source")]
        public string Source
        {
            get
            {
                return null;
            }
        }

        public extern string[] Exec(string s);

        public extern bool Test(string s);

        [Template("Bridge.regexpEscape({s})")]
        public static extern string Escape(string s);
    }
}