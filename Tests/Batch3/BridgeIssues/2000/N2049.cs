using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2049 - {0}")]
    public class Bridge2049
    {
        private class G<T> { }

        [Test]
        public static void TestNullableGetUnderlyingType()
        {
            Assert.AreEqual(typeof(int), Nullable.GetUnderlyingType(typeof(int?)));
            Assert.AreEqual(null, Nullable.GetUnderlyingType(typeof(int)));
            Assert.AreEqual(null, Nullable.GetUnderlyingType(typeof(G<int>)));
            Assert.Throws<ArgumentNullException>(() => Nullable.GetUnderlyingType((Type)null));
        }
    }
}