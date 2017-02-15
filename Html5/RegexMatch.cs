using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    [External]
    [Name("System.Object")]
    public sealed class RegExpMatch : IEnumerable<string>
    {
        [Field]
        [Name("index")]
        public int Index
        {
            get;
            set;
        }

        [Field]
        [Name("length")]
        public int Length
        {
            get;
            set;
        }

        [Field]
        [Name("input")]
        public string Input
        {
            get;
            set;
        }

        public extern string this[int index]
        {
            get;
            set;
        }

        public static extern implicit operator string[](RegExpMatch rm);

        public static extern explicit operator RegExpMatch(string[] a);

        [Template("Bridge.getEnumerator({this})")]
        extern IEnumerator IEnumerable.GetEnumerator();

        [Template("Bridge.getEnumerator({this})")]
        public extern IEnumerator<string> GetEnumerator();
    }
}