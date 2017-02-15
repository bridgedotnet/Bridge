using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2349 - {0}")]
    public class Bridge2349
    {
        [External]
        [IgnoreGeneric]
        public class Logger<T>
        {
            public int field;
        }

        [Test]
        public static void TestExternalIgnoreGenericClass()
        {
            //@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349.Logger = function () { this.field = 10; };
            Logger<string> logger = new Logger<string>();

            Assert.AreEqual(10, logger.field);
        }
    }
}