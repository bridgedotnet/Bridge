using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1519 - {0}")]
    public class Bridge1519
    {
        [Test]
        public void TestRefOutLocalVars()
        {
            bool boolean = true;
            Dictionary<int, int> dic = new Dictionary<int, int>();
            dic.Add(1, 1);
            dic.Add(2, 2);

            if (boolean)
            {
                int sameVal;
                if (dic.TryGetValue(1, out sameVal))
                {
                    Assert.AreEqual(1, sameVal, "Inside if scope");
                }
            }

            int i = 0;
            foreach (int sameVal in dic.Values)
            {
                Assert.AreEqual(++i, sameVal, "Inside foreach scope");
            }
        }
    }
}