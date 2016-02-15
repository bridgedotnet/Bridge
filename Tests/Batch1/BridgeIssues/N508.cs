using Bridge.Test;

using System;
using System.Threading.Tasks;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#508]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#508 - {0}")]
    public class Bridge508
    {
        public static Action QUnitAsyncDone { get; set; }

        [Test(ExpectedCount = 1)]
        public static async void TestUseCase()
        {
            Bridge508.QUnitAsyncDone = Assert.Async();

            var result = await DoSomethingAsync();

            Assert.AreEqual("A(0)A(1)B(0)B(1)B(2)", result, "#508 DoSomethingAsync");

            QUnitAsyncDone();
        }

        public static async Task<string> DoSomethingAsync()
        {
            var result = string.Empty;

            int i = 0;
            for (var np = await InitPage(); np != null; np = await NextPage())
            {
                result += string.Format("A({0})", i++);
            }

            count = 0;
            i = 0;
            for (var np = await InitPage(); np != null; np = NextPage1())
            {
                result += string.Format("B({0})", i++);
            }

            return result;
        }

        public static int count = 0;

        public static async Task<object> InitPage()
        {
            await Task.Delay(0);
            count++;
            return count < 2 ? new { } : null;
        }

        public static async Task<object> NextPage()
        {
            await Task.Delay(0);
            count++;
            return count < 3 ? new { } : null;
        }

        public static object NextPage1()
        {
            count++;
            return count < 4 ? new { } : null;
        }
    }
}