using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2352 - {0}")]
    public class Bridge2352
    {
        [Test]
        public static void TestOperatorOnAnonymousType()
        {
            var anonymous = new { IsTrue = false };

            Assert.True(!anonymous.IsTrue);
            Assert.True(anonymous.IsTrue == false);

            bool b = anonymous.IsTrue == false; // Works
            Assert.True(b);
        }
    }
}