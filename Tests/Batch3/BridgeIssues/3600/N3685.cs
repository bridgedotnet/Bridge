using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3685 - {0}")]
    public class Bridge3685
    {
        [Test]
        public static void TestIsFixedSize()
        {
            IList arr = new int[10];
            IList list = new List<int>();

            Assert.True(arr.IsFixedSize);
            Assert.False(list.IsFixedSize);
        }
    }
}