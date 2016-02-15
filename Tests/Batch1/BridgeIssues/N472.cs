using Bridge;
using Bridge.Test;

using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#472]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#472 - {0}")]
    public class Bridge472
    {
        [Test(ExpectedCount = 10)]
        public static void Test()
        {
            List<string> magic1 = new List<string>();
            magic1.Insert(magic1.Count, "first");
            magic1.Insert(magic1.Count, "second");

            Assert.AreEqual("first", magic1[0], "magic1[0]");
            Assert.AreEqual("second", magic1[1], "magic1[1]");

            List<string> magic2 = new List<string>();
            magic2.InsertRange(magic2.Count, new[] { "first", "second" });
            magic2.InsertRange(magic2.Count, new[] { "third", "fourth" });

            Assert.AreEqual("first", magic2[0], "magic1[0]");
            Assert.AreEqual("second", magic2[1], "magic1[1]");
            Assert.AreEqual("third", magic2[2], "magic1[2]");
            Assert.AreEqual("fourth", magic2[3], "magic1[3]");

            Assert.Throws(() =>
            {
                List<string> magic = new List<string>();
                magic.Insert(1, "first");
            }, "Insert at length + 1");

            Assert.Throws(() =>
            {
                List<string> magic = new List<string>();
                magic.Insert(-1, "first");
            }, "Insert at -1");

            Assert.Throws(() =>
            {
                List<string> magic = new List<string>();
                magic.InsertRange(1, new[] { "first", "second" });
            }, "InsertRange at length + 1");

            Assert.Throws(() =>
            {
                List<string> magic = new List<string>();
                magic.InsertRange(-1, new[] { "first", "second" });
            }, "InsertRange at -1");
        }
    }
}
