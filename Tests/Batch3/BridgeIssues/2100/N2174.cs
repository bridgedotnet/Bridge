using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2174 - {0}")]
    public class Bridge2174
    {
        public class CustomCmp<T> : IComparer<T> where T : IComparable<T>
        {
            public int Compare(T x, T y)
            {
                return x.CompareTo(y);
            }
        }

        public class WrappingCmp<T> : IComparer<T>
        {
            private readonly IComparer<T> _wrapped;

            public WrappingCmp(IComparer<T> wrapped)
            {
                _wrapped = wrapped;
            }

            public int Compare(T x, T y)
            {
                return _wrapped.Compare(x, y);
            }
        }

        [Test]
        public static void TestGenericComparerDefault()
        {
            //comparer Default "as such" works
            {
                var cmp = Comparer<string>.Default;
                Assert.True(cmp.Compare("a", "b") < 0, "[1]is less than zero as expected?");
            }

            //comparer Create "as such" works
            {
                var cmp = Comparer<string>.Create((x, y) => x.CompareTo(y));
                Assert.True(cmp.Compare("a", "b") < 0, "[2]is less than zero as expected?");
            }

            //custom comparer "as such" works
            {
                var cmp = new CustomCmp<string>();
                Assert.True(cmp.Compare("a", "b") < 0, "[3]is less than zero as expected?");
            }

            //custom comparer wrapped works
            {
                var cmp = new WrappingCmp<string>(new CustomCmp<string>());
                Assert.True(cmp.Compare("a", "b") < 0, "[4]is less than zero as expected?");
            }

            //default comparer wrapped doesn't work
            {
                var cmp = new WrappingCmp<string>(Comparer<string>.Default);
                Assert.True(cmp.Compare("a", "b") < 0, "[5]is less than zero as expected?");
            }

            //created comparer wrapped doesn't work
            {
                var cmp = new WrappingCmp<string>(Comparer<string>.Create((x, y) => x.CompareTo(y)));
                Assert.True(cmp.Compare("a", "b") < 0, "[6]is less than zero as expected?");
            }
        }
    }
}