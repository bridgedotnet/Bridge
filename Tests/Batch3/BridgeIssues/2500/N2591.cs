using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2591 - {0}")]
    public class Bridge2591
    {
        private static bool run = false;
        [Convention(Notation.UpperCase)]
        public static void Main()
        {
            run = true;
        }

        [Test]
        public static void TestEntryPointCustomName()
        {
            Assert.True(Bridge2591.run);
            Assert.NotNull(typeof(Bridge2591)["MAIN"]);
        }
    }
}