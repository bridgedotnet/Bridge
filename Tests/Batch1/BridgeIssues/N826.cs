using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge826A
    {
        private readonly decimal _val;

        public Bridge826A(decimal val)
        {
            _val = val;
        }

        public static implicit operator Bridge826A(decimal val)
        {
            return new Bridge826A(val);
        }

        public static implicit operator decimal(Bridge826A val)
        {
            return val != null ? val._val : 0;
        }
    }

    public class Bridge826B
    {
        private readonly int _val;

        public Bridge826B(int val)
        {
            _val = val;
        }

        public static implicit operator Bridge826B(int val)
        {
            return new Bridge826B(val);
        }

        public static implicit operator int(Bridge826B val)
        {
            return val != null ? val._val : 0;
        }
    }

    // Bridge[#826]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#826 - {0}")]
    public class Bridge826
    {
        private static decimal EchoDecimal(decimal d = 42m)
        {
            return d;
        }

        [Test(ExpectedCount = 5)]
        public static void TestUseCase()
        {
            Bridge826A d = null;
            Assert.True(EchoDecimal(d) == 0, "Bridge826 decimal 0");

            d = 1;
            Assert.True(EchoDecimal(d) == 1, "Bridge826 decimal 1");

            Bridge826B i = null;
            Assert.True(EchoDecimal(i) == 0, "Bridge826 int 0");

            i = 1;
            Assert.True(EchoDecimal(i) == 1, "Bridge826 int 1");

            Assert.True(EchoDecimal() == 42, "Bridge826 42");
        }
    }
}