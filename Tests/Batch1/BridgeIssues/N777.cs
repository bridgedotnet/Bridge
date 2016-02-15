using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#777]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#777 - {0}")]
    public class Bridge777
    {
        private static object SomeProperty
        {
            get; 
            set;
        }

        private static object P1
        {
            get;
            set;
        }

        private static object P2
        {
            get;
            set;
        }

        private static object Method(object o)
        {
            return null;
        }


        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            object o = new { };
            lock (o)
            {
                int i = 555;
                Assert.AreEqual(555, i, "Bridge777 i");
            }

            lock (Method(SomeProperty = o))
            {
                Assert.NotNull(SomeProperty, "Bridge777 SomeProperty");
            }

            lock (P1 = P2 = o)
            {
                Assert.NotNull(P1, "Bridge777 P1");
                Assert.NotNull(P2, "Bridge777 P2");
            }
        }
    }
}