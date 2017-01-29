using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1098 - {0}")]
    public class Bridge1098
    {
        [Test]
        public static void TestInlineConstantAsMemberReference()
        {
            unchecked
            {
                int max = Int32.MaxValue;
                Assert.AreEqual(int.MaxValue, max);
                var r = max + 1;
                Assert.AreEqual(int.MinValue, r);
            }

            unchecked
            {
                int max = Int32.MinValue;
                Assert.AreEqual(int.MinValue, max);
                var r = max - 1;
                Assert.AreEqual(int.MaxValue, r);
            }

            checked
            {
                int max = Int32.MaxValue;
                Assert.AreEqual(int.MaxValue, max);
                var r = max - 1;
                Assert.AreEqual(int.MaxValue - 1, r);
            }

            checked
            {
                int max = Int32.MinValue;
                Assert.AreEqual(int.MinValue, max);
                var r = max + 1;
                Assert.AreEqual(int.MinValue + 1, r);
            }
        }
    }
}