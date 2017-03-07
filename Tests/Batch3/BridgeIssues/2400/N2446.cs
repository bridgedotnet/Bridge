using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2446 - {0}")]
    public class Bridge2446
    {
        [Test]
        public static void TestDoubleMinValue()
        {
            Assert.AreEqual(double.MinValue, Bridge2446.ReturnDouble1());
            Assert.AreEqual(double.MaxValue, Bridge2446.ReturnDouble2());

            Assert.True(decimal.MinValue == Bridge2446.ReturnDecimal1());
            Assert.True(decimal.MaxValue == Bridge2446.ReturnDecimal2());
            Assert.True(decimal.Zero == Bridge2446.ReturnDecimal3());
            Assert.True(decimal.One == Bridge2446.ReturnDecimal4());
            Assert.True(decimal.MinusOne == Bridge2446.ReturnDecimal5());
        }

        private static double ReturnDouble1(double x = double.MinValue)
        {
            return x;
        }

        private static double ReturnDouble2(double x = double.MaxValue)
        {
            return x;
        }

        private static decimal ReturnDecimal1(decimal x = decimal.MinValue)
        {
            return x;
        }

        private static decimal ReturnDecimal2(decimal x = decimal.MaxValue)
        {
            return x;
        }

        private static decimal ReturnDecimal3(decimal x = decimal.Zero)
        {
            return x;
        }

        private static decimal ReturnDecimal4(decimal x = decimal.One)
        {
            return x;
        }

        private static decimal ReturnDecimal5(decimal x = decimal.MinusOne)
        {
            return x;
        }
    }
}