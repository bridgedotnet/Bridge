using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#687]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#687 - {0}")]
    public class Bridge687
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            var c = new Bridge687A(null);
            bool case1 = false;
            if (c == null)
            {
                case1 = true;
            }
            Assert.AreEqual(false, case1, "Bridge687 case1");

            c = new Bridge687A("test");
            bool case2 = false;
            if (c == "test")
            {
                case2 = true;
            }
            Assert.AreEqual(true, case2, "Bridge687 case2");
        }
    }
    internal class Bridge687A
    {
        public Bridge687A(string value)
        {
            Value = value;
        }
        public string Value { get; private set; }
        public static implicit operator string(Bridge687A value)
        {
            return value.Value;
        }
    }
}