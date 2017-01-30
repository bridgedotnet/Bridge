using Bridge.Test.NUnit;
using System.Text;

namespace Bridge.ClientTest.Batch4.Text
{
    [TestFixture(TestNameFormat = "StringBuilderTests - {0}")]
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

        // #SPI
        //[Test]
        //public void SubstringConstructorWorks_SPI_1615()
        //{
        //    // #1615
        //    var sb = new StringBuilder("some text", 5, 3, 55);
        //    Assert.AreEqual(sb.ToString(), "tex", "Text");
        //    Assert.AreEqual(sb.Length, 3, "Length");
        //}

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
        public void AppendLineStringWorks()
        {
            var sb = new StringBuilder("|");
            Assert.True(sb.AppendLine("some text") == sb);
            Assert.AreEqual("|some text\r\n", sb.ToString(), "Text");
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
    }
}