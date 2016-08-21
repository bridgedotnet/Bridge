using Bridge.Test;

namespace Bridge.ClientTest.Batch2.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1499 - " + Constants.BATCH_NAME + " {0}")]
    public class Bridge1499
    {
        [Test]
        public void TestObjectStringCoalesceWorks()
        {
            object def = 1;
            Bridge1499 app = null;
            object o1 = "";
            object o2 = "test";
            object o3 = null;

            Assert.AreStrictEqual(1, app ?? def);
            Assert.AreStrictEqual("", o1 ?? o2);
            Assert.AreStrictEqual("", o1 ?? "test");
            Assert.AreStrictEqual("test", o3 ?? o2);
            Assert.AreStrictEqual("test", o3 ?? "test");

            string s1 = "";
            string s2 = "test";
            string s3 = null;

            Assert.AreStrictEqual("", s1 ?? s2);
            Assert.AreStrictEqual("", s1 ?? o2);
            Assert.AreStrictEqual("", s1 ?? "test");
#pragma warning disable 162
            Assert.AreStrictEqual("", "" ?? "test");
#pragma warning restore 162
            Assert.AreStrictEqual("test", s3 ?? s2);
            Assert.AreStrictEqual("test", s3 ?? o2);
            Assert.AreStrictEqual("test", s3 ?? "test");
            Assert.AreStrictEqual("test", null ?? "test");

            int? i1 = 0;
            int? i2 = 1;
            int? i3 = null;

            Assert.AreStrictEqual(0, i1 ?? i2);
            Assert.AreStrictEqual(0, i1 ?? o2);
            Assert.AreStrictEqual(0, i1 ?? 1);
            Assert.AreStrictEqual(1, i3 ?? i2);
            Assert.AreStrictEqual("test", i3 ?? o2);
            Assert.AreStrictEqual(1, i3 ?? 1);
            Assert.AreStrictEqual(1, null ?? i2);
        }
    }
}