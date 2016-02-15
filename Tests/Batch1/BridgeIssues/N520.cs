using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#520]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#520 - {0}")]
    public class Bridge520
    {
        public class Source
        {
            public event EventHandler<EventArgs> Fired;

            public int Counter { get; set; }

            public void Fire()
            {
                var getEvt = new Func<Source, EventHandler<EventArgs>>(s => s.Fired);
                var evt = getEvt(this);

                evt += (sender, args) => { Counter++; };

                evt(this, new EventArgs());
            }
        }

        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var s = new Source();
            s.Fire();

            Assert.AreEqual(1, s.Counter, "Bridge520 Counter");
        }
    }
}