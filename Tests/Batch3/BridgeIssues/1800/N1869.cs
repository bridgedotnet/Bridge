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
            var foo = new Foo<Object>();

            var n1 = Script.Write<object>("window.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869.Foo$1$Object");
            Assert.Null(n1, "Foo$1$Object should not exist");
            Console.WriteLine("Should NOT exist: " + n1);

            var n2 = Script.Write<object>("window.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869.Foo$1");
            Assert.NotNull(n2, "Foo$1 should exist");
        }
    }
}