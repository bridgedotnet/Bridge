using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring emission order of local functions
    /// obey the order they are actually entered in code.
    /// </summary>
    [TestFixture(TestNameFormat = "#3625 - {0}")]
    public class Bridge3625
    {
        /// <summary>
        /// Tests the order by declaring two local funcions, in such a way
        /// that the second calls the first. If the local function is not
        /// emitted in the correct order, the return value would not match
        /// the expected one.
        /// </summary>
        [Test]
        public static void TestLocalFns()
        {
            string One(string msg)
            {
                return msg;
            }

            string Two(string msg)
            {
                return "Two:" + One(msg);
            }

            Assert.AreEqual("One", One("One"), "First local function call matches expected result.");
            Assert.AreEqual("Two:One", Two("One"), "Second local function call matches expected result.");
        }
    }
}