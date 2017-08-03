using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "UInt32Tests - {0}")]
    public class UInt32Tests
    {
        [Test]
        public void TryParseWorks_SPI_1592()
        {
            uint numberResult;
            var result = uint.TryParse("-1", out numberResult);
            // #1592
            Assert.AreEqual(0, numberResult);
        }
    }
}