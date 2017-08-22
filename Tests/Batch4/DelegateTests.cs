using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Text;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "DelegateTests - {0}")]
    [Reflectable]
    public class DelegateTests
    {
        public delegate void D1();

        public delegate void D2();

        // #1631
        //[BindThisToFirstParameter]
        //public delegate int D3(int a, int b);

        private class C
        {
            public void F1()
            {
            }

            public void F2()
            {
            }
        }

        private int testField = 12;

        private int AddForCreateWorks(int x)
        {
            return x + this.testField;
        }

        [Test]
        public void CreateWorks()
        {
            // Not C# API
            //var d = (Func<int, int>)Delegate.CreateDelegate(this, new Function("x", "{ return x + this.testField; }"));
            // The call above replace with the call below
            var d = (Func<int, int>)Delegate.CreateDelegate(this.GetType(), this, this.GetType().GetMethod("AddForCreateWorks"));
            Assert.AreEqual(25, d(13));
        }

        [Test]
        public void RemoveDoesNotAffectOriginal_SPI_1563()
        {
            // #1563
            C c = new C();
            Action a = c.F1;
            Action a2 = a + c.F2;
            Action a3 = a2 - a;
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            int l = 0;
            TestHelper.Safe(() => l = a.GetInvocationList().Length);
            Assert.AreEqual(1, l);

            int l2 = 0;
            TestHelper.Safe(() => l2 = a2.GetInvocationList().Length);
            Assert.AreEqual(2, l2);

            int l3 = 0;
            TestHelper.Safe(() => l3 = a3.GetInvocationList().Length);
            Assert.AreEqual(1, l3);
        }

        private void A()
        {
        }

        [Test]
        public void RemoveWorksWithMethodGroupConversion_SPI_1563()
        {
            // #1563

            Action a = () =>
            {
            };

            Action a2 = a + A;
            Action a3 = a2 - A;

            Assert.False(a.Equals(a2));
            Assert.True(a.Equals(a3));
        }

        [Test]
        public void CloneWorks_SPI_1563()
        {
            var sb = new StringBuilder();
            Action d1 = () =>
            {
                sb.Append("1");
            };
            // #1563 Clone not implemented
            // The original call
            // Action d2 = (Action)d1.Clone();
            // The temp call
            Action d2 = (Action)d1;
            Assert.False(ReferenceEquals(d1, d2), "Should not be same");
            d2();
            Assert.AreEqual("1", sb.ToString());
        }

        [Template("{d}.apply({t}, {args})")]
        public object Call(object t, Delegate d, params object[] args)
        {
            return null;
        }

        // Not C# API
        //[Test]
        //public void ThisFixWorks()
        //{
        //    var target = new
        //    {
        //        someField = 13
        //    };
        //    var d = Delegate.ThisFix((Func<dynamic, int, int, int>)((t, a, b) => t.someField + this.testField + a + b));
        //    Assert.AreEqual(Call(target, d, 3, 5), 33);
        //}

        [Test]
        public void CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563()
        {
            // #1563
            int x = 0;
            D1 d1 = () => x++;
            D1 d2 = new D1(d1);
            d1();
            d2();

            Assert.False(d1 == d2);
            Assert.AreEqual(2, x);
        }

        // #SPI
        //[Test]
        //public void DelegateWithBindThisToFirstParameterWorksWhenInvokedFromScript_SPI_1620_1631()
        //{
        //    D3 d = (a, b) => a + b;
        //    // #1620
        //    Function f = (Function)d;
        //    Assert.AreEqual(f.Call(10, 20), 30);
        //}

        // #SPI
        //[Test]
        //public void DelegateWithBindThisToFirstParameterWorksWhenInvokedFromCode_SPI_1631()
        //{
        //    D3 d = (a, b) => a + b;
        //    Assert.AreEqual(d(10, 20), 30);
        //}

        [Test]
        public void EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563()
        {
#pragma warning disable 1718
            C c1 = new C(), c2 = new C();
            Action n = null;
            Action f11 = c1.F1, f11_2 = c1.F1, f12 = c1.F2, f21 = c2.F1;

            Assert.False(n == f11, "n == f11");
            Assert.True(n != f11, "n != f11");
            Assert.False(f11 == n, "f11 == n");
            Assert.False(f11.Equals(n), "f11.Equals(n)");
            Assert.True(f11 != n, "f11 != n");
            Assert.True(n == n, "n == n");
            Assert.False(n != n, "n != n");

            Assert.True(f11 == f11, "f11 == f11");
            Assert.True(f11.Equals(f11), "f11.Equals(f11)");
            Assert.False(f11 != f11, "f11 != f11");

            Assert.True(f11 == f11_2, "f11 == f11_2");
            Assert.True(f11.Equals(f11_2), "f11.Equals(f11_2)");
            Assert.False(f11 != f11_2, "f11 != f11_2");

            Assert.False(f11 == f12, "f11 == f12");
            Assert.False(f11.Equals(f12), "f11.Equals(f12)");
            Assert.True(f11 != f12, "f11 != f12");

            Assert.False(f11 == f21, "f11 == f21");
            Assert.False(f11.Equals(f21), "f11.Equals(f21)");
            Assert.True(f11 != f21, "f11 != f21");

            Action m1 = f11 + f21, m2 = f11 + f21, m3 = f21 + f11;

            // #1563
            Assert.True(m1 == m2, "m1 == m2");
            Assert.True(m1.Equals(m2), "m1.Equals(m2)");
            Assert.False(m1 != m2, "m1 != m2");

            Assert.False(m1 == m3, "m1 == m3");
            Assert.False(m1.Equals(m3), "m1.Equals(m3)");
            Assert.True(m1 != m3, "m1 != m3");

            Assert.False(m1 == f11, "m1 == f11");
            Assert.False(m1.Equals(f11), "m1.Equals(f11)");
            Assert.True(m1 != f11, "m1 != f11");
#pragma warning restore 1718
        }
    }
}