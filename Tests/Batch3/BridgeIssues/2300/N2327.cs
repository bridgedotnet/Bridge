using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2327 - {0}")]
    public class Bridge2327
    {
        enum Foo
        {
            Bar, Baz
        }

        [Test]
        public static void TestEnumInterfaces()
        {
            Enum e = Foo.Bar;
            IComparable comparable = e;
            IFormattable formattable = e;

            Assert.AreEqual(-1, comparable.CompareTo(Foo.Baz));
            Assert.AreEqual(0, comparable.CompareTo(Foo.Bar));
            Assert.AreEqual("Bar", formattable.ToString("G", null));
            Assert.True(e is IFormattable);
            Assert.True(e is IComparable);
        }
    }
}