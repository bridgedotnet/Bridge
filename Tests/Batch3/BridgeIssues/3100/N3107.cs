using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3107 - {0}")]
    public class Bridge3107
    {
        private static string buffer;

        private static event EventHandler<EventArgs> OnSomething;

        private static void DoSomething1(object sender, EventArgs args)
        {
            OnSomething -= DoSomething1;
            buffer += "1";
        }

        private static void DoSomething2(object sender, EventArgs args)
        {
            OnSomething -= DoSomething2;
            OnSomething -= DoSomething3;
            buffer += "2";
        }

        private static void DoSomething3(object sender, EventArgs args)
        {
            buffer += "3";
        }

        [Test]
        public static void TestEventHandlersInvocation()
        {
            buffer = "";
            OnSomething = null;
            OnSomething += DoSomething1;
            OnSomething += (a, b) =>
            {
                buffer += "2";
            };

            OnSomething(null, null);
            Assert.AreEqual("12", buffer);
        }

        [Test]
        public static void TestEventHandlersInvocation2()
        {
            buffer = "";
            OnSomething = null;
            OnSomething += DoSomething2;
            OnSomething += DoSomething3;

            OnSomething(null, null);
            Assert.AreEqual("23", buffer);
        }

        [Test]
        public static void TestEventHandlersInvocation3()
        {
            buffer = "";
            OnSomething = null;
            OnSomething += DoSomething2;
            OnSomething += DoSomething3;

            Assert.Throws<NullReferenceException>(() =>
            {
                OnSomething(null, null);
                OnSomething(null, null);
            });
        }
    }
}