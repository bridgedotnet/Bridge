using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1485 - {0}")]
    public class Bridge1485
    {
        [Test]
        public void TestConstructorName()
        {
            var t1 = new TestName();

            Assert.AreEqual(-1, t1.Constructor());
            Assert.AreEqual("Init s", t1.Initialize("Init s"));
            Assert.AreEqual(7, t1.Initialize(7));

            var t2 = new TestName(5);

            Assert.AreEqual(5, t2.Constructor());
        }

        private class TestName
        {
            public int Data { get; set; }

            public TestName()
            {
                Data = -1;
            }

            public TestName(int i)
            {
                Data = i;
            }

            public new int Constructor()
            {
                return Data;
            }

            public string Initialize(string s)
            {
                return s;
            }

            public int Initialize(int i)
            {
                return i;
            }
        }
    }
}