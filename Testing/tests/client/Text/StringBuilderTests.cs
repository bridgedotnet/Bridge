using Bridge.Test;
using Bridge.ClientTest;
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
            Assert.AreEqual(typeof(StringBuilder).GetClassName(), "Bridge.Text.StringBuilder");
            Assert.True(sb is StringBuilder);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var sb = new StringBuilder();
            Assert.AreEqual(sb.ToString(), "", "Text");
            Assert.AreEqual(sb.Length, 0, "Length");
        }

        [Test]
        public void ConstructorWithCapacityWorks()
        {
            var sb = new StringBuilder(55);
            Assert.AreEqual(sb.ToString(), "", "Text");
            Assert.AreEqual(sb.Length, 0, "Length");
        }

        [Test]
        public void InitialTextConstructorWorks()
        {
            var sb = new StringBuilder("some text");
            Assert.AreEqual(sb.ToString(), "some text", "Text");
            Assert.AreEqual(sb.Length, 9, "Length");
        }

        [Test]
        public void InitialTextConstructorWithCapacityWorks()
        {
            var sb = new StringBuilder("some text", 55);
            Assert.AreEqual(sb.ToString(), "some text", "Text");
            Assert.AreEqual(sb.Length, 9, "Length");
        }

        [Test]
        public void SubstringConstructorWorks()
        {
            var sb = new StringBuilder("some text", 5, 3);
            Assert.AreEqual(sb.ToString(), "tex", "Text");
            Assert.AreEqual(sb.Length, 3, "Length");
        }

        [Test]
        public void AppendBoolWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append(true) == sb);
            Assert.AreEqual(sb.ToString(), "|true", "Text");
            Assert.AreEqual(sb.Length, 5, "Length");
        }

        [Test]
        public void AppendCharWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append('c') == sb);
            Assert.AreEqual(sb.ToString(), "|c", "Text");
            Assert.AreEqual(sb.Length, 2, "Length");
        }

        [Test]
        public void AppendIntWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append(123) == sb);
            Assert.AreEqual(sb.ToString(), "|123", "Text");
            Assert.AreEqual(sb.Length, 4, "Length");
        }

        [Test]
        public void AppendDoubleWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append(123.0) == sb);
            Assert.AreEqual(sb.ToString(), "|123", "Text");
            Assert.AreEqual(sb.Length, 4, "Length");
        }

        [Test]
        public void AppendObjectWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append(new SomeClass()) == sb);
            Assert.AreEqual(sb.ToString(), "|some text", "Text");
            Assert.AreEqual(sb.Length, 10, "Length");
        }

        [Test]
        public void AppendStringWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.Append("some text") == sb);
            Assert.AreEqual(sb.ToString(), "|some text", "Text");
            Assert.AreEqual(sb.Length, 10, "Length");
        }

        [Test]
        public void AppendLineWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine() == sb);
            Assert.AreEqual(sb.ToString(), "|\r\n", "Text");
            Assert.AreEqual(sb.Length, 3, "Length");
        }

        [Test]
        public void AppendLineStringWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine("some text") == sb);
            Assert.AreEqual(sb.ToString(), "|some text\r\n", "Text");
            Assert.AreEqual(sb.Length, 12, "Length");
        }

        [Test]
        public void ClearWorks()
        {
            var sb = new StringBuilder("some text");
            sb.Clear();
            Assert.AreEqual(sb.ToString(), "", "Text");
            Assert.AreEqual(sb.Length, 0, "Length");
        }

        [Test]
        public void ToStringWorks()
        {
            // Yes, this is tested by every other test as well. Included for completeness only
            var sb = new StringBuilder("some text");
            Assert.AreEqual(sb.ToString(), "some text");
        }

        [Test]
        public void LengthPropertyWorks()
        {
            // Yes, this is tested by every other test as well. Included for completeness only
            var sb = new StringBuilder("some text");
            Assert.AreEqual(sb.Length, 9);
        }

        [Test(ExpectedCount = 21)]
        public static void StringBuilders()
        {
            // TEST constructors
            StringBuilder sb = new StringBuilder();
            var sb1 = new StringBuilder(128);
            Assert.AreEqual(sb.ToString(), string.Empty, "StringBuilder() .ctor");
            Assert.AreEqual(sb.ToString(), sb1.ToString(), "StringBuilder(capacity) .ctor");

            sb = new StringBuilder("foo");
            sb1 = new StringBuilder("foo", 2);
            Assert.AreEqual(sb.ToString(), "foo", "StringBuilder(string) .ctor");
            Assert.AreEqual(sb.ToString(), sb1.ToString(), "StringBuilder(string, capacity) .ctor");

            sb = new StringBuilder("foo bar", 4, 3);
            Assert.AreEqual(sb.ToString(), "bar", "StringBuilder(string) .ctor");

            // TEST properties

            // Capacity
            sb = new StringBuilder(128);
            Assert.AreEqual(sb.Capacity, 128, ".Capacity");
            sb = new StringBuilder("foo", 2);
            Assert.AreEqual(sb.Capacity, 16, ".Capacity");
            sb.Capacity = 10;
            Assert.AreEqual(sb.Capacity, 10, ".Capacity");

            // Length
            Assert.AreEqual(sb.Length, "foo".Length, ".Length");

            // TEST methods

            // Clear
            sb.Clear();
            Assert.AreEqual(sb.Length, 0, ".Clear()");
            Assert.AreEqual(sb.ToString(), string.Empty, ".Clear()");

            // Append
            sb.Append("foo");
            sb.Append("foo bar", 3, 4);
            sb.Append(true);
            sb.Append('=');
            sb.Append(123);
            Assert.AreEqual(sb.ToString(), "foo bartrue=123", ".Append()");

            // AppendLine
            sb.AppendLine();
            Assert.AreEqual(sb.ToString(), "foo bartrue=123\r\n", ".AppendLine()");
            sb.AppendLine("foo bar");
            Assert.AreEqual(sb.ToString(), "foo bartrue=123\r\nfoo bar\r\n", ".AppendLine(string)");

            // AppendFormat
            sb.AppendFormat("({0}, {1})", "foo", false);
            Assert.AreEqual(sb.ToString(), "foo bartrue=123\r\nfoo bar\r\n(foo, false)", ".AppendFormat(format, args)");

            // Insert
            sb.Insert(0, 56.7);
            Assert.AreEqual(sb.ToString(), "56.7foo bartrue=123\r\nfoo bar\r\n(foo, false)", ".Insert()");

            // Remove
            sb.Remove(4, 7);
            Assert.AreEqual(sb.ToString(), "56.7true=123\r\nfoo bar\r\n(foo, false)", ".Remove(start, length)");

            // Replace
            sb.Replace("foo bar", "bar foo");
            Assert.AreEqual(sb.ToString(), "56.7true=123\r\nbar foo\r\n(foo, false)", ".Replace(string, string)");
            sb.Replace('\r', '\n');
            Assert.AreEqual(sb.ToString(), "56.7true=123\n\nbar foo\n\n(foo, false)", ".Replace(char, char)");
            sb.Replace('f', 'F', 23, 6);
            Assert.AreEqual(sb.ToString(), "56.7true=123\n\nbar foo\n\n(Foo, false)", ".Replace(char, char, start, length)");
            sb.Replace("Foo", "foo", 23, 6);
            Assert.AreEqual(sb.ToString(), "56.7true=123\n\nbar foo\n\n(foo, false)", ".Replace(string, string, start, length)");
        }
    }
}
