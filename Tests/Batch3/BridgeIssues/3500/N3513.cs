using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring conversion from an extension method
    /// to Action works in Bridge.
    /// </summary>
    [TestFixture(TestNameFormat = "#3513 - {0}")]
    public class Bridge3513
    {
        static void Run(Action a)
        {
            a();
        }

        /// <summary>
        /// Tests passing the string's extension method as a parameter to the
        /// 'Action'-parametered function and checking whether the result is
        /// the expected one.
        /// </summary>
        [Test]
        public static void TestExtensionMethodAsAction()
        {
            Bridge3513StringExtension.StaticMessage = "Inline extension conversion works.";
            Run("Hello, World!".Print);

            Bridge3513StringExtension.StaticMessage = "Variable-bound extension conversion works.";
            var str = "Hello, World!";
            Run(str.Print);
        }
    }

    public static class Bridge3513StringExtension
    {
        public static string StaticMessage = "passed";

        public static void Print(this string message)
        {
            Assert.AreEqual("Hello, World!", message, StaticMessage);
        }
    }
}