using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1913 - {0}")]
    public class Bridge1913
    {
        [Test]
        public void TestActivatorEnumCreation()
        {
            Type type = typeof(Bridge1913);

            var result1 = !type.IsSubclassOf(type);
            var result2 = !(type.IsSubclassOf(type));

            Assert.True(result1 == result2);
        }
    }
}