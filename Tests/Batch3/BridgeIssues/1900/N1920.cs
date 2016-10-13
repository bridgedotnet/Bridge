using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1920 - {0}")]
    public class Bridge1920
    {
        [Test]
        public void TestGeneratedStringConcatenation()
        {
            var s1 = "s1";
            var s2 = "s2";
            var s3 = "s3";
            var s4 = "s4";

            var s = s1 + s2 + s3 + s4;
            Assert.AreEqual("s1s2s3s4", s);

            s = "a" + 1 + null;
            Assert.AreEqual("a1", s);

            s = null + "a" + 1;
            Assert.AreEqual("a1", s);

            s = "a" + null + 1;
            Assert.AreEqual("a1", s);

            s = "a" + 1 + "b" + "c";
            Assert.AreEqual("a1bc", s);

            s = null;
            s = '{' + s + '}';
            Assert.AreEqual("{}", s);

            s = "" + s + "";
            Assert.AreEqual("{}", s);

            s = s1 + "" + s2;
            Assert.AreEqual("s1s2", s);

            s = s1 + "" + s2 + "";
            Assert.AreEqual("s1s2", s);

            s = s1 + "" + s2 + "" + s3;
            Assert.AreEqual("s1s2s3", s);

            s = "Test" + 4 / 2;
            Assert.AreEqual("Test2", s);

            int i = 2;
            s = "" + i + "";
            Assert.AreEqual("2", s);

            s = "" + i / 2;
            Assert.AreEqual("1", s);
        }
    }
}