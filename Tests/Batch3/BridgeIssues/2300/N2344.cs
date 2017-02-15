using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2344 - {0}")]
    public class Bridge2344
    {
        public interface IFoo<T, V>
        {
            T First { get; set; }
            V Second { get; set; }
            void Something();
            event Action<IFoo<T, V>> Ev;
            void DoInvoke();
        }

        public class Foo : IFoo<HTMLElement, string>
        {
            public HTMLElement First { get; set; }
            public string Second { get; set; }
            public event Action<IFoo<HTMLElement, string>> Ev;

            public void Something()
            {
                Second = "zzz";
            }

            public void DoInvoke()
            {
                Ev?.Invoke(this);
            }

            public static void SomeMethod<T, V>(IFoo<T, V> instance)
            {
                instance.Ev += x => {
                    x.Something();
                };
                instance.DoInvoke();
            }
        }

        [Test(ExpectedCount = 1)]
        public static void TestHtmlElementName()
        {
            if (Utilities.BrowserHelper.IsPhantomJs())
            {
                Assert.True(true, "The test is excluded on PhantomJS engine");
                return;
            }

            var instance = new Foo();
            Foo.SomeMethod(instance);

            Assert.AreEqual("zzz", instance.Second);
        }
    }
}