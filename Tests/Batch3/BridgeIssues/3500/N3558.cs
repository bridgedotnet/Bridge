using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring code built with local function
    /// definitions that are not actually referenced can be built with Bridge.
    /// </summary>
    [TestFixture(TestNameFormat = "#3558 - {0}")]
    public class Bridge3558
    {
        /// <summary>
        /// Test by defining a local function and never actually referencing it.
        /// </summary>
        [Test]
        public static void TestUnusedLocalFn()
        {
            var a = 15;
#pragma warning disable CS8321 // Local function is declared but never used
            bool test() => a > 10;
#pragma warning restore CS8321 // Local function is declared but never used

            Assert.AreEqual(15, a, "Unused local function does not result in broken Bridge code.");
        }
    }
}