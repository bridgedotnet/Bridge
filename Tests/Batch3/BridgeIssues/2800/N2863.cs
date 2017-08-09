using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2863 - {0}")]
    public class Bridge2863
    {
        public class C1
        {
            public extern int this[int index]
            {
                [External]
                get;
                [External]
                set;
            }

            public int length
            {
                get
                {
                    throw new Exception("This should not happen.");
                }
            }
        }

        [Test]
        public static void TestIndexChecking()
        {
            var arr = new int[] { 1, 2, 3 };

            unchecked
            {
                var i = arr[10];
                Assert.Null(i);
            }

            Assert.Null(unchecked(arr[10]));

            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var i = arr[10];
            });

            var p = new C1()[1];
            Assert.Null(p);
        }
    }
}