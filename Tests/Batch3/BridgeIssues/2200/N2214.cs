using System;
using System.Reflection;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2214 - {0}")]
    public class Bridge2214
    {
        [Test]
        public static void TestCheckedULong()
        {
            var a = 0;
            var b = checked((ulong)a);

            Assert.True(b == 0);
            Assert.Throws<OverflowException>(() =>
            {
                var i = -1;
                var ul = checked((ulong)i);
            });

            Assert.True(ULongChecked(0) == 0);
            Assert.Throws<OverflowException>(() => { ULongChecked(-1); });
        }

        private static ulong ULongChecked(int n)
        {
            return checked((ulong)n);
        }
    }
}