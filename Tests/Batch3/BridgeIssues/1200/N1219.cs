using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1219 - {0}")]
    public class Bridge1219
    {
        public class TestClass1
        {
            public long LongProperty { get; set; }
        }

        public class TestClass2
        {
            public ulong ULongProperty { get; set; }
        }

        public class TestClass3
        {
            public decimal DecimalProperty { get; set; }
        }

        [Test]
        public static void TestLongJSON()
        {
            var x1 = new TestClass1();
            x1.LongProperty = 100;
            Assert.AreEqual("{\"LongProperty\":100}", Bridge.Html5.JSON.Stringify(x1).Replace(" ", ""));

            var x2 = new TestClass2();
            x2.ULongProperty = 200;
            Assert.AreEqual("{\"ULongProperty\":200}", Bridge.Html5.JSON.Stringify(x2).Replace(" ", ""));

            var x3 = new TestClass3();
            x3.DecimalProperty = 300;
            Assert.AreEqual("{\"DecimalProperty\":300}", Bridge.Html5.JSON.Stringify(x3).Replace(" ", ""));
        }
    }
}