using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge883_1 : Bridge883_2
    {
    }

    public interface Bridge883_IInterface
    {
    }

    public class Bridge883_2 : Bridge883_IInterface
    {
    }

    public class Bridge883_3
    {
        public static int Main()
        {
            int f = Bridge883_4.field1;
            return f;
        }
    }

    public class Bridge883_4 : Bridge883_3
    {
        public static int field1 = 1;
    }

    // Bridge[#883]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#883 - {0}")]
    public class Bridge883
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.NotNull(new Bridge883_1(), "Bridge883_1 created");
            Assert.AreEqual(1, Bridge883_3.Main(), "Bridge883_3.Main");
        }
    }
}