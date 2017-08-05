using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2923 - {0}")]
    public class Bridge2923
    {
        public static event EventHandler Test = new EventHandler((sender, e) => { });

        public static void InvokeEvent()
        {
            Test(null, EventArgs.Empty);
        }

        [Test]
        public static void TestEventInitializer()
        {
            var i = 0;
            Test += (sender, ev) =>
            {
                i = 5;
            };

            InvokeEvent();

            Assert.AreEqual(5, i);
        }
    }
}