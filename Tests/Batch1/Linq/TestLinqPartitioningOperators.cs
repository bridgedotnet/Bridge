using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Partitioning - {0}")]
    public class TestLinqPartitioningOperators
    {
        [Test(ExpectedCount = 6)]
        public static void Test()
        {
            // TEST
            var numbers = new[] { 1, 3, 5, 7, 9 };
            var firstTwo = numbers.Take(2).ToArray();
            Assert.AreDeepEqual(new[] { 1, 3 }, firstTwo, "Take() the first two array elements");

            // TEST
            var takeWhileLessTwo = numbers.TakeWhile((number) => number < 2).ToArray();
            Assert.AreDeepEqual(new[] { 1 }, takeWhileLessTwo, "TakeWhile() less two");

            // TEST
            var takeWhileSome = numbers.TakeWhile((number, index) => number - index <= 4).ToArray();
            Assert.AreDeepEqual(new[] { 1, 3, 5, 7 }, takeWhileSome, "TakeWhile() by value and index");

            // TEST
            var skipThree = numbers.Skip(3).ToArray();
            Assert.AreDeepEqual(new[] { 7, 9 }, skipThree, "Skip() the first three");

            // TEST
            var skipWhileLessNine = numbers.SkipWhile(number => number < 9).ToArray();
            Assert.AreDeepEqual(new[] { 9 }, skipWhileLessNine, "SkipWhile() less then 9");

            // TEST
            var skipWhileSome = numbers.SkipWhile((number, index) => number <= 3 && index < 2).ToArray();
            Assert.AreDeepEqual(new[] { 5, 7, 9 }, skipWhileSome, "SkipWhile() by value and index");
        }
    }
}