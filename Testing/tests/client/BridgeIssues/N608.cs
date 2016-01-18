using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public struct Bridge608A
    {
        public readonly string field;

        public Bridge608A(string field)
        {
            this.field = field;
        }

        public override bool Equals(object obj)
        {
            return Equals(obj.ToString());
        }

        public bool Equals(string other)
        {
            return other == field;
        }

        public override int GetHashCode()
        {
            return this.field.GetHashCode();
        }
    }

    // Bridge[#608]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#608 - {0}")]
    public class Bridge608
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            var s = new Bridge608A("test");
            object o = "test";
            Assert.True(s.Equals(o), "Bridge608 Object");
            Assert.True(s.Equals("test"), "Bridge608 String");
        }
    }
}