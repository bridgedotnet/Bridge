using Bridge.ClientTest.Utilities;
using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Ordering - {0}")]
    public class TestLinqOrderingOperators
    {
        [Test(ExpectedCount = 8)]
        public static void Test()
        {
            // TEST
            var words = new string[] { "ab2", "ac", "a", "ab12", "", "ab", "bac", "z" };
            var sortedWords = (from word in words
                               orderby word
                               select word).ToArray();
            Assert.AreDeepEqual(new[] { "", "a", "ab", "ab12", "ab2", "ac", "bac", "z" }, sortedWords, "Order by words");

            // TEST
            var sortedWordsByLength = (from word in words
                                       orderby word.Length
                                       select word).ToArray();
            Assert.AreDeepEqual(new[] { "", "a", "z", "ac", "ab", "ab2", "bac", "ab12" }, sortedWordsByLength, "Order by word length");

            // TEST
            var sortedPersonsByName = (from p in Person.GetPersons()
                                       orderby p.Name
                                       select p.Name).ToArray();
            Assert.AreDeepEqual(new[] { "Billy", "Dora", "Frank", "Ian", "John", "Mary", "Nemo", "Zeppa" }, sortedPersonsByName, "Order by person names");

            // TODO test with System.StringComparison

            // TEST
            var doubles = new double[] { 1.0, -0.7, 2.1, 0.9, 1.4, 2.9 };
            var sortedDoubles = (from d in doubles
                                 orderby d descending
                                 select d).ToArray();
            Assert.AreDeepEqual(new[] { 2.9, 2.1, 1.4, 1.0, 0.9, -0.7 }, sortedDoubles, "Order by descending double");

            // TEST
            var sortedPersonsByCountDesc = (from p in Person.GetPersons()
                                            orderby p.Count descending
                                            select p.Count).ToArray();
            Assert.AreDeepEqual(new[] { 3000, 700, 700, 550, 500, 300, 100, 50 }, sortedPersonsByCountDesc, "Order by person count descending");

            // TEST
            var sortedWordsByLengthAndLetters = (from word in words
                                                 orderby word.Length, word
                                                 select word).ToArray();
            Assert.AreDeepEqual(new[] { "", "a", "z", "ab", "ac", "ab2", "bac", "ab12" }, sortedWordsByLengthAndLetters, "Order by word length then by letters");

            // TEST
            var sortedWordsByLengthAndLettersLambda = words.OrderBy(x => x.Length).ThenByDescending(x => x).ToArray();
            Assert.AreDeepEqual(new[] { "", "z", "a", "ac", "ab", "bac", "ab2", "ab12" }, sortedWordsByLengthAndLettersLambda, "Order by word length then by letters as lambda");

            // TEST
            // var numbers = new[] { 2, 4, 6, 1, 5, 7, 9, 0, 8, 3};
            var numbers = new[] { 2, 4, 6, 1, 5 };
            var numbersReversed = numbers.Reverse<int>().ToArray();
            Assert.AreDeepEqual(new[] { 5, 1, 6, 4, 2 }, numbersReversed, "Reverse() numbers");
        }
    }
}