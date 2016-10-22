using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1965 - {0}")]
    public class Bridge1965
    {
        [Test]
        public void TestCase()
        {
            Assert.False(typeof(byte).IsClass);
            Assert.False(typeof(short).IsClass);
            Assert.False(typeof(ushort).IsClass);
            Assert.False(typeof(int).IsClass);
            Assert.False(typeof(uint).IsClass);
            Assert.False(typeof(float).IsClass);
            Assert.False(typeof(double).IsClass);
        }
    }
}