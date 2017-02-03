using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1197 - {0}")]
    public class Bridge1197
    {
        [Test]
        public static void TestGetHashCodeOnDictionary()
        {
            var dict = new Dictionary<int, string>();

            // Calling GetHashCode() breaks the dictionary.
            var hash = dict.GetHashCode();

            // Count is still 0.
            Assert.AreEqual(0, dict.Count);

            foreach (var item in dict)
            {
                Assert.Fail("Dictionary should be empty");
            }
        }
    }
}