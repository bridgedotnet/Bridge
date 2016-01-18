using Bridge;
using Bridge.Test;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    public abstract class Bridge566A
    {
        public string Data { get; set; }

        protected Bridge566A()
        {
            Data = GetName();
        }

        protected abstract string GetName();
    }
    public class Bridge566B : Bridge566A
    {
        protected override string GetName() { return "Ted"; }
    }

    // Bridge[#566]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#566 - {0}")]
    public class Bridge566
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var ted = new Bridge566B();
            Assert.AreEqual(ted.Data, "Ted", "#566 Ted");
        }
    }
}