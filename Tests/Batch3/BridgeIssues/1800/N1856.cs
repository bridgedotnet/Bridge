using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1856 - {0}")]
    public class Bridge1856
    {
        public interface IObservable<T>
        {
            void Observe(Action<T> args);
        }

        public class Signal<T> : IObservable<T>
        {
            public Signal(string x) { }

            public void Observe(Action<T> a) { }
        }

        public class CollectionChangeArgs<T>
        {

        }

        public class Collection<T>
        {
            Signal<CollectionChangeArgs<T>> changed;

            public IObservable<CollectionChangeArgs<T>> Changed
            {
                get { return changed ?? (changed = new Signal<CollectionChangeArgs<T>>("Collection<T>.Changed")); }
            }

            public void Foo() { }
        }

        public class HtmlRenderElement
        {
            Collection<HtmlRenderElement> children;
            public Collection<HtmlRenderElement> Children
            {
                get
                {
                    if (children == null)
                    {
                        children = new Collection<HtmlRenderElement>();
                        children.Changed.Observe(OnChildrenChanged);
                    }
                    return children;
                }
            }

            void OnChildrenChanged(CollectionChangeArgs<HtmlRenderElement> a)
            {

            }
        }

        [Test]
        public void TestCase()
        {
            var x = new HtmlRenderElement();
            x.Children.Foo();
            Assert.NotNull(x.Children.Changed);
        }
    }
}