using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3308 - {0}")]
    public class Bridge3308
    {
        public class A
        {
            private int val;

            public int Val
            {
                get { return val; }
            }

            public A(int v)
            {
                val = v;
            }

            public override bool Equals(object o)
            {
                A a = (A)o;
                if (a.Val < 0)
                    return base.Equals(o);
                else
                    return this.Val == a.Val;
            }

            public override int GetHashCode()
            {
                return base.GetHashCode();
            }
        }

        [Test]
        public static void TestArrayUnbox()
        {
            A a1 = new A(10);
            A a2 = new A(10);
            A a3 = new A(-10);

            Assert.False(a1 == a2);
            Assert.True(a1.Equals(a2));
            Assert.False(a1.Equals(a3));
        }
    }
}