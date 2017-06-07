using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2763 - {0}")]
    public class Bridge2763
    {
        [Test]
        public static async void TestAsyncArgument()
        {
            var done = Assert.Async();
            var list = await Bridge2763.GetList();
            Assert.NotNull(list);
            Assert.AreEqual(1, list.Count);
            Assert.True(list[0] is Bridge2763);
            done();
        }

        static async Task<List<object>> GetList() => new List<object> { await A() };
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        static async Task<Bridge2763> A() => new Bridge2763();
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    }
}