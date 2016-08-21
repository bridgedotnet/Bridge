using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1486 - {0}")]
    public class Bridge1486
    {
        public static long x = 15;

        public static ulong y = 27;

        [Test]
        public void TestStaticLongInitialization()
        {
            Assert.AreEqual("Int64", x.GetType().Name, "long type");

            x++;
            Assert.True(16 == x, "16");
        }

        [Test]
        public void TestLocalLongInitialization()
        {
            long x = 100;
            Assert.AreEqual("Int64", x.GetType().Name, "long type");

            x++;
            Assert.True(101 == x, "101");
        }


        [Test]
        public void TestStaticUlongInitialization()
        {
            Assert.AreEqual("UInt64", y.GetType().Name, "ulong type");

            y++;
            Assert.True(28 == y, "28");
        }

        [Test]
        public void TestLocalUlongInitialization()
        {
            ulong x = 250;
            Assert.AreEqual("UInt64", x.GetType().Name, "ulong type");

            x++;
            Assert.True(251 == x, "251");
        }
    }
}