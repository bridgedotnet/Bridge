using Bridge.Linq;
using Bridge.Test;
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
            Assert.AreEqual(i, 0, "Query is not executed until you enumerate over them");

            // TEST
            aQuery.ToList();
            Assert.AreEqual(i, 10, "Query is  executed after you enumerate over them");

            i = 0;

            // TEST
            var bQuery = (from n in numbers
                          select ++i).Max();
            Assert.AreEqual(i, 10, "Max() executes immediately");

            // TEST
            var smallNumbers = from n in numbers
                               where n <= 3
                               select n;
            var smallerEvenNumbers = from n in smallNumbers
                                     where n % 2 == 0
                                     select n;
            Assert.AreDeepEqual(smallerEvenNumbers.ToArray(), new[] { 2, 0 }, "Query in a query");

            // TEST
            numbers.ForEach((x, index) => numbers[index] = -numbers[index]);
            Assert.AreDeepEqual(numbers.ToArray(), new int[] { -5, -4, -1, -3, -9, -8, -6, -7, -2, 0 }, "ForEach()");

            // TEST
            Assert.AreDeepEqual(smallerEvenNumbers.ToArray(), new[] { -4, -8, -6, -2, 0 }, "Second query run on a modified source");
        }
    }
}
