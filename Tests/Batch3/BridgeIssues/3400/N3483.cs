using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// 
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "KeyValuePair as Dictionary key #3483 - {0}")]
    public class Bridge3483
    {
        [Test]
        public static void KeyValuePairAsDictionaryKeyWorks()
        {
            var val = "MyValue";
            var g = new Guid("9B9AAC17-22BB-425C-AA93-9C02C5146965");
            var a = new KeyValuePair<Guid, Guid>(g, Guid.Empty);
            var dict = new Dictionary<KeyValuePair<Guid, Guid>, string>();
            dict[a] = val;
            var b = new KeyValuePair<Guid, Guid>(g, Guid.Empty);

            Assert.AreEqual(val, dict[b], "KeyValuePair as Dictionary key works. See Issue #3483");
        }
    }
}