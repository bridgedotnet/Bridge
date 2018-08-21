using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test ensures Type.IsInterface works as it does in native C#.
    /// </summary>
    [TestFixture(TestNameFormat = "#3684 - {0}")]
    public class Bridge3684
    {
        /// <summary>
        /// Check IsInterface result off various types.
        /// </summary>
        [Test]
        public static void TestIsInterface()
        {
            Assert.True(typeof(IDictionary<,>).IsInterface, "IDictionary<,> is an interface.");
            Assert.True(typeof(IDictionary<string, string>).IsInterface, "IDictionary<string,string> is not an interface.");
            Assert.True(typeof(IDisposable).IsInterface, "IDisposable is an interface.");
            Assert.False(typeof(int).IsInterface, "int base type is not an interface.");
            Assert.False(typeof(string).IsInterface, "string base type is not an interface.");
            Assert.False(typeof(Int32).IsInterface, "Int32 struct is not an interface.");
            Assert.False(typeof(Bridge3684).IsInterface, "Bridge3684 class is not an interface.");
            Assert.False(typeof(Dictionary<string, string>).IsInterface, "Dictionary<string, string> is not an interface.");
        }
    }
}