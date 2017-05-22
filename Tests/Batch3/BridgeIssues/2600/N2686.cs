using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2686 - {0}")]
    public class Bridge2686
    {
        [Test]
        public static void TestCapturedReferenceVariable()
        {
            for (var i = 0; i < 1; i++)
            {
                Dictionary<long, List<object>> accounts = new Dictionary<long, List<object>>();
                long accountId = 1;
                List<object> args;
                int api = 1;
                M1(out api);
                accounts.Add(accountId, args = new List<object> { api, 0 });

                Assert.AreEqual(2, (int)args[0]);
            }
        }

        [Test]
        public static void TestChangeableCapturedReferenceVariable()
        {
            for (var i = 0; i < 1; i++)
            {
                int k = 1;
                Action a = () => k++;
                a();
                Assert.AreEqual(2, k);
            }
        }

        private static void M1(out int api)
        {
            api = 2;
        }
    }
}