using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    internal static class Ext
    {
        public static void ForEach<T>(this IEnumerable<T> self, Action<T> operation)
        {
            foreach (var t in self)
            {
                operation(t);
            }
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2138 - {0}")]
    public class Bridge2138
    {
        public interface ISomeCollection<T> : IEnumerable<T>
        {
            T this[int position] { get; }
        }

        public class SomeCollection<T> : ISomeCollection<T>
        {
            private readonly List<T> _items = new List<T>();

            public T this[int pos]
            {
                get { return _items[pos]; }
            }

            public SomeCollection(IEnumerable<T> initialItems)
            {
                _items.AddRange(initialItems);
            }

            public IEnumerator<T> GetEnumerator()
            {
                return _items.GetEnumerator();
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return _items.GetEnumerator();
            }
        }

        public class Something<T>
        {
            private readonly Action _action;

            public Something(Action action)
            {
                _action = action;
            }

            public void SomeAction()
            {
                _action();
            }
        }

        public class Elem<T>
        {
            public ISomeCollection<Something<T>> Itms { get; }

            public Elem(IEnumerable<Something<T>> itms)
            {
                Itms = new SomeCollection<Something<T>>(itms);
            }
        }

        public class Holder<RecordT>
        {
            private readonly Elem<RecordT> _itms;

            public Holder(Elem<RecordT> itms)
            {
                _itms = itms;
            }

            public Action Access1()
            {
                return () =>
                {
                    _itms.Itms.ForEach(x =>
                    {
                    });

                    _itms.Itms[0].SomeAction();
                };
            }

            public Action Access2()
            {
                return () =>
                {
                    _itms.Itms[0].SomeAction();
                };
            }
        }

        private static bool _test1Success, _test2Success;

        private static void Test1()
        {
            Action onSuccess = () => _test1Success = true;
            var el = new Elem<int>(new List<Something<int>> { new Something<int>(onSuccess) });

            var hld = new Holder<int>(el);
            hld.Access1()();
        }

        private static void Test2()
        {
            Action onSuccess = () => _test2Success = true;
            var el = new Elem<int>(new List<Something<int>> { new Something<int>(onSuccess) });

            var hld = new Holder<int>(el);
            hld.Access2()();
        }

        [Test]
        public static void TestGenericInterfaceIndexer()
        {
            Test1();
            Assert.True(_test1Success);

            Test2();
            Assert.True(_test2Success);
        }
    }
}