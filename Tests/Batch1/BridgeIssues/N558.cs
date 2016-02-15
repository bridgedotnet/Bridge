using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge558A
    {
        public virtual int zz(int a)
        {
            return 1;
        }
        public virtual int zz(string a)
        {
            return 2;
        }
    }
    public class Bridge558B : Bridge558A
    {
        public override int zz(int a)
        {
            return base.zz(a);
        }
        public override int zz(string a)
        {
            return base.zz(a);
        }
    }

    // Bridge[#5558]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#558 - {0}")]
    public class Bridge558
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var a = new Bridge558A();
            var b = new Bridge558B();

            Assert.AreEqual(1, a.zz(1), "Bridge558 a.zz int");
            Assert.AreEqual(2, a.zz(""), "Bridge558 a.zz string");

            Assert.AreEqual(1, b.zz(1), "Bridge558 b.zz int");
            Assert.AreEqual(2, b.zz(""), "Bridge558 b.zz string");
        }
    }
}