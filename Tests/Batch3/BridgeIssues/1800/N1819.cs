using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1819 - {0}")]
    public class Bridge1819
    {
        public class AttributeBase
        {
        }

        [ObjectLiteral]
        public class Attributes : AttributeBase
        {
            public string Name { get; set; }
        }

        [Test]
        public void TestObjectLiteralWithInheritance()
        {
            var x = new Attributes { Name = "test" };
            Assert.AreEqual("test", x.Name);
            Assert.True(Script.Write<bool>("Bridge.isPlainObject(x)"));
        }
    }
}