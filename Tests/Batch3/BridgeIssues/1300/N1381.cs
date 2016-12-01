using System;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1381 - {0}")]
    public class Bridge1381
    {
        public static int value = 4;

        [Test]
        public static void TestReservedWords()
        {
            try
            {
#pragma warning disable 219
                int Date = 3;
#pragma warning restore 219
                var m = new DateTime().Month;
            }
            catch (Exception)
            {
                Assert.Fail("Date variable");
            }

            try
            {
#pragma warning disable 219
                int String = 4;
#pragma warning restore 219
                var s = new System.String()[0];
            }
            catch (Exception)
            {
                Assert.Fail("String variable");
            }
            try
            {
#pragma warning disable 219
                int Number = 7;
#pragma warning restore 219
                new Double();
                new Float();
            }
            catch (Exception)
            {
                Assert.Fail("Number variable");
            }
            try
            {
#pragma warning disable 219
                int document = 7;
#pragma warning restore 219
                var c = Document.Children;
            }
            catch (Exception)
            {
                Assert.Fail("document variable");
            }
            try
            {
#pragma warning disable 219
                int Bridge = 7;
#pragma warning restore 219
                Assert.AreEqual(4, value);
            }
            catch (Exception)
            {
                Assert.Fail("Bridge variable");
            }
        }
    }
}