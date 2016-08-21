using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1518 - {0}")]
    public class Bridge1518
    {
        public class TestClass<T> where T : new()
        {
            public T value = new T();
        }

        [Test]
        public void TestDefaultConstructorForTypeParameter()
        {
            TestClass<decimal> x = new TestClass<decimal>();
            int y = 0;
            Assert.True(x.value == y, "decimal");

            TestClass<Guid> g = new TestClass<Guid>();
            Assert.True(g.value == Guid.Empty, "Guid");

            var l = new TestClass<long>();
            int z = 0;
            Assert.True(l.value == z, "long");
        }
    }
}