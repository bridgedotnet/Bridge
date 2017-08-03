using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "SByteTests - {0}")]
    public class SByteTests
    {
        [Test]
        public void TryParseWorks_SPI_1592()
        {
            sbyte numberResult;
            var result = sbyte.TryParse("54768", out numberResult);
            Assert.False(result);
            // #1592
            Assert.AreEqual(0, numberResult);
        }
    }
}
