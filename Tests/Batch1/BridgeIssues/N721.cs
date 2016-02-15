using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#721]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#721 - {0}")]
    public class Bridge721
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            List<int> testList = new List<int> { 3 };
            Assert.AreEqual("ThirdLoop", Check(testList), "Bridge721 ThirdLoop");

            testList = new List<int> { 5 };
            Assert.AreEqual("SecondLoop", Check(testList), "Bridge721 SecondLoop");

            testList = new List<int> { 15 };
            Assert.AreEqual("FirstLoop", Check(testList), "Bridge721 FirstLoop");

            testList = new List<int> { 25 };
            Assert.AreEqual("NoLoops", Check(testList), "Bridge721 NoLoops");
        }

        public static string Check(List<int> testList)
        {
            int i = 0;
            while (i < 20)
            {
                while (i < 10)
                {
                    while (i < 5)
                    {
                        if (testList.Any(x => x == i)) { return "ThirdLoop"; }
                        i++;
                    }

                    if (testList.Any(x => x == i)) { return "SecondLoop"; }
                    i++;
                }

                if (testList.Any(x => x == i)) { return "FirstLoop"; }
                i++;
            }

            return "NoLoops";
        }
    }
}