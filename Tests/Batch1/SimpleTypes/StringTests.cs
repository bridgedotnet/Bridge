using Bridge.Html5;
using Bridge.Test;
using Bridge.Text.RegularExpressions;

using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_STRING)]
    [TestFixture(TestNameFormat = "String - {0}")]
    public class StringTests
    {
        private class MyEnumerable<T> : IEnumerable<T>
        {
            private readonly T[] _items;

            public MyEnumerable(T[] items)
            {
                _items = items;
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return this.GetEnumerator();
            }

            public IEnumerator<T> GetEnumerator()
            {
                return (IEnumerator<T>)(object)_items.GetEnumerator();
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("String", typeof(string).FullName);
            object s = "X";
            Assert.True(s is string);
        }

        [Test]
        public void StringInterfaces()
        {
            object s = "X";
            Assert.True(s is object, "string is object");
            Assert.True(s is IComparable<string>);
            Assert.True(s is IEquatable<string>);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            Assert.AreEqual("", new string());
        }

        [Test]
        public void CopyConstructorWorks()
        {
            Assert.AreEqual("abcd", new string("abcd"));
        }

        [Test]
        public void CharAndCountConstructorWorks()
        {
            Assert.AreEqual("xxxxx", new string('x', 5));
        }

        [Test]
        public void CharArrayConstructorWorks()
        {
            Assert.AreEqual("abC", new string(new[] { 'a', 'b', 'C' }));
        }

        [Test]
        public void EmptyFieldWorks()
        {
            Assert.AreEqual("", string.Empty);
        }

        [Test]
        public void LengthPropertyWorks()
        {
            Assert.AreEqual(4, "abcd".Length);
        }

        [Test]
        public void CharAtWorks()
        {
            Assert.AreEqual("c", "abcd".CharAt(2));
        }

        [Test]
        public void CharCodeAtWorks()
        {
            Assert.AreEqual((int)'c', (int)"abcd".CharCodeAt(2));
        }

        // TODO #353
        //[Test]
        //public void CompareToWithIgnoreCaseArgWorks()
        //{
        //    Assert.True("abcd".CompareTo("abcd", false) == 0);
        //    Assert.True("abcd".CompareTo("abcb", false) > 0);
        //    Assert.True("abcd".CompareTo("abce", false) < 0);
        //    Assert.True("abcd".CompareTo("ABCD", true) == 0);
        //    Assert.True("abcd".CompareTo("ABCB", true) > 0);
        //    Assert.True("abcd".CompareTo("ABCE", true) < 0);
        //}

        [Test]
        public void CompareWorks()
        {
            Assert.True(string.Compare("abcd", "abcd") == 0);
            Assert.True(string.Compare("abcd", "abcb") > 0);
            Assert.True(string.Compare("abcd", "abce") < 0);
        }

        [Test]
        public void CompareWithIgnoreCaseArgWorks()
        {
            Assert.True(string.Compare("abcd", "abcd", false) == 0);
            Assert.True(string.Compare("abcd", "abcb", false) > 0);
            Assert.True(string.Compare("abcd", "abce", false) < 0);
            Assert.True(string.Compare("abcd", "ABCD", true) == 0);
            Assert.True(string.Compare("abcd", "ABCB", true) > 0);
            Assert.True(string.Compare("abcd", "ABCE", true) < 0);
        }

        [Test]
        public void ConcatWorks()
        {
            Assert.AreEqual("ab", string.Concat("a", "b"));
            Assert.AreEqual("abc", string.Concat("a", "b", "c"));
            Assert.AreEqual("abcd", string.Concat("a", "b", "c", "d"));
            Assert.AreEqual("abcde", string.Concat("a", "b", "c", "d", "e"));
            Assert.AreEqual("abcdef", string.Concat("a", "b", "c", "d", "e", "f"));
            Assert.AreEqual("abcdefg", string.Concat("a", "b", "c", "d", "e", "f", "g"));
            Assert.AreEqual("abcdefgh", string.Concat("a", "b", "c", "d", "e", "f", "g", "h"));
            Assert.AreEqual("abcdefghi", string.Concat("a", "b", "c", "d", "e", "f", "g", "h", "i"));
        }

        [Test]
        public void ConcatWithObjectsWorks()
        {
            Assert.AreEqual("1", string.Concat(1));
            Assert.AreEqual("12", string.Concat(1, 2));
            Assert.AreEqual("123", string.Concat(1, 2, 3));
            Assert.AreEqual("1234", string.Concat(1, 2, 3, 4));
            Assert.AreEqual("12345", string.Concat(1, 2, 3, 4, 5));
            Assert.AreEqual("123456", string.Concat(1, 2, 3, 4, 5, 6));
            Assert.AreEqual("1234567", string.Concat(1, 2, 3, 4, 5, 6, 7));
            Assert.AreEqual("12345678", string.Concat(1, 2, 3, 4, 5, 6, 7, 8));
            Assert.AreEqual("123456789", string.Concat(1, 2, 3, 4, 5, 6, 7, 8, 9));
        }

        [Test]
        public void EndsWithCharWorks()
        {
            Assert.True("abcd".EndsWith("d"));
            Assert.False("abcd".EndsWith("e"));
        }

        [Test]
        public void EndsWithStringWorks()
        {
            Assert.True("abcd".EndsWith("d"));
            Assert.False("abcd".EndsWith("e"));
        }

        [Test]
        public void StaticEqualsWorks()
        {
            Assert.True(string.Equals("abcd", "abcd"));
            Assert.False(string.Equals("abcd", "abce"));
            Assert.False(string.Equals("abcd", "ABCD"));
            Assert.True(string.Equals("abcd", "abcd"));
            Assert.False(string.Equals("abcd", "abce"));
            Assert.False(string.Equals("abcd", "ABCD"));
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("x", string.Format("x"));
            Assert.AreEqual("xa", string.Format("x{0}", "a"));
            Assert.AreEqual("xab", string.Format("x{0}{1}", "a", "b"));
            Assert.AreEqual("xabc", string.Format("x{0}{1}{2}", "a", "b", "c"));
            Assert.AreEqual("xabcd", string.Format("x{0}{1}{2}{3}", "a", "b", "c", "d"));

            var arr1 = new object[] { "a" };
            var arr2 = new object[] { "a", "b" };
            var arr3 = new object[] { "a", "b", "c" };
            var arr4 = new object[] { "a", "b", "c", "d" };
            Assert.AreEqual("xa", string.Format("x{0}", arr1));
            Assert.AreEqual("xab", string.Format("x{0}{1}", arr2[0], arr2[1]));
            Assert.AreEqual("xabc", string.Format("x{0}{1}{2}", arr3[0], arr3[1], arr3[2]));
            Assert.AreEqual("xabcd", string.Format("x{0}{1}{2}{3}", arr4[0], arr4[1], arr4[2], arr4[3]));
        }

        [Test]
        public void FormatWorksExtended()
        {
            var arr2 = new object[] { "a", "b" };
            var arr3 = new object[] { "a", "b", "c" };
            var arr4 = new object[] { "a", "b", "c", "d" };

            Assert.AreEqual("xab", string.Format("x{0}{1}", arr2));
            Assert.AreEqual("xabc", string.Format("x{0}{1}{2}", arr3));
            Assert.AreEqual("xabcd", string.Format("x{0}{1}{2}{3}", arr4));
        }

        [Test]
        public void FormatWorksWithIFormattable()
        {
            Assert.AreEqual("3.14", string.Format("{0:F2}", 22.0 / 7.0));
        }

        [Test]
        public void FormatCanUseEscapedBraces()
        {
            Assert.AreEqual("{0}", string.Format("{{0}}"));
        }

        [Test]
        public void FromCharCodeWorks()
        {
            Assert.AreEqual("", string.FromCharCode());
            Assert.AreEqual("a", string.FromCharCode('a'));
            Assert.AreEqual("ab", string.FromCharCode('a', 'b'));
            Assert.AreEqual("abc", string.FromCharCode('a', 'b', 'c'));
        }

        [Test]
        public void IndexOfCharWorks()
        {
            Assert.AreEqual(1, "abc".IndexOf('b'));
            Assert.AreEqual(-1, "abc".IndexOf('d'));
        }

        [Test]
        public void IndexOfStringWorks()
        {
            Assert.AreEqual(1, "abc".IndexOf("bc"));
            Assert.AreEqual(-1, "abc".IndexOf("bd"));
        }

        [Test]
        public void IndexOfCharWithStartIndexWorks()
        {
            Assert.AreEqual(4, "abcabc".IndexOf('b', 3));
            Assert.AreEqual(-1, "abcabc".IndexOf('d', 3));
        }

        [Test]
        public void IndexOfCharWithStartIndexAndCountWorks()
        {
            Assert.AreEqual(7, "xxxxxabcxxx".IndexOf('c', 3, 8));
            Assert.AreEqual(7, "xxxxxabcxxx".IndexOf('c', 3, 5));
            Assert.AreEqual(-1, "xxxxxabcxxx".IndexOf('c', 3, 4));
        }

        [Test]
        public void IndexOfStringWithStartIndexWorks()
        {
            Assert.AreEqual(4, "abcabc".IndexOf("bc", 3));
            Assert.AreEqual(-1, "abcabc".IndexOf("bd", 3));
        }

        [Test]
        public void IndexOfStringWithStartIndexAndCountWorks()
        {
            Assert.AreEqual(5, "xxxxxabcxxx".IndexOf("abc", 3, 8));
            Assert.AreEqual(5, "xxxxxabcxxx".IndexOf("abc", 3, 5));
            Assert.AreEqual(-1, "xxxxxabcxxx".IndexOf("abc", 3, 4));
        }

        [Test]
        public void IndexOfAnyWorks()
        {
            Assert.AreEqual(1, "abcd".IndexOfAny(new[] { 'b' }));
            Assert.AreEqual(1, "abcd".IndexOfAny(new[] { 'b', 'x' }));
            Assert.AreEqual(1, "abcd".IndexOfAny(new[] { 'b', 'x', 'y' }));
            Assert.AreEqual(-1, "abcd".IndexOfAny(new[] { 'x', 'y' }));
        }

        [Test]
        public void IndexOfAnyWithStartIndexWorks()
        {
            Assert.AreEqual(5, "abcdabcd".IndexOfAny(new[] { 'b' }, 4));
            Assert.AreEqual(5, "abcdabcd".IndexOfAny(new[] { 'b', 'x' }, 4));
            Assert.AreEqual(5, "abcdabcd".IndexOfAny(new[] { 'b', 'x', 'y' }, 4));
            Assert.AreEqual(-1, "abcdabcd".IndexOfAny(new[] { 'x', 'y' }, 4));
        }

        [Test]
        public void IndexOfAnyWithStartIndexAndCountWorks()
        {
            Assert.AreEqual(5, "abcdabcd".IndexOfAny(new[] { 'b' }, 4, 2));
            Assert.AreEqual(5, "abcdabcd".IndexOfAny(new[] { 'b', 'x' }, 4, 2));
            Assert.AreEqual(5, "abcdabcd".IndexOfAny(new[] { 'b', 'x', 'y' }, 4, 2));
            Assert.AreEqual(-1, "abcdabcd".IndexOfAny(new[] { 'x', 'y' }, 4, 2));
            Assert.AreEqual(-1, "abcdabcd".IndexOfAny(new[] { 'c' }, 4, 2));
        }

        [Test]
        public void InsertWorks()
        {
            Assert.AreEqual("abxyzcd", "abcd".Insert(2, "xyz"));
        }

        [Test]
        public void IsNullOrEmptyWorks()
        {
            Assert.True(string.IsNullOrEmpty(null));
            Assert.True(string.IsNullOrEmpty(""));
            Assert.False(string.IsNullOrEmpty(" "));
            Assert.False(string.IsNullOrEmpty("0"));
        }

        [Test]
        public void LastIndexOfCharWorks()
        {
            Assert.AreEqual(1, "abc".LastIndexOf("b"));
            Assert.AreEqual(-1, "abc".LastIndexOf("d"));
        }

        [Test]
        public void LastIndexOfStringWorks()
        {
            Assert.AreEqual(1, "abc".LastIndexOf("bc"));
            Assert.AreEqual(-1, "abc".LastIndexOf("bd"));
        }

        [Test]
        public void LastIndexOfCharWithStartIndexWorks()
        {
            Assert.AreEqual(1, "abcabc".LastIndexOf("b", 3));
            Assert.AreEqual(-1, "abcabc".LastIndexOf("d", 3));
        }

        [Test]
        public void LastIndexOfStringWithStartIndexWorks()
        {
            Assert.AreEqual(1, "abcabc".LastIndexOf("bc", 3));
            Assert.AreEqual(-1, "abcabc".LastIndexOf("bd", 3));
        }

        [Test]
        public void LastIndexOfCharWithStartIndexAndCountWorks()
        {
            Assert.AreEqual(1, "abcabc".LastIndexOf('b', 3, 3));
            Assert.AreEqual(-1, "abcabc".LastIndexOf('b', 3, 2));
            Assert.AreEqual(-1, "abcabc".LastIndexOf('d', 3, 3));
        }

        [Test]
        public void LastIndexOfStringWithStartIndexAndCountWorks()
        {
            Assert.AreEqual(1, "xbcxxxbc".LastIndexOf("bc", 3, 3));
            Assert.AreEqual(-1, "xbcxxxbc".LastIndexOf("bc", 3, 2));
            Assert.AreEqual(-1, "xbcxxxbc".LastIndexOf("bd", 3, 3));
        }

        [Test]
        public void LastIndexOfAnyWorks()
        {
            Assert.AreEqual(1, "abcd".LastIndexOfAny('b'));
            Assert.AreEqual(1, "abcd".LastIndexOfAny('b', 'x'));
            Assert.AreEqual(1, "abcd".LastIndexOfAny('b', 'x', 'y'));
            Assert.AreEqual(-1, "abcd".LastIndexOfAny('x', 'y'));
        }

        [Test]
        public void LastIndexOfAnyWithStartIndexWorks()
        {
            Assert.AreEqual(1, "abcdabcd".LastIndexOfAny(new[] { 'b' }, 4));
            Assert.AreEqual(1, "abcdabcd".LastIndexOfAny(new[] { 'b', 'x' }, 4));
            Assert.AreEqual(1, "abcdabcd".LastIndexOfAny(new[] { 'b', 'x', 'y' }, 4));
            Assert.AreEqual(-1, "abcdabcd".LastIndexOfAny(new[] { 'x', 'y' }, 4));
        }

        [Test]
        public void LastIndexOfAnyWithStartIndexAndCountWorks()
        {
            Assert.AreEqual(1, "abcdabcd".LastIndexOfAny(new[] { 'b' }, 4, 4));
            Assert.AreEqual(1, "abcdabcd".LastIndexOfAny(new[] { 'b', 'x' }, 4, 4));
            Assert.AreEqual(1, "abcdabcd".LastIndexOfAny(new[] { 'b', 'x', 'y' }, 4, 4));
            Assert.AreEqual(-1, "abcdabcd".LastIndexOfAny(new[] { 'x', 'y' }, 4, 4));
            Assert.AreEqual(-1, "abcdabcd".LastIndexOfAny(new[] { 'b' }, 4, 2));
        }

        [Test]
        public void LocaleCompareWorks()
        {
            Assert.True("abcd".LocaleCompare("abcd") == 0);
            Assert.True("abcd".LocaleCompare("abcb") > 0);
            Assert.True("abcd".LocaleCompare("abce") < 0);
        }

        [Test]
        public void MatchWorks()
        {
            var result = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".Match(new Regex("[A-E]", "gi"));
            Assert.AreDeepEqual(new[] { "A", "B", "C", "D", "E", "a", "b", "c", "d", "e" }, result);
        }

        [Test]
        public void PadLeftWorks()
        {
            Assert.AreEqual("  abc", "abc".PadLeft(5));
        }

        [Test]
        public void PadLeftWithCharWorks()
        {
            Assert.AreEqual("00abc", "abc".PadLeft(5, '0'));
        }

        [Test]
        public void PadRightWorks()
        {
            Assert.AreEqual("abc  ", "abc".PadRight(5));
        }

        [Test]
        public void PadRightWithCharWorks()
        {
            Assert.AreEqual("abc00", "abc".PadRight(5, '0'));
        }

        [Test]
        public void RemoveWorks()
        {
            Assert.AreEqual("ab", "abcde".Remove(2));

            var val = "Hello";
            Assert.Throws<ArgumentOutOfRangeException>(() => { val.Remove(-2); });
            Assert.Throws<ArgumentOutOfRangeException>(() => { val.Remove(5); });

            string s = null;
            Assert.Throws<NullReferenceException>(() => { s.Remove(2); });
        }

        [Test]
        public void RemoveWithCountWorks()
        {
            Assert.AreEqual("abe", "abcde".Remove(2, 2));

            var val = "Hello";

            Assert.AreEqual("Hello", val.Remove(0, 0));
            Assert.AreEqual("ello", val.Remove(0, 1));
            Assert.AreEqual("llo", val.Remove(0, 2));
            Assert.AreEqual("lo", val.Remove(0, 3));
            Assert.AreEqual("o", val.Remove(0, 4));
            Assert.AreEqual("", val.Remove(0, 5));

            Assert.AreEqual("Hello", val.Remove(1, 0));
            Assert.AreEqual("Hello", val.Remove(2, 0));
            Assert.AreEqual("Hello", val.Remove(3, 0));
            Assert.AreEqual("Hello", val.Remove(4, 0));
            Assert.AreEqual("Hello", val.Remove(5, 0));

            Assert.Throws<ArgumentOutOfRangeException>(() => { val.Remove(-2, 2); });
            Assert.Throws<ArgumentOutOfRangeException>(() => { val.Remove(2, -2); });
            Assert.Throws<ArgumentOutOfRangeException>(() => { val.Remove(2, 4); });

            string s = null;
            Assert.Throws<NullReferenceException>(() => { s.Remove(0, 0); });
        }

        [Test]
        public void ReplaceWorks()
        {
            Assert.AreEqual("xbcxbcxbc", "abcabcabc".Replace("a", "x"));
            Assert.AreEqual("xcxcxc", "abcabcabc".Replace("ab", "x"));
        }

        [Test]
        public void ReplaceCharWorks()
        {
            Assert.AreEqual("xbcxbcxbc", "abcabcabc".Replace("a", "x"));
        }

        [Test]
        public void ReplaceRegexWithReplaceTextWorks()
        {
            Assert.AreEqual("xxcxxcxxc", "abcabcabc".Replace(new Regex("a|b", "g"), "x"));
        }

        [Test]
        public void ReplaceRegexWithReplaceCallbackWorks()
        {
            Assert.AreEqual("xycxycxyc", "abcabcabc".Replace(new Regex("a|b", "g"), s => s == "a" ? "x" : "y"));
        }

        [Test]
        public void SearchWorks()
        {
            Assert.AreEqual(2, "abcabcabc".Search(new Regex("ca")));
            Assert.AreEqual(-1, "abcabcabc".Search(new Regex("x")));
        }

        [Test]
        public void SliceWorks()
        {
            var numbers = "0123456789";

            // Let's start by using both begin and end.
            Assert.AreEqual(numbers.Slice(3, 7), "3456");

            // What happens when we start with a negative number.
            Assert.AreEqual(numbers.Slice(-7, 7), "3456");

            // What happens when we use two negative numbers.
            Assert.AreEqual(numbers.Slice(-7, -3), "3456");

            // What happens when we omit the last argument.
            Assert.AreEqual(numbers.Slice(3), "3456789");

            // And with the negative, end-relevant index.
            Assert.AreEqual(numbers.Slice(-7), "3456789");

            // If the index is out of range, it returns the empty string.
            Assert.AreEqual(numbers.Slice(100, 101), "");
        }

        [Test]
        public void SplitWithStringWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca", "ca", "c" }, "abcabcabc".Split("b"));
        }

        [Test]
        public void SplitWithCharWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca", "ca", "c" }, "abcabcabc".Split('b'));
        }

        [Test]
        public void JsSplitWithStringAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ax" }, "abcaxbcabce".Split("bc", 2));
        }

        [Test]
        public void JsSplitWithCharAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca" }, "abcabcabc".Split('b', 2));
        }

        [Test]
        public void SplitWithCharsAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "cabcabc" }, "abcabcabc".Split(new[] { 'b' }, 2));
        }

        [Test]
        public void SplitWithCharsAndStringSplitOptionsAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "cabcabc" }, "abxcabcabc".Split(new[] { 'b', 'x' }, 2, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void SplitWithRegexWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca", "ca", "c" }, "abcaxcaxc".Split(new Regex("b|x", "g")));
        }

        [Test]
        public void SomeNetSplitTests()
        {
            Assert.AreDeepEqual(new[] { "a", "bc", "de" }, "axybcxzde".Split(new[] { "xy", "xz" }, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "a", "bc", "de", "" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "", "a", "bc", "de", "" }, "xzaxybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "", "a", "", "bc", "de", "" }, "xzaxyxzbcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "", "a", "", "", "bc", "de", "" }, "xzaxyxzxybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.None));

            Assert.AreDeepEqual(new[] { "a", "bc", "de" }, "axybcxzde".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreDeepEqual(new[] { "a", "bc", "de" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreDeepEqual(new[] { "a", "bc", "de" }, "xzaxybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreDeepEqual(new[] { "a", "bc", "de" }, "xzaxyxzbcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreDeepEqual(new[] { "a", "bc", "de" }, "xzaxyxzxybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));

            Assert.AreDeepEqual(new[] { "a", "bc", "de" }, "axybcxzde".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "a", "bc", "de", "" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "", "a", "bc", "de", "" }, "xzaxybcxzdexz".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "", "a", "", "bc", "de", "" }, "xzaxyxzbcxzdexz".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "", "a", "", "", "bc", "de", "" }, "xzaxyxzxybcxzdexz".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));

            Assert.AreDeepEqual(new[] { "a", "bcxzde" }, "axybcxzde".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "a", "bcxzdexz" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "a", "xzbcxzdexz" }, "axyxzbcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "", "axybcxzdexz" }, "xzaxybcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.None));

            Assert.AreDeepEqual(new[] { "a", "bcxzde" }, "axybcxzde".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreDeepEqual(new[] { "a", "bcxzdexz" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreDeepEqual(new[] { "a", "bcxzdexz" }, "axyxzbcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreDeepEqual(new[] { "a", "bcxzdexz" }, "xzaxyxzbcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void SplitWithCharsWorks()
        {
            Assert.AreDeepEqual(new[] { "Lorem", "Ipsum", "", "dolor", "sit", "amet" }, "Lorem Ipsum, dolor[sit amet".Split(new[] { ',', ' ', '[' }));
            Assert.AreDeepEqual(new[] { "Lorem", "Ipsum", "", "dolor", "sit", "amet" }, "Lorem Ipsum, dolor[sit amet".Split(new[] { ',', ' ', '[' }, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "Lorem", "Ipsum", "dolor", "sit", "amet" }, "Lorem Ipsum, dolor[sit amet".Split(new[] { ',', ' ', '[' }, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void SplitWithStringsWorks()
        {
            Assert.AreDeepEqual(new[] { "a ", " b ", " b ", " c and c ", "", "", " d ", " d ", " e" }, "a is b if b is c and c isifis d if d is e".Split(new[] { "is", "if" }, StringSplitOptions.None));
            Assert.AreDeepEqual(new[] { "a ", " b ", " b ", " c and c ", " d ", " d ", " e" }, "a is b if b is c and c isifis d if d is e".Split(new[] { "is", "if" }, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void SplitWithStringsAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "abcabc" }, "abcbcabcabc".Split(new[] { "bc" }, 2, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void StartsWithCharWorks()
        {
            Assert.True("abc".StartsWith("a"));
            Assert.False("abc".StartsWith("b"));
        }

        [Test]
        public void StartsWithStringWorks()
        {
            Assert.True("abc".StartsWith("ab"));
            Assert.False("abc".StartsWith("bc"));
        }

        [Test]
        public void SubstrWorks()
        {
            Assert.AreEqual("cde", "abcde".Substr(2));
            Assert.AreEqual("cd", "abcde".Substr(2, 2));

            var numbers = "0123456789";

            // Let's start by using both start and length
            Assert.AreEqual(numbers.Substr(3, 4), "3456");

            // What happens when we start with a negative number.
            Assert.AreEqual(numbers.Substr(-7, 4), "3456");

            // What happens when we omit the last argument.
            Assert.AreEqual(numbers.Substr(3), "3456789");

            // And with the negative, end-relevant index.
            Assert.AreEqual(numbers.Substr(-7), "3456789");

            // If the index is out of range, it returns the empty string.
            Assert.AreEqual(numbers.Substr(100, 1), "");

            Assert.AreEqual(numbers.Substr(2, 4), "2345");
        }

        [Test]
        public void SubstringWorks()
        {
            Assert.AreEqual("cde", "abcde".Substring(2));
            Assert.AreEqual("cd", "abcde".Substring(2, 2));

            var numbers = "0123456789";
            // Let's start by using both begin and end.
            Assert.AreEqual(numbers.Substring(3, 7), "3456789");

            // What happens when we start with a negative number.
            Assert.AreEqual(numbers.Substring(-7, 7), "3456789");

            // What happens when we use two negative numbers.
            Assert.AreEqual(numbers.Substring(-7, -3), "");

            // What happens when we omit the last argument.
            Assert.AreEqual(numbers.Substring(3), "3456789");

            // And with the negative, end-relevant index.
            Assert.AreEqual(numbers.Substring(-7), "3456789");

            // If the index is out of range, it returns the empty string.
            Assert.AreEqual(numbers.Substring(100, 101), "");

            Assert.AreEqual(numbers.Substring(2, 4), "2345");
        }

        [Test]
        public void JsSubstringWorks()
        {
            var numbers = "0123456789";

            // Let's start by using both begin and end.
            Assert.AreEqual(numbers.JsSubstring(3, 7), "3456");

            // What happens when we start with a negative number.
            Assert.AreEqual(numbers.JsSubstring(-7, 7), "0123456");

            // What happens when we use two negative numbers.
            Assert.AreEqual(numbers.JsSubstring(-7, -3), "");

            // What happens when we omit the last argument.
            Assert.AreEqual(numbers.JsSubstring(3), "3456789");

            // And with the negative, end-relevant index.
            Assert.AreEqual(numbers.JsSubstring(-7), "0123456789");

            // If the index is out of range, it returns the empty string.
            Assert.AreEqual(numbers.JsSubstring(100, 101), "");

            Assert.AreEqual(numbers.JsSubstring(2, 4), "23");
        }

        [Test]
        public void ToLowerCaseWorks()
        {
            Assert.AreEqual("abcd", "ABcd".ToLower());
        }

        [Test]
        public void ToUpperCaseWorks()
        {
            Assert.AreEqual("ABCD", "ABcd".ToUpper());
        }

        [Test]
        public void ToLowerWorks()
        {
            Assert.AreEqual("abcd", "ABcd".ToLower());
        }

        [Test]
        public void ToUpperWorks()
        {
            Assert.AreEqual("ABCD", "ABcd".ToUpper());
        }

        [Test]
        public void TrimWorks()
        {
            Assert.AreEqual("abc", "  abc  ".Trim());
        }

        [Test]
        public void TrimCharsWorks()
        {
            Assert.AreEqual("aa, aa", ",., aa, aa,... ".Trim(',', '.', ' '));
        }

        [Test]
        public void TrimStartCharsWorks()
        {
            Assert.AreEqual("aa, aa,... ", ",., aa, aa,... ".TrimStart(',', '.', ' '));
        }

        [Test]
        public void TrimEndCharsWorks()
        {
            Assert.AreEqual(",., aa, aa", ",., aa, aa,... ".TrimEnd(',', '.', ' '));
        }

        [Test]
        public void TrimStartWorks()
        {
            Assert.AreEqual("abc  ", "  abc  ".TrimStart());
        }

        [Test]
        public void TrimEndWorks()
        {
            Assert.AreEqual("  abc", "  abc  ".TrimEnd());
        }

        [Test]
        public void StringEqualityWorks()
        {
            string s1 = "abc", s2 = null, s3 = null;
            Assert.True(s1 == "abc");
            Assert.False(s1 == "aBc");
            Assert.False(s1 == s2);
            Assert.True(s2 == s3);
        }

        [Test]
        public void StringInequalityWorks()
        {
            string s1 = "abc", s2 = null, s3 = null;
            Assert.False(s1 != "abc");
            Assert.True(s1 != "aBc");
            Assert.True(s1 != s2);
            Assert.False(s2 != s3);
        }

        [Test]
        public void StringIndexingWorks()
        {
            var s = "abcd";
            Assert.AreEqual((int)'a', (int)s[0]);
            Assert.AreEqual((int)'b', (int)s[1]);
            Assert.AreEqual((int)'c', (int)s[2]);
            Assert.AreEqual((int)'d', (int)s[3]);
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual("a".GetHashCode(), "a".GetHashCode());
            Assert.AreEqual("b".GetHashCode(), "b".GetHashCode());
            Assert.AreNotEqual("b".GetHashCode(), "a".GetHashCode());
            Assert.AreNotEqual("ab".GetHashCode(), "a".GetHashCode());
            Assert.True((long)"abcdefghijklmnopq".GetHashCode() < 0xffffffffL);
        }

        [Test]
        public void InstanceEqualsWorks()
        {
            object r = "a";
            Assert.True("a".Equals(r));
            Assert.False("b".Equals(r));
            r = "b";
            Assert.False("a".Equals(r));
            Assert.True("b".Equals(r));
            r = "A";
            Assert.False("a".Equals(r));
            r = "ab";
            Assert.False("a".Equals(r));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True("a".Equals("a"));
            Assert.False("b".Equals("a"));
            Assert.False("a".Equals("b"));
            Assert.True("b".Equals("b"));
            Assert.False("a".Equals("A"));
            Assert.False("a".Equals("ab"));

            Assert.True(((IEquatable<string>)"a").Equals("a"));
            Assert.False(((IEquatable<string>)"b").Equals("a"));
            Assert.False(((IEquatable<string>)"a").Equals("b"));
            Assert.True(((IEquatable<string>)"b").Equals("b"));
            Assert.False(((IEquatable<string>)"a").Equals("A"));
            Assert.False(((IEquatable<string>)"a").Equals("ab"));
        }

        [Test]
        public void StringEqualsWorks()
        {
            Assert.True("a".Equals("a"));
            Assert.False("b".Equals("a"));
            Assert.False("a".Equals("b"));
            Assert.True("b".Equals("b"));
            Assert.False("a".Equals("A"));
            Assert.False("a".Equals("ab"));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(string.Compare("abcd", "abcd") == 0);
            Assert.True(string.Compare("abcd", "abcD") != 0);
            Assert.True(string.Compare("abcd", "abcb") > 0);
            Assert.True(string.Compare("abcd", "abce") < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<string>)"abcd").CompareTo("abcd") == 0);
            Assert.True(((IComparable<string>)"abcd").CompareTo("abcD") != 0);
            Assert.True(((IComparable<string>)"abcd").CompareTo("abcb") > 0);
            Assert.True(((IComparable<string>)"abcd").CompareTo("abce") < 0);

            Assert.True(((IComparable<string>)"").CompareTo(null) > 0);
        }

        [Test]
        public void JoinWorks()
        {
            Assert.AreEqual("a, ab, abc, abcd", string.Join(", ", new[] { "a", "ab", "abc", "abcd" }));
            Assert.AreEqual("ab, abc", string.Join(", ", new[] { "a", "ab", "abc", "abcd" }, 1, 2));

            IEnumerable<int> intValues = new MyEnumerable<int>(new[] { 1, 5, 6 });
            Assert.AreEqual("1, 5, 6", String.Join(", ", intValues));
            IEnumerable<string> stringValues = new MyEnumerable<string>(new[] { "a", "ab", "abc", "abcd" });
            Assert.AreEqual("a, ab, abc, abcd", String.Join(", ", stringValues));

            // TODO: c# makes it False but js false
            Assert.AreEqual("a, 1, abc, false", String.Join(", ", new Object[] { "a", 1, "abc", false }));// False");
        }

        [Test]
        public void ContainsWorks()
        {
            string text = "Lorem ipsum dolor sit amet";
            Assert.True(text.Contains("Lorem"));
            Assert.False(text.Contains("lorem"));
            Assert.True(text.Contains(text));
        }

        [Test]
        public void ToCharArrayWorks()
        {
            string text = "Lorem sit dolor";
            Assert.AreDeepEqual(new[] { 'L', 'o', 'r', 'e', 'm', ' ', 's', 'i', 't', ' ', 'd', 'o', 'l', 'o', 'r' }, text.ToCharArray());
        }

        [Test]
        public static void Strings()
        {
            // In PhantomJS some correct tests failed. We will skip them in this environment.
            var isPhantomJs = Utilities.BrowserHelper.IsPhantomJs();

            //var expectedCount = isPhantomJs ? 28 : 48;
            //assert.Expect(expectedCount);

            // TEST ToLower, ToLowerCase, ToLocaleLowerCase
            var s = "HELLO".ToLower();
            Assert.AreEqual("hello", s, "'HELLO'.ToLower()");

            s = "HELLO".ToLowerCase();
            Assert.AreEqual("hello", s, "'HELLO'.ToLowerCase()");

            s = "HELLO".ToLocaleLowerCase();
            Assert.AreEqual("hello", s, "'HELLO'.ToLocaleLowerCase()");

            // TEST ToUpper, ToUpperCase, ToLocaleUpperCase
            s = "hello".ToUpper();
            Assert.AreEqual("HELLO", s, "'hello'.ToUpper()");

            s = "hello".ToUpperCase();
            Assert.AreEqual("HELLO", s, "'hello'.ToUpperCase()");

            s = "HELLO".ToLocaleUpperCase();
            Assert.AreEqual("HELLO", s, "'hello'.ToLocaleUpperCase()");

            s = "Hello Bridge.NET";
            // TEST String(string) constructor
            Assert.AreEqual(s, new String(s), "new String('" + s + "')");

            // TEST String(char, count) constructor
            Assert.AreEqual("----", new String('-', 4), "new String('-',4)");

            // TEST IndexOfAny
            char[] anyOf = new char[] { 'x', 'b', 'i' };
            string sAnyOf = "['x','b','i']";

            Assert.AreEqual(8, s.IndexOfAny(anyOf), "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            Assert.Throws(() => s.IndexOfAny(anyOf, 18, 8), "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            Assert.Throws(() => s.IndexOfAny(null), "'" + s + "'.IndexOfAny(null)");

            s = string.Empty;
            Assert.AreEqual(-1, s.IndexOfAny(anyOf), "String.Empty.IndexOfAny(" + sAnyOf + ")");

            s = null;
            Assert.AreEqual(-1, s.IndexOfAny(anyOf), "null.IndexOfAny(" + sAnyOf + ")");

            // TEST IndexOf
            s = "Hello Bridge.NET";

            Assert.AreEqual(1, s.IndexOf('e'), "'" + s + "'.IndexOf('e')");
            Assert.AreEqual(11, s.IndexOf("e."), "'" + s + "'.IndexOf('e.')");
            Assert.AreEqual(11, s.IndexOf('e', 6, 8), "'" + s + "'.IndexOf('e', 6, 8)");
            Assert.Throws(() => s.IndexOf(null), "'" + s + "'.IndexOf(null)");

            if (!isPhantomJs)
            {
                Assert.AreEqual(11, s.IndexOf("E", 6, 8, StringComparison.CurrentCultureIgnoreCase), "'" + s + "'.IndexOf('E', 6, 8, StringComparison.CurrentCultureIgnoreCase)");
            }

            s = string.Empty;
            Assert.AreEqual(-1, s.IndexOf('e'), "String.Empty.IndexOf('e')");

            s = null;
            Assert.AreEqual(-1, s.IndexOf('e'), "null.IndexOf('e')");

            // TEST Compare
            string s1 = "Animal";
            string s2 = "animal";

            Assert.AreEqual(0, string.Compare(s1, s2, true), "String.Compare('" + s1 + "', '" + s2 + "', true)");

            if (!isPhantomJs)
            {
                Assert.AreEqual(1, string.Compare(s1, s2, false), "String.Compare('" + s1 + "', '" + s2 + "', false)");
            }

            if (!isPhantomJs)
            {
                string[] threeIs = new string[3];
                threeIs[0] = "\u0069";
                threeIs[1] = "\u0131";
                threeIs[2] = "\u0049";

                StringComparison[] scValues = {
                StringComparison.CurrentCulture,
                StringComparison.CurrentCultureIgnoreCase,
                StringComparison.InvariantCulture,
                StringComparison.InvariantCultureIgnoreCase,
                StringComparison.Ordinal,
                StringComparison.OrdinalIgnoreCase };

                int[] expected = { -1, -1, 1, -1, 0, 1, -1, -1, 1, -1, 0, 1, -1, 1, 1, 0, 0, 0 };
                int expectedIndex = 0;

                foreach (StringComparison sc in scValues)
                {
                    Test(0, 1, sc, threeIs, expected, expectedIndex++);
                    Test(0, 2, sc, threeIs, expected, expectedIndex++);
                    Test(1, 2, sc, threeIs, expected, expectedIndex++);
                }
            }

            // TEST Contains
            s = "Hello Bridge.NET";

            Assert.AreEqual(true, s.Contains("Bridge"), "'" + s + "'.Contains('Bridge')");
            Assert.AreEqual(true, s.Contains(String.Empty), "'" + s + "'.Contains(String.Empty)");
            Assert.AreEqual(false, String.Empty.Contains("Bridge"), "String.Empty.Contains('Bridge')");
            Assert.Throws(() => s.Contains(null), "null.Contains('Bridge')");

            // TEST Concat
            s = string.Concat(s, "2", "3", "4");
            Assert.AreEqual("Hello Bridge.NET234", s, "string.Concat()");

            s = string.Concat(null, true, 3, false);
            Assert.AreEqual("true3false", s, "string.Concat()");

            s = string.Concat(new string[] { "1", "2", "3", "4", "5" });
            Assert.AreEqual("12345", s, "string.Concat()");

            s = string.Concat(new object[] { 1, null, 2, null, 3 });
            Assert.AreEqual("123", s, "string.Concat()");
        }

        protected static void Test(int x,
                                    int y,
                                    StringComparison comparison,
                                    string[] testI,
                                    int[] expected,
                                    int expectedIndex)
        {
            int cmpValue = 0;
            cmpValue = String.Compare(testI[x], testI[y], comparison);
            Assert.AreEqual(expected[expectedIndex], cmpValue, "String.Compare('" + testI[x] + "', '" + testI[y] + "'," + comparison + ")");
        }

        [Test(ExpectedCount = 5)]
        public static void Enumerable()
        {
            char a;
            int i = 0;
            var result = new char[5];
            foreach (var c in "danny")
            {
                a = c;
                result[i] = a;

                i++;
            }

            Assert.AreEqual('d', result[0]);
            Assert.AreEqual('a', result[1]);
            Assert.AreEqual('n', result[2]);
            Assert.AreEqual('n', result[3]);
            Assert.AreEqual('y', result[4]);
        }
    }
}