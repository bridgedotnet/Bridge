using System;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_ICOMPARABLE)]
    [TestFixture(TestNameFormat = "IComparable - {0}")]
    public class IComparableTests
    {
        class MyComparable : IComparable<MyComparable>
        {
            public int result;
            public MyComparable other;

            public int CompareTo(MyComparable other)
            {
                this.other = other;
                return result;
            }
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CallingMethodThroughIComparableInterfaceInvokesImplementingMethod()
        {
            MyComparable a = new MyComparable(), b = new MyComparable();
            a.result = 534;
            Assert.AreEqual(534, ((IComparable<MyComparable>)a).CompareTo(b));
            Assert.AreStrictEqual(b, a.other);

            a.result = -42;
            Assert.AreEqual(-42, ((IComparable<MyComparable>)a).CompareTo(null));
            Assert.AreStrictEqual(null, a.other);

            a.result = -534;
            Assert.AreEqual(-534, a.CompareTo(b));
            Assert.AreStrictEqual(b, a.other);

            a.result = 42;
            Assert.AreEqual(42, a.CompareTo(null));
            Assert.AreStrictEqual(null, a.other);
        }
    }
}
