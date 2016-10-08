using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1938 - {0}")]
    public class Bridge1938
    {
        [Test]
        public void TestIsArrayTemplate()
        {
            Type type = 3.GetType();

            var result1 = !type.IsArray;
            var result2 = !(type.IsArray);

            Assert.True(result1, "Non array");
            Assert.AreEqual(result1, result2, "IsArray (for non array)");

            var type2 = (new int[0]).GetType();

            var result3 = !type2.IsArray;
            var result4 = !(type2.IsArray);

            Assert.False(result3, "Array");
            Assert.AreEqual(result3, result4, "IsArray (for array)");
        }
    }
}