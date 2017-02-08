using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch4.Collections.Generic
{
    [TestFixture(TestNameFormat = "ComparerTests - {0}")]
    public class ComparerTests
    {
        private class C : IComparable<C>
        {
            public int value;

            public C(int value)
            {
                this.value = value;
            }

            public int CompareTo(C other)
            {
                return this.value.CompareTo(other.value);
            }
        }

        [Test]
        public void TypePropertiesAreCorrect_SPI_1546()
        {
            // #1546
            Assert.AreStrictEqual(typeof(object), typeof(Comparer<object>).BaseType, "BaseType should be correct");
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.Comparer$1[[System.Object, mscorlib]]", typeof(Comparer<object>).FullName, "FullName should be correct");
            Assert.True(typeof(Comparer<object>).IsClass, "IsClass should be true");

            object comparer = Comparer<object>.Default;
            Assert.True(comparer is Comparer<object>, "is Comparer<object> should be true");
            Assert.True(comparer is IComparer<object>, "is IComparer<object> should be true");
        }

        [Test]
        public void DefaultComparerCanOrderNumbers()
        {
            Assert.AreEqual(-1, Comparer<int>.Default.Compare(3, 8), "Compare(3, 8) should be -1");
            Assert.AreEqual(0, Comparer<int>.Default.Compare(3, 3), "Compare(3, 3) should be 0");
            Assert.AreEqual(1, Comparer<int>.Default.Compare(8, 3), "Compare(8, 3) should be 1");
        }

        [Test]
        public void DefaultComparerCanOrderNullValues()
        {
            Assert.AreEqual(1, Comparer<int?>.Default.Compare(0, null), "Compare(0, null) should be 1");
            Assert.AreEqual(-1, Comparer<int?>.Default.Compare(null, 0), "Compare(null, 0) should be -1");
            Assert.AreEqual(0, Comparer<int?>.Default.Compare(null, null), "Compare(null, null) should be 0");
        }

        [Test]
        public void DefaultComparerUsesCompareMethodIfClassImplementsIComparable()
        {
            Assert.AreEqual(-1, Comparer<C>.Default.Compare(new C(3), new C(8)), "Compare(3, 8) should be -1");
            Assert.AreEqual(0, Comparer<C>.Default.Compare(new C(3), new C(3)), "Compare(3, 3) should be 0");
            Assert.AreEqual(1, Comparer<C>.Default.Compare(new C(8), new C(3)), "Compare(8, 3) should be 1");
        }

        [Test]
        public void CreateWorks()
        {
            var comparer = Comparer<int>.Create((x, y) =>
            {
                Assert.AreEqual(8, x, "x should be 8");
                Assert.AreEqual(3, y, "y should be 3");
                return 42;
            });
            Assert.AreEqual(42, comparer.Compare(8, 3), "The result should be 42");
        }
    }
}