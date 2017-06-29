using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2874 - {0}")]
    public class Bridge2874
    {
        public class Derived : Bridge2874Base
        {
            public override extern int Foo();

            public override int Foo(string msg)
            {
                return 2;
            }
        }

        [Init(InitPosition.Top)]
        public static void Init()
        {
            /*@
            var Bridge2874Base = (function () {
                function Bridge2874Base() {
                }
                Bridge2874Base.prototype.Foo = function (msg) {
                    return 1;
                };
                return Bridge2874Base;
            }());
            */
        }

        [Test]
        public static void TestExternalOverriding()
        {
            var d = new Derived();
            Assert.Null(d["Foo$1"]);
            Assert.AreEqual(2, d["Foo"].As<Func<int>>()());
            Assert.AreEqual(2, d.Foo());
            Assert.AreEqual(2, d.Foo(""));
        }
    }

    [External]
    [Namespace(false)]
    public abstract class Bridge2874Base
    {
        public abstract int Foo();

        public abstract int Foo(string msg);
    }
}