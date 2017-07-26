using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "Int16Tests - {0}")]
    public class Int16Tests
    {
        [Test]
        public void TryParseWorks_SPI_1592()
        {
            short numberResult;
            var result = short.TryParse("54768", out numberResult);
            Assert.False(result);
            // #1592
            Assert.AreEqual(0, numberResult);

            result = short.TryParse("-55678", out numberResult);
            Assert.False(result);
            // #1592
            Assert.AreEqual(0, numberResult);
        }
    }
}