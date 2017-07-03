using Bridge.Test.NUnit;
using System;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_STRING)]
    [TestFixture(TestNameFormat = "StringBuilder - {0}")]
    public class StringBuilderTests
    {
        private class SomeClass
        {
            public override string ToString()
            {
                return "some text";
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            var sb = new StringBuilder();
            Assert.AreEqual("System.Text.StringBuilder", typeof(StringBuilder).FullName);
            Assert.True(typeof(StringBuilder).IsClass);
            Assert.True(sb is StringBuilder);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var sb = new StringBuilder();
            Assert.AreEqual("", sb.ToString(), "Text");
            Assert.AreEqual(0, sb.Length, "Length");
        }

        [Test]
        public void ConstructorWithCapacityWorks()
        {
            var sb = new StringBuilder(55);
            Assert.AreEqual("", sb.ToString(), "Text");
            Assert.AreEqual(0, sb.Length, "Length");
        }

        [Test]
        public void InitialTextConstructorWorks()
        {
            var sb = new StringBuilder("some text");
            Assert.AreEqual("some text", sb.ToString(), "Text");
            Assert.AreEqual(9, sb.Length, "Length");
        }

        [Test]
        public void InitialTextConstructorWithCapacityWorks()
        {
            var sb = new StringBuilder("some text", 55);
            Assert.AreEqual("some text", sb.ToString(), "Text");
            Assert.AreEqual(9, sb.Length, "Length");
        }

        [Test]
        public void SubstringConstructorWorks()
        {
            var sb = new StringBuilder("some text", 5, 3);
            Assert.AreEqual("tex", sb.ToString(), "Text");
            Assert.AreEqual(3, sb.Length, "Length");
        }

        [Test(Name = "#1615 - {0}")]
        public void SubstringConstructorWorks_SPI_1615()
        {
            // #1615
            var sb = new StringBuilder("some text", 5, 3, 55);
            Assert.AreEqual("tex", sb.ToString(), "Text");
            Assert.AreEqual(3, sb.Length, "Length");
            Assert.AreEqual(55, sb.Capacity, "Capacity");
        }

        [Test]
        public void AppendBoolWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append(true) == sb);
            Assert.AreEqual("|true", sb.ToString(), "Text");
            Assert.AreEqual(5, sb.Length, "Length");
        }

        [Test]
        public void AppendCharWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append('c') == sb);
            Assert.AreEqual("|c", sb.ToString(), "Text");
            Assert.AreEqual(2, sb.Length, "Length");
        }

        [Test]
        public void AppendIntWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append(123) == sb);
            Assert.AreEqual("|123", sb.ToString(), "Text");
            Assert.AreEqual(4, sb.Length, "Length");
        }

        [Test]
        public void AppendDoubleWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append(123.0) == sb);
            Assert.AreEqual("|123", sb.ToString(), "Text");
            Assert.AreEqual(4, sb.Length, "Length");
        }

        [Test]
        public void AppendObjectWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append(new SomeClass()) == sb);
            Assert.AreEqual("|some text", sb.ToString(), "Text");
            Assert.AreEqual(10, sb.Length, "Length");
        }

        [Test]
        public void AppendStringWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append("some text") == sb);
            Assert.AreEqual("|some text", sb.ToString(), "Text");
            Assert.AreEqual(10, sb.Length, "Length");
        }

        [Test]
        public void AppendLineWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine() == sb);
            Assert.AreEqual("|\r\n", sb.ToString(), "Text");
            Assert.AreEqual(3, sb.Length, "Length");
        }

        [Test]
        public void AppendLineStringWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine("some text") == sb);
            Assert.AreEqual("|some text\r\n", sb.ToString(), "Text");
            Assert.AreEqual(12, sb.Length, "Length");
        }

        [Test]
        public void AppendLineBoolWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine(true.ToString()) == sb);
            Assert.AreEqual("|True\r\n", sb.ToString(), "Text");
            Assert.AreEqual(7, sb.Length, "Length");
        }

        [Test]
        public void AppendLineCharWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine('c'.ToString()) == sb);
            Assert.AreEqual("|c\r\n", sb.ToString(), "Text");
            Assert.AreEqual(4, sb.Length, "Length");
        }

        [Test]
        public void AppendLineIntWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine(123.ToString()) == sb);
            Assert.AreEqual("|123\r\n", sb.ToString(), "Text");
            Assert.AreEqual(6, sb.Length, "Length");
        }

        [Test]
        public void AppendLineDoubleWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine((123.0).ToString()) == sb);
            Assert.AreEqual("|123\r\n", sb.ToString(), "Text");
            Assert.AreEqual(6, sb.Length, "Length");
        }

        [Test]
        public void AppendLineObjectWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine((new SomeClass()).ToString()) == sb);
            Assert.AreEqual("|some text\r\n", sb.ToString(), "Length");
            Assert.AreEqual(12, sb.Length, "Length");
        }

        [Test]
        public void ClearWorks()
        {
            var sb = new StringBuilder("some text");
            sb.Clear();
            Assert.AreEqual("", sb.ToString(), "Text");
            Assert.AreEqual(0, sb.Length, "Length");
        }

        [Test]
        public void SetLengthWorks()
        {
            var sb = new StringBuilder("ab");

            // Set some length
            sb.Length = 4;
            Assert.AreEqual(4, sb.Length);
            Assert.AreEqual("ab\0\0", sb.ToString());

            // Increase length
            sb.Length = 6;
            Assert.AreEqual(6, sb.Length);
            Assert.AreEqual("ab\0\0\0\0", sb.ToString());

            // Set the same
            sb.Length = 6;
            Assert.AreEqual(6, sb.Length);
            Assert.AreEqual("ab\0\0\0\0", sb.ToString());

            // Decrease length
            sb.Length = 4;
            Assert.AreEqual(4, sb.Length);
            Assert.AreEqual("ab\0\0", sb.ToString());

            // Decrease length
            sb.Length = 2;
            Assert.AreEqual(2, sb.Length);
            Assert.AreEqual("ab", sb.ToString());

            // Set zero length
            sb.Length = 0;
            Assert.AreEqual(0, sb.Length);
            Assert.AreEqual("", sb.ToString());

            // Try negative length
            Assert.Throws<System.ArgumentOutOfRangeException>(() => { sb.Length = -1; });
        }

        [Test]
        public void ToStringWorks()
        {
            // Yes, this is tested by every other test as well. Included for completeness only
            var sb = new StringBuilder("some text");
            Assert.AreEqual("some text", sb.ToString());
        }

        [Test]
        public void LengthPropertyWorks()
        {
            // Yes, this is tested by every other test as well. Included for completeness only
            var sb = new StringBuilder("some text");
            Assert.AreEqual(9, sb.Length);
        }

        // Not C# API
        //[Test]
        //public void IsEmptyPropertyWorks()
        //{
        //    var sb = new StringBuilder("some text");
        //    Assert.False(sb.IsEmpty, "#1");
        //    sb.Clear();
        //    Assert.True(sb.IsEmpty, "#2");

        //    sb = new StringBuilder("");
        //    Assert.True(sb.IsEmpty, "#3");

        //    sb = new StringBuilder();
        //    Assert.True(sb.IsEmpty, "#4");
        //    sb.Append("");
        //    Assert.True(sb.IsEmpty, "#5");
        //    sb.Append("x");
        //    Assert.False(sb.IsEmpty, "#6");
        //}

        [Test(ExpectedCount = 21)]
        public static void StringBuilders()
        {
            // TEST constructors
            StringBuilder sb = new StringBuilder();
            var sb1 = new StringBuilder(128);
            Assert.AreEqual(string.Empty, sb.ToString(), "StringBuilder() .ctor");
            Assert.AreEqual(sb1.ToString(), sb.ToString(), "StringBuilder(capacity) .ctor");

            sb = new StringBuilder("foo");
            sb1 = new StringBuilder("foo", 2);
            Assert.AreEqual("foo", sb.ToString(), "StringBuilder(string) .ctor");
            Assert.AreEqual(sb1.ToString(), sb.ToString(), "StringBuilder(string, capacity) .ctor");

            sb = new StringBuilder("foo bar", 4, 3);
            Assert.AreEqual("bar", sb.ToString(), "StringBuilder(string) .ctor");

            // TEST properties

            // Capacity
            sb = new StringBuilder(128);
            Assert.AreEqual(128, sb.Capacity, ".Capacity");
            sb = new StringBuilder("foo", 2);
            Assert.AreEqual(16, sb.Capacity, ".Capacity");
            sb.Capacity = 10;
            Assert.AreEqual(10, sb.Capacity, ".Capacity");

            // Length
            Assert.AreEqual("foo".Length, sb.Length, ".Length");

            // TEST methods

            // Clear
            sb.Clear();
            Assert.AreEqual(0, sb.Length, ".Clear()");
            Assert.AreEqual(string.Empty, sb.ToString(), ".Clear()");

            // Append
            sb.Append("foo");
            sb.Append("foo bar", 3, 4);
            sb.Append(true);
            sb.Append('=');
            sb.Append(123);
            Assert.AreEqual("foo bartrue=123", sb.ToString(), ".Append()");

            // AppendLine
            sb.AppendLine();
            Assert.AreEqual("foo bartrue=123\r\n", sb.ToString(), ".AppendLine()");
            sb.AppendLine("foo bar");
            Assert.AreEqual("foo bartrue=123\r\nfoo bar\r\n", sb.ToString(), ".AppendLine(string)");

            // AppendFormat
            sb.AppendFormat("({0}, {1})", "foo", false);
            Assert.AreEqual("foo bartrue=123\r\nfoo bar\r\n(foo, False)", sb.ToString(), ".AppendFormat(format, args)");

            // Insert
            sb.Insert(0, 56.7);
            Assert.AreEqual("56.7foo bartrue=123\r\nfoo bar\r\n(foo, False)", sb.ToString(), ".Insert()");

            // Remove
            sb.Remove(4, 7);
            Assert.AreEqual("56.7true=123\r\nfoo bar\r\n(foo, False)", sb.ToString(), ".Remove(start, length)");

            // Replace
            sb.Replace("foo bar", "bar foo");
            Assert.AreEqual("56.7true=123\r\nbar foo\r\n(foo, False)", sb.ToString(), ".Replace(string, string)");
            sb.Replace('\r', '\n');
            Assert.AreEqual("56.7true=123\n\nbar foo\n\n(foo, False)", sb.ToString(), ".Replace(char, char)");
            sb.Replace('f', 'F', 23, 6);
            Assert.AreEqual("56.7true=123\n\nbar foo\n\n(Foo, False)", sb.ToString(), ".Replace(char, char, start, length)");
            sb.Replace("Foo", "foo", 23, 6);
            Assert.AreEqual("56.7true=123\n\nbar foo\n\n(foo, False)", sb.ToString(), ".Replace(string, string, start, length)");
        }

        [Test(Name = "#2902 - {0}")]
        public static void StringBuilderIndexerGetWorks()
        {
            int nAlphabeticChars = 0;
            int nWhitespace = 0;
            int nPunctuation = 0;
            StringBuilder sb = new StringBuilder("This is a simple sentence.");

            for (int ctr = 0; ctr < sb.Length; ctr++)
            {
                char ch = sb[ctr];
                if (Char.IsLetter(ch)) { nAlphabeticChars++; continue; }
                if (Char.IsWhiteSpace(ch)) { nWhitespace++; continue; }
                if (Char.IsPunctuation(ch)) nPunctuation++;
            }

            Assert.AreEqual("This is a simple sentence.", sb.ToString());
            Assert.AreEqual(21, nAlphabeticChars);
            Assert.AreEqual(4, nWhitespace);
            Assert.AreEqual(1, nPunctuation);

            Assert.Throws<IndexOutOfRangeException>(() => { Console.WriteLine(sb[100]); });
        }

        [Test(Name = "#2902 - {0}")]
        public static void StringBuilderIndexerSetWorks()
        {
            StringBuilder sb = new StringBuilder("ABC");
            sb[0] = '1';
            sb[1] = '2';
            sb[2] = '3';

            Assert.AreEqual("123", sb.ToString());
            Assert.Throws<ArgumentOutOfRangeException>(() => { sb[3] = '4'; });
        }
    }
}