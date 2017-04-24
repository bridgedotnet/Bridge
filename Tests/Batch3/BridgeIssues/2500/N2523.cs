using System;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2523 - {0}")]
    public class Bridge2523
    {
        class Class1
        {
            public static async Task<object> ReturnObject(Class2 class2)
            {
                await class2?.ReturnObject2();

                return new object();
            }
        }

        class Class1Workaround
        {
            public static async Task<object> ReturnObject(Class2 class2)
            {
                await (class2?.ReturnObject2());

                return new object();
            }
        }

        class Class2
        {
            public Task<object> ReturnObject2()
            {
                TaskCompletionSource<object> tcs = new TaskCompletionSource<object>();
                tcs.SetResult(new object());

                return tcs.Task;
            }
        }

        [Test]
        public static async void TestAsyncConditionalAccess()
        {
            var done = Assert.Async();
            var result = await Class1.ReturnObject(new Class2());
            Assert.NotNull(result);
            done();
        }

        [Test]
        public static async void TestAsyncConditionalAccessWorkaround()
        {
            var done = Assert.Async();
            var result = await Class1Workaround.ReturnObject(new Class2());
            Assert.NotNull(result);
            done();
        }
    }
}