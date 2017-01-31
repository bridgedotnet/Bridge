using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1020]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1020 - {0}")]
    public class Bridge1020
    {
        [Flags]
        public enum TestEnum : uint
        {
            None = 0,
            Flag = 1,
            FlagAlias = Flag
        }

        public enum CommonEnum : uint
        {
            None = 0,
            Flag = 2,
            FlagAlias = Flag
        }

        [Test(ExpectedCount = 1)]
        public static void TestFlagEnumWithReference()
        {
            Assert.AreEqual(TestEnum.FlagAlias, 1);
        }

        [Test(ExpectedCount = 1)]
        public static void TestEnumWithReference()
        {
            Assert.AreEqual(CommonEnum.FlagAlias, 2);
        }
    }
}