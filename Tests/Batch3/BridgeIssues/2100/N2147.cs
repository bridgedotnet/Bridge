using System;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2147 - {0}")]
    public class Bridge2147
    {
        [Test]
        public static void TestLinqExcept()
        {
            double[] numbers1 = { 2.0, 2.0, 2.1, 2.2, 2.3, 2.3, 2.4, 2.5 };
            double[] numbers2 = { 2.2, 2.2 };
            var numbers = numbers1.Except(numbers2).ToArray();

            Assert.AreEqual(5, numbers.Length);
            Assert.False(numbers.Contains(2.2));
            Assert.AreEqual(2.0, numbers[0]);
            Assert.AreEqual(2.5, numbers[4]);
        }
    }
}
