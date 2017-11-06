using System;
using Bridge.Test.NUnit;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This will check whether List instances are also instances of
    /// IEnumerable and its inherited generics' types.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3244 - List instances are also instances of IEnumerable and inheritance - {0}")]
    public class Bridge3244
    {
        /// <summary>
        /// Simple class to act as a base type.
        /// </summary>
        public class A { }

        /// <summary>
        /// Simple class to just extend the A class.
        /// </summary>
        public class B : A { }

        /// <summary>
        /// The test consists in instantiating a List&lt;B&gt; and checking if
        /// it is an instance of the respective IENumerable&lt;B&gt; and also,
        /// IENumerable&lt;A&gt;, by inheritance.
        /// </summary>
        [Test]
        public static void TestIEnumerbaleTVariance()
        {
            // Make a list of B with two B instances
            object listB = new List<B> {
                new B(),
                new B()
            };

            // List<B> is an IEnumerable<B> (of itself)
            Assert.True(listB is IEnumerable<B>, "List<B> is an IEnumerable<B> (of itself)");

            // List<B> is an IEnumerable<object> (B inherits from object)
            Assert.True(listB is IEnumerable<object>, "List<B> is an IEnumerable<object> (B inherits from object)");

            // List<B> is an IEnumerable<A> (B inherits from A)
            Assert.True(listB is IEnumerable<A>, "List<B> is an IEnumerable<A> (B inherits from A)");

            // This was a slightly different test case reported on issue
            // bridgedotnet /Bridge#3245
            // Check if, once binding with a valid cast, the list remains.
            var bAsEnumerableA = (IEnumerable<A>)listB;
            Assert.AreEqual(2, bAsEnumerableA.Count(), "List supports casting to parent types (#3245)");
        }
    }
}