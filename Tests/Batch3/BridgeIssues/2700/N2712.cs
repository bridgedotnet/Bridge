using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2712 - {0}")]
    public class Bridge2712
    {
        private string GetStr()
        {
            return "2712";
        }

        private void Test()
        {
            for (int i = 0; i < 1; i++)
            {
                var idx = i;
                string str = null;
                Action a = () =>
                {
                    var idx2 = idx;
                    str = this.GetStr();
                    idx = 5;
                };
                a();
                Assert.AreEqual(5, idx);
                Assert.AreEqual("2712", str);

                Action a1 = () =>
                {
                    var idx2 = idx;
                    idx = 6;
                };
                a1();
                Assert.AreEqual(6, idx);

                Func<string> f1 = () =>
                {
                    return this.GetStr();
                };
                Assert.AreEqual("2712", f1());
            }
        }

        [Test(ExpectedCount = 4)]
        public static void TestLambda()
        {
            var c = new Bridge2712();
            c.Test();
        }
    }
}