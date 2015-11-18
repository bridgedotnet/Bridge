using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System;
using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#520]
    [FileName("testBridgeIssues.js")]
    internal class Bridge520
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

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var s = new Source();
            s.Fire();

            assert.Equal(s.Counter, 1, "Bridge520 Counter");
        }
    }
}