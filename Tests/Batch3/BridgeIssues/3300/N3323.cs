using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3323 - {0}")]
    public class Bridge3323
    {
        [Test]
        public static void TestIsForNullable()
        {
            int? val = null;
            Assert.False(val is int);
            Assert.False(val is int?);

            val = 1;
            Assert.True(val is int);
            Assert.True(val is int?);
        }
    }
}