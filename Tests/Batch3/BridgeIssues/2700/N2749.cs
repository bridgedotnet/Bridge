using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2749 - {0}")]
    public class Bridge2749
    {
        [Test(ExpectedCount = 1)]
        public static void TestExtensionMethodBoxing()
        {
            DateTime val1 = new DateTime(636318720000000000);
            Date val2 = (val1).As<Date>();
            object offset = val2.GetTimezoneOffset();

            Assert.True(offset is int);
        }
    }
}