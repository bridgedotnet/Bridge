using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2592 - {0}")]
    public class Bridge2592
    {
        private static void MethodThowsException1()
        {
            string nulref = null;
            var ch = nulref.CharAt(1);
        }

        private static void MethodThowsException2()
        {
            throw new Exception();
        }

        private static int Prop1
        {
            get
            {
                throw new Exception("Test");
            }
        }

        [Test]
        public static void TestStackTrace()
        {
            bool caught = false;
            try
            {
                MethodThowsException1();
            }
            catch (Exception e)
            {
                caught = true;
                var s = e.StackTrace;
                var result = Regex.Split(s, "\r\n|\r|\n");
                Assert.True(result[1].Contains("Bridge2592.MethodThowsException1"));
            }
            Assert.True(caught);

            caught = false;
            try
            {
                MethodThowsException2();
            }
            catch (Exception e)
            {
                caught = true;
                var s = e.StackTrace;
                var result = Regex.Split(s, "\r\n|\r|\n");
                Assert.True(result[1].Contains("Bridge2592.MethodThowsException2"));
            }
            Assert.True(caught);

            caught = false;
            try
            {
                var i = Prop1;
            }
            catch (Exception e)
            {
                caught = true;
                var s = e.StackTrace;
                var result = Regex.Split(s, "\r\n|\r|\n");
                Assert.True(result[1].Contains("Bridge2592.Prop1.get"));
            }
            Assert.True(caught);
        }
    }
}