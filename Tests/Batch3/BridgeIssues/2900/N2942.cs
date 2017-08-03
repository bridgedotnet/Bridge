using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2942 - {0}")]
    public class Bridge2942
    {
        [Flags]
        public enum SimpleEnum
        {
            A = 0,
            B = 3,
            C,
            D = 10,
            E = 0
        }

        [Test]
        public static void TestEnumFlagsToStr()
        {
            Assert.AreEqual("E, B A", string.Format("{0} {1}", SimpleEnum.B, SimpleEnum.E));
        }
    }
}