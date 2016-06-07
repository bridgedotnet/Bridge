using Bridge;
using Bridge.Test;
using Bridge.ClientTest.Utilities;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    public class AnagramEqualityComparer : EqualityComparer<string>
    {
        public override bool Equals(string x, string y)
        {
            return GetCanonicalString(x) == GetCanonicalString(y);
        }

        public override int GetHashCode(string obj)
        {
            return GetCanonicalString(obj).GetHashCode();
        }

        private string GetCanonicalString(string word)
        {
            if (word == null)
            {
                return null;
            }

            var wordChars = word.ToCharArray();
            wordChars.JsSort();

            return new string(wordChars);
        }
    }

    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Grouping - {0}")]
    public class TestLinqGroupingOperators
    {
        [Test(ExpectedCount = 3)]
        public static void Test()
        {
            // TEST
            var numbers = new[] { 2, 10, 3, 5, 30, 1, -15 };
            var words = new[] { "1.one", "3.three", "2.two", "22.twentytwo", "11.eleven", "30.thirty" };

            var numberGroups =
                    (from n in numbers
                     group n by n % 5 into g
                     select new
                     {
                         Remainder = g.Key,
                         Numbers = g.ToArray()
                     }).ToArray();

            var numberGroupsExpected = new[]
                {
                    new {Remainder = 2, Numbers = new[] { 2 } },
                    new {Remainder = 0, Numbers = new[] { 10, 5, 30, -15 } },
                    new {Remainder = 3, Numbers = new[] { 3 } },
                    new {Remainder = 1, Numbers = new[] { 1 } }
                };

            Assert.AreDeepEqual(numberGroupsExpected, numberGroups, "Group numbers by remainders");

            // TEST
            var wordGroups =
                    (from w in words
                     group w by w[0] into g
                     select new
                     {
                         FirstLetter = g.Key,
                         Words = g.ToArray()
                     }).ToArray();

            var wordGroupsExpected = new[]
                {
                    new {FirstLetter = '1', Words = new[] { "1.one", "11.eleven" } },
                    new {FirstLetter = '3', Words = new[] { "3.three", "30.thirty" } },
                    new {FirstLetter = '2', Words = new[] { "2.two", "22.twentytwo" } }
                };

            Assert.AreDeepEqual(wordGroupsExpected, wordGroups, "Group words by first letters");

            // TEST
            var personGroups =
                   (from p in Person.GetPersons()
                    group p by p.Group into g
                    select new
                    {
                        Group = g.Key,
                        Persons = g.Select(x => x.Name).ToArray()
                    }
                   ).ToArray();

            var personGroupsExpected = new object[]
            {
                new { Group = "A", Persons = new [] {"Frank"} },
                new { Group = "C", Persons = new [] {"Zeppa", "Billy"} },
                new { Group = "B", Persons = new [] {"John", "Dora", "Ian", "Mary"} },
                new { Group = (string)null, Persons = new [] {"Nemo"} }
            };

            Assert.AreDeepEqual(personGroupsExpected, personGroups, "Person group by Group field");
        }

        [Test(ExpectedCount = 1)]
        public static void TestComplexGrouping()
        {
            // TEST
            var numbers = new[] { 2, 10, 3, 5, 30, 1, -15 };
            var words = new[] { "1.one", "3.three", "2.two", "22.twentytwo", "11.eleven", "30.thirty" };

            var complexGrouping =
            (
               from n in numbers
               select
                   Script.ToPlainObject(new
                   {
                       Number = n,
                       Words =
                           (
                           from w in words
                           where w[0].ToString() == n.ToString()
                           group w by w[0] into g
                           select
                               Script.ToPlainObject(new
                               {
                                   Letter = g.Key,
                                   LetterGroups =
                                       (
                                       from l in g
                                       group l by l into mg
                                       select Script.ToPlainObject(new
                                       {
                                           Letter = mg.Key,
                                           Letters = mg.ToArray()
                                       })
                                       ).ToArray()
                               })
                           ).ToArray()
                   })
           ).ToArray();

            var complexGroupingExpected = GetComplexGroupingExpectedResult();
            Assert.AreDeepEqual(complexGroupingExpected, complexGrouping, "Complex grouping for numbers and words");
        }

        [Test(ExpectedCount = 2)]
        public static void TestAnagrams()
        {
            // TEST
            var anagrams = new[]{
                    " from ",
                    " salt ",
                    " earn ",
                    " last ",
                    " near ",
                    " form "
            };

            var anagramsGroups = anagrams.GroupBy(w => w.Trim(), new AnagramEqualityComparer())
                                   .Select(x => new
                                   {
                                       Key = x.Key,
                                       Words = x.ToArray()
                                   })
                                   .ToArray();

            var anagramsGroupsExpected = new[]
                {
                    new {Key = "from",  Words = new []{ " from ", " form "} },
                    new {Key = "salt",  Words = new []{ " salt ", " last "} },
                    new {Key = "earn",  Words = new []{ " earn ", " near "} }
                };

            Assert.AreDeepEqual(anagramsGroupsExpected, anagramsGroups, "Anagram grouping with equality comparer");

            // TEST
            var anagramsGroups1 = anagrams.GroupBy(w => w.Trim(), a => a.ToUpper(), new AnagramEqualityComparer())
                       .Select(x => new
                       {
                           Key = x.Key,
                           Words = x.ToArray()
                       })
                       .ToArray();
            var anagramsGroupsExpected1 = new[]
                {
                    new {Key = "from",  Words = new []{ " FROM ", " FORM "} },
                    new {Key = "salt",  Words = new []{ " SALT ", " LAST "} },
                    new {Key = "earn",  Words = new []{ " EARN ", " NEAR "} }
                };

            Assert.AreDeepEqual(anagramsGroupsExpected1, anagramsGroups1, "Anagram grouping with equality compare and upper case");
        }

        private static object GetComplexGroupingExpectedResult()
        {
            var complexGroupingExpected = new object[]
            {
                Script.ToPlainObject(new
                {
                    Number = 2,
                    Words = new []
                    { Script.ToPlainObject(new
                        {
                            Letter = '2',
                            LetterGroups = new[]
                            {
                                Script.ToPlainObject(new { Letter = "2.two", Letters = new []{"2.two"} }),
                                Script.ToPlainObject(new { Letter = "22.twentytwo", Letters = new []{"22.twentytwo"} })
                            }
                        })
                    }
                }),
                Script.ToPlainObject(new
                {
                    Number = 10, Words = new object[] { }
                }),
                Script.ToPlainObject(new
                {
                    Number = 3,
                    Words = new []
                    {
                        Script.ToPlainObject(new
                        {
                            Letter = '3',
                            LetterGroups = new[]
                            {
                                Script.ToPlainObject(new { Letter = "3.three", Letters = new []{"3.three"} }),
                                Script.ToPlainObject(new { Letter = "30.thirty", Letters = new []{"30.thirty"} })
                            }
                        })
                    }
                }),
                Script.ToPlainObject(new
                {
                    Number = 5, Words = new object[] { }
                }),
                Script.ToPlainObject(new
                {
                    Number = 30, Words = new object[] { }
                }),
                Script.ToPlainObject(new
                {
                    Number = 1,
                    Words = new []
                    {
                        Script.ToPlainObject(new
                        {
                            Letter = '1',
                            LetterGroups = new[]
                            {
                                Script.ToPlainObject(new { Letter = "1.one", Letters = new []{"1.one"} }),
                                Script.ToPlainObject(new { Letter = "11.eleven", Letters = new []{"11.eleven"} })
                            }
                        })
                    }
                }),
                Script.ToPlainObject(new
                {
                    Number = -15, Words = new object[] { }
                }),
            };

            return complexGroupingExpected;
        }
    }
}
