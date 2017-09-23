using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3151 - {0}")]
    public class Bridge3151
    {
        public class SomeClass
        {
            private Action action;
#pragma warning disable CS0114 // Member hides inherited member; missing override keyword
            public Action this[string key]
#pragma warning restore CS0114 // Member hides inherited member; missing override keyword
            {
                get
                {
                    return action;
                }
                set
                {
                    action = value;
                }
            }
        }

        [Test]
        public static void TestLeftAssigmentForDelegates()
        {
            string msg = null;
            var ht = new SomeClass();

            ht[""] += () => { msg = "test"; };
            ht[""]();

            Assert.AreEqual("test", msg);
        }
    }
}