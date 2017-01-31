using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1313 - {0}")]
    public class Bridge1313
    {
        public interface IInterface
        {
            int Function(int v = 1);
        }

        public class Class : IInterface
        {
            public int Function(int v)
            {
                return v;
            }
        }

        [Test]
        public static void TestInterfaceDefaultParameter()
        {
            IInterface value = new Class();
            Assert.AreEqual(1, value.Function());
        }

        [Test]
        public static void TestClassNotDefaultParameter()
        {
            var value = new Class();
            Assert.AreEqual(2, value.Function(2));
        }
    }
}