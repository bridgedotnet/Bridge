using System.Diagnostics.Contracts;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#953]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#953 - {0}")]
    public class Bridge953
    {
        private struct TestStruct
        {
            public int testField;
        }

        private static void TestMethod1(TestStruct s)
        {
            s.testField = 1;
        }

        [Pure]
        private static void TestMethod2(TestStruct s)
        {
            s.testField = 2;
        }

        private static void TestMethod3([Pure] TestStruct s)
        {
            s.testField = 3;
        }

        [Test(ExpectedCount = 1)]
        public static void TestNoPureAttribute()
        {
            var s = new TestStruct();
            TestMethod1(s);
            Assert.AreEqual(0, s.testField, "Compare fields");
        }

        [Test(ExpectedCount = 1)]
        public static void TestPureAttributeOnMethod()
        {
            var s = new TestStruct();
            TestMethod2(s);
            Assert.AreEqual(2, s.testField, "Compare fields");
        }

        [Test(ExpectedCount = 1)]
        public static void TestPureAttributeOnParameter()
        {
            var s = new TestStruct();
            TestMethod3(s);
            Assert.AreEqual(3, s.testField, "Compare fields");
        }
    }
}
