using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1869 - {0}")]
    public class Bridge1869
    {
        public class Foo<T>
        {
        }

        [Test]
        public void TestGenericTypeDefinition()
        {
            var foo1 = new Foo<Object>();

            var n1 = GetFoo("Foo$1$Object");
            Assert.Null(n1, "Foo$1$Object should not exist");

            var n2 = GetFoo("Foo$1");
            Assert.NotNull(n2, "Foo$1 should exist");

            var foo2 = new Foo<long>();

            var n3 = GetFoo("Foo$1$System.Int64");
            Assert.Null(n1, "Foo$1$System.Int64 should not exist");

            var n4 = GetFoo("Foo$1");
            Assert.NotNull(n2, "Foo$1 should exist");
        }

        private static object GetFoo(string name)
        {
            return Script.Write<object>("window.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869[{name}]", name);
        }
    }
}