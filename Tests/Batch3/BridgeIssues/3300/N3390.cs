using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3390 - {0}")]
    public class Bridge3390
    {
        [Test]
        public static void TestTernaryAssigmnment()
        {
            string msg = (true) ? msg = "left" : msg = "right";
            Assert.AreEqual("left", msg);
        }
    }
}