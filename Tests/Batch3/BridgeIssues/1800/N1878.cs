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
            x.Add(new classA() { DecimalNumber = 1, LongNumber = 2 });
            x.Add(new classA() { DecimalNumber = 5, LongNumber = 6 });

            long c = x.Sum(i => i.LongNumber);
            Assert.AreEqual(8L, c);

            decimal b = x.Sum(i => i.DecimalNumber);
            Assert.AreEqual(6m, b);

            var e1 = x as IEnumerable<classA>;

            long c1 = e1.Sum(i => i.LongNumber);
            Assert.AreEqual(8L, c1);

            decimal b1 = e1.Sum(i => i.DecimalNumber);
            Assert.AreEqual(6m, b1);

            List<decimal> y = new List<decimal>();
            y.Add(7);
            y.Add(8);

            decimal a = y.Sum();
            Assert.AreEqual(15m, a);

            var y1 = y as IEnumerable<decimal>;
            decimal a1 = y1.Sum();
            Assert.AreEqual(15m, a1);
        }
    }
}