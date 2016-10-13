using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1951 - {0}")]
    public class Bridge1951
    {
        private static int Counter;

        public class LeakedObject
        {
            public LeakedObject()
            {
                // This is to generate Bridge.fn.bind(this, this.method);
                Action a = method;

                var m = this.ToDynamic();
                int count = m["$$bind"].length;
                //Bridge.fn.bind save "this" to the $$bind property of the function.
                Bridge1951.Counter = count;
            }

            public void method()
            {
            }
        }

        [Test]
        public void TestBindFunctionNoMemoryLeaks()
        {
            new LeakedObject();
            Assert.AreEqual(1, Bridge1951.Counter, "1");

            new LeakedObject();
            Assert.AreEqual(1, Bridge1951.Counter, "2");
        }
    }
}