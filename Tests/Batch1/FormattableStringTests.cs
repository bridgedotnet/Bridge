// #1622
using Bridge.Test;
using System;
using System.Globalization;
using System.Runtime.CompilerServices;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_STRING)]
    [TestFixture(TestNameFormat = "FormattableString - {0}")]
    public class FormattableStringTests
    {
        private class MyFormattable : IFormattable
        {
            public string ToString(string format, IFormatProvider formatProvider)
            {
                return "Formatted: " + (!string.IsNullOrEmpty(format) ? format + ", " : "") + formatProvider.GetType().Name;
            }
        }

        private class MyFormatProvider : IFormatProvider
        {
            public object GetFormat(Type type)
            {
                return CultureInfo.InvariantCulture.GetFormat(type);
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            var s = (object)FormattableStringFactory.Create("s");
            Assert.True(s is FormattableString, "is FormattableString");
            Assert.True(s is IFormattable, "is IFormattable");

            Assert.True(typeof(FormattableString).IsClass, "IsClass");
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(FormattableString)), "IFormattable.IsAssignableFrom");
            var interfaces = typeof(FormattableString).GetInterfaces();
            Assert.AreEqual(1, interfaces.Length, "interfaces length");
            Assert.True(interfaces.Contains(typeof(IFormattable)), "interfaces contains IFormattable");
        }

        [Test]
        public void ArgumentCountWorks()
        {
            var s1 = FormattableStringFactory.Create("{0}", "x");
            Assert.AreEqual(1, s1.ArgumentCount, "#1");
            var s2 = FormattableStringFactory.Create("{0}, {1}", "x", "y");
            Assert.AreEqual(2, s2.ArgumentCount, "#2");
        }

        [Test]
        public void FormatWorks()
        {
            var s = FormattableStringFactory.Create("x = {0}, y = {1}", "x", "y");
            Assert.AreEqual("x = {0}, y = {1}", s.Format);
        }

        [Test]
        public void GetArgumentWorks()
        {
            var s = FormattableStringFactory.Create("x = {0}, y = {1}", "x", "y");
            Assert.AreEqual("x", s.GetArgument(0), "0");
            Assert.AreEqual("y", s.GetArgument(1), "1");
        }

        [Test]
        public void GetArgumentsWorks()
        {
            var s = FormattableStringFactory.Create("x = {0}, y = {1}", "x", "y");
            var args = s.GetArguments();
            Assert.AreEqual("x", args[0], "0");
            Assert.AreEqual("y", args[1], "1");
        }

        [Test]
        public void ArrayReturnedByGetArgumentsCanBeModified()
        {
            var s = FormattableStringFactory.Create("x = {0}, y = {1}", "x", "y");
            var args = s.GetArguments();
            Assert.AreEqual("x", args[0], "#1");
            args[0] = "z";
            var args2 = s.GetArguments();
            Assert.AreEqual("z", args2[0], "#2");
            Assert.AreEqual("x = z, y = y", s.ToString(), "#3");
        }

        [Test]
        public void ToStringWorks()
        {
            var s = FormattableStringFactory.Create("x = {0}, y = {1:x}", "x", 291);
            Assert.AreEqual("x = x, y = 123", s.ToString());
        }

        //[Test]
        //public void ToStringWithFormatProviderWorks_SPI_1651()
        //{
        //    var s = FormattableStringFactory.Create("x = {0}, y = {0:FMT}", new MyFormattable());
        //    // #1651
        //    Assert.AreEqual("x = Formatted: MyFormatProvider, y = Formatted: FMT, MyFormatProvider", s.ToString(new MyFormatProvider()));
        //}

        //[Test]
        //public void IFormattableToStringWorks_SPI_1633_1651()
        //{
        //    IFormattable s = FormattableStringFactory.Create("x = {0}, y = {0:FMT}", new MyFormattable());
        //    // #1633
        //    // #1651
        //    Assert.AreEqual("x = Formatted: MyFormatProvider, y = Formatted: FMT, MyFormatProvider", s.ToString(null, new MyFormatProvider()));
        //}

        [Test]
        public void InvariantWorks()
        {
            var s = FormattableStringFactory.Create("x = {0}, y = {1:x}", "x", 291);
            Assert.AreEqual("x = x, y = 123", FormattableString.Invariant(s));
        }
    }
}
