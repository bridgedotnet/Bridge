using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2793 - {0}")]
    public class Bridge2793
    {
        [Test]
        public static async void TestAsyncBlockStatement()
        {
            var done = Assert.Async();
            switch ("a")
            {
                case "a":
                    {
                        await Task.Delay(1);
                        Assert.True(true);
                    }
                    break;
            }

            done();
        }
    }
}