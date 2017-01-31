using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2280 - {0}")]
    public class Bridge2280
    {
        [IgnoreGeneric]
        public static string Test<T>(T source)
        {
            return source.GetType().FullName;
        }

        public static string Test1<T>(T source)
        {
            return source.GetType().FullName;
        }

        [Test]
        public static void TestGetTypeInIgnoreGenericMethod()
        {
            Assert.AreEqual("String", Test("abc"));
            Assert.AreEqual("String", Test<string>("xyz"));

            Assert.AreEqual("String", Test1("abc"));
            Assert.AreEqual("String", Test1<string>("xyz"));
        }
    }
}