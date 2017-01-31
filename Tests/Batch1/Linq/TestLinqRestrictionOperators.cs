using Bridge.ClientTest.Utilities;
using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Restriction- {0}")]
    public class TestLinqRestrictionOperators
    {
        [Test(ExpectedCount = 5)]
        public static void Test()
        {
            // TEST
            var numbers = new[] { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
            var filteredNumbers = (from n in numbers
                                   where n <= 6
                                   select n).ToArray();
            Assert.AreDeepEqual(new[] { 5, 4, 1, 3, 6, 2, 0 }, filteredNumbers, "Where elements in integer array are below or equal 6");

            // TEST
            var filteredCounts = (from p in Person.GetPersons()
                                  where p.Count < 501
                                  select p.Count).ToArray();
            Assert.AreDeepEqual(new[] { 300, 100, 500, 50 }, filteredCounts, "Where elements in Person array have Count below 501");

            // TEST
            filteredCounts = (from p in Person.GetPersons()
                              where p.Count < 501 && p.Group == "A"
                              select p.Count).ToArray();
            Assert.AreDeepEqual(new[] { 300 }, filteredCounts, "Where elements in Person array have Count below 501 ang in group 'A'");

            // TEST
            var persons = Person.GetPersons();
            var filteredPersonByCounts = (from p in Person.GetPersons()
                                          where p.Count < 501
                                          select p).ToArray();

            Assert.AreDeepEqual(new[] { persons[0], persons[1], persons[3], persons[4] }, filteredPersonByCounts,
                "Where elements in Person array have Count below 501. Returns Person instances");

            // TEST
            var filteredPersonByCountAndIndex = persons.Where((p, index) => p.Count < index * 100).ToArray();

            Assert.AreDeepEqual(new[] { persons[4] }, filteredPersonByCountAndIndex,
                "Where elements in Person array have Count meet condition (p.Count < index * 100). Returns Person instances");
        }
    }
}