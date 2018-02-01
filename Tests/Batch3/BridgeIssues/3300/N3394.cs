using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether a custom comparer can be
    /// applied to an array of values.
    /// </summary>
    [TestFixture(TestNameFormat = "#3394 - {0}")]
    public class Bridge3394
    {
        /// <summary>
        /// The custom comparer implementation.
        /// </summary>
        public class CustomComparer : IComparer<int>
        {
            int IComparer<int>.Compare(int a, int b)
            {
                return -a.CompareTo(b);
            }
        }

        /// <summary>
        /// Create a List of integers and apply the custom comparer.
        /// </summary>
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

            Assert.AreEqual(arr[0], 25, "First List entry is 25 (last, before sorting).");
            Assert.AreEqual(arr[1], 20, "Second List entry is 20 (fourth, before sorting).");
            Assert.AreEqual(arr[2], 15, "Third List entry is 15 (third, before sorting).");
            Assert.AreEqual(arr[3], 10, "Fourth List entry is 10 (second, before sorting).");
            Assert.AreEqual(arr[4], 5, "Last List entry is 20 (first, before sorting).");
        }
    }
}