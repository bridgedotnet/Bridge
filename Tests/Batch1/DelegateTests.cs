using Bridge.ClientTestHelper;
using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Text;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_DELEGATE)]
    [TestFixture(TestNameFormat = "DelegateTests - {0}")]
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

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("Function", typeof(Delegate).FullName);
            Assert.True(typeof(Delegate).IsClass);
            Assert.AreEqual("Function", typeof(Func<int, string>).FullName);
            Assert.AreEqual("Function", typeof(Func<,>).FullName);
            Assert.True((object)(Action)(() =>
            {
            }) is Delegate);

            var interfaces = typeof(Delegate).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length);
        }

        private int testField = 12;

        [Test]
        public void CreatingAndInvokingADelegateWorks()
        {
            Func<int, int> d = x => testField + x;
            Assert.AreEqual(25, d(13));
        }

        private int AddForCreateWorks(int x)
        {
            return x + this.testField;
        }

        //[Test]
        //public void CreateWorks()
        //{
        //    // Not C# API
        //    //var d = (Func<int, int>)Delegate.CreateDelegate(this, new Function("x", "{ return x + this.testField; }"));
        //    // The call above replace with the call below
        //    var d = (Func<int, int>)Delegate.CreateDelegate(this.GetType(), this, this.GetType().GetMethod("AddForCreateWorks"));
        //    Assert.AreEqual(25, d(13));
        //}

        [Test]
        public void CombineWorks()
        {
            var sb = new StringBuilder();
            Action d = (Action)Delegate.Combine((Action)(() => sb.Append("1")), (Action)(() => sb.Append("2")));
            d();
            Assert.AreEqual("12", sb.ToString());
        }

        [Test]
        public void CombineDoesAddsDuplicateDelegates()
        {
            C c1 = new C(), c2 = new C();
            Action a = c1.F1;
            a += c1.F2;
            Assert.AreEqual(2, a.GetInvocationList().Length);
            a += c2.F1;
            Assert.AreEqual(3, a.GetInvocationList().Length);
            a += c1.F1;
            Assert.AreEqual(4, a.GetInvocationList().Length);
        }

        [Test]
        public void CombineDoesNotAffectOriginal_SPI_1563()
        {
            // #1563
            C c = new C();
            Action a = c.F1;
            Action a2 = a + c.F2;
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            int l = a.GetInvocationList().Length;
            Assert.AreEqual(1, l);

            int l2 = a2.GetInvocationList().Length;
            Assert.AreEqual(2, l2);
        }

        [Test]
        public void AddWorks()
        {
            var sb = new StringBuilder();
            Action d = (Action)(() => sb.Append("1")) + (Action)(() => sb.Append("2"));
            d();
            Assert.AreEqual("12", sb.ToString());
        }

        [Test]
        public void AddAssignWorks()
        {
            var sb = new StringBuilder();
            Action d = () => sb.Append("1");
            d += () => sb.Append("2");
            d();
            Assert.AreEqual("12", sb.ToString());
        }

        [Test]
        public void RemoveWorks()
        {
            var sb = new StringBuilder();
            Action d2 = () => sb.Append("2");
            Action d = (Action)Delegate.Combine(Delegate.Combine((Action)(() => sb.Append("1")), d2), (Action)(() => sb.Append("3")));
            var d3 = (Action)Delegate.Remove(d, d2);
            d3();
            Assert.AreEqual("13", sb.ToString());
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
            CommonHelper.Safe(() => l = a.GetInvocationList().Length);
            Assert.AreEqual(1, l);

            int l2 = 0;
            CommonHelper.Safe(() => l2 = a2.GetInvocationList().Length);
            //Assert.AreEqual(2, l2);

            int l3 = 0;
            CommonHelper.Safe(() => l3 = a3.GetInvocationList().Length);
            Assert.AreEqual(1, l3);
        }

        [Test]
        public void SubtractingDelegateFromItselfReturnsNull()
        {
            Action a = () =>
            {
            };
            Action a2 = a - a;
            Assert.True(a2 == null);
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
            //Assert.True(a.Equals(a3));
        }

        [Test]
        public void SubtractWorks()
        {
            var sb = new StringBuilder();
            Action d2 = () => sb.Append("2");
            Action d = (Action)Delegate.Combine(Delegate.Combine((Action)(() => sb.Append("1")), d2), (Action)(() => sb.Append("3")));
            var d3 = d - d2;
            d3();
            Assert.AreEqual("13", sb.ToString());
        }

        [Test]
        public void SubtractAssignWorks()
        {
            var sb = new StringBuilder();
            Action d2 = () => sb.Append("2");
            Action d = (Action)Delegate.Combine(Delegate.Combine((Action)(() => sb.Append("1")), d2), (Action)(() => sb.Append("3")));
            d -= d2;
            d();
            Assert.AreEqual("13", sb.ToString());
        }

        //[Test]
        //public void CloneWorks_SPI_1563()
        //{
        //    var sb = new StringBuilder();
        //    Action d1 = () =>
        //    {
        //        sb.Append("1");
        //    };
        //    // #1563 Clone not implemented
        //    // The original call
        //    // Action d2 = (Action)d1.Clone();
        //    // The temp call
        //    Action d2 = (Action)d1;
        //    //#1563
        //    //Assert.False(ReferenceEquals(d1, d2), "Should not be same");
        //    //d2();
        //    Assert.AreEqual("1", sb.ToString());
        //}

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
        public void CloningDelegateToADifferentTypeIsANoOp()
        {
            D1 d1 = () =>
            {
            };
            D2 d2 = new D2(d1);
            Assert.True((object)d1 == (object)d2);
        }

        [Test]
        public void CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563()
        {
            // #1563
            int x = 0;
            D1 d1 = () => x++;
            D1 d2 = new D1(d1);
            d1();
            d2();

            //Assert.False(d1 == d2);
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
            //Assert.True(m1 == m2, "m1 == m2");
            //Assert.True(m1.Equals(m2), "m1.Equals(m2)");
            //Assert.False(m1 != m2, "m1 != m2");

            Assert.False(m1 == m3, "m1 == m3");
            Assert.False(m1.Equals(m3), "m1.Equals(m3)");
            Assert.True(m1 != m3, "m1 != m3");

            Assert.False(m1 == f11, "m1 == f11");
            Assert.False(m1.Equals(f11), "m1.Equals(f11)");
            Assert.True(m1 != f11, "m1 != f11");
#pragma warning restore 1718
        }

        [Test]
        public void GetInvocationListWorksForImportedFunction_SPI_1563()
        {
            var f = (MulticastDelegate)new Function("");
            // #1563
            var l = f.GetInvocationList();
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            int c = 0;
            CommonHelper.Safe(() => c = l.Length);
            Assert.AreEqual(1, c);
            Assert.True(ReferenceEquals(f, l[0]));
        }

        [Test]
        public void GetInvocationListWorksForMulticastDelegate()
        {
            C c1 = new C(), c2 = new C();
            Action f11 = c1.F1, f11_2 = c1.F1, f12 = c1.F2, f21 = c2.F1;
            Action combined = f11 + f21 + f12 + f11_2;
            var l = combined.GetInvocationList();
            Assert.True(l.Length == 4);
            Assert.True((Action)l[0] == f11);
            Assert.True((Action)l[1] == f21);
            Assert.True((Action)l[2] == f12);
            Assert.True((Action)l[3] == f11_2);
        }
    }
}