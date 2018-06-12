using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3628 - {0}")]
    public class Bridge3628
    {
        public class A : IEnumerable<object>
        {
            public dynamic[] f;

            public extern IEnumerator<object> GetEnumerator();
            extern IEnumerator IEnumerable.GetEnumerator();

            public A()
            {
            }

            public A(dynamic[] f)
            {
                this.f = f;
            }

            public static implicit operator A(dynamic[] f)
            {
                return new A(f);
            }
        }

        [Test]
        public static void TestConversion()
        {
            A good = (A)new object[] { 1, 2, 3, 4, 5 };
            Assert.AreEqual(5, good.f.Length);

            A bad = new object[] { 1, 2, 3, 4, 5 };
            Assert.AreEqual(5, bad.f.Length);
        }
    }
}