using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3027 - {0}")]
    public class Bridge3027
    {
        struct MyValueType
        {
            public int Value;
        }

        class Foo<T>
        {
            T _Value;

            public Foo(T v)
            {
                _Value = v;
            }

            public T GetField()
            {
                return _Value;
            }
        }

        class FooNonGeneric
        {
            MyValueType _Value;

            public FooNonGeneric(MyValueType v)
            {
                _Value = v;
            }

            public MyValueType GetField()
            {
                return _Value;
            }
        }

        [Test]
        public static void TestGenericInvocationClone()
        {
            var foo = new Foo<MyValueType>(new MyValueType() { Value = 1 });

            var iShouldBeACopy = foo.GetField();
            iShouldBeACopy.Value = 2;

            Assert.AreEqual(1, foo.GetField().Value);
            Assert.AreEqual(2, iShouldBeACopy.Value);
        }

        [Test]
        public static void TestNonGenericInvocationClone()
        {
            var foo = new FooNonGeneric(new MyValueType() { Value = 3 });

            var iShouldBeACopy = foo.GetField();
            iShouldBeACopy.Value = 4;

            Assert.AreEqual(3, foo.GetField().Value);
            Assert.AreEqual(4, iShouldBeACopy.Value);
        }
    }
}