using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge3589.Root;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in ensuring a 'using static' to a local class
    /// won't result in invalid emitted Bridge code.
    /// </summary>
    [TestFixture(TestNameFormat = "#3589 - {0}")]
    public class Bridge3589
    {
        /// <summary>
        /// A local class to be 'statically used'.
        /// </summary>
        public static class Root
        {
            /// <summary>
            /// The definition here should be valid once output to JavaScript.
            /// </summary>
            /// <typeparam name="T"></typeparam>
            public class Logger<T>
            {
                public static T Log(T data)
                {
                    return data;
                }
            }
        }

        /// <summary>
        /// Just ensure whether the static-used class can be referenced.
        /// </summary>
        [Test]
        public static void TestUsingStaticOnGeneric()
        {
            var s = "Hello, World!";
            Assert.AreEqual(s, Logger<string>.Log(s), "Method from a 'using static' class can be called.");
        }
    }
}