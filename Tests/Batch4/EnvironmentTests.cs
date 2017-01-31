using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "EnvironmentTests - {0}")]
    public class EnvironmentTests
    {
        [Test]
        public void NewLineIsAStringContainingOnlyTheNewLineChar()
        {
            Assert.AreEqual("\n", Environment.NewLine);
        }
    }
}