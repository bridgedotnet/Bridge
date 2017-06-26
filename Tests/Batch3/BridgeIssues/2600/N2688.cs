using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Bridge.Test.NUnit;
using Bridge.Html5;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2688 - {0}")]
    public class Bridge2688
    {
        [Test]
        public static void TestCaseNull()
        {
            string value = Global.Undefined.As<string>();
            switch (value)
            {
                case null:
                    Assert.True(true);
                    return;
                default:
                    Assert.Fail();
                    break;
            }
        }
    }
}