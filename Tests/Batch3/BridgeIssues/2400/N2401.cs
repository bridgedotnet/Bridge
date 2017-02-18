using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2401 - {0}")]
    public class Bridge2401
    {
        [Test]
        public static void TestArrayInitializer()
        {
            double[,] vals1 = { { 1, 2 }, { 3, 4 } };
            double[,] vals2 = new double[,] { { 1, 2 }, { 3, 4 } };

            double[] vals3 = { 1, 2 };
            double[] vals4 = new double[] { 1, 2 };

            Assert.AreDeepEqual(vals1, vals2);
            Assert.AreDeepEqual(vals3, vals4);
            Assert.True((object)vals1 is double[,]);
            Assert.AreEqual(2, vals1.Rank);
            Assert.AreEqual(1, vals1[0, 0]);
            Assert.AreEqual(2, vals1[0, 1]);
            Assert.AreEqual(3, vals1[1, 0]);
            Assert.AreEqual(4, vals1[1, 1]);
        }
    }
}