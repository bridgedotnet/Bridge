using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2955 - {0}")]
    public class Bridge2955
    {
        protected abstract class Validation
        {
            internal static class Options
            {
                public static class Name
                {
                    public const int Minimum = 2;
                    public const int Maximum = 400;
                }
            }
        }

        [Test]
        public static void TestNestedClassName()
        {
            Assert.AreEqual(2, Validation.Options.Name.Minimum);
            Assert.AreEqual(400, Validation.Options.Name.Maximum);
        }
    }
}