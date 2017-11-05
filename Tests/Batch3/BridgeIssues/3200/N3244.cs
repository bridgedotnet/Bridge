using System;
using Bridge.Test.NUnit;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3244 - {0}")]
    public class Bridge3244
    {
        public class A { }

        public class B : A { }

        [Test]
        public static void TestIEnumerbaleTVariance()
        {
            object listB = new List<B> {
                new B(),
                new B()
            };

            Assert.True(listB is IEnumerable<object>);
            Assert.True(listB is IEnumerable<A>);
        }
    }
}