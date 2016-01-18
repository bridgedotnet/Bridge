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
            Assert.AreEqual(((IComparable<MyComparable>)a).CompareTo(b), 534);
            Assert.AreStrictEqual(a.other, b);

            a.result = -42;
            Assert.AreEqual(((IComparable<MyComparable>)a).CompareTo(null), -42);
            Assert.AreStrictEqual(a.other, null);

            a.result = -534;
            Assert.AreEqual(a.CompareTo(b), -534);
            Assert.AreStrictEqual(a.other, b);

            a.result = 42;
            Assert.AreEqual(a.CompareTo(null), 42);
            Assert.AreStrictEqual(a.other, null);
        }
    }
}
