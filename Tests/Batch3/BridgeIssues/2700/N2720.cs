using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2720 - {0}")]
    public class Bridge2720
    {
        public static async Task<long> TestLong()
        {
            await Task.Delay(1);
            return 1;
        }

        public static async Task<decimal> TestDecimal()
        {
            await Task.Delay(1);
            return 5.1m;
        }

        [Test]
        public static async void TestAsyncAssignmentForLong()
        {
            var done = Assert.Async();

            long longResult = 0;
            longResult = await TestLong();

            Assert.True(longResult == 1L);
            Assert.AreEqual("1", longResult.ToString());
            Assert.AreEqual("System.Int64", longResult.GetType().FullName);

            done();
        }

        [Test]
        public static async void TestAsyncAssignmentForDecimal()
        {
            var done = Assert.Async();

            decimal decimalResult = 0;
            decimalResult = await TestDecimal();

            Assert.True(decimalResult == 5.1m);
            Assert.AreEqual("5.1", decimalResult.ToString());
            Assert.AreEqual("System.Decimal", decimalResult.GetType().FullName);

            done();
        }
    }
}