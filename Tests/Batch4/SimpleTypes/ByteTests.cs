using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "ByteTests - {0}")]
    public class ByteTests
    {
        [Test]
        public void TryParseWorks_SPI_1592()
        {
            byte numberResult;

            var result = byte.TryParse("54768", out numberResult);
            Assert.False(result);
            // #1592
            Assert.AreEqual(0, numberResult);

            result = byte.TryParse("-1", out numberResult);
            Assert.False(result);
            // #1592
            Assert.AreEqual(0, numberResult);
        }
    }
}