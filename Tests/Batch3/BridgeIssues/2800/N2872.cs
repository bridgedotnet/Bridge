using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consist in checking whether chained assingment of
    /// variable values works.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2872 - {0}")]
    public class Bridge2872
    {
        /// <summary>
        /// From several scenarios, using the string type, check if the
        /// chained assingment results in the expected variable contents.
        /// </summary>
        [Test]
        public static void TestChainingAssignment()
        {
            string a = a = "test";
            Assert.AreEqual(a, "test", "String chained assignment on same variable works.");

            string s, s2 = s = "test";
            Assert.AreEqual(s2, "test", "On more than one variable, works to the indirect variable.");
            Assert.AreEqual(s, "test", "On more than one variable, works to the direct variable.");


#pragma warning disable CS0168 // Variable is declared but never used
            string c, c3, c2 = c = "test", c4;
#pragma warning restore CS0168 // Variable is declared but never used
            Assert.AreEqual(c2, "test", "With unrelated variables, works on indirect variable.");
            Assert.AreEqual(c, "test", "With unrelated variables, works on direct variable.");

            Assert.Throws(() => { Bridge.Script.Write("var x = c3;"); }, "Unrelated variable to the left is untouched.");
            Assert.Throws(() => { Bridge.Script.Write("var x = c4;"); }, "Unrelated variable to the right is untouched.");
        }
    }
}