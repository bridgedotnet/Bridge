using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1833 - {0}")]
    public class Bridge1833
    {
        [ObjectLiteral]
        public class Attributes : AttributeBase
        {
            public string Name { get; set; }
        }

        public class AttributeBase
        {
            public int Id { get; set; }
        }

        [Test]
        public void TestInheritedPropertyInLiteral()
        {
            var x = new Attributes { Id = 12, Name = "test" };
            Assert.AreEqual(12, x.Id);
            Assert.AreEqual(12, x["id"]);
            Assert.AreEqual("test", x.Name);
            Assert.AreEqual("test", x["name"]);
        }
    }
}