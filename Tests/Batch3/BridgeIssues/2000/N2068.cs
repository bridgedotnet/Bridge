using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2068 - {0}")]
    public class Bridge2068
    {
        [Test]
        public static void TestGetGenericTypeDefinition()
        {
            var genericTypeDefinition = typeof(List<>).GetGenericTypeDefinition();

            Assert.AreEqual(typeof(List<>), genericTypeDefinition);
            Assert.AreEqual("System.Collections.Generic.List$1", genericTypeDefinition.FullName);
        }
    }
}