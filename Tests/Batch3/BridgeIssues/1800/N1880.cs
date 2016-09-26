using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1880 - {0}")]
    public class Bridge1880
    {
        public struct BigInteger
        {
            [Template("parseInt({value}, {radix})")]
            public static extern BigInteger Parse(string value, int radix = 10);
        }

        [Test]
        public void TestDefaultValuesWithTemplates()
        {
            Assert.AreEqual(10, BigInteger.Parse("10"));
            Assert.AreEqual(8, BigInteger.Parse("10", 8));
        }
    }
}