using System;
using System.Collections;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1737 - {0}")]
    public class Bridge1737
    {
        public class Something<T> { }
        public class SomethingElse { }
        public class SomethingOfSomethingElse : Something<SomethingElse> { }

        [Test]
        public void TestGetClassName()
        {
            var x = new SomethingOfSomethingElse();
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737.SomethingOfSomethingElse", x.GetClassName());
            Assert.True(x.GetType().FullName == x.GetClassName());
        }
    }
}