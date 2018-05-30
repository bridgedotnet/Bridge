using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring the array's IsFixedSize test works.
    /// </summary>
    [TestFixture(TestNameFormat = "#3583 - {0}")]
    public class Bridge3583
    {
        /// <summary>
        /// Make a fixed-size array, and also cast it into an IList and check
        /// whether its fixed size state is retained.
        /// </summary>
        [Test]
        public static void TestIsFixedSize()
        {
            var arr = new int[] { 1, 2, 3 };
            Assert.True(arr.IsFixedSize, "Fixed-size array's IsFixedSize is true.");

            var ilist = (IList)arr;
            Assert.True(ilist.IsFixedSize, "Fixed-size array cast into IList has its IsFixedSize retained as true.");
        }
    }
}