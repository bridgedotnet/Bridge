using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1328 - {0}")]
    public class Bridge1328
    {
        [Test]
        public static void TestOptionalParamsForClasses()
        {
            var l1 = new ClassLink(url: "url", text: "test");
            Assert.AreEqual("some", l1.name);

            var l2 = new ClassLink2(url: "url2", text: "test2");
            Assert.NotNull(l2.name);

            var l3 = new ClassLink3(text: "test3", url: "url3");
            Assert.AreEqual("url3", l3.Url);
            Assert.AreEqual("test3", l3.Text);
            Assert.NotNull(l3.Name);
            Assert.AreEqual(0, l3.Name.Value);
        }

        [Test]
        public static void TestOptionalParamsForStructs()
        {
            var l1 = new StructLink(url: "url", text: "test");
            Assert.AreEqual("some", l1.name);

            var l2 = new StructLink2(url: "url2", text: "test2");
            Assert.NotNull(l2.name);

            var l3 = new StructLink3(text: "test3", url: "url3");
            Assert.AreEqual("url3", l3.Url);
            Assert.AreEqual("test3", l3.Text);
            Assert.NotNull(l3.Name);
            Assert.AreEqual(0, l3.Name.Value);
        }

        public struct Optional2<T>
        {
        }

        public struct Optional3<T>
        {
            public T Value { get; set; }

            public Optional3(T v) : this()
            {
                Value = v;
            }
        }

        public class ClassLink
        {
            public string name;

            public ClassLink(string url, string text, string name = "some")
            {
                this.name = name;
            }
        }

        public class ClassLink2
        {
            public Optional2<string> name;

            public ClassLink2(string url, string text, Optional2<string> name = new Optional2<string>())
            {
                this.name = name;
            }
        }

        public class ClassLink3
        {
            public Optional3<int> Name;
            public string Url { get; set; }
            public string Text { get; set; }

            public ClassLink3(string url, string text, Optional3<int> name = new Optional3<int>())
            {
                this.Name = name;
                this.Url = url;
                this.Text = text;
            }
        }

        public struct StructLink
        {
            public string name;

            public StructLink(string url, string text, string name = "some") : this()
            {
                this.name = name;
            }
        }

        public struct StructLink2
        {
            public Optional2<string> name;

            public StructLink2(string url, string text, Optional2<string> name = new Optional2<string>()) : this()
            {
                this.name = name;
            }
        }

        public struct StructLink3
        {
            public Optional3<int> Name;
            public string Url { get; set; }
            public string Text { get; set; }

            public StructLink3(string url, string text, Optional3<int> name = new Optional3<int>()) : this()
            {
                this.Name = name;
                this.Url = url;
                this.Text = text;
            }
        }
    }
}