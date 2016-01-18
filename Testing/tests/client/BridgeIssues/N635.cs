using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge635A
    {
        [Name("internalFunc1")]
        protected virtual string Test1()
        {
            return "A.Test1";
        }
    }
    public class Bridge635B : Bridge635A
    {
        protected override string Test1()
        {
            return "B.Test1";
        }
    }

    // Bridge[#635]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#635 - {0}")]
    public class Bridge635
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var a = new Bridge635A();
            var b = new Bridge635B();

            Assert.AreEqual(Script.TypeOf(a["internalFunc1"]), "function", "Bridge635 A.internalFunc1");
            Assert.AreEqual(Script.Get<Func<string>>(a, "internalFunc1")(), "A.Test1", "Bridge635 A.internalFunc1 Invoke");

            Assert.AreEqual(Script.TypeOf(b["internalFunc1"]), "function", "Bridge635 B.internalFunc1");
            Assert.AreEqual(Script.Get<Func<string>>(b, "internalFunc1")(), "B.Test1", "Bridge635 B.internalFunc1 Invoke");
        }
    }
}