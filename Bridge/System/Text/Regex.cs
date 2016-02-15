using Bridge;

namespace System.Text.RegularExpressions
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

        [FieldProperty]
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

        [FieldProperty]
        [Name("global")]
        public bool Global
        {
            get
            {
                return false;
            }
        }

        [FieldProperty]
        [Name("ignoreCase")]
        public bool IgnoreCase
        {
            get
            {
                return false;
            }
        }

        [FieldProperty]
        [Name("multiline")]
        public bool Multiline
        {
            get
            {
                return false;
            }
        }

        [FieldProperty]
        [Name("source")]
        public string Pattern
        {
            get
            {
                return null;
            }
        }

        [FieldProperty]
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