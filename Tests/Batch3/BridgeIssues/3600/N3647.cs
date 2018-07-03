using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures discarders are correctly positioned in tuple definitions.
    /// </summary>
    [TestFixture(TestNameFormat = "#3647 - {0}")]
    public class Bridge3647
    {
        /// <summary>
        /// A tuple-returning function to be subject to discarders applying.
        /// </summary>
        /// <returns></returns>
        private static (string Var1, string Var2) Test()
        {
            return ("test1", "test2");
        }

        /// <summary>
        /// Tests the discarders with KeyValuePair object and tuple functions.
        /// </summary>
        [Test]
        public static void TestDiscard()
        {
            (string _, string value) = new KeyValuePair<string, string>("key", "value");
            Assert.AreEqual("value", value, "Value portion of KeyValuePair can be selected with discarder.");

            (string key, string _) = new KeyValuePair<string, string>("key", "value");
            Assert.AreEqual("key", key, "Key portion of KeyValuePair can be selected with discarder.");

            (string a, string _) = Test();
            Assert.AreEqual("test1", a, "First position of Tuple can be selected with discarder.");

            (string _, string b) = Test();
            Assert.AreEqual("test2", b, "Second position of Tuple can be selected with discarder.");
        }
    }
}