using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2898 - {0}")]
    [Reflectable]
    public class Bridge2898
    {
        static string a, b;
        private int x;

        public Bridge2898()
        {

        }

        public Bridge2898(int _x)
        {
            this.x = _x;
        }

        public void Run(string a, string b)
        {
            Bridge2898.a = a;
            Bridge2898.b = b;
        }

        public void Run1(string a, string b, int _x)
        {
            Bridge2898.a = a;
            Bridge2898.b = b;
            this.x = _x;
        }

        [Test]
        public static void TestCreateDelegate()
        {
            ((Action<Bridge2898, string, string>)Delegate.CreateDelegate(typeof(Action<Bridge2898, string, string>), null, typeof(Bridge2898).GetMethod("Run")))(new Bridge2898(), "Hello", "World");
            Assert.True(a == "Hello");
            Assert.True(b == "World");

            var c = new Bridge2898(5);
            ((Action<Bridge2898, string, string, int>)Delegate.CreateDelegate(typeof(Action<Bridge2898, string, string, int>), null, typeof(Bridge2898).GetMethod("Run1")))(c, "Hello1", "World1", 9);
            Assert.True(a == "Hello1");
            Assert.True(b == "World1");
            Assert.True(c.x == 9);
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2898 - {0}")]
    public class Bridge2898_2
    {
        private static string buffer;

        public delegate void D1(C c, string s);
        public delegate void D2(string s);
        public delegate void D3();

        [Reflectable]
        public class C
        {
            private int id;
            public C(int id) { this.id = id; }

            public void M1(string s)
            {
                buffer = string.Format("M1,{0},{1}", this.id, s);
            }

            public static void M2(string s)
            {
                buffer = string.Format("M2,{0}", s);
            }
        }


        [Test]
        public static void TestCreateDelegateReflection()
        {
            C c1 = new C(42);

            MethodInfo mi1 = typeof(C).GetMethod("M1",
                BindingFlags.Public | BindingFlags.Instance);
            MethodInfo mi2 = typeof(C).GetMethod("M2",
                BindingFlags.Public | BindingFlags.Static);

            D1 d1;
            D2 d2;
            D3 d3;

            Delegate test = Delegate.CreateDelegate(typeof(D2), c1, mi1);

            Assert.NotNull(test);

            d2 = (D2)test;

            d2("S1");
            Assert.AreEqual("M1,42,S1", Bridge2898_2.buffer);

            d2("S2");
            Assert.AreEqual("M1,42,S2", Bridge2898_2.buffer);

            d1 = (D1)Delegate.CreateDelegate(typeof(D1), null, mi1);

            d1(c1, "S3");
            Assert.AreEqual("M1,42,S3", Bridge2898_2.buffer);

            d1(new C(5280), "S4");
            Assert.AreEqual("M1,5280,S4", Bridge2898_2.buffer);

            d2 = (D2)Delegate.CreateDelegate(typeof(D2), null, mi2);

            d2("S5");
            Assert.AreEqual("M2,S5", Bridge2898_2.buffer);

            d2("S6");
            Assert.AreEqual("M2,S6", Bridge2898_2.buffer);

            d3 = (D3)Delegate.CreateDelegate(typeof(D3), "S7", mi2);
            d3();
            Assert.AreEqual("M2,S7", Bridge2898_2.buffer);
        }
    }
}