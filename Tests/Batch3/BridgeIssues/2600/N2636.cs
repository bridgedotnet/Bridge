using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    using static Other.Util;
    using static Util;

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2636 - {0}")]
    public class Bridge2636
    {
        [Test]
        public static void TestUsingStatic()
        {
            var b = fun(() => "hello");
            Assert.True((object)b is Func<string>);
            Assert.AreEqual("hello", b());

            var b2 = fun2(() => "hello");
            Assert.True((object)b2 is Func<string>);
            Assert.AreEqual("hello", b2());
        }
    }

    public static class Util
    {
        public static Func<T> fun2<T>(Func<T> a)
        {
            return a;
        }
    }
}

namespace Other
{
    public static class Util
    {
        public static Func<T> fun<T>(Func<T> a)
        {
            return a;
        }
    }
}