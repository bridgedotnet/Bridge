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

        [External]
        [Name("Bridge2874Base")]
        public abstract class Bridge2874Base
        {
            public abstract int Foo();

            public abstract int Foo(string msg);
        }

        public class Derived1 : Bridge2874Base
        {
            public override extern int Foo();

            public override int Foo(string msg)
            {
                return 2;
            }
        }

        public class Derived11 : Bridge2874Base
        {
            public override int Foo()
            {
                return 11;
            }

            public override extern int Foo(string msg);
        }

        public class Derived12 : Bridge2874Base
        {
            public override extern int Foo();

            public override extern int Foo(string msg);
        }

        public class Derived21 : Derived1
        {
            public override int Foo()
            {
                return 21;
            }
        }

        public class Derived22 : Derived1
        {
            public new int Foo()
            {
                return 22;
            }
        }

        public class Derived23 : Derived1
        {
            public override int Foo(string s)
            {
                return 23;
            }
        }

        public class Derived24 : Derived1
        {
            public new int Foo(string s)
            {
                return 24;
            }
        }

        public class Derived25 : Derived1
        {
            public override extern int Foo();

            public override extern int Foo(string msg);
        }

        [Test]
        public static void TestExternalOverriding()
        {
            var d1 = new Derived1();
            Assert.Null(d1["Foo$1"], "Derived1 in group 1 should not have Foo$1");
            Assert.Null(d1["Foo$2"], "Derived1 in group 1 should not have Foo$2");
            Assert.AreEqual(2, d1["Foo"].As<Func<int>>()(), "Derived1 in group 1 [Foo] should return 2");
            Assert.AreEqual(2, d1.Foo(), "Derived1 in group 1 Foo should return 2");
            Assert.AreEqual(2, d1.Foo(""), "Derived1 in group 1 Foo() should return 2");
            CheckBridge2874Base(d1, "2", 2);

            var d11 = new Derived11();
            Assert.Null(d11["Foo$1"], "Derived11 in group 3 should not have Foo$1");
            Assert.Null(d11["Foo$2"], "Derived11 in group 3 should not have Foo$2");
            Assert.AreEqual(11, d11["Foo"].As<Func<int>>()(), "Derived11 in group 3 [Foo] should return 11");
            Assert.AreEqual(11, d11.Foo(), "Derived11 in group 3 Foo should return 11");
            Assert.AreEqual(11, d11.Foo(""), "Derived11 in group 3 Foo() should return 11");
            CheckBridge2874Base(d11, "4", 11);

            var d12 = new Derived12();
            Assert.Null(d12["Foo$1"], "Derived12 in group 5 should not have Foo$1");
            Assert.Null(d12["Foo$2"], "Derived12 in group 5 should not have Foo$2");
            Assert.AreEqual(1, d12["Foo"].As<Func<int>>()(), "Derived12 in group 5 [Foo] should return 1");
            Assert.AreEqual(1, d12.Foo(), "Derived12 in group 5 Foo should return 1");
            Assert.AreEqual(1, d12.Foo(""), "Derived12 in group 5 Foo() should return 1");
            CheckBridge2874Base(d12, "6", 1);

            var d21 = new Derived21();
            Assert.Null(d21["Foo$1"], "Derived21 in group 7 should not have Foo$1");
            Assert.Null(d21["Foo$2"], "Derived21 in group 7 should not have Foo$2");
            Assert.AreEqual(21, d21["Foo"].As<Func<int>>()(), "Derived21 in group 7 [Foo] should return 21");
            Assert.AreEqual(21, d21.Foo(), "Derived21 in group 7 Foo should return 21");
            Assert.AreEqual(21, d21.Foo(""), "Derived21 in group 7 Foo() should return 21");
            CheckBridge2874Base(d21, "8", 21);

            var d22 = new Derived22();
            Assert.NotNull(d22["Foo$1"], "Derived22 in group 9 should have Foo$1");
            Assert.Null(d22["Foo$2"], "Derived22 in group 9 should not have Foo$2");
            Assert.AreEqual(22, d22["Foo$1"].As<Func<int>>()(), "Derived22 in group 9 [Foo$1] should return 22");
            Assert.AreEqual(22, d22.Foo(), "Derived22 in group 9 Foo should return 22");
            Assert.AreEqual(2, d22.Foo(""), "Derived22 in group 9 Foo() should return 2");
            CheckBridge2874Base(d22, "10", 2, false);

            var d23 = new Derived23();
            Assert.Null(d23["Foo$1"], "Derived23 in group 11 should not have Foo$1");
            Assert.Null(d23["Foo$2"], "Derived23 in group 11 should not have Foo$2");
            Assert.AreEqual(23, d23["Foo"].As<Func<int>>()(), "Derived23 in group 11 [Foo] should return 23");
            Assert.AreEqual(23, d23.Foo(), "Derived23 in group 11 Foo should return 23");
            Assert.AreEqual(23, d23.Foo(""), "Derived23 in group 11 Foo() should return 23");
            CheckBridge2874Base(d23, "12", 23);

            var d24 = new Derived24();
            Assert.NotNull(d24["Foo$1"], "Derived24 in group 13 should not have Foo$1");
            Assert.Null(d24["Foo$2"], "Derived24 in group 13 should not have Foo$2");
            Assert.AreEqual(24, d24["Foo$1"].As<Func<int>>()(), "Derived24 in group 13 [Foo] should return 24");
            Assert.AreEqual(2, d24.Foo(), "Derived24 in group 13 Foo should return 2");
            Assert.AreEqual(24, d24.Foo(""), "Derived24 in group 13 Foo() should return 24");
            CheckBridge2874Base(d24, "14", 2, false);

            var d25 = new Derived25();
            Assert.Null(d25["Foo$1"], "Derived25 in group 15 should not have Foo$1");
            Assert.Null(d25["Foo$2"], "Derived25 in group 15 should not have Foo$2");
            Assert.AreEqual(2, d25["Foo"].As<Func<int>>()(), "Derived25 in group 15 [Foo] should return 2");
            Assert.AreEqual(2, d25.Foo(), "Derived25 in group 15 Foo should return 2");
            Assert.AreEqual(2, d25.Foo(""), "Derived25 in group 15 Foo() should return 2");
            CheckBridge2874Base(d25, "16", 2);
        }

        private static void CheckBridge2874Base(Bridge2874Base d, string n, int expected, bool checkIndex = true)
        {
            if (checkIndex)
            {
                Assert.Null(d["Foo$1"], "Bridge2874Base in group " + n + " should not have Foo$1");
            }
            else
            {
                Assert.NotNull(d["Foo$1"], "Bridge2874Base in group " + n + " should have Foo$1");
            }

            Assert.Null(d["Foo$2"], "Bridge2874Base in group " + n + " should not have Foo$2");

            Assert.AreEqual(expected, d["Foo"].As<Func<int>>()(), "Bridge2874Base in group " + n + " [Foo] should return " + expected);
            Assert.AreEqual(expected, d.Foo(), "Bridge2874Base in group " + n + " Foo should return " + expected);
            Assert.AreEqual(expected, d.Foo(""), "Bridge2874Base in group " + n + " Foo() should return " + expected);
        }
    }
}