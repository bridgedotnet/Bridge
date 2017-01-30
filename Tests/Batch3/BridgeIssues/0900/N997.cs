using Bridge.Test.NUnit;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#997]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#997 - {0}")]
    public class Bridge997
    {
        [Test(ExpectedCount = 1)]
        public static void TestConvertAllForIntList()
        {
            var l = new List<int> { 1, 2, 3 };

            Assert.AreDeepEqual(new[] { "1", "2", "3" }, l.ConvertAll(x => x.ToString()).ToArray());
        }

        [Test(ExpectedCount = 1)]
        public static void TestConvertAllForNullConverter()
        {
            var l = new List<int> { 1, 2, 3 };

            Converter<int, string> converter = null;

            Assert.Throws(() => l.ConvertAll(converter), "Null converter throws exception");
        }
    }
}