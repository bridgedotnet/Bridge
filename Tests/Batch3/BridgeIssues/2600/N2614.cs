using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2614 - {0}")]
    public class Bridge2614
    {
        public class X
        {
            public long Id1 { get; set; } = 1;
            public ulong Id2 { get; set; } = 1;
            public decimal Id3 { get; set; } = 1;
        }

        [Test]
        public static void TestInitializers()
        {
            var x = new X();
            Assert.True(x.Id1 > 0);
            Assert.True((object)x.Id1 is long);

            Assert.True(x.Id2 > 0);
            Assert.True((object)x.Id2 is ulong);

            Assert.True(x.Id3 > 0);
            Assert.True((object)x.Id3 is decimal);
        }
    }
}