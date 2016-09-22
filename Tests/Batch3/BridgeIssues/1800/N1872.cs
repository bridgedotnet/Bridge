using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1872 - {0}")]
    public class Bridge1872
    {
        [Test]
        public async void TestCase()
        {
            var done = Assert.Async();
            Task task = new Task(null);
            Window.SetTimeout(async delegate
            {
                await Task.Delay(1);
                task.Complete();
            });

            await task;
            
            Assert.True(task.IsCompleted);

            done();
        }
    }
}