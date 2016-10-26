using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1970 - {0}")]
    public class Bridge1970
    {
        public class Test
        {
            [Bridge.Reflectable(true)]
            public static readonly bool IsInitialized = GetIsInitializedValue();
            
            private static bool GetIsInitializedValue()
            {
                return true;
            }
        }

        [Test]
        public void TestCase()
        {
            var type1 = Type.GetType("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970.Test, Bridge.ClientTest.Batch3");
            Assert.AreEqual(true, type1.GetField("IsInitialized").GetValue(null));
        }
    }
}