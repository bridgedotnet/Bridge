using Bridge;

namespace System.Text.RegularExpressions
{
    [External]
    [Name("Object")]
    public sealed class RegexMatch
    {
        public int Index
        {
            [Name("index")]
            get;
            [Name("index")]
            set;
        }

        public int Length
        {
            [Name("length")]
            get;
            [Name("length")]
            set;
        }

        public string Input
        {
            [Name("input")]
            get;
            [Name("input")]
            set;
        }

        public string this[int index]
        {
            [External]
            get
            {
                return null;
            }
            [External]
            set
            {
            }
        }

        public static implicit operator string[] (RegexMatch rm)
        {
            return null;
        }

        public static explicit operator RegexMatch(string[] a)
        {
            return null;
        }
    }
}