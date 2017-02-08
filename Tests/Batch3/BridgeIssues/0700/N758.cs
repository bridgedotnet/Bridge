using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#758]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#758 - {0}")]
    public class Bridge758
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            List<DateTime> list = new List<DateTime>();
            list.Add(new DateTime(2015, 1, 2));
            list.Add(new DateTime(2015, 1, 1));
            list.Add(new DateTime(2015, 1, 3));

            list.Sort();
            Assert.True(list[0] == new DateTime(2015, 1, 1), "Bridge758 2015/1/1");
            Assert.True(list[1] == new DateTime(2015, 1, 2), "Bridge758 2015/1/2");
            Assert.True(list[2] == new DateTime(2015, 1, 3), "Bridge758 2015/1/3");
        }
    }
}