using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_STRING)]
    [TestFixture(TestNameFormat = "JsString - {0}")]
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
            Assert.AreDeepEqual(new[] { "a", "ca", "ca", "c" }, "abcabcabc".JsSplit('b'));
        }

        [Test]
        public void SplitWithLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "abcabcabc" }, "abcabcabc".JsSplit(2));
        }

        [Test]
        public void SplitWorks()
        {
            Assert.AreDeepEqual(new[] { "abcabcabc" }, "abcabcabc".JsSplit());
        }

        [Test]
        public void SplitWithCharAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca" }, "abcabcabc".JsSplit('b', 2));
        }

        // Not C# API #2392
        [Test]
        public void SplitWithStringWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ca", "ca", "c" }, "abcabcabc".JsSplit("b"));
        }


        // Not C# API #2392
        [Test]
        public void JsSplitWithStringAndLimitWorks()
        {
            Assert.AreDeepEqual(new[] { "a", "ax" }, "abcaxbcabce".JsSplit("bc", 2));
        }

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
    }
}