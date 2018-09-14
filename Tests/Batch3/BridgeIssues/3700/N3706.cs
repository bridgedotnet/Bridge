using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3706 - {0}")]
    public class Bridge3706
    {
        public static void FooWorking(KeyValuePair<String, Action>[] actions)
        {
            actions[0].Value();
        }

        public static void FooFails(IList<KeyValuePair<String, Action>> actions)
        {
            actions[0].Value();
        }

        public static void Test()
        {
            Assert.True(true, "Action is invoked");
        }

        [Test(ExpectedCount = 2)]
        public static void TestIListIndexer()
        {
            var l = new KeyValuePair<String, Action>[]
               {
                    new KeyValuePair<String, Action>("Bar", Test),
               };
            FooWorking(l);
            FooFails(l);
        }
    }
}