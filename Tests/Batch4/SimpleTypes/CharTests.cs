using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "CharTests - {0}")]
    public class CharTests
    {
        [Test]
        public void TypePropertiesAreInt32_SPI_1603()
        {
            // #1603
            Assert.False(typeof(IFormattable).IsAssignableFrom(typeof(char)));
            var interfaces = typeof(char).GetInterfaces();
            Assert.False(interfaces.Contains(typeof(IFormattable)));
        }

        // #SPI
        //[Test]
        //public void TryParseWorks_SPI_1630()
        //{
        //    // #1630
        //    char charResult;
        //    bool result = char.TryParse("a", out charResult);
        //    Assert.True(result);
        //    Assert.AreEqual((int)charResult, (int)'a');

        //    result = char.TryParse("", out charResult);
        //    Assert.False(result);
        //    Assert.AreEqual((int)charResult, 0);

        //    result = char.TryParse("ab", out charResult);
        //    Assert.False(result);
        //    Assert.AreEqual((int)charResult, 0);
        //}
    }
}