using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#815]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#815 - {0}")]
    public class Bridge815
    {
        [Test(ExpectedCount = 7)]
        public static void TestUseCase()
        {
            var a = new A();

            a.Method();
            Assert.AreEqual(null, a.Property, "Bridge815 null");

            a.Method(new B(1));
            Assert.True(a.Property.HasValue, "Bridge815 Property.HasValue");
            Assert.AreEqual(1, a.Property.Value.field, "Bridge815 Property.Value.field == 1");

            a.Method2();
            Assert.True(a.Property.HasValue, "Bridge815 Method2 Property.HasValue");
            Assert.AreEqual(0, a.Property.Value.field, "Bridge815 Method2 Property.Value.field == 0");

            a.Method2(new B(2));
            Assert.True(a.Property.HasValue, "Bridge815 Method2 Property.HasValue 2");
            Assert.AreEqual(2, a.Property.Value.field, "Bridge815 Method2 Property.Value.field == 2");
        }

        private struct B
        {
            public B(int i)
            {
                field = i;
            }

            public int field;
        }

        private class A
        {
            public B? Property
            {
                get;
                set;
            }

            public void Method(B? param = null)
            {
                Property = param;
            }

            public void Method2(B param = default(B))
            {
                Property = param;
            }
        }
    }
}