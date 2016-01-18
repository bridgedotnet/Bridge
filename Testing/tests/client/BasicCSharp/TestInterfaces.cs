using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Interfaces - {0}")]
    public class TestInterfaces
    {
        private interface ISimple
        {
            int Data
            {
                get;
                set;
            }

            string GetString();
        }

        private interface ISimpleAsWell
        {
            int DataAsWell
            {
                get;
                set;
            }

            string GetStringAsWell();
        }

        private class A : ISimple
        {
            public int Data
            {
                get;
                set;
            }

            public string GetString()
            {
                return "A.ISimple";
            }

            public A()
            {
                Data = 1;
            }
        }

        private class B : ISimple
        {
            private int data;

            int ISimple.Data
            {
                get
                {
                    return data;
                }
                set
                {
                    data = value;
                }
            }

            string ISimple.GetString()
            {
                return "explicit B.ISimple";
            }

            public B()
            {
                data = 2;
            }
        }

        private class C : ISimple, ISimpleAsWell
        {
            private int data;

            int ISimple.Data
            {
                get
                {
                    return data;
                }
                set
                {
                    data = value;
                }
            }

            string ISimple.GetString()
            {
                return "C.ISimple";
            }

            private int dataAsWell;

            public int DataAsWell
            {
                get
                {
                    return dataAsWell;
                }
                set
                {
                    dataAsWell = value;
                }
            }

            public string GetStringAsWell()
            {
                return "C.ISimpleAsWell";
            }

            public C()
            {
                data = 3;
                dataAsWell = 4;
            }
        }

        [Test(ExpectedCount = 6)]
        public static void TestInterfaceMethodAndProperty()
        {
            ISimple a = new A();

            Assert.True(a != null, "Instance of A created through ISimple interface");
            Assert.AreEqual(a.GetString(), "A.ISimple", "a.GetString() = A.ISimple  through interface");
            Assert.AreEqual(a.Data, 1, "a.Data = 1  through interface");

            var b = a as A;
            Assert.True(b != null, "Instance of ISimple as A");
            Assert.AreEqual(a.GetString(), "A.ISimple", "a.GetString() = A.ISimple through instance");
            Assert.AreEqual(a.Data, 1, "a.Data = 1 through instance");
        }

        [Test(ExpectedCount = 3)]
        public static void TestExplicitInterfaceMethodAndProperty()
        {
            ISimple b = new B();
            Assert.True(b != null, "Instance of B created through ISimple interface explicitly");
            Assert.AreEqual(b.GetString(), "explicit B.ISimple", "b.GetString() = explicit B.ISimple");
            Assert.AreEqual(b.Data, 2, "a.Data = 2");
        }

        [Test(ExpectedCount = 9)]
        public static void TestTwoInterfaces()
        {
            var c = new C();

            Assert.True(c != null, "Instance of C created through ISimpleAsWell interface");
            Assert.AreEqual(c.GetStringAsWell(), "C.ISimpleAsWell", "a.GetStringAsWell() = A.ISimple through instance");
            Assert.AreEqual(c.DataAsWell, 4, "c.DataAsWell = 4  through instance");

            var a = c as ISimple;
            Assert.True(a != null, "Instance of ISimple as C");
            Assert.AreEqual(a.GetString(), "C.ISimple", "a.GetString() = C.ISimple  through interface");
            Assert.AreEqual(a.Data, 3, "a.Data = 3 through interface");

            var b = c as ISimpleAsWell;
            Assert.True(b != null, "Instance of ISimpleAsWell as C");
            Assert.AreEqual(b.GetStringAsWell(), "C.ISimpleAsWell", "b.GetStringAsWell() = C.ISimpleAsWell  through interface");
            Assert.AreEqual(b.DataAsWell, 4, "b.DataAsWell = 4 through interface");
        }
    }
}
