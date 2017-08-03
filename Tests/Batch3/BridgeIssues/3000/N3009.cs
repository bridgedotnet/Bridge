using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3009 - {0}")]
    public class Bridge3009
    {
        [Test]
        public static void TestMultiplicationInOverflowContext()
        {
            unchecked
            {
                int x = (int.MaxValue / 3);
                x = x * x;
                Assert.AreEqual(-477218588, x);

                x = (int.MaxValue / 3);
                x *= x;
                Assert.AreEqual(-477218588, x);
            }

            Assert.Throws<OverflowException>(() =>
            {
                checked
                {
                    int x = (int.MaxValue / 3);
                    x = x * x;
                }
            });

            Assert.Throws<OverflowException>(() =>
            {
                checked
                {
                    int x = (int.MaxValue / 3);
                    x *= x;
                }
            });
        }
    }
}