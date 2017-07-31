using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_HTML5)]
    [TestFixture(TestNameFormat = "String - {0}")]
    public class JsStringTests
    {
        // Not C# API #2392
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

        [Test]
        public void FromCharCodeWorks()
        {
            Assert.AreEqual("", StringPrototype.FromCharCode());
            Assert.AreEqual("a", StringPrototype.FromCharCode('a'));
            Assert.AreEqual("ab", StringPrototype.FromCharCode('a', 'b'));
            Assert.AreEqual("abc", StringPrototype.FromCharCode('a', 'b', 'c'));
        }

        // Not C# API #2392
        [Test]
        public void LocaleCompareWorks()
        {
            Assert.AreEqual(0, "abcd".LocaleCompare("abcd"));
            Assert.AreEqual(1, "abcd".LocaleCompare("abcb"));
            Assert.AreEqual(-1, "abcd".LocaleCompare("abce"));
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

        // Not C# API
        //[Test]
        //public void ReplaceFirstWorks()
        //{
        //    Assert.AreEqual("abcabcabc".ReplaceFirst("a", "x"), "xbcabcabc");
        //}

        //[Test]
        //public void ReplaceRegexWithReplaceTextWorks()
        //{
        //    Assert.AreEqual("xxcxxcxxc", "abcabcabc".Replace(new Html5.RegExp("a|b", "g"), "x"));
        //}

        //[Test]
        // public void ReplaceRegexWithReplaceCallbackWorks()
        //{
        //    Assert.AreEqual("xycxycxyc", "abcabcabc".Replace(new Html5.RegExp("a|b", "g"), s => s == "a" ? "x" : "y"));
        //}

        //[Test]
        //public void SearchWorks()
        //{
        //    Assert.AreEqual(2, "abcabcabc".Search(new Html5.RegExp("ca")));
        //    Assert.AreEqual(-1, "abcabcabc".Search(new Html5.RegExp("x")));
        //}

        // Not C# API #2392
        //[Test]
        //public void SplitWithStringWorks()
        //{
        //    Assert.AreEqual(new[] { "a", "ca", "ca", "c" }, "abcabcabc".Split("b"));
        //}

        // Not C# API #2392
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
        public void SplitWithCharWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca", "ca", "c" }, StringPrototype.Split("abcabcabc", 'b'));
        }

        [Test]
        public void SplitWithLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "abcabcabc" }, StringPrototype.Split("abcabcabc", 2));
        }

        [Test]
        public void SplitWorks()
        {
            Assert.AreDeepEqual(new[] { "abcabcabc" }, StringPrototype.Split("abcabcabc"));
        }

        [Test]
        public void SplitWithCharAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca" }, StringPrototype.Split("abcabcabc", 'b', 2));
        }

        // Not C# API #2392
        [Test]
        public void SplitWithStringWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca", "ca", "c" }, StringPrototype.Split("abcabcabc", "b"));
        }


        // Not C# API #2392
        [Test]
        public void JsSplitWithStringAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ax" }, StringPrototype.Split("abcaxbcabce", "bc", 2));
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

        //[Test]
        //public void SplitWithRegexWorks()
        //{
        //    Assert.AreEqual(new[] { "a", "ca", "ca", "c" }, "abcaxcaxc".Split(new Bridge.Text.RegularExpressions.Regex("b|x", "g")));
        //}

        // Not C# API
        //[Test]
        //public void JsSplitWithRegexAndLimitWorks()
        //{
        //    Assert.AreEqual("abcaxcaxc".JsSplit(new Regex("b|x", "g"), 2), new[] { "a", "ca" });
        //}

        // Not C# API
        //[Test]
        //public void StartsWithCharWorks()
        //{
        //    Assert.True("abc".StartsWith('a'));
        //    Assert.False("abc".StartsWith('b'));
        //}

        // Not C# API #2392
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

        // Not C# API #2392
        [Test]
        public void JavaScriptSubstringWorks()
        {
            var numbers = "0123456789";

            // Let's start by using both begin and end.
            Assert.AreEqual(StringPrototype.Substring(numbers, 3, 7), "3456");

            // What happens when we start with a negative number.
            Assert.AreEqual(StringPrototype.Substring(numbers, -7, 7), "0123456");

            // What happens when we use two negative numbers.
            Assert.AreEqual(StringPrototype.Substring(numbers, -7, -3), "");

            // What happens when we omit the last argument.
            Assert.AreEqual(StringPrototype.Substring(numbers, 3), "3456789");

            // And with the negative, end-relevant index.
            Assert.AreEqual(StringPrototype.Substring(numbers, -7), "0123456789");

            // If the index is out of range, it returns the empty string.
            Assert.AreEqual(StringPrototype.Substring(numbers, 100, 101), "");

            Assert.AreEqual(StringPrototype.Substring(numbers, 2, 4), "23");
        }

        [Test]
        public static void Strings()
        {
            var s = "HELLO".ToLowerCase();
            Assert.AreEqual("hello", s, "'HELLO'.ToLowerCase()");

            s = "HELLO".ToLocaleLowerCase();
            Assert.AreEqual("hello", s, "'HELLO'.ToLocaleLowerCase()");

            s = "hello".ToUpperCase();
            Assert.AreEqual("HELLO", s, "'hello'.ToUpperCase()");

            s = "HELLO".ToLocaleUpperCase();
            Assert.AreEqual("HELLO", s, "'hello'.ToLocaleUpperCase()");
        }

        // Not C# API #2392
        //[Test]
        //public void JavaScriptSubstringWithEndIndexWorks()
        //{
        //    Assert.AreEqual("cd", StringPrototype.Substring("abcde", 2, 4));
        //}

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
    }
}