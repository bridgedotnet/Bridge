using Bridge.Test.NUnit;
using System;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Query - {0}")]
    public class TestLinqQueryExecution
    {
        [Test(ExpectedCount = 6)]
        public static void Test()
        {
            // TEST
            int[] numbers = new int[] { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
            int i = 0;

            var aQuery = from n in numbers
                         select ++i;
            Assert.AreEqual(0, i, "Query is not executed until you enumerate over them");

            // TEST
            aQuery.ToList();
            Assert.AreEqual(10, i, "Query is  executed after you enumerate over them");

            i = 0;

            // TEST
            var bQuery = (from n in numbers
                          select ++i).Max();
            Assert.AreEqual(10, i, "Max() executes immediately");

            // TEST
            var smallNumbers = from n in numbers
                               where n <= 3
                               select n;
            var smallerEvenNumbers = from n in smallNumbers
                                     where n % 2 == 0
                                     select n;
            Assert.AreDeepEqual(new[] { 2, 0 }, smallerEvenNumbers.ToArray(), "Query in a query");

            // TEST
            var index = 0;
            Array.ForEach(numbers, (x) => { numbers[index] = -x; index++; });
            Assert.AreDeepEqual(new int[] { -5, -4, -1, -3, -9, -8, -6, -7, -2, 0 }, numbers.ToArray(), "ForEach()");

            // TEST
            Assert.AreDeepEqual(new[] { -4, -8, -6, -2, 0 }, smallerEvenNumbers.ToArray(), "Second query run on a modified source");
        }
    }
}