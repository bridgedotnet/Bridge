using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2705 - {0}")]
    public class Bridge2705
    {
        [Test(ExpectedCount = 3)]
        public static void TestCatchWithoutVariable()
        {
            Action a = null;
            for (int i = 0; i < 1; i++)
            {
                try
                {
                    throw new Exception();
                }
                catch (Exception)
                {
                    int i1 = 2;

                    a = () =>
                    {
                        Assert.AreEqual(2, i1);
                        Assert.AreEqual(1, i);
                    };
                }
            }

            Assert.NotNull(a);
            a();
        }
    }
}