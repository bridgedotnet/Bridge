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

            Assert.AreNotEqual(null, blob1, "blob1 is not null");
            Assert.AreEqual(9, blob1.Size, "blob1.Size equals 9");
            Assert.AreEqual("text/richtext", blob1.Type, "blob1.Type equals 'text/richtext'");

            var blob2 = new Blob(new BlobDataObject[] { "data2" });
            Assert.AreNotEqual(null, blob2, "blob2 is not null");
            Assert.AreEqual(5, blob2.Size, "blob2.Size equals 5");

        }
    }
}