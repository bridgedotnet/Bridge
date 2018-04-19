using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test verifies that binary data is not changed by the browser
    /// after it was downloaded from a remote location.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3497 - {0}")]
    public class Bridge3497
    {
        /// <summary>
        /// Downloads a binary file containing bytes from the range [0, 255],
        /// and verifies the received data matches the expected result.
        /// </summary>
        [Test]
        public static void TestDownloadingOfBinaryFile()
        {
            // The test file by the link below contains 256 bytes, counting from 0 to 255.
            const string testFilePath = "resources/testdata.bin";

            var bytes = System.IO.File.ReadAllBytes(testFilePath);
            Assert.AreEqual(256, bytes.Length, "File length is correct.");

            for (var i = 0; i < 256; i++)
            {
                Assert.AreEqual(i, bytes[i], $"Byte #{i} has the expected value.");
            }
        }
    }
}