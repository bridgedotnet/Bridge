using Bridge.Test.NUnit;
using System;
using System.Globalization;

#pragma warning disable 184, 219, 458

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "Int32Tests - {0}")]
    public class Int32Tests
    {
        [Test]
        public void IntegerModuloWorks_SPI_1602()
        {
            int a = 17, b = 4, c = 0;
            // #1602
            Assert.Throws<DivideByZeroException>(() =>
            {
                var x = a % c;
            });
        }
    }
}