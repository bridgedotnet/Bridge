using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3318 - {0}")]
    public class Bridge3318
    {
        public class Foo
        {
        }

        [Test]
        public static void TestArrayName()
        {
            var array = new Foo[10];
            Assert.AreEqual("Foo[]", array.GetType().Name);
        }
    }
}