using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#796]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#692 - {0}")]
    public class Bridge692
    {
        public struct A
        {
        }

        public struct B1
        {
            public B1(int f)
            {
                field1 = f;
            }

            public readonly int field1;
        }

        public struct B2
        {
            public B2(int f)
            {
                field1 = f;
            }
            public readonly int field1;

            public int Prop1
            {
                get { return field1; }
            }
        }

        public struct B3
        {
            public int Prop1
            {
                get { return 0; }
            }
        }

        public struct C1
        {
            public C1(int i)
            {
                field1 = i;
            }
            public int field1;

            public int Prop1
            {
                get { return field1; }
            }
        }

        public struct C2
        {
            public C2(int i)
            {
                field1 = i;
            }

            public int field1;

            public int Prop1
            {
                get { return field1; }
                set
                {

                }
            }
        }

        public struct C3
        {
            public int Prop1
            {
                get;
                set;
            }
        }

        [Test(ExpectedCount = 8)]
        public static void TestUseCase()
        {
            var a = new A();
            Assert.AreEqual(a, a, "Bridge692 A");

            var b1 = new B1();
            Assert.AreEqual(b1, b1, "Bridge692 B1");

            var b2 = new B1();
            Assert.AreEqual(b2, b2, "Bridge692 B2");

            var b3 = new B3();
            Assert.AreEqual(b3, b3, "Bridge692 B3");

            var c1 = new C1();
            Assert.AreNotStrictEqual(c1, c1, "Bridge692 C1");

            var c2 = new C2();
            Assert.AreNotStrictEqual(c2, c2, "Bridge692 C2");

            var c3 = new C3();
            Assert.AreNotStrictEqual(c3, c3, "Bridge692 C3");

            C3? c3_1 = new C3();
            Assert.AreNotStrictEqual(c3_1, c3_1, "Bridge692 C3_1");
        }
    }
}