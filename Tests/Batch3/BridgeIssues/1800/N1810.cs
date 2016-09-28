using Bridge.Test;

using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1810 - {0}")]
    public class Bridge1810
    {
        // https://github.com/bridgedotnet/Bridge/issues/1025#issuecomment-245424630
        // https://github.com/bridgedotnet/Bridge/issues/1025#issuecomment-246532630
        [Test]
        public void TestInterfaceIndexersAndCopyToAndIsReadOnly()
        {
            var l = new C<int>();
            Assert.NotNull(l, "IList created");

            var c = l as ICollection<int>;
            Assert.True(c.IsReadOnly, "IsReadOnly");

            var a = new int[] { 1, 2 };
            c.CopyTo(a, 0);
            Assert.AreEqual(0, a[0], "CopyTo()");
        }

        class C<T> : IList<T>
        {
            T IList<T>.this[int index]
            {
                get
                {
                    return default(T);
                }

                set
                {

                }
            }

            int ICollection<T>.Count
            {
                get
                {
                    throw new NotImplementedException();
                }
            }

            bool ICollection<T>.IsReadOnly
            {
                get
                {
                    return true;
                }
            }

            void ICollection<T>.Add(T item)
            {
                throw new NotImplementedException();
            }

            void ICollection<T>.Clear()
            {
                throw new NotImplementedException();
            }

            bool ICollection<T>.Contains(T item)
            {
                throw new NotImplementedException();
            }

            void ICollection<T>.CopyTo(T[] array, int arrayIndex)
            {
                array[0] = default(T);
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                throw new NotImplementedException();
            }

            IEnumerator<T> IEnumerable<T>.GetEnumerator()
            {
                throw new NotImplementedException();
            }

            int IList<T>.IndexOf(T item)
            {
                throw new NotImplementedException();
            }

            void IList<T>.Insert(int index, T item)
            {
                throw new NotImplementedException();
            }

            bool ICollection<T>.Remove(T item)
            {
                throw new NotImplementedException();
            }

            void IList<T>.RemoveAt(int index)
            {
                throw new NotImplementedException();
            }
        }
    }
}