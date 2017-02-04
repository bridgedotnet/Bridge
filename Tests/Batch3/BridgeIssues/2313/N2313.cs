using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2313 - {0}")]
    public class Bridge2313
    {
        [External]
        public interface I1
        {
            string Log();
            string Log(string msg);
        }

        [External]
        [IgnoreGeneric]
        public class Logger<T>
        {
            public int field;
        }

        [Test]
        public static void TestExternalInterfaceMembers()
        {
            I1 log = null;
            //@ log = {log: function (msg) {return msg || "[Empty]";}};

            Assert.AreEqual("[Empty]", log.Log());
            Assert.AreEqual("[Msg]", log.Log("[Msg]"));
        }

        [Test]
        public static void TestExternalGnericClass()
        {
            //@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.Logger = function () {this.field = 10;};
            Logger<string> logger = new Logger<string>();

            Assert.AreEqual(10, logger.field);
        }
    }
}