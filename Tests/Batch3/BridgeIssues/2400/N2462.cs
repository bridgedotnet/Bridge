using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2462 - {0}")]
    public class Bridge2462
    {
        public static async Task<string[]> TestAsync()
        {
            var result = await ValidateAsync();

            return result.ToArray();
        }

        public static async Task<List<string>> ValidateAsync()
        {
            var result = new List<string>();
            result.Add("xxx");
            result.Add("yyy");

            return await Task.FromResult(result);
        }

        [Test]
        public static async void TestReturnInAsync()
        {
            var done = Assert.Async();

            var step = 0;
            try
            {
                step = 1;

                var items = await TestAsync();
                if (items.Length != 0)
                {
                    step = 2;
                    return;
                }

                step = 3;
            }
            finally
            {
                step *= 10;
            }

            Assert.AreEqual(20, step);

            done();
        }
    }
}