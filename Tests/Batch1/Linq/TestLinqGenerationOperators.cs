using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Generation - {0}")]
    public class TestLinqGenerationOperators
    {
        [Test(ExpectedCount = 2)]
        public static void Test()
        {
            // TEST
            var numbers = (from n in Enumerable.Range(0, 6)
                           select new
                           {
                               Number = n,
                               IsOdd = n % 2 == 1
                           }).ToArray();
            var numbersExpected = new object[] {
                 new { Number = 0, IsOdd = false},
                 new { Number = 1, IsOdd = true},
                 new { Number = 2, IsOdd = false},
                 new { Number = 3, IsOdd = true},
                 new { Number = 4, IsOdd = false},
                 new { Number = 5, IsOdd = true},
                 };

            Assert.AreDeepEqual(numbersExpected, numbers, "Range() 6 items from 0");

            // TEST
            var repeatNumbers = Enumerable.Repeat(-3, 4).ToArray();
            var repeatNumbersExpected = new[] { -3, -3, -3, -3 };

            Assert.AreDeepEqual(repeatNumbersExpected, repeatNumbers, "Repeat() -3 four times");
        }
    }
}