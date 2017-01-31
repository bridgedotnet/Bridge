using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1076 - {0}")]
    public class Bridge1076
    {
        [InlineConst]
        private const string SomeValue = "SomeV";

        [Test]
        public static void TestInlineConstantAsMemberReference()
        {
            Assert.AreEqual("SomeV", Bridge1076.SomeValue);
        }

        [Test]
        public static void TestInlineBridgeNumericConstantsAsMemberReference()
        {
            string s;

            s = decimal.MaxValue.ToString();
            s = float.MaxValue.ToString();
            s = double.MaxValue.ToString();
            s = char.MaxValue.ToString();

            s = decimal.MinValue.ToString();
            s = Single.MinValue.ToString();
            s = Single.Epsilon.ToString();
            s = double.MinValue.ToString();
            s = double.Epsilon.ToString();
            s = char.MinValue.ToString();

            s = byte.MaxValue.ToString();
            s = UInt16.MaxValue.ToString();
            s = UInt32.MaxValue.ToString();
            s = UInt64.MaxValue.ToString();
            s = sbyte.MaxValue.ToString();
            s = Int16.MaxValue.ToString();
            s = Int32.MaxValue.ToString();
            s = Int64.MaxValue.ToString();

            s = byte.MinValue.ToString();
            s = UInt16.MinValue.ToString();
            s = UInt32.MinValue.ToString();
            s = UInt64.MinValue.ToString();
            s = sbyte.MinValue.ToString();
            s = Int16.MinValue.ToString();
            s = Int32.MinValue.ToString();
            s = Int64.MinValue.ToString();

            Assert.AreEqual("-9223372036854775808", s);
        }
    }
}