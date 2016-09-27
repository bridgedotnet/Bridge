using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1884 - {0}")]
    public class Bridge1884
    {
        public class Foo
        {
            public List<string> Items
            {
                get; private set;
            }
            public List<List<string>> Items1
            {
                get; private set;
            }
            public Dictionary<int, string> Indexed
            {
                get; private set;
            }
            public Dictionary<int, List<string>> Indexed1
            {
                get; private set;
            }

            public Foo()
            {
                Items = new List<string>(new[] { "1" });
                Items1 = new List<List<string>>();
                Indexed = new Dictionary<int, string>() {[100] = "Dolrt" };
                Indexed1 = new Dictionary<int, List<string>>() {[1] = new List<string>() };
            }
        }

        [Test]
        public void TestCollectionInitilizers()
        {
            Foo foo = new Foo
            {
                Items =
                {
                    "One",
                    "Two",
                    "Three"
                },
                Items1 =
                {
                    new List<string>
                    {
                        "One",
                        "Two",
                        "Three"
                    }
                },
                Indexed = {
                    [1] = "Lorem",
                    [5] = "Ipsum"
                },
                Indexed1 =
                {
                    [1] = { "One", "Two", "Three"}
                }
            };

            Assert.AreEqual(3, foo.Indexed.Count);
            Assert.AreEqual(4, foo.Items.Count);

            Assert.AreEqual(1, foo.Indexed1.Count);
            Assert.AreEqual(1, foo.Items1.Count);

            Assert.AreEqual(3, foo.Indexed1[1].Count);
            Assert.AreEqual(3, foo.Items1[0].Count);
        }
    }
}