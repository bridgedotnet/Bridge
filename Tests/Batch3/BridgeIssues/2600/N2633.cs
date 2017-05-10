using System;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2633 - {0}")]
    public class Bridge2633
    {
        class A
        {
            public int Value;
        }

        [Test(ExpectedCount = 10)]
        public static async void TestAsyncCaptureVariable()
        {
            var done = Assert.Async();

            await Task.Delay(1);
            Action<int>[] array = new Action<int>[10];

            for (int n = 0; n < 10; n++)
            {
                var a = new A { Value = n };
                array[n] = i => Assert.AreEqual(i, a.Value);
            }

            for (int n = 0; n < 10; n++)
            {
                array[n](n);
            }

            done();
        }
    }
}