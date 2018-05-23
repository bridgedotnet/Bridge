using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3590 - {0}")]
    public class Bridge3590
    {
        [External]
        [Name("Test")]
        public class Test
        {
            [ExpandParams]
            public extern Test(params int[] arr);

            [ExpandParams]
            public extern void Foo(params int[] arr);
        }

        [Test]
        public static void TestExternalExpandParams()
        {
            var count = -1;
            /*@
            var Test = function () {
                count = arguments.length;
                this.Foo = function () {
                    count = arguments.length;
                };
            };
            */
            var arr = new[] { 1, 2, 3 };

            var test = new Test(arr);
            Assert.AreEqual(3, count);

            arr = new[] { 1, 2, 3, 4, 5 };
            test.Foo(arr);
            Assert.AreEqual(5, count);
        }
    }
}