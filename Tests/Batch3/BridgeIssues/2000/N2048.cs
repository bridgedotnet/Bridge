using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2048 - {0}")]
    public class Bridge2048
    {
        public class Base
        {
            public virtual bool property { get { return false; } set { } }
        }

        public class Derived : Base
        {
            public override bool property { set { } }
        }

        [Test]
        public static void TestCase()
        {
            var a = !new Derived().property;
            Assert.True(a);
        }
    }
}