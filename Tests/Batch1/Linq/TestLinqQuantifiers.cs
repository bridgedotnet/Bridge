using Bridge.ClientTest.Utilities;
using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Quantifiers - {0}")]
    public class TestLinqQuantifiers
    {
        [Test(ExpectedCount = 4)]
        public static void Test()
        {
            // TEST
            string[] words = { "count", "tree", "mount", "five", "doubt" };
            bool anyOu = words.Any(w => w.Contains("ou"));
            Assert.True(anyOu, "Any() to return words containing 'ou'");

            // TEST
            int[] oddNumbers = { 3, 7, 9, 5, 247, 1000001 };
            bool onlyOdd = oddNumbers.All(n => n % 2 == 1);
            Assert.True(onlyOdd, "All() is odd");

            // TEST
            int[] someNumbers = { 2, 3, 7, 9, 5, 247, 1000001 };
            bool notOnlyOdd = !someNumbers.All(n => n % 2 == 1);
            Assert.True(notOnlyOdd, "All() is not only odd");

            // TEST
            var productGroups =
                    (from p in Person.GetPersons()
                     group p by p.Group into pGroup
                     where pGroup.Any(p => p.Count >= 500)
                     select new
                     {
                         Group = pGroup.Key,
                         Names = pGroup.Select(x => x.Name).ToArray()
                     }).ToArray();

            object[] productGroupsExpected = { new {Group = "C", Names = new[]{"Zeppa", "Billy"}},
                                                 new {Group = "B", Names = new[]{"John", "Dora", "Ian", "Mary"}},
                                                 new {Group = (string)null, Names = new[]{"Nemo"}}
                                             };

            Assert.AreDeepEqual(productGroupsExpected, productGroups, "Any() to return a grouped array of names only for groups having any item with Count > 500");
        }
    }
}