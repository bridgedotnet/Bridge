using System;
using System.Collections.Generic;
using System.Reflection;
using Bridge;
using Bridge.Test;
using Bridge.Html5;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#696]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#696 - {0}")]
    public class Bridge696
    {
        public delegate int Speak(string message);

        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            var namedCallbacks = new Dictionary<string, Speak>();
            namedCallbacks.Add("Shout", message => message.Length);
            namedCallbacks.Add("Whisper", message => message.Length);

            Assert.AreEqual(namedCallbacks["Shout"]("HELLO!"), 6, "Bridge696 HELLO!");
            Assert.AreEqual(namedCallbacks["Whisper"]("HELLO"), 5, "Bridge696 HELLO");
        }
    }
}