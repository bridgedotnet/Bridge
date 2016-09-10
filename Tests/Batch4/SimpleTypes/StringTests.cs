using Bridge.Test;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "StringTests - {0}")]
    public class StringTests
    {
        private class MyFormattable : IFormattable
        {
            public string ToString(string format, IFormatProvider formatProvider)
            {
                return "Formatted: " + format + ", " + (formatProvider == null ? "null formatProvider" : formatProvider.GetType().FullName);
            }
        }

        private class MyFormatProvider : IFormatProvider
        {
            public object GetFormat(Type type)
            {
                return CultureInfo.InvariantCulture.GetFormat(type);
            }
        }

        private class MyEnumerable<T> : IEnumerable<T>
        {
            private readonly T[] _items;

            public MyEnumerable(T[] items)
            {
                _items = items;
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return null;
            }

            public IEnumerator<T> GetEnumerator()
            {
                return (IEnumerator<T>)(object)_items.ToList().GetEnumerator();
            }
        }

        [Test]
        public void TypePropertiesAreCorrect_SPI_1597()
        {
            Assert.AreEqual("String", typeof(string).FullName);
            Assert.True(typeof(string).IsClass);
            // #1597
            Assert.True(typeof(IComparable<string>).IsAssignableFrom(typeof(string)));
            Assert.True(typeof(IEquatable<string>).IsAssignableFrom(typeof(string)));
            object s = "X";
            Assert.True(s is string);
            Assert.True(s is IComparable<string>);
            Assert.True(s is IEquatable<string>);

            var interfaces = typeof(string).GetInterfaces();
            Assert.AreEqual(6, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<string>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<string>)));
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
        public void CharArrayWithStartIndexAndLengthConstructorWorks()
        {
            Assert.AreEqual("bc", new string(new[] { 'a', 'b', 'c', 'D' }, 1, 2));
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

        // Not C# API
        //[Test]
        //public void JsCharAtWorks()
        //{
        //    Assert.AreEqual("abcd".JsCharAt(2), "c");
        //}

        [Test]
        public void CharCodeAtWorks()
        {
            Assert.AreEqual((int)'c', (int)"abcd".CharCodeAt(2));
        }

        [Test]
        public void CompareToWithIgnoreCaseArgWorks()
        {
            Assert.True("abcd".CompareTo("abcd") == 0);
            Assert.True("abcd".CompareTo("abcb") > 0);
            Assert.True("abcd".CompareTo("abce") < 0);
            Assert.True("abcd".CompareTo("ABCD") < 0);
            Assert.True("abcd".CompareTo("ABCB") > 0);
            Assert.True("abcd".CompareTo("ABCE") < 0);

            Assert.True("".CompareTo(null) > 0);
        }

        [Test]
        public void CompareWorks()
        {
            Assert.True(string.Compare("abcd", "abcd") == 0);
            Assert.True(string.Compare("abcd", "abcb") > 0);
            Assert.True(string.Compare("abcd", "abce") < 0);

            Assert.True(string.Compare(null, "") < 0);
            Assert.True(string.Compare("", null) > 0);
            Assert.True(string.Compare(null, null) == 0);
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

            Assert.True(string.Compare(null, "", true) < 0);
            Assert.True(string.Compare("", null, true) > 0);
            Assert.True(string.Compare(null, null, true) == 0);
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

        // Not C# API
        //[Test]
        //public void DecodeUriWorks()
        //{
        //    Assert.AreEqual(string.DecodeUri("%20"), " ");
        //}

        // Not C# API
        //[Test]
        //public void DecodeUriComponentWorks()
        //{
        //    Assert.AreEqual(string.DecodeUriComponent("%20"), " ");
        //}

        // Not C# API
        //[Test]
        //public void EncodeUriWorks()
        //{
        //    Assert.AreEqual(string.EncodeUri(" "), "%20");
        //}

        // Not C# API
        //[Test]
        //public void EncodeUriComponentWorks()
        //{
        //    Assert.AreEqual(string.EncodeUriComponent(" "), "%20");
        //}

        // Not C# API
        //[Test]
        //public void EndsWithCharWorks()
        //{
        //    Assert.True("abcd".EndsWith('d'));
        //    Assert.False("abcd".EndsWith('e'));
        //}

        [Test]
        public void EndsWithStringWorks()
        {
            Assert.True("abcd".EndsWith("d"));
            Assert.False("abcd".EndsWith("e"));
        }

        [Test]
        public void StaticEqualsWorks()
        {
            Assert.True(string.Equals("abcd", "abcd", StringComparison.InvariantCulture));
            Assert.False(string.Equals("abcd", "abce", StringComparison.InvariantCulture));
            Assert.False(string.Equals("abcd", "ABCD", StringComparison.InvariantCulture));
            Assert.True(string.Equals("abcd", "abcd", StringComparison.InvariantCultureIgnoreCase));
            Assert.False(string.Equals("abcd", "abce", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(string.Equals("abcd", "ABCD", StringComparison.InvariantCultureIgnoreCase));

            Assert.True(string.Equals("abcd", "abcd"));
            Assert.False(string.Equals("abcd", "abce"));
            Assert.False(string.Equals("abcd", "ABCD"));
            Assert.True(string.Equals("abcd", "abcd"));
            Assert.False(string.Equals("abcd", "abce"));
            Assert.False(string.Equals("abcd", "ABCD"));

            Assert.True(string.Equals("", ""));
            Assert.True(string.Equals("", "", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(string.Equals(null, null));
            Assert.True(string.Equals(null, null, StringComparison.InvariantCultureIgnoreCase));
            Assert.False(string.Equals(null, ""));
            Assert.False(string.Equals(null, "", StringComparison.InvariantCultureIgnoreCase));
            Assert.False(string.Equals("", null));
            Assert.False(string.Equals("", null, StringComparison.InvariantCultureIgnoreCase));
        }

        // Not C# API
        //[Test]
        //public void EscapeWorks()
        //{
        //    Assert.AreEqual(string.Escape("a .,b"), "a%20.%2Cb");
        //}

        // Not C# API
        //[Test]
        //public void UnescapeWorks()
        //{
        //    Assert.AreEqual(string.Unescape("a%20.%2Cb"), "a .,b");
        //}

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
            Assert.AreEqual("xab", string.Format("x{0}{1}", arr2));
            Assert.AreEqual("xabc", string.Format("x{0}{1}{2}", arr3));
            Assert.AreEqual("xabcd", string.Format("x{0}{1}{2}{3}", arr4));
        }

        [Test]
        public void FormatWorksWithIFormattable_SPI_1598()
        {
            Assert.AreEqual("3.14", string.Format("{0:F2}", 22.0 / 7.0));
            // #1598
            Assert.AreEqual("Formatted: FMT, null formatProvider", string.Format("{0:FMT}", new MyFormattable()));
        }

        [Test]
        public void FormatWorksWithIFormattableAndFormatProvider_SPI_1598()
        {
            Assert.AreEqual("3.14", string.Format(new MyFormatProvider(), "{0:F2}", 22.0 / 7.0));
            // #1598
            Assert.AreEqual("Formatted: FMT, StringTests$MyFormatProvider", string.Format(new MyFormatProvider(), "{0:FMT}", new MyFormattable()));
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

        // Not C# API
        //[Test]
        //public void HtmlEncodeWorks()
        //{
        //    Assert.AreEqual("a<\"&'>b".HtmlEncode(), "a&lt;&quot;&amp;&#39;&gt;b");
        //}

        // Not C# API
        //[Test]
        //public void HtmlDecodeWorks()
        //{
        //    Assert.AreEqual("abcd".HtmlDecode(), "abcd");
        //    Assert.AreEqual("&lt;abcd".HtmlDecode(), "<abcd");
        //    Assert.AreEqual("abcd&gt;".HtmlDecode(), "abcd>");
        //    Assert.AreEqual("a&lt;&quot;&amp;&#39;&gt;b".HtmlDecode(), "a<\"&'>b");
        //}

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
            Assert.AreEqual(1, "abc".LastIndexOf('b'));
            Assert.AreEqual(-1, "abc".LastIndexOf('d'));
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
            Assert.AreEqual(1, "abcabc".LastIndexOf('b', 3));
            Assert.AreEqual(-1, "abcabc".LastIndexOf('d', 3));
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

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(string.LocaleFormat("x"), "x");
        //    Assert.AreEqual(string.LocaleFormat("x{0}", "a"), "xa");
        //    Assert.AreEqual(string.LocaleFormat("x{0}{1}", "a", "b"), "xab");
        //    Assert.AreEqual(string.LocaleFormat("x{0}{1}{2}", "a", "b", "c"), "xabc");
        //    Assert.AreEqual(string.LocaleFormat("x{0}{1}{2}{3}", "a", "b", "c", "d"), "xabcd");
        //}

        // Not C# API
        //[Test]
        //public void MatchWorks()
        //{
        //    var result = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".Match(new Regex("[A-E]", "gi"));
        //    Assert.AreEqual(result, new[] { "A", "B", "C", "D", "E", "a", "b", "c", "d", "e" });
        //}

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
        }

        [Test]
        public void RemoveWithCountWorks()
        {
            Assert.AreEqual("abe", "abcde".Remove(2, 2));
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
            Assert.AreEqual("xbcxbcxbc", "abcabcabc".Replace('a', 'x'));
        }

        // Not C# API
        //[Test]
        //public void ReplaceFirstWorks()
        //{
        //    Assert.AreEqual("abcabcabc".ReplaceFirst("a", "x"), "xbcabcabc");
        //}

        [Test]
        public void ReplaceRegexWithReplaceTextWorks()
        {
            Assert.AreEqual("xxcxxcxxc", "abcabcabc".Replace(new Bridge.Text.RegularExpressions.Regex("a|b", "g"), "x"));
        }

        [Test]
        public void ReplaceRegexWithReplaceCallbackWorks()
        {
            Assert.AreEqual("xycxycxyc", "abcabcabc".Replace(new Bridge.Text.RegularExpressions.Regex("a|b", "g"), s => s == "a" ? "x" : "y"));
        }

        [Test]
        public void SearchWorks()
        {
            Assert.AreEqual(2, "abcabcabc".Search(new Bridge.Text.RegularExpressions.Regex("ca")));
            Assert.AreEqual(-1, "abcabcabc".Search(new Bridge.Text.RegularExpressions.Regex("x")));
        }

        [Test]
        public void SplitWithStringWorks()
        {
            Assert.AreEqual(new[] { "a", "ca", "ca", "c" }, "abcabcabc".Split("b"));
        }

        [Test]
        public void SplitWithCharWorks()
        {
            Assert.AreEqual(new[] { "a", "ca", "ca", "c" }, "abcabcabc".Split('b'));
        }

        // Not C# API
        //[Test]
        //public void JsSplitWithStringAndLimitWorks()
        //{
        //    Assert.AreEqual("abcaxbcabce".JsSplit("bc", 2), new[] { "a", "ax" });
        //}

        // Not C# API
        //[Test]
        //public void JsSplitWithCharAndLimitWorks()
        //{
        //    Assert.AreEqual("abcabcabc".JsSplit('b', 2), new[] { "a", "ca" });
        //}

        [Test]
        public void SplitWithCharsAndLimitWorks()
        {
            Assert.AreEqual(new[] { "a", "cabcabc" }, "abcabcabc".Split(new[] { 'b' }, 2));
        }

        [Test]
        public void SplitWithCharsAndStringSplitOptionsAndLimitWorks()
        {
            Assert.AreEqual(new[] { "a", "cabcabc" }, "abxcabcabc".Split(new[] { 'b', 'x' }, 2, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void SplitWithRegexWorks()
        {
            Assert.AreEqual(new[] { "a", "ca", "ca", "c" }, "abcaxcaxc".Split(new Bridge.Text.RegularExpressions.Regex("b|x", "g")));
        }

        // Not C# API
        //[Test]
        //public void JsSplitWithRegexAndLimitWorks()
        //{
        //    Assert.AreEqual("abcaxcaxc".JsSplit(new Regex("b|x", "g"), 2), new[] { "a", "ca" });
        //}

        [Test]
        public void SomeNetSplitTests()
        {
            Assert.AreEqual(new[] { "a", "bc", "de" }, "axybcxzde".Split(new[] { "xy", "xz" }, StringSplitOptions.None));
            Assert.AreEqual(new[] { "a", "bc", "de", "" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.None));
            Assert.AreEqual(new[] { "", "a", "bc", "de", "" }, "xzaxybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.None));
            Assert.AreEqual(new[] { "", "a", "", "bc", "de", "" }, "xzaxyxzbcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.None));
            Assert.AreEqual(new[] { "", "a", "", "", "bc", "de", "" }, "xzaxyxzxybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.None));

            Assert.AreEqual(new[] { "a", "bc", "de" }, "axybcxzde".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreEqual(new[] { "a", "bc", "de" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreEqual(new[] { "a", "bc", "de" }, "xzaxybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreEqual(new[] { "a", "bc", "de" }, "xzaxyxzbcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreEqual(new[] { "a", "bc", "de" }, "xzaxyxzxybcxzdexz".Split(new[] { "xy", "xz" }, StringSplitOptions.RemoveEmptyEntries));

            Assert.AreEqual(new[] { "a", "bc", "de" }, "axybcxzde".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));
            Assert.AreEqual(new[] { "a", "bc", "de", "" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));
            Assert.AreEqual(new[] { "", "a", "bc", "de", "" }, "xzaxybcxzdexz".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));
            Assert.AreEqual(new[] { "", "a", "", "bc", "de", "" }, "xzaxyxzbcxzdexz".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));
            Assert.AreEqual(new[] { "", "a", "", "", "bc", "de", "" }, "xzaxyxzxybcxzdexz".Split(new[] { "xy", "xz" }, 100, StringSplitOptions.None));

            Assert.AreEqual(new[] { "a", "bcxzde" }, "axybcxzde".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.None));
            Assert.AreEqual(new[] { "a", "bcxzdexz" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.None));
            Assert.AreEqual(new[] { "a", "xzbcxzdexz" }, "axyxzbcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.None));
            Assert.AreEqual(new[] { "", "axybcxzdexz" }, "xzaxybcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.None));

            Assert.AreEqual(new[] { "a", "bcxzde" }, "axybcxzde".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreEqual(new[] { "a", "bcxzdexz" }, "axybcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreEqual(new[] { "a", "bcxzdexz" }, "axyxzbcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.RemoveEmptyEntries));
            Assert.AreEqual(new[] { "a", "bcxzdexz" }, "xzaxyxzbcxzdexz".Split(new[] { "xy", "xz" }, 2, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void SplitWithCharsWorks()
        {
            Assert.AreEqual(new[] { "Lorem", "Ipsum", "", "dolor", "sit", "amet" }, "Lorem Ipsum, dolor[sit amet".Split(new[] { ',', ' ', '[' }));
            Assert.AreEqual(new[] { "Lorem", "Ipsum", "", "dolor", "sit", "amet" }, "Lorem Ipsum, dolor[sit amet".Split(new[] { ',', ' ', '[' }, StringSplitOptions.None));
            Assert.AreEqual(new[] { "Lorem", "Ipsum", "dolor", "sit", "amet" }, "Lorem Ipsum, dolor[sit amet".Split(new[] { ',', ' ', '[' }, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void SplitWithStringsWorks()
        {
            Assert.AreEqual(new[] { "a ", " b ", " b ", " c and c ", "", "", " d ", " d ", " e" }, "a is b if b is c and c isifis d if d is e".Split(new[] { "is", "if" }, StringSplitOptions.None));
            Assert.AreEqual(new[] { "a ", " b ", " b ", " c and c ", " d ", " d ", " e" }, "a is b if b is c and c isifis d if d is e".Split(new[] { "is", "if" }, StringSplitOptions.RemoveEmptyEntries));
        }

        [Test]
        public void SplitWithStringsAndLimitWorks()
        {
            Assert.AreEqual(new[] { "a", "abcabc" }, "abcbcabcabc".Split(new[] { "bc" }, 2, StringSplitOptions.RemoveEmptyEntries));
        }

        // Not C# API
        //[Test]
        //public void StartsWithCharWorks()
        //{
        //    Assert.True("abc".StartsWith('a'));
        //    Assert.False("abc".StartsWith('b'));
        //}

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
        }

        [Test]
        public void SubstrWithLengthWorks()
        {
            Assert.AreEqual("cd", "abcde".Substr(2, 2));
        }

        [Test]
        public void SubstringWorks()
        {
            Assert.AreEqual("cde", "abcde".Substring(2));
        }

        [Test]
        public void SubstringWithLengthWorks()
        {
            Assert.AreEqual("cd", "abcde".Substring(2, 2));
        }

        [Test]
        public void JsSubstringWithEndIndexWorks()
        {
            Assert.AreEqual("cd", "abcde".JsSubstring(2, 4));
        }

        // Not C# API
        //[Test]
        //public void ToLocaleLowerCaseWorks()
        //{
        //    Assert.AreEqual("ABcd".ToLocaleLowerCase(), "abcd");
        //}

        // Not C# API
        //[Test]
        //public void ToLocaleUpperCaseWorks()
        //{
        //    Assert.AreEqual("ABcd".ToLocaleUpperCase(), "ABCD");
        //}

        // Not C# API
        //[Test]
        //public void ToLowerCaseWorks()
        //{
        //    Assert.AreEqual("ABcd".ToLowerCase(), "abcd");
        //}

        // Not C# API
        //[Test]
        //public void ToUpperCaseWorks()
        //{
        //    Assert.AreEqual("ABcd".ToUpperCase(), "ABCD");
        //}

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
            Assert.True("a".Equals((object)"a"));
            Assert.False("b".Equals((object)"a"));
            Assert.False("a".Equals((object)"b"));
            Assert.True("b".Equals((object)"b"));
            Assert.False("a".Equals((object)"A"));
            Assert.False("a".Equals((object)"ab"));
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
        public void CompareToWorks()
        {
            Assert.True("abcd".CompareTo("abcd") == 0);
            Assert.True("abcd".CompareTo("abcD") != 0);
            Assert.True("abcd".CompareTo("abcb") > 0);
            Assert.True("abcd".CompareTo("abce") < 0);

            Assert.True("".CompareTo(null) > 0);
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
        public void JoinWorks_SPI_1599()
        {
            Assert.AreEqual("a, ab, abc, abcd", string.Join(", ", new[] { "a", "ab", "abc", "abcd" }));
            Assert.AreEqual("ab, abc", string.Join(", ", new[] { "a", "ab", "abc", "abcd" }, 1, 2));

            IEnumerable<int> intValues = new MyEnumerable<int>(new[] { 1, 5, 6 });
            // #1599
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
            Assert.AreEqual(new[] { 'L', 'o', 'r', 'e', 'm', ' ', 's', 'i', 't', ' ', 'd', 'o', 'l', 'o', 'r' }, text.ToCharArray());
        }
    }
}
