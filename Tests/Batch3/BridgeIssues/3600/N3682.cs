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
            Assert.AreEqual(1, int.Parse(" 1"), "The ' 1' string is parsed into 1.");
            Assert.AreEqual(2, int.Parse("2 "), "The '2 ' string is parsed into 2.");
            Assert.AreEqual(3, int.Parse(" 3 "), "The ' 3 ' string is parsed into 3.");

            Assert.AreEqual(4, int.Parse("\t4"), "The '\\t4' string is parsed into 4.");
            Assert.AreEqual(5, int.Parse("5\t"), "The '5\\t' string is parsed into 5.");
            Assert.AreEqual(6, int.Parse("\t6\t"), "The '\\t6\\t' string is parsed into 6.");

            Assert.AreEqual(7, int.Parse("\r\n7"), "The '\\r\\n7' string is parsed into 7.");
            Assert.AreEqual(8, int.Parse("8\n"), "The '8\\n' string is parsed into 8.");
            Assert.AreEqual(9, int.Parse("\r\n9\n"), "The '\\r\\n9\\n' string is parsed into 9.");
        }

        [Test]
        public static void TestIntTryParse()
        {
            int res;
            Assert.True(int.TryParse(" 1", out res), "The ' 1' string can be parsed.");
            Assert.AreEqual(1, res, "The parsed string resulted in 1.");
            Assert.True(int.TryParse("2 ", out res), "The '2 ' string can be parsed.");
            Assert.AreEqual(2, res, "The parsed string resulted in 2.");
            Assert.True(int.TryParse(" 3 ", out res), "The ' 3 ' string can be parsed.");
            Assert.AreEqual(3, res, "The parsed string resulted in 3.");

            Assert.True(int.TryParse("\t4", out res), "The '\\t4' string can be parsed.");
            Assert.AreEqual(4, res, "The parsed string resulted in 4.");
            Assert.True(int.TryParse("5\t", out res), "The '5\\t' string can be parsed.");
            Assert.AreEqual(5, res, "The parsed string resulted in 5.");
            Assert.True(int.TryParse("\t6\t", out res), "The '\\t6\\t' string can be parsed.");
            Assert.AreEqual(6, res, "The parsed string resulted in 6.");

            Assert.True(int.TryParse("\r\n7", out res), "The '\\r\\n7' string can be parsed.");
            Assert.AreEqual(7, res, "The parsed string resulted in 7.");
            Assert.True(int.TryParse("8\n", out res), "The '8\\n' string can be parsed.");
            Assert.AreEqual(8, res, "The parsed string resulted in 8.");
            Assert.True(int.TryParse("\r\n9\n", out res), "The '\\r\n9\\n' string can be parsed.");
            Assert.AreEqual(9, res, "The parsed string resulted in 9.");

            // Force passing an int as parameter from client side, what can
            // happen from some implementations, like Bridge.Newtonsoft.Json
            var success = false;
            /*@
            success = System.Int32.tryParse(10, res);
             */
            Assert.True(success, "Client-side crafted call with integer as parameter works.");
            Assert.AreEqual(10, res, "The crafted int '10' is parsed as 10.");

            Assert.False(int.TryParse("11 n", out res), "The '11 n' string can't be parsed.");
        }
    }
}