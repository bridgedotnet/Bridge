using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1538 - {0}")]
    public class Bridge1538
    {
        [Test]
        public void TestOutParameterInIndexer()
        {
            Assert.AreEqual(7, this[0], "Indexer");
        }

        public int this[int index]
        {
            get
            {
                int i = 4;
                this.OutMethod(out i);

                return i;
            }
        }

        int OutMethod(out int i)
        {
            i = 7;
            return i;
        }
    }
}