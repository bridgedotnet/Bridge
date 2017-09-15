using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3131 - {0}")]
    public class Bridge3131
    {
        private static int[] data = new int[] { 1, 2, 3 };
        private static List<Action> actions = new List<Action>();

        [Test]
        public static void TestCloseCaptureFoldedCycle()
        {
            string s = "";
            foreach (var i2 in data)
                foreach (var i in data)
                    actions.Add(() => s = s + i2 + i);

            foreach (var action in actions)
                action();

            Assert.AreEqual("111213212223313233", s);
        }

        [Test]
        public static void TestCloseCaptureFoldedCycle2()
        {
            string s = "";
            for (var idx = 0; idx < 2; idx++)
                foreach (var i2 in data)
                    foreach (var i in data)
                        actions.Add(() => s = s + idx + i2 + i);

            foreach (var action in actions)
                action();

            Assert.AreEqual("211212213221222223231232233211212213221222223231232233", s);
        }
    }
}