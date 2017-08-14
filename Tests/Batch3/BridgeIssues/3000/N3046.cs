using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3046 - {0}")]
    public class Bridge3046
    {
        public class Test : IDisposable
        {
            public void Dispose()
            {
            }
        }

        [Test]
#pragma warning disable 1998
        public static async void TestAsyncUsing()
#pragma warning restore 1998
        {
            var done = Assert.Async();
            using (var test = new Test())
            {
                Assert.NotNull(test);
            }

            done();
        }
    }
}