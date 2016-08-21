using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1517 - {0}")]
    public class Bridge1517
    {
        [Test]
        public void TestEqualTuples()
        {
            Tuple<int> a1 = new Tuple<int>(1);
            Tuple<int> b1 = new Tuple<int>(1);
            Assert.True(a1.Equals(b1), "1 equals");
            Assert.True(a1.GetHashCode() == b1.GetHashCode(), "1 ==");
            Assert.False(a1.GetHashCode() != b1.GetHashCode(), "1 !=");

            Tuple<int, int> a2 = new Tuple<int, int>(1, 2);
            Tuple<int, int> b2 = new Tuple<int, int>(1, 2);
            Assert.True(a2.Equals(b2), "2 equals");
            Assert.True(a2.GetHashCode() == b2.GetHashCode(), "2 ==");
            Assert.False(a2.GetHashCode() != b2.GetHashCode(), "2 !=");
        }

        [Test]
        public void TestInequalTuples()
        {
            Tuple<int> a1 = new Tuple<int>(3);
            Tuple<int> b1 = new Tuple<int>(4);
            Assert.False(a1.Equals(b1), "1 equals");
            Assert.False(a1.GetHashCode() == b1.GetHashCode(), "1 ==");
            Assert.True(a1.GetHashCode() != b1.GetHashCode(), "1 !=");

            Tuple<int, int> a2 = new Tuple<int, int>(1, 7);
            Tuple<int, int> b2 = new Tuple<int, int>(1, 8);
            Assert.False(a2.Equals(b2), "2 equals");
            Assert.False(a2.GetHashCode() == b2.GetHashCode(), "2 ==");
            Assert.True(a2.GetHashCode() != b2.GetHashCode(), "2 !=");
        }
    }
}