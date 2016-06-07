using Bridge.Html5;
using Bridge.Test;
using Bridge.ClientTest.Utilities;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Aggregate - {0}")]
    public class TestLinqAggregateOperators
    {
        [Test(ExpectedCount = 20)]
        public static void Test()
        {
            int[] numbers = { 2, 2, 3, 5, 5, -1, 2, -1 };
            string[] words = { "one", "two", "three" };
            double[] doubles = { 1.7, 2.3, 1.9, 4.1, 2.9 };

            // TEST
            int uniqueNumbers = numbers.Distinct().Count();
            Assert.AreEqual(4, uniqueNumbers, "Count() distinct numbers");

            // TEST
            int oddNumbers = numbers.Count(n => n % 2 == 1);
            Assert.AreEqual(3, oddNumbers, "Count() odd numbers");

            // TEST
            var groupJoin = (from g in Group.GetGroups()
                             join p in Person.GetPersons() on g.Name equals p.Group into pg
                             select new
                             {
                                 Group = g.Name,
                                 PersonCount = pg.Count()
                             })
                             .ToArray();

            var groupJoinExpected = new object[] {
                        new { Group = "A", PersonCount = 1 },
                        new { Group = "B", PersonCount = 4 },
                        new { Group = "C", PersonCount = 2 },
                        new { Group = "D", PersonCount = 0 }
                 };

            Assert.AreDeepEqual(groupJoinExpected, groupJoin, "Count() within joint collections");

            // TEST
            var grouped = (from p in Person.GetPersons()
                           group p by p.Group into g
                           select new
                           {
                               Group = g.Key,
                               PersonCount = g.Count()
                           })
                            .ToArray();

            var groupedExpected = new object[] {
                        new { Group = "A", PersonCount = 1 },
                        new { Group = "C", PersonCount = 2 },
                        new { Group = "B", PersonCount = 4 },
                        new { Group = (string)null, PersonCount = 1 }
                 };

            Assert.AreDeepEqual(groupedExpected, grouped, "Count() within group");

            // TEST
            double numSum = numbers.Sum();
            Assert.AreEqual(17, numSum, "Sum() numbers");

            // TEST
            double totalChars = words.Sum(w => w.Length);
            Assert.AreEqual(11, totalChars, "Sum() total chars");

            // TEST
            var groupedSum = (from p in Person.GetPersons()
                              group p by p.Group into g
                              select new
                              {
                                  Group = g.Key,
                                  Sum = g.Sum(x => x.Count)
                              })
                           .ToArray();

            var groupedSumExpected = new object[] {
                        new { Group = "A", Sum = 300 },
                        new { Group = "C", Sum = 600 },
                        new { Group = "B", Sum = 2000 },
                        new { Group = (string)null, Sum = 3000 }
                 };

            Assert.AreDeepEqual(groupedSumExpected, groupedSum, "Sum() within group");

            // TEST
            int minNum = numbers.Min();
            Assert.AreEqual(-1, minNum, "Min() number");

            // TEST
            int shortestWordLength = words.Min(w => w.Length);
            Assert.AreEqual(3, shortestWordLength, "Min() for shortest word");

            // TEST
            var groupedMin = (from p in Person.GetPersons()
                              group p by p.Group into g
                              select new
                              {
                                  Group = g.Key,
                                  Min = g.Min(x => x.Count)
                              })
                          .ToArray();

            var groupedMinExpected = new object[] {
                        new { Group = "A", Min = 300 },
                        new { Group = "C", Min = 100 },
                        new { Group = "B", Min = 50 },
                        new { Group = (string)null, Min = 3000 }
                 };

            Assert.AreDeepEqual(groupedMinExpected, groupedMin, "Min() within group");

            // TEST
            var groupedMinWithLet = (from p in Person.GetPersons()
                                     group p by p.Group into g
                                     let minCount = g.Min(x => x.Count)
                                     select new
                                     {
                                         Group = g.Key,
                                         Name = g.Where(x => x.Count == minCount).Select(x => x.Name).ToArray()
                                     })
                             .ToArray();

            var groupedMinWithLetExpected = new object[] {
                        new { Group = "A", Name = new[]{ "Frank"} },
                        new { Group = "C", Name = new[]{ "Zeppa"} },
                        new { Group = "B", Name = new[]{ "Dora"} },
                        new { Group = (string)null, Name = new[]{ "Nemo"} }
                 };

            Assert.AreDeepEqual(groupedMinWithLetExpected, groupedMinWithLet, "Min() within group with let");

            // TEST
            int maxNum = numbers.Max();
            Assert.AreEqual(5, maxNum, "Max() number");

            // TEST
            int longestWordLength = words.Max(w => w.Length);
            Assert.AreEqual(5, longestWordLength, "Max() for longest word");

            // TEST
            var groupedMax = (from p in Person.GetPersons()
                              group p by p.Group into g
                              select new
                              {
                                  Group = g.Key,
                                  Max = g.Max(x => x.Count)
                              })
                          .ToArray();

            var groupedMaxExpected = new object[] {
                        new { Group = "A", Max = 300 },
                        new { Group = "C", Max = 500 },
                        new { Group = "B", Max = 700 },
                        new { Group = (string)null, Max = 3000 }
                 };

            Assert.AreDeepEqual(groupedMaxExpected, groupedMax, "Max() within group");

            // TEST
            var groupedMaxWithLet = (from p in Person.GetPersons()
                                     group p by p.Group into g
                                     let maxCount = g.Max(x => x.Count)
                                     select new
                                     {
                                         Group = g.Key,
                                         Name = g.Where(x => x.Count == maxCount).Select(x => x.Name).ToArray()
                                     })
                             .ToArray();

            var groupedMaxWithLetExpected = new object[] {
                        new { Group = "A", Name = new[]{ "Frank"} },
                        new { Group = "C", Name = new[]{ "Billy"} },
                        new { Group = "B", Name = new[]{ "John", "Mary"} },
                        new { Group = (string)null, Name = new[]{ "Nemo"} }
                 };

            Assert.AreDeepEqual(groupedMaxWithLetExpected, groupedMaxWithLet, "Max() within group with let");

            // TEST
            double averageNum = numbers.Average();
            Assert.AreEqual(2.125, averageNum, "Average() number");

            // TEST
            var averageWordLengths = new[] { "1", "22", "333", "4444", "55555" };
            double averageWordLength = averageWordLengths.Average(w => w.Length);
            Assert.AreEqual(3, averageWordLength, "Average() for word lengths");

            // TEST
            var groupedAverage = (from p in Person.GetPersons()
                                  group p by p.Group into g
                                  select Script.ToPlainObject(new
                                  {
                                      Group = g.Key,
                                      Average = g.Average(x => x.Count)
                                  }))
                         .ToArray();

            var groupedAverageExpected = new object[] {
                        Script.ToPlainObject(new { Group = "A", Average = 300 }),
                        Script.ToPlainObject(new { Group = "C", Average = 300 }),
                        Script.ToPlainObject(new { Group = "B", Average = 500 }),
                        Script.ToPlainObject(new { Group = (string)null, Average = 3000 })
                 };

            Assert.AreDeepEqual(groupedAverageExpected, groupedAverage, "Average() within group");

            // TEST
            var doublesForAggregate = new[] { 1.0, 2.0, 3.0, 4.0, 5.0 };
            double product = doublesForAggregate.Aggregate((runningProduct, nextFactor) => runningProduct * nextFactor);
            Assert.AreEqual(120, product, "Aggregate() within doubles");

            // TEST
            var startBalance = 100.0;
            var attemptedWithdrawals = new[] { 20, 10, 40, 50, 10, 70, 30 };

            var endBalance =
                attemptedWithdrawals.Aggregate(startBalance,
                    (balance, nextWithdrawal) =>
                        ((nextWithdrawal <= balance) ? (balance - nextWithdrawal) : balance));

            Assert.AreEqual(20, endBalance, "Aggregate() balance");
        }

        [Test(ExpectedCount = 1)]
        public static void Bridge315()
        {
            var q = "a,b,c,a".ToUpperCase().Split(",").Aggregate("", (workingSentence, next) => next + " " + workingSentence);

            Assert.AreStrictEqual("A C B A ", q, "Enumerable.Aggregate");
        }
    }
}
