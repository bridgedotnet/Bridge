using System;
using Bridge;
using Bridge.Test;
using Bridge.Html5;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#699]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#699 - {0}")]
    public class Bridge699
    {
        [Test(ExpectedCount = 5)]
        public static void TestUseCase()
        {
            var blob1 = new Blob(new BlobDataObject[] { "blobData1" }, new BlobPropertyBag { Type = "text/richtext", Endings = Endings.Transparent });

            Assert.AreNotEqual(blob1, null, "blob1 is not null");
            Assert.AreEqual(blob1.Size, 9, "blob1.Size equals 9");
            Assert.AreEqual(blob1.Type, "text/richtext", "blob1.Type equals 'text/richtext'");

            var blob2 = new Blob(new BlobDataObject[] { "data2" });
            Assert.AreNotEqual(blob2, null, "blob2 is not null");
            Assert.AreEqual(blob2.Size, 5, "blob2.Size equals 5");

        }
    }
}