using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1804 - {0}")]
    public class Bridge1804
    {
        public struct Struct1
        {
            public Struct2 nested;
        }

        public struct Struct2
        {
            public int field;
            public Struct3 nested;
        }

        public struct Struct3
        {
            public int field;
        }

        [Test]
        public void TestStructClone()
        {
            var a = new Struct1();
            var b = a;
            a.nested.field = 5;
            a.nested.nested.field = 6;

            Assert.AreEqual(5, a.nested.field);
            Assert.AreEqual(6, a.nested.nested.field);

            Assert.AreEqual(0, b.nested.field);
            Assert.AreEqual(0, b.nested.nested.field);
        }
    }
}