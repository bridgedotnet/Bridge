using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1053]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1053 - {0}")]
    public class Bridge1053
    {
        [Test]
        public static void TestFieldPropertyWithInterface()
        {
            Script.Write("var Foo = function(){this.Bar = null;};");
            var foo = new Foo();
            Car car = foo;
            foo.Bar = "1";
            Assert.AreEqual("1", foo.Bar);
            Assert.AreEqual("1", foo["Bar"]);
            Assert.AreEqual("1", car.Bar);
            Assert.AreEqual("1", car["Bar"]);
        }

        [External]
        public interface Car
        {
            [Field]
            string Bar { get; set; }
        }

        [External]
        [Name("Foo")]
        public class Foo : Car
        {
            [Field]
            public string Bar { get; set; }
        }
    }
}