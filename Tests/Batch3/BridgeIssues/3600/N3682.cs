using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3682 - {0}")]
    public class Bridge3682
    {
        [Test]
        public static void TestIntParse()
        {
            Assert.AreEqual(1, int.Parse(" 1"));
            Assert.AreEqual(2, int.Parse("2 "));
            Assert.AreEqual(3, int.Parse(" 3 "));

            Assert.AreEqual(4, int.Parse("\t4"));
            Assert.AreEqual(5, int.Parse("5\t"));
            Assert.AreEqual(6, int.Parse("\t6\t"));

            Assert.AreEqual(7, int.Parse("\r\n7"));
            Assert.AreEqual(8, int.Parse("8\n"));
            Assert.AreEqual(9, int.Parse("\r\n9\n"));
        }
    }
}