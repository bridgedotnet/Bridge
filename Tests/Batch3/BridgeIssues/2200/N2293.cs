using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2293 - {0}")]
    public class Bridge2293
    {
        public class CustomAttribute : Attribute
        {
        }

        // [AttributeUsage(AttributeTargets.All)] not required anymore
        [Custom]
        public delegate object CustomDelegate(object sender);

        [Test]
        public void TestAttributeUsage()
        {
            CustomDelegate cd = (sender) => { return sender; };

            // Just check that [Custom] can be applied with no [AttributeUsage(AttributeTargets.All)] required
            Assert.AreEqual(5, cd(5));
        }
    }
}
