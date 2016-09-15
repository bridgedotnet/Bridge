using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1832 - {0}")]
    public class Bridge1832
    {
        public class IncTest
        {
            public static int id_counter = 0;
            public static int id = ++id_counter;
            public int id_instance = ++id_counter;
        }

        [Test]
        public void TestInitWithTempVars()
        {
            Assert.AreEqual(1, IncTest.id);
            var inst = new IncTest();
            Assert.AreEqual(2, inst.id_instance);
        }
    }
}