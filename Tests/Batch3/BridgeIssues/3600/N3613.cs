using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3613 - {0}")]
    public class Bridge3613
    {
        [Test]
        public static void TestUnboxCast()
        {
            Assert.Throws<InvalidCastException>(() => {
                byte byteVal = 255;
                object boxed = byteVal;
                int unboxed = (int)boxed;
            });
        }
    }
}