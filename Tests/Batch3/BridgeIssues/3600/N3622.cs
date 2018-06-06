using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3622 - {0}")]
    public class Bridge3622
    {
        [Init(InitPosition.Top)]
        public static void Init()
        {
            /*@
    var Bridge3622_A = (function () {
        function Bridge3622_A() {
            this.A_initialized = true;
        }
        return Bridge3622_A;
    }());
            */
        }

        [Virtual]
        [Name("Bridge3622_A")]
        public class A
        {
        }

        public class B : A
        {
            public B()
            {
            }
        }

        [Test]
        public static void TestExternalBaseDefaultCtor()
        {
            var b = new B();
            Assert.AreEqual(true, b["A_initialized"]);
        }
    }
}