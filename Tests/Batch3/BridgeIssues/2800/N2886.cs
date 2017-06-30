using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2886 - {0}")]
    public class Bridge2886
    {
        [Test]
        public static void Test2DArrayDefValue()
        {
            foreach (var value in new int[1, 1])
            {
                Assert.AreEqual(0, value);
            }

            foreach (var value in new bool[1, 1])
            {
                Assert.AreEqual(false, value);
            }

            foreach (var value in new long[1, 1])
            {
                object o = value;
                Assert.True(o is long);
            }
        }
    }
}