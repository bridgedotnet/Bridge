using Bridge.QUnit;
using ClientTestLibrary.Utilities;
using System.Linq;

namespace ClientTestLibrary.Linq
{
    class TestLinqRestrictionOperators
    {
        public static void Test(Assert assert)
        {
            assert.Expect(5);

            // TEST
            var numbers = new[] { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
            var filteredNumbers = (from n in numbers where n <= 6 select n).ToArray();
            assert.DeepEqual(filteredNumbers, new[] { 5, 4, 1, 3, 6, 2, 0 }, "Where elements in integer array are below or equal 6");

            // TEST
            var filteredCounts = (from p in Person.GetPersons() where p.Count < 501 select p.Count).ToArray();
            assert.DeepEqual(filteredCounts, new[] {300, 100, 500, 50 }, "Where elements in Person array have Count below 501");

            // TEST
            filteredCounts = (from p in Person.GetPersons() where p.Count < 501 && p.Group == "A" select p.Count).ToArray();
            assert.DeepEqual(filteredCounts, new[] { 300 }, "Where elements in Person array have Count below 501 ang in group 'A'");

            // TEST
            var persons = Person.GetPersons();
            var filteredPersonByCounts = (from p in Person.GetPersons() where p.Count < 501 select p).ToArray();

            assert.DeepEqual(filteredPersonByCounts, new[] { persons[0], persons[1], persons[3], persons[4] },
                "Where elements in Person array have Count below 501. Returns Person instances");

            // TEST
            var filteredPersonByCountAndIndex = persons.Where((p, index) => p.Count < index * 100).ToArray();

            assert.DeepEqual(filteredPersonByCountAndIndex, new[] { persons[4] },
                "Where elements in Person array have Count meet condition (p.Count < index * 100). Returns Person instances");
        }
    }
}
