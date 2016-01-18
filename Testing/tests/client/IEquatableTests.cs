using System;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_IEQUATABLE)]
    [TestFixture(TestNameFormat = "IEquatable - {0}")]
    public class IEquatableTests
    {
        class MyEquatable : IEquatable<MyEquatable>
        {
            public bool result;
            public MyEquatable other;

            public bool Equals(MyEquatable other)
            {
                this.other = other;
                return result;
            }
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CallingMethodThroughIComparableInterfaceInvokesImplementingMethod()
        {
            MyEquatable a = new MyEquatable(), b = new MyEquatable();
            a.result = true;
            Assert.True(((IEquatable<MyEquatable>)a).Equals(b));
            Assert.AreStrictEqual(a.other, b);
            a.result = false;
            Assert.False(((IEquatable<MyEquatable>)a).Equals(b));

            a.result = true;
            Assert.True(((IEquatable<MyEquatable>)a).Equals(null));
            Assert.AreStrictEqual(a.other, null);
            a.result = false;
            Assert.False(((IEquatable<MyEquatable>)a).Equals(null));

            a.result = true;
            Assert.True(a.Equals(b));
            Assert.AreStrictEqual(a.other, b);
            a.result = false;
            Assert.False(a.Equals(b));

            a.result = true;
            Assert.True(a.Equals(null));
            Assert.AreStrictEqual(a.other, null);
            a.result = false;
            Assert.False(a.Equals(null));
        }
    }
}
