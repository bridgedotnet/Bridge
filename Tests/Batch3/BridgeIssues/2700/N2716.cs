using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2716 - {0}")]
    public class Bridge2716
    {
        public delegate int Callback(int context = 123);

        public static int Test(int value)
        {
            return value;
        }

        [Test]
        public static void TestDelegateWithOptionalParameter()
        {
            Callback callback = context =>
            {
                int test = context;
                return test;
            };
            Assert.AreEqual(123, callback());
            Assert.AreEqual(7, callback(7));

            callback = Test;
            Assert.AreEqual(123, callback());
            Assert.AreEqual(8, callback(8));
        }
    }
}