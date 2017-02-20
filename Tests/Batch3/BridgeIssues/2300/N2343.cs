using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2343 - {0}")]
    public class Bridge2343
    {
        [Test]
        public static void TestBoxedEqualsAndGetHashCode()
        {
            var d = new Dictionary<object, object>();
            d.Add(1, 2.0);

            Assert.True(d.ContainsKey(1));
            Assert.False(d.ContainsKey(1.0));
            Assert.True(d.ContainsValue(2.0));
            Assert.False(d.ContainsValue(2));
            Assert.AreEqual(d[1], 2);

            d.Add(1.0, 3.0);
            Assert.True(d.ContainsKey(1.0));
            Assert.True(d.ContainsValue(3.0));
            Assert.AreEqual(d[1], 2);
            Assert.AreEqual(d[1.0], 3);

            Assert.Throws<ArgumentException>(() =>
            {
                d.Add(1.0, 4);
            });
        }
    }
}