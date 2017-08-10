using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2935 - {0}")]
    public class Bridge2935
    {
        [Test]
        public static void TestEnumBaseType()
        {
            var numerable = "Hello" as IEnumerable<char>;
            Assert.NotNull(numerable);
        }
    }
}