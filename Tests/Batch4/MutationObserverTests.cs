using Bridge.Test;
using System;
using System.Threading.Tasks;
using Bridge.Html5;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "MutationObserverTests - {0}")]
    public class MutationObserverTests
    {
        private int ChangesCount {get; set; }

        [Test]
        public void MutationObserverIsActuallyCalledForNewlyAttachedElements()
        {
            var done = Assert.Async();

            //setup observer
            var observer = new MutationObserver((changes, _) => {
                ChangesCount += changes.Length;
            });

            observer.Observe(Document.Body, new MutationObserverInit {
                Subtree = true,
                ChildList = true
            });

            //mutate DOM
            Document.Body.AppendChild(new HTMLSpanElement());

            //observer will be invoked asynchronously

            Task task = new Task(null);

            Window.SetTimeout(async delegate
            {
                await Task.Delay(1);
                task.Complete();
            });

            await task;

            Assert.AreEqual(1, ChangesCount);

            done();
        }
    }
}
