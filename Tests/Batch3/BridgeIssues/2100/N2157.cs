using System;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2157 - {0}")]
    public class Bridge2157
    {
        public class TestClass
        {
            public TestClass()
            {
                this.TestProperty = 1;
            }

            public int TestProperty { get; set; }
        }

        public static TType TestMethod<TType>()
            where TType : TestClass, new()
        {
            return new TType
            {
                TestProperty = 2
            };
        }

        [Test]
        public static void TestCreatingGenericInstanceWithInitializer()
        {
            Assert.AreEqual(2, Bridge2157.TestMethod<TestClass>().TestProperty);
        }
    }
}
