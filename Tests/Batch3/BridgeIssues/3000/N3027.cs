using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
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
            public Foo(T v) { _Value = v; }
            public T GetField()
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
        }
    }
}