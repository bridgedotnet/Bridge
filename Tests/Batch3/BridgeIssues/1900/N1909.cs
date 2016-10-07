using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1909 - {0}")]
    public class Bridge1909
    {
        public enum EnumType
        {
            Item1
        }

        [Test]
        public void TestActivatorEnumCreation()
        {
            var et = Activator.CreateInstance(typeof (EnumType));
            Assert.AreEqual(0, et);
            Assert.True(et is EnumType);
        }
    }
}