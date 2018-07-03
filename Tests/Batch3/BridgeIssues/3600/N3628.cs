using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures implicit operator is emitted when the variable declaration
    /// defines its type and there is an implicit operator available.
    /// </summary>
    [TestFixture(TestNameFormat = "#3628 - {0}")]
    public class Bridge3628
    {
        /// <summary>
        /// Original sample, as elements are dropped.
        /// </summary>
        public class A : IEnumerable<object>
        {
            public extern IEnumerator<object> GetEnumerator();
            extern IEnumerator IEnumerable.GetEnumerator();

            /// <summary>
            /// just drop whatever is provided. Result's count will always be 0.
            /// </summary>
            /// <param name="f"></param>
            public static implicit operator A(dynamic[] f)
            {
                return null;
            }
        }

        /// <summary>
        /// A sample where the number of elements is kept.
        /// </summary>
        public class B : IEnumerable<object>
        {
            public dynamic[] f;

            public extern IEnumerator<object> GetEnumerator();
            extern IEnumerator IEnumerable.GetEnumerator();

            public B()
            {
            }

            public B(dynamic[] f)
            {
                this.f = f;
            }

            public static implicit operator B(dynamic[] f)
            {
                return new B(f);
            }
        }

        /// <summary>
        /// Tests by instantiating the classes with an explicit cast and
        /// omitted cast, expecting both to result in the same structure.
        /// </summary>
        [Test]
        public static void TestConversion()
        {
            A good = (A)new object[] { 1, 2, 3, 4, 5 };
            A bad = new object[] { 1, 2, 3, 4, 5 };
            Assert.True(0 == good.Count() && good.Count() == bad.Count(), "Implicit casting works (original test case, array elements dropped).");

            B good_b = (B)new object[] { 1, 2, 3, 4, 5 };
            B bad_b = new object[] { 1, 2, 3, 4, 5 };
            Assert.True(5 == good_b.f.Length && good_b.f.Length == bad_b.f.Length, "Implicit casting works (modified test, keeping array elements).");
        }
    }
}