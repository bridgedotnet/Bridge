using System;
using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3064 - {0}")]
    public class Bridge3064
    {
        [Test]
        public static void TestObjectInitializationMode()
        {
            var obj = new N3064();
            Assert.AreStrictEqual(0, obj.Number);
        }
    }
}