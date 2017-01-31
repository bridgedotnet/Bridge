using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

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

        public class DecimalBugTest<TX>
        {
            public IThing<V2<TX, decimal>, V2<decimal, long>> _MyThing;

            public string DoStuff()
            {
                return _MyThing.MyMethod();
            }
        }

        public class DecimalThing<TX> : IThing<V2<TX, decimal>, V2<decimal, long>>
        {
            public V2<TX, decimal> A
            {
                get; set;
            }

            public V2<decimal, long> B
            {
                get; set;
            }

            public string MyMethod()
            {
                return string.Join("|", new [] { A.a.ToString(), A.b.ToString(), B.a.ToString(), B.b.ToString()});
            }
        }

        [Test]
        public static void TestGenericInterfaceWithNestedTypeParameters()
        {
            var b = new BugTest<string>();
            b._MyThing = new MyThing<string>();

            Assert.AreEqual("MyThing", b.DoStuff());


            var m = new DecimalBugTest<decimal>();
            m._MyThing = new DecimalThing<decimal>()
            {
                A = new V2<decimal, decimal>() { a = 1.1m, b = 2.2m },
                B = new V2<decimal, long>() { a = 3.3m, b = 4L }
            };

            Assert.AreEqual("1.1|2.2|3.3|4", m.DoStuff());
        }
    }
}