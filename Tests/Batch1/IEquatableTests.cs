using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_IEQUATABLE)]
    [TestFixture(TestNameFormat = "IEquatable - {0}")]
    public class IEquatableTests
    {
        private class MyEquatable : IEquatable<MyEquatable>
        {
            public bool result;
            public MyEquatable other;

            public bool Equals(MyEquatable other)
            {
                this.other = other;
                return result;
            }
        }

        [Test]
        public void CallingMethodThroughIComparableInterfaceInvokesImplementingMethod()
        {
            MyEquatable a = new MyEquatable(), b = new MyEquatable();
            a.result = true;
            Assert.True(((IEquatable<MyEquatable>)a).Equals(b));
            Assert.AreStrictEqual(b, a.other);
            a.result = false;
            Assert.False(((IEquatable<MyEquatable>)a).Equals(b));

            a.result = true;
            Assert.True(((IEquatable<MyEquatable>)a).Equals(null));
            Assert.AreStrictEqual(null, a.other);
            a.result = false;
            Assert.False(((IEquatable<MyEquatable>)a).Equals(null));

            a.result = true;
            Assert.True(a.Equals(b));
            Assert.AreStrictEqual(b, a.other);
            a.result = false;
            Assert.False(a.Equals(b));

            a.result = true;
            Assert.True(a.Equals(null));
            Assert.AreStrictEqual(null, a.other);
            a.result = false;
            Assert.False(a.Equals(null));
        }
    }
}