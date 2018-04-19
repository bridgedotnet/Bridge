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
            [Convention(Notation.CamelCase)]
            string Log();
            [Convention(Notation.CamelCase)]
            string Log(string msg);
        }

        [Test]
        public static void TestExternalInterfaceOverloadedMembers()
        {
            I1 log1 = null;
            //@ log1 = {log: function (msg) {return msg || "[Empty1]";}};

            Assert.AreEqual("[Empty1]", log1.Log());
            Assert.AreEqual("[Msg1]", log1.Log("[Msg1]"));
        }

        [External]
        public class Consoler
        {
            //[Field]
            public static IConsole console1
            {
                get;
            }

            public static IConsole Console2
            {
                get;
            }

        }

        [External]
        public interface IConsole
        {
            [Convention(Notation.CamelCase)]
            string Log();
            [Convention(Notation.CamelCase)]
            string Log(string message);
        }

        [Test]
        public static void TestExternalClassInheritingInterface()
        {
            //@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.Consoler = { };
            //@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.Consoler.console1 = {log: function (msg) {return msg || "[Empty]";}};
            //@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.Consoler.Console2 = {log: function (msg) {return msg || "[Empty]";}};

            Assert.AreEqual("[Empty]", Consoler.console1.Log());
            Assert.AreEqual("[Msg]", Consoler.console1.Log("[Msg]"));

            Assert.AreEqual("[Empty]", Consoler.Console2.Log());
            Assert.AreEqual("[Msg]", Consoler.Console2.Log("[Msg]"));
        }

        [External]
        public interface IContainer : IBaseContainer
        {
            //[Field]
            new int Value
            {
                get; set;
            }
        }

        [External]
        public interface IBaseContainer
        {
            //[Field]
            int Value
            {
                get; set;
            }
        }

        [External]
        private class Container : IContainer
        {
            //[Field]
            public int Value
            {
                get; set;
            }
        }

        [Test]
        public static void TestExternalInheritingInterfaces()
        {
            //@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.IBaseContainer = function() { };
            //@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.IContainer = Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.IBaseContainer;
            //@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.Container = Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.IBaseContainer;

            IBaseContainer baseCnt = (IBaseContainer)new Container();
            baseCnt.Value = 1;
            int r1 = 0;
            //@ r1 = baseCnt.Value;
            Assert.AreEqual(1, r1);

            IContainer cnt = (IContainer)new Container();
            cnt.Value = 2;
            int r2 = 0;
            //@ r2 = cnt.Value;
            Assert.AreEqual(2, r2);
        }
    }
}