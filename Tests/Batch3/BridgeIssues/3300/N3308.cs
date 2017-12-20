using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring that overriding the Equals
    /// method for classes does not result in infinite recursion in
    /// generated JavaScript code.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3308 - {0}")]
    public class Bridge3308
    {
        public class A
        {
            private int val;

            public int Val
            {
                get { return val; }
            }

            public A(int v)
            {
                val = v;
            }

            public override bool Equals(object o)
            {
                A a = (A)o;
                if (a.Val < 0)
                    return base.Equals(o);
                else
                    return this.Val == a.Val;
            }

            public override int GetHashCode()
            {
                return base.GetHashCode();
            }
        }

        /// <summary>
        /// The test just checks results in situations where the recursion loop
        /// would otherwise happen.
        /// </summary>
        [Test]
        public static void TestEqualsOverride()
        {
            A a1 = new A(10);
            A a2 = new A(10);
            A a3 = new A(-10);

            Assert.False(a1 == a2, "Could compare (==) two variables that are different instances of the same class with same value.");
            Assert.True(a1.Equals(a2), "Different instances of same class with same value .Equals() to true.");
            Assert.False(a1.Equals(a3), "Different instances of same class with different value .Equals() to false.");
        }
    }
}