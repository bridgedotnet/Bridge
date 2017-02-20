using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2407 - {0}")]
    [AnnotatedFunction]
    public class Bridge2407
    {
        [Name("ChangedStaticName")]
        public static string GetStaticName()
        {
            return "Static";
        }

        [Name("ChangedInstanceName")]
        public string GetInstanceName()
        {
            return "Instance";
        }

        delegate string StringDelegate();

        [Test]
        public void TestNamedFunctions()
        {
            StringDelegate staticMethod = Bridge2407.GetStaticName;

            var s = staticMethod.ToString();
            Assert.True(s.ToLower().Contains("function changedstaticname"), "Contains function name annotation in " + s);
            Assert.AreEqual("Static", Bridge2407.GetStaticName());
            Assert.AreEqual("Static", staticMethod());

            s = this["ChangedInstanceName"].ToString();
            Assert.True(s.ToLower().Contains("function changedinstancename"), "Contains function name annotation in " + s);
            Assert.AreEqual("Instance", this.GetInstanceName());
        }
    }
}