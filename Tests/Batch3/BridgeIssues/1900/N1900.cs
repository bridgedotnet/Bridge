using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1900 - {0}")]
    public class Bridge1900
    {
        [Bridge.Reflectable(true)]
        private static bool TryGetValue(out int value)
        {
            value = 1;
            return true;
        }

        [Test]
        public void TestOutParamInMetadata()
        {
            Assert.True(typeof(Bridge1900).GetMethod("TryGetValue").ParameterTypes[0] == typeof(int));
        }
    }
}