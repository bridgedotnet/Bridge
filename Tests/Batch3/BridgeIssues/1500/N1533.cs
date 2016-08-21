using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1533 - {0}")]
    public class Bridge1533
    {
        [Test]
        public void TestStringNullConcationation()
        {
            string s = null;
            string s1 = "b";
            Assert.AreEqual("b", s + "b", "s + \"b\"");

            s1 += s;
            Assert.AreEqual("b", s1, "s1 += s");

            s += 'b';
            Assert.AreEqual("b", s, "s += 'b'");

            Assert.AreEqual("b2", s + "2", "s + \"2\"");
        }
    }
}