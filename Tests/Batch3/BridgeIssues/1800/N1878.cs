using System.Collections.Generic;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1878 - {0}")]
    public class Bridge1878
    {
        public class classA
        {
            public decimal DecimalNumber { get; set; }
            public long LongNumber { get; set; }
        }

        [Test]
        public void TestSumDefaultValue()
        {
            List<classA> x = new List<classA>();
            x.Add(new classA() { DecimalNumber = 1, LongNumber = 1 });
            x.Add(new classA() { DecimalNumber = 1, LongNumber = 1 });

            long c = x.Sum(x1 => x1.LongNumber);
            Assert.True(2 == c);

            decimal b = x.Sum(x1 => x1.DecimalNumber);
            Assert.True(2 == b);

            List<decimal> y = new List<decimal>();
            y.Add(1);
            y.Add(1);

            decimal a = y.Sum();
            Assert.True(2 == a);
        }
    }
}