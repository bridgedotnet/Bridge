using System;
using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Text;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1390 - {0}")]
    public class Bridge1390
    {
        private static int b = a;
        private static int a = 5;

        private static DateTime time = MinDate;
        public static readonly DateTime MinDate = new DateTime(1800, 1, 1);

        private static dynamic d1 = d2;
        private static dynamic d2 = 6;

        private static int[] ar1 = ar2;
        private static int[] ar2 = new int[] { 1 };

        private static int order1 = 8;
        private static int order2 = order1;

        [Test]
        public static void TestFieldInitializer()
        {
            Assert.AreEqual(0, b);
            Assert.AreEqual(DateTime.MinValue, time);
            Assert.AreEqual(null, d1);
            Assert.AreEqual(null, ar1);
            Assert.AreEqual(8, order2);
        }
    }
}