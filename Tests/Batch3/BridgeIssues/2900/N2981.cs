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
    [TestFixture(TestNameFormat = "#2981 - {0}")]
    public class Bridge2981
    {
        [Test]
        public static void TestCharIsPunctuation()
        {
            Assert.False(char.IsPunctuation('\u0100'));
        }
    }
}