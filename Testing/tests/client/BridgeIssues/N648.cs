using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge648A
    {
        public Bridge648A(string value)
        {
            Value = value;
        }
        public string Value { get; private set; }
        public static implicit operator string(Bridge648A value)
        {
            return value.Value;
        }
    }

    // Bridge[#648]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#648 - {0}")]
    public class Bridge648
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var wrappedString = new Bridge648A("test");
            var stringArray = new string[0];
            stringArray.Push(wrappedString);

            Assert.AreEqual(stringArray[0], "test");
        }
    }
}