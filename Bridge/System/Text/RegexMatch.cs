using Bridge;

namespace System.Text.RegularExpressions
{
    [Ignore]
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
            [Ignore]
            get
            {
                return null;
            }
            [Ignore]
            set
            {
            }
        }

        public static implicit operator string[](RegexMatch rm)
        {
            return null;
        }

        public static explicit operator RegexMatch(string[] a)
        {
            return null;
        }
    }
}