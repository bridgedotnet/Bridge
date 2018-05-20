using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3583 - {0}")]
    public class Bridge3583
    {
        [Test]
        public static void TestIsFixedSize()
        {
            var arr = new int[] { 1, 2, 3 };
            Assert.True(arr.IsFixedSize);

            var ilist = (IList)arr;
            Assert.True(ilist.IsFixedSize);
        }
    }
}