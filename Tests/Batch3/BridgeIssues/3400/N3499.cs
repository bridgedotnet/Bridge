using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Tests dictionary keys as System.Guids against issues fetching the values.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3499 - {0}")]
    public class Bridge3499
    {
        /// <summary>
        /// Original test case provided by the reporter. The second Guid key
        /// does not trigger the problem whereas the third does.
        /// </summary>
        [Test]
        public static void TestKeysWithSimilarHashCode()
        {
            Dictionary<Guid, string> superDict = new Dictionary<Guid, string>();

            
            var x1 = "str1";
            Guid guid1 = new Guid("00000003-0000-0000-0001-00001c000000");
            var x2 = "str2";
            Guid guid2 = new Guid("00000001-0000-0000-0001-000004000000");
            var x3 = "str3";
            Guid guid3 = new Guid("00000003-0000-0000-0001-000022000000");

            superDict.Add(guid1, x1);
            superDict.Add(guid2, x2);
            superDict.Add(guid3, x3);

            var keys = superDict.Keys;
            Assert.AreEqual(3, keys.Count(), "Can fetch key count from dictionary.");
            Assert.True(keys.Contains(guid1), "Can fetch key matching first Guid value.");
            Assert.True(keys.Contains(guid2), "Can fetch key matching second Guid value.");
            Assert.True(keys.Contains(guid3), "Can fetch key matching third Guid value.");

            var values = superDict.Values;
            Assert.AreEqual(3, values.Count(), "Can fetch value count from dictionary.");
            Assert.True(values.Contains(x1), "Can fetch value matching first string value.");
            Assert.True(values.Contains(x2), "Can fetch value matching second string value.");
            Assert.True(values.Contains(x3), "Can fetch value matching third string value.");
        }

        /// <summary>
        /// This expands and generalizes the test by making dictionaries with
        /// increasing levels of similarity and fetching the values.
        /// Originally this broke at position 19 (or 20, as position 19 is a
        /// hyphen).
        /// </summary>
        [Test]
        public static void TestKeysWithIncreasingSimilarity()
        {
            var guidstr = "00000000-0000-0000-0000-000000000000";
            var guid1 = new Guid(guidstr);

            for (int i = 0; i < guidstr.Length; i++)
            {
                if (guidstr[i] == '-')
                {
                    continue;
                }

                var guidstr2 = guidstr.Substring(0, i) + "1" + guidstr.Substring(i + 1);
                var guid2 = new Guid(guidstr2);

                var dict = new Dictionary<Guid, int>();
                dict.Add(guid1, 0 + i);
                dict.Add(guid2, 1 + i);

                Assert.AreEqual(2, dict.Values.Count, "'Values' works when difference is at position #" + (i + 1));
            }
        }
    }
}