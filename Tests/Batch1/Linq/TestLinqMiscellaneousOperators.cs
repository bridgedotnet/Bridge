using Bridge.ClientTest.Utilities;
using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Misc - {0}")]
    public class TestLinqMiscellaneousOperators
    {
        [Test(ExpectedCount = 4)]
        public static void Test()
        {
            // TEST
            int[] numbersA = { 4, 1, 3 };
            int[] numbersB = { 2, 3, 5 };

            var concatNumbers = numbersA.Concat(numbersB);
            Assert.AreDeepEqual(new[] { 4, 1, 3, 2, 3, 5 }, concatNumbers, "Concat() numbers");

            // TEST
            var names = from p in Person.GetPersons()
                        select p.Name;
            var cities = from p in Person.GetPersons()
                         select p.City;
            var concatNames = names.Concat(cities).ToArray();

            Assert.AreDeepEqual(new[] { "Frank", "Zeppa", "John", "Billy", "Dora", "Ian", "Mary", "Nemo",
                                    "Edmonton", "Tokyo", "Lisbon", "Paris", "Budapest", "Rome", "Dortmund", "Ocean"},
                concatNames,
                "Concat() two sequences");

            // TEST
            var a = new[] { "a", "b", "z" };
            var b = new[] { "a", "b", "z" };

            Assert.True(a.SequenceEqual(b), "SequenceEqual() for equal sequences");

            // TEST
            var c = new[] { "a", "b", "z" };
            var d = new[] { "a", "z", "b" };

            Assert.True(!c.SequenceEqual(d), "SequenceEqual() for not equal sequences");
        }
    }
}