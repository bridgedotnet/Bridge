using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1186 - {0}")]
    public class Bridge1186
    {
        private List<Func<int, int>> list = new List<Func<int, int>>
        {
            value => value,
            value => value + 1
        };

        [Test]
        public static void TestLambdasInField()
        {
            Bridge1186 c = new Bridge1186();
            Assert.AreEqual(1, c.list[0](1));
            Assert.AreEqual(3, c.list[1](2));
        }
    }
}