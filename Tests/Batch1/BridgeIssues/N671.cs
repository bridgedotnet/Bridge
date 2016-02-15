using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge671A
    {
        private Func<int> func;

        public Bridge671A(Func<int> func)
        {
            this.func = func;
        }

        public int Invoke()
        {
            return func();
        }
    }

    // Bridge[#671]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#671 - {0}")]
    public class Bridge671
    {
        private int One = 1;

        private int GetOne()
        {
            return One;
        }

        public int Invoke()
        {
            var b = new Bridge671A(GetOne);
            return b.Invoke();
        }

        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            Assert.AreEqual(1, new Bridge671().Invoke());
        }
    }
}