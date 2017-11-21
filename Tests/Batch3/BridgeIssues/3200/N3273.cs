using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in loading current domain's assemblies and
    /// traversing them searching for a specific custom attribute.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3273 - {0}")]
    public class Bridge3273
    {
        /// <summary>
        /// An example of assembly attribute that should be used at least once
        /// (in this project).
        /// </summary>
        [AttributeUsage(AttributeTargets.Assembly)]
        public class MyAssemblyAttribute : Attribute
        {
        }

        /// <summary>
        /// This should not be used anywhere (thus return zero matches)
        /// </summary>
        [AttributeUsage(AttributeTargets.Assembly)]
        public class MyUnusedAssemblyAttribute : Attribute
        {
        }

        /// <summary>
        /// Test whether we can query for the attribute if cycling thru all assemblies.
        /// </summary>
        [Test]
        public static void TestAssemblyGetCustomAttributes()
        {
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            var atLeastOnce = false;
            foreach (var assembly in assemblies)
            {
                var myAssemblyAttr = assembly.GetCustomAttributes(typeof(MyAssemblyAttribute), false);

                if (myAssemblyAttr.Length == 0)
                {
                    Assert.True(true, "Assembly attribute sought but not found in '" + assembly.FullName + "'.");
                }
                else if (myAssemblyAttr.Length == 1)
                {
                    Assert.True(true, "Assembly attribute sought and found in '" + assembly.FullName + "'.");
                    atLeastOnce = true;
                }
                else
                {
                    Assert.True(false, "Assembly attribute sought in '" + assembly.FullName + "' but returned an unexpected amount of matches. Match count: " + myAssemblyAttr.Length + ".");
                }

                var myUnusedAssemblyAttr = assembly.GetCustomAttributes(typeof(MyUnusedAssemblyAttribute), false);
                Assert.AreEqual(0, myUnusedAssemblyAttr.Length, "Unused assembly attribute sought and not found in '" + assembly.FullName + "'.");
            }

            Assert.True(atLeastOnce, "Assembly attribute has been found at least once among the assemblies searched.");
        }
    }
}