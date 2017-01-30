using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1071 - {0}")]
    public class Bridge1071
    {
        [Test]
        public static void TestParamsForCtor()
        {
            var b = new B();
            var test = new A<C>(b);
            var test2 = new A<C, D>(b);

            Assert.AreEqual(1, test._argumentTypes.Length);
            Assert.AreEqual(2, test2._argumentTypes.Length);
        }

        public abstract class A
        {
            private readonly B _b;
            public readonly Type[] _argumentTypes;

            public A(B b, params Type[] argumentTypes)
            {
                _b = b;
                _argumentTypes = argumentTypes;
            }
        }

        public class A<T> : A
        {
            public A(B b)
                : base(b, typeof(T))
            { }
        }

        public class A<T, T2> : A
        {
            public A(B b)
                : base(b, typeof(T), typeof(T2))
            {
            }
        }

        public class B { }

        public class C { }

        public class D { }
    }
}