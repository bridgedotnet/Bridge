using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1120 - {0}")]
    public class Bridge1120
    {
        private enum Test
        {
            M1 = -10,
            M2,
            M3,
            M4 = 1,
            M5 = -9,
            M6 = 0,
            M7
        }

        [Test]
        public static void TestEnumDoesNotGenerateValuesAsPowerOfTwo()
        {
            Assert.AreEqual(-10, (int)Test.M1, "-10");
            Assert.AreEqual(-9, (int)Test.M2, "-9");
            Assert.AreEqual(-8, (int)Test.M3, "-8");
            Assert.AreEqual(1, (int)Test.M4, "1");
            Assert.AreEqual(-9, (int)Test.M5, "-9");
            Assert.AreEqual(0, (int)Test.M6, "0");
            Assert.AreEqual(1, (int)Test.M7, "1");
        }

        [Flags]
        public enum Baz
        {
            a,
            b = 7,
            c, // hmm = 14
            d
        }

        [Test]
        public static void TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo()
        {
            Assert.AreEqual(0, (int)Baz.a, "0");
            Assert.AreEqual(7, (int)Baz.b, "7");
            Assert.AreEqual(8, (int)Baz.c, "8");
            Assert.AreEqual(9, (int)Baz.d, "9");
        }
    }
}