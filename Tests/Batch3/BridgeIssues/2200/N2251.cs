using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2251 - {0}")]
    public class Bridge2251
    {
        [Test]
        public static void TestListGetRange()
        {
            var l = new List<int>() { 1, 2 };

            Assert.AreEqual(0, l.GetRange(0, 0).Count);
            Assert.AreEqual(0, l.GetRange(1, 0).Count);
            Assert.AreEqual(0, l.GetRange(2, 0).Count);

            Assert.Throws<ArgumentOutOfRangeException>(() =>
            {
                l.GetRange(0, -1);
            });

            Assert.Throws<ArgumentOutOfRangeException>(() =>
            {
                l.GetRange(-1, 2);
            });

            Assert.Throws<ArgumentOutOfRangeException>(() =>
            {
                l.GetRange(-1, 0);
            });

            Assert.Throws<ArgumentException>(() =>
            {
                l.GetRange(0, 3);
            });

            Assert.Throws<ArgumentException>(() =>
            {
                l.GetRange(1, 2);
            });

            Assert.Throws<ArgumentOutOfRangeException>(() =>
            {
                var i = l[l.Count];
            });
        }
    }
}