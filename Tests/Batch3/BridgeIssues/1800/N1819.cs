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

#pragma warning disable CS0626 // Method, operator, or accessor is marked external and has no attributes on it
        [Template("Bridge.isPlainObject({o})")]
        public static extern bool IsPlainObject(object o);
#pragma warning restore CS0626 // Method, operator, or accessor is marked external and has no attributes on it

        [Test]
        public void TestObjectLiteralWithInheritance()
        {
            var x = new Attributes { Name = "test" };
            Assert.AreEqual("test", x.Name);
            Assert.True(IsPlainObject(x));
        }
    }
}