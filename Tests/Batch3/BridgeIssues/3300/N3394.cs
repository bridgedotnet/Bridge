using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3394 - {0}")]
    public class Bridge3394
    {
        public class CustomComparer : IComparer<int>
        {
            int IComparer<int>.Compare(int a, int b)
            {
                return -a.CompareTo(b);
            }
        }

        [Test]
        public static void TestCustomComparer()
        {
            List<int> arr = new List<int>()
            {
                5,
                10,
                15,
                20,
                25
            };

            arr.Sort(new CustomComparer());

            Assert.AreEqual(arr[0], 25);
            Assert.AreEqual(arr[1], 20);
            Assert.AreEqual(arr[2], 15);
            Assert.AreEqual(arr[3], 10);
            Assert.AreEqual(arr[4], 5);
        }
    }
}