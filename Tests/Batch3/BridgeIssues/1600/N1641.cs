using System;
using System.Collections.Generic;
using Bridge.Test;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1641 - {0}")]
    public class Bridge1641
    {
        [Test]
        public async void TestOutInAsync()
        {
            var done = Assert.Async();
            uint result = await Bridge1641.Test();
            Assert.AreEqual(0, result);
            done();
        }

        private static Dictionary<uint, uint> _Foo = new Dictionary<uint, uint>();

        private static async Task<uint> Test()
        {
            await Task.Delay(1);
            uint bar;
            _Foo.TryGetValue(1, out bar);

            return bar;
        }
    }
}