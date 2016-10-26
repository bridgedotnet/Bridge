using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1968 - {0}")]
    public class Bridge1968
    {
        [Test]
        public void TestGenericNullable()
        {
            var type1 = typeof(double);
            var type2 = typeof(Nullable<double>);
            var value1 = Activator.CreateInstance(type1);
            var value2 = Activator.CreateInstance(type2);

            Assert.False(type1 == type2);
            Assert.False(value1 == value2);

            Assert.False(type1.IsClass);
            Assert.False(type2.IsClass);

            Assert.AreEqual(0, value1);
            Assert.Null(value2);
        }
    }
}