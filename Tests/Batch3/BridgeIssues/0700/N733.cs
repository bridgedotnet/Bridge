using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#733]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#733 - {0}")]
    public class Bridge733
    {
        private static DateTime DateA
        {
            get; set;
        }

        private static DateTime dateb;

        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            // These objects will never be equal, fails in .NET native too.
            // MinValue returns a UTC instance.
            // DateA and dateb return Local (or Unspecified) instances.
            // Change to compare to new Date() instead of MinValue

            // Assert.True(DateA.ToString("O") == DateTime.MinValue.ToString("O"), "Bridge733 DateA");
            // Assert.True(dateb.ToString("O") == DateTime.MinValue.ToString("O"), "Bridge733 dateb");

            Assert.True(DateA.ToString("O") == new DateTime().ToString("O"), "Bridge733 DateA");
            Assert.True(dateb.ToString("O") == new DateTime().ToString("O"), "Bridge733 dateb");

            dateb = DateTime.Now; // to prevent warning that dateb is never assigned
        }
    }
}