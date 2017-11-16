using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3273 - {0}")]
    public class Bridge3273
    {
        [AttributeUsage(AttributeTargets.Assembly)]
        public class MyAssemblyAttribute : Attribute
        {
        }

        [AttributeUsage(AttributeTargets.Assembly)]
        public class MyAssembly2Attribute : Attribute
        {
        }

        [Test]
        public static void TestAssemblyGetCustomAttributes()
        {
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            foreach (var assembly in assemblies)
            {
                var myAssemblyAttr = assembly.GetCustomAttributes(typeof(MyAssemblyAttribute), false);
                Assert.AreEqual(0, myAssemblyAttr.Length);
            }
        }
    }
}