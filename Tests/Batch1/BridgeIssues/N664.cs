using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [External]
    internal sealed class Bridge664A
    {
        private Bridge664A() { }
        public static implicit operator Bridge664A(string text)
        {
            return null;
        }
    }

    [External]
    internal class Bridge664B
    {
        public Bridge664B() { }
        //public static implicit operator Bridge664B(string text)
        //{
        //    return null;
        //}
    }

    [External]
    internal class Bridge664C : Bridge664B
    {

    }

    // Bridge[#664]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#664 - {0}")]
    public class Bridge664
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Func<string, Bridge664A> f = s => (Bridge664A)s;
            // if cast will be emitted then exception will be thrown because Bridge664A is not emitted
            Assert.AreEqual("test", f("test"), "Bridge664");

            Assert.Throws(() => { Bridge664C b = Script.Write<Bridge664C>("{ }"); var s = (Bridge664B)b; }, "Bridge664 Should throw exception");


        }
    }
}