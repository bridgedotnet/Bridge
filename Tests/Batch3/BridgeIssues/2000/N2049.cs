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

        public static IEnumerable<object[]> Compare_Equals_TestData()
        {
            yield return new object[] { default(int?), default(int?), 0 };
            yield return new object[] { new int?(7), default(int?), 1 };
            yield return new object[] { default(int?), new int?(7), -1 };
            yield return new object[] { new int?(7), new int?(7), 0 };
            yield return new object[] { new int?(7), new int?(5), 1 };
            yield return new object[] { new int?(5), new int?(7), -1 };
        }

        [Test]
        public static void TestNullableCompareEquals()
        {
            foreach (var data in Bridge2049.Compare_Equals_TestData())
            {
                int? n1 = (int?) data[0];
                int? n2 = (int?) data[1];
                int expected = (int) data[2];

                Assert.AreEqual(expected == 0, Nullable.Equals(n1, n2));
                Assert.AreEqual(expected == 0, n1.Equals(n2));
                Assert.AreEqual(expected, Nullable.Compare(n1, n2));
            }
        }
    }
}