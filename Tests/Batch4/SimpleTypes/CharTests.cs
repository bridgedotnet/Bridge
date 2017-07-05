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
            Assert.False((object)0 is char);
            Assert.False((object)0.5 is char);
            Assert.False((object)-1 is char);
            Assert.False((object)65536 is char);
            Assert.AreEqual("System.Char", typeof(char).FullName);
            Assert.False(typeof(char).IsClass);
            Assert.False(typeof(IComparable<byte>).IsAssignableFrom(typeof(char)));
            Assert.False(typeof(IEquatable<byte>).IsAssignableFrom(typeof(char)));
            // #1603
            Assert.False(typeof(IFormattable).IsAssignableFrom(typeof(char)));
            var interfaces = typeof(char).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<char>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<char>)));
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