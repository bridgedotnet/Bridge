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
    [TestFixture(TestNameFormat = "#2930 - {0}")]
    public class Bridge2930
    {
        enum A
        {
            A
        }

        [Test]
        public static void TestHasFlag()
        {
            Assert.True(A.A.HasFlag(A.A));
        }
    }
}