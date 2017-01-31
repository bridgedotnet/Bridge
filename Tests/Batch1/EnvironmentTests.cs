using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_ENVIRONMENT)]
    [TestFixture(TestNameFormat = "Environment - {0}")]
    public class EnvironmentTests
    {
        [Test]
        public void NewLineIsAStringContainingOnlyTheNewLineChar()
        {
            Assert.AreEqual("\n", Environment.NewLine);
        }
    }
}