using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether a KeyValuePair object can be
    /// used as a dictionary key.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3483 - {0}")]
    public class Bridge3483
    {
        /// <summary>
        /// Test it by creating a dictionary with KeyValuePair&lt;Guid, Guid&gt;
        /// as its key and a string as its value.
        /// </summary>
        [Test]
        public static void KeyValuePairAsDictionaryKeyWorks()
        {
            // * Including elements of original test case
            var guid = new Guid("9B9AAC17-22BB-425C-AA93-9C02C5146965");
            var key_org = new KeyValuePair<Guid, Guid>(guid, Guid.Empty);
            var dict = new Dictionary<KeyValuePair<Guid, Guid>, string>();
            dict[key_org] = "MyValue";

            // another instance of the same valued pair as key_org
            var new_key = new KeyValuePair<Guid, Guid>(guid, Guid.Empty);

            Assert.AreEqual("MyValue", dict[new_key], "Originally reported test case works.");

            // *** Simplified tests

            // * Inline instance key vs variable-bound instance key
            var test1 = new Dictionary<KeyValuePair<int, int>, int>();
            test1.Add(new KeyValuePair<int, int>(1, 1), 1);

            // this should match the key added above
            var test1_probe = new KeyValuePair<int, int>(1, 1);

            Assert.AreEqual(1, test1[test1_probe], "Fetching from different instance works.");

            // * Inline instance key vs another inline instance key
            var test2 = new Dictionary<KeyValuePair<int, int>, int>();
            test2.Add(new KeyValuePair<int, int>(1, 1), 1);

            // the key here should match the key added above
            Assert.AreEqual(1, test2[new KeyValuePair<int, int>(1, 1)], "Fetching from inline instance works.");

            // * Both variable-bound key instances (different instances)
            // Keys must be the same
            var test3_probeA = new KeyValuePair<int, int>(1, 1);
            var test3_probeB = new KeyValuePair<int, int>(1, 1);

            var test3 = new Dictionary<KeyValuePair<int, int>, int>();
            test3.Add(test3_probeA, 1);

            Assert.AreEqual(1, test3[test3_probeA], "Fetching from same instance works.");
            Assert.AreEqual(1, test3[test3_probeB], "Fetching from different instance with same value works");

            // * Indexer operator value binding
            var test4 = new Dictionary<KeyValuePair<int, int>, int>();
            test4[new KeyValuePair<int, int>(1, 1)] = 1;

            // the key here should match the key added above
            Assert.AreEqual(1, test4[new KeyValuePair<int, int>(1, 1)], "Fetching after assigning with array indexer operator works.");

            // * Get method value fetching
            var test5 = new Dictionary<KeyValuePair<int, int>, int>();
            test5.Add(new KeyValuePair<int, int>(1, 1), 1);

            // the key here should match the key added above
            Assert.AreEqual(1, test5.Get(new KeyValuePair<int, int>(1, 1)), "Fetching via the Get() method works.");
        }
    }
}