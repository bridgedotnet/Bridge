using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    internal class Bridge603Class
    {
        public object Data { get; set; }
    }
    internal struct Bridge603A
    {
        public string value;

        public Bridge603A(string value)
        {
            this.value = value;
        }

        public static implicit operator Bridge603A(string value)
        {
            value = value ?? "[Null]";
            return new Bridge603A(value);
        }
    }
    internal struct Bridge603B
    {
        public string value;
        public int intValue;

        public Bridge603B(string value)
        {
            this.value = value;
            this.intValue = 0;
        }

        public Bridge603B(int value)
        {
            this.value = null;
            this.intValue = value;
        }

        public Bridge603B(Bridge603Class value)
        {
            this.value = value.Data.ToString();
            this.intValue = 0;
        }

        public static implicit operator Bridge603B(string value)
        {
            value = value ?? "[Null]";
            return new Bridge603B(value);
        }

        public static implicit operator Bridge603B(int value)
        {
            return new Bridge603B(value);
        }

        public static implicit operator Bridge603B(Bridge603Class value)
        {
            value = value ?? new Bridge603Class() { Data = "[Null]" };
            return new Bridge603B(value);
        }
    }

    // Bridge[#603]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#603 - {0}")]
    public class Bridge603
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Bridge603A c = null;
            Assert.AreEqual("[Null]", c.value, "Bridge603A TestUseCase Null");

            c = "Test";
            Assert.AreEqual("Test", c.value, "Bridge603A TestUseCase String");
        }

        [Test(ExpectedCount = 5)]
        public static void TestRelated()
        {
            Bridge603B b = 12345;
            Assert.AreEqual(12345, b.intValue, "Bridge603B TestRelated Int");

            Bridge603B c = (string)null;
            Assert.AreEqual("[Null]", c.value, "Bridge603B TestRelated String Null");

            c = "Test";
            Assert.AreEqual("Test", c.value, "Bridge603B TestRelated String");

            Bridge603B d = (Bridge603Class)null;
            Assert.AreEqual("[Null]", d.value, "Bridge603B TestRelated Bridge603Class Null");

            d = new Bridge603Class() { Data = "Test 603B" };
            Assert.AreEqual("Test 603B", d.value, "Bridge603B TestRelated Bridge603Class");
        }
    }
}