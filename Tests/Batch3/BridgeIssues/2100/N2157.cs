using System;
using System.Linq;
using Bridge.Test.NUnit;

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
                this.TestIntProperty = 1;
                this.TestStringProperty = "constructor";
                this.TestObjectProperty = new string(new char[] { 'c' });
            }

            public int TestIntProperty
            {
                get; set;
            }

            public string TestStringProperty
            {
                get; set;
            }

            public object TestObjectProperty
            {
                get; set;
            }
        }

        public static TType TestMethod<TType>()
            where TType : TestClass, new()
        {
            return new TType
            {
                TestIntProperty = 2,
                TestStringProperty = "initializer",
                TestObjectProperty = new string(new char[] { 'i' })
            };
        }

        [Test]
        public static void TestCreatingGenericInstanceWithInitializer()
        {
            Assert.AreEqual(2, Bridge2157.TestMethod<TestClass>().TestIntProperty);
            Assert.AreEqual("initializer", Bridge2157.TestMethod<TestClass>().TestStringProperty);
            Assert.AreEqual("i", Bridge2157.TestMethod<TestClass>().TestObjectProperty);
        }
    }
}