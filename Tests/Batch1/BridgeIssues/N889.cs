using Bridge.Test;

using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#889]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#889 - {0}")]
    public class Bridge889
    {
        private static int Count(params int[] arr)
        {
            return arr.Length;
        }

        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            Assert.AreEqual(0, Count());
        }

        private static IEnumerable<T> MakeEnumerable<T>(params T[] arr)
        {
            foreach (var x in arr)
                yield return x;
        }

        [Test(ExpectedCount = 8)]
        public static void TestMakeEnumerable()
        {
            Assert.AreEqual(0, MakeEnumerable<object>().Count(), "MakeEnumerable object 0");
            Assert.AreEqual(2, MakeEnumerable<object>(1, 2.0).Count(), "MakeEnumerable object 2");

            Assert.AreEqual(0, MakeEnumerable<string>().Count(), "MakeEnumerable string 0");
            Assert.AreEqual(3, MakeEnumerable<string>("a", "b", "c").Count(), "MakeEnumerable string 3");

            Assert.AreEqual(0, MakeEnumerable<IEnumerable<object>>().Count(), "MakeEnumerable IEnumerable<object> 0");
            Assert.AreEqual(1, MakeEnumerable<IEnumerable<object>>(new object[] { 1, 2 }).Count(), "MakeEnumerable IEnumerable<object> 1");

            Assert.AreEqual(0, MakeEnumerable<List<List<object>>>().Count(), "MakeEnumerable List<List<object>> 0");
            Assert.AreEqual(2, MakeEnumerable<List<List<int>>>(new List<List<int>>(), new List<List<int>>()).Count(), "MakeEnumerable List<List<object>> 2");
        }
    }
}