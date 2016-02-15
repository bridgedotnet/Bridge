using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public abstract class Bridge693A<T>
    {
        protected Bridge693A(T props) { }
    }
    public class Bridge693B : Bridge693A<Bridge693B.Bridge693C>
    {
        public Bridge693B() : base(new Bridge693C()) { }

        public class Bridge693C : IBridge693D { }
    }
    public interface IBridge693D { }

    // Bridge[#708]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#693 - {0}")]
    public class Bridge693
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var c = new Bridge693B();
            Assert.AreNotEqual(null, c, "Bridge693 not null");
        }
    }
}