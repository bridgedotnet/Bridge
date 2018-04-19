using Bridge.Html5;
using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;

using System;
using System.Threading.Tasks;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_HTML5)]
    [TestFixture(TestNameFormat = "MutationObserver - {0}")]
    public class MutationObserverTests
    {
        private const string ATTRIBUTE = "SPAN";
        private const string TYPE = "childList";

        private MutationRecord[] Records
        {
            get; set;
        }

        [Test(ExpectedCount = 10)]
        public void TestNewlyAttachedElements()
        {
            Records = null;

            var done = Assert.Async();

            var root = HtmlHelper.FixtureElement;

            //setup observer
            var observer = new MutationObserver((changes, _) =>
            {
                if (changes.Length > 0)
                {
                    Records = changes;
                }
            });

            observer.Observe(root, new MutationObserverInit
            {
                Subtree = true,
                ChildList = true
            });

            Task task = new Task(() =>
            {
                // mutate DOM
                // observer will be invoked asynchronously
                root.AppendChild(new HTMLSpanElement());
            });

            task.ContinueWith(async x =>
            {
                await Task.Delay(10);
                try
                {
                    AssertRecords(this.Records);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }

                observer.Disconnect();

                done();
            });

            task.Start();
        }

        private void AssertRecords(MutationRecord[] records)
        {
            Assert.NotNull(records, "records");
            Assert.AreEqual(1, records.Length, "records.Length");

            var record = records[0];

            Assert.NotNull(record, "record");

            Assert.NotNull(record.Target, "Target");
            Assert.AreEqual(HtmlHelper.FixtureElement.Id, record.Target.As<Element>().Id, "Target Id");

            Assert.AreEqual(TYPE, record.Type, "Type");

            Assert.AreEqual(0, record.RemovedNodes.Length, "RemovedNodes");
            Assert.AreEqual(1, record.AddedNodes.Length, "AddedNodes");

            var added = record.AddedNodes[0];
            Assert.NotNull(added, "added");
            Assert.AreEqual(ATTRIBUTE, added.NodeName.ToUpper(), "added.NodeName");
        }
    }
}