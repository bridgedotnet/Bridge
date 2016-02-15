using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#793]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#793 - {0}")]
    public class Bridge793
    {
        [Test(ExpectedCount = 5)]
        public static void TestUseCase()
        {
            List<string> js = new List<string>();
            js.Add("1");
            ReadOnlyCollection<string> test = new ReadOnlyCollection<string>(js);

            Assert.AreEqual(1, test.Count, "Bridge793 Count");
            Assert.AreEqual("1", test[0], "Bridge793 [0]");

            var ilist = (IList<string>)test;

            Assert.Throws(() => { ilist[0] = "0"; }, "Bridge793 Setter should throw an exception");
            Assert.Throws(() => { ilist.Add("1"); }, "Bridge793 Add should throw an exception");
            Assert.Throws(() => { ilist.RemoveAt(0); }, "Bridge793 RemoveAt should throw an exception");
        }
    }
}