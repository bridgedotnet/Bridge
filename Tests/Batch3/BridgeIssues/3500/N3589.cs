using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge3589.Root;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3589 - {0}")]
    public class Bridge3589
    {
        public static class Root
        {
            public class Logger<T>
            {
                public static T Log(T data)
                {
                    return data;
                }
            }
        }

        [Test]
        public static void TestUsingStaticOnGeneric()
        {
            var s = "Hello, World!";
            Assert.AreEqual(s, Logger<string>.Log(s));
        }
    }
}