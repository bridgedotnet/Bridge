using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2298 - {0}")]
    public class Bridge2298
    {
        public struct V2<TA, TB>
        {
            public TA a;
            public TB b;
        }

        public interface IThing<TC, TD>
        {
            string MyMethod();
        }

        public class BugTest<TX>
        {
            public IThing<V2<TX, double>, V2<double, double>> _MyThing;

            public string DoStuff()
            {
                return _MyThing.MyMethod();
            }
        }

        public class MyThing<TX> : IThing<V2<TX, double>, V2<double, double>>
        {
            public string MyMethod()
            {
                return "MyThing";
            }
        }

        [Test]
        public static void TestGenericInetrfaceWithNestedTypeParameters()
        {
            var b = new BugTest<string>();
            b._MyThing = new MyThing<string>();

            Assert.AreEqual("MyThing", b.DoStuff());
        }
    }
}