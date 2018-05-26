using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// 
    /// </summary>
    [TestFixture(TestNameFormat = "#3590 - {0}")]
    public class Bridge3590
    {
        /// <summary>
        /// The class exploring the issue.
        /// </summary>
        [External]
        [Name("Test")]
        public class Test
        {
            [ExpandParams]
            public extern Test(params int[] arr);

            [ExpandParams]
            public extern void Foo(params int[] arr);
        }

        /// <summary>
        /// Test by just making an instance of the Test class and populating it
        /// with values.
        /// </summary>
        [Test]
        public static void TestExternalExpandParams()
        {
            // There will be a client-side "side effect" to change the value of
            // this variable.
            var count = -1;

            // The block below will output the client-side implementation of the
            // "external" Test class.
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
            Assert.AreEqual(3, count, "External implementation of class can be run.");

            arr = new[] { 1, 2, 3, 4, 5 };
            test.Foo(arr);
            Assert.AreEqual(5, count, "External implementation of class' side effect works.");
        }
    }
}