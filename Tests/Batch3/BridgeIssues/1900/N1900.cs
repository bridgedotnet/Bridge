using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1900 - {0}")]
    public class Bridge1900
    {
        [Reflectable(true)]
        private static bool TryGetValue1(out int value)
        {
            value = 1;
            return true;
        }

        [Reflectable(true)]
        private static bool TryGetValue2(out int value, out string value2)
        {
            value = 1;
            value2 = "";
            return true;
        }

        [Reflectable(true)]
        private static bool TestOutRef(out int value, ref string s)
        {
            value = 1;
            return true;
        }

        [Test]
        public void TestOutParamInMetadata()
        {
            Assert.True(typeof(Bridge1900).GetMethod("TryGetValue1").ParameterTypes[0] == typeof(int));
            Assert.True(typeof(Bridge1900).GetMethod("TryGetValue2").ParameterTypes[1] == typeof(string));
            Assert.True(typeof(Bridge1900).GetMethod("TestOutRef").ParameterTypes[1] == typeof(string));
        }
    }
}