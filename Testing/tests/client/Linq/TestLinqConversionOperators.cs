using Bridge;
using Bridge.Test;
using Bridge.ClientTest.Utilities;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    public class TestLinqConversionOperatorsIEqualityComparer : System.Collections.Generic.EqualityComparer<string>
    {
        public override bool Equals(string x, string y)
        {
            return string.Equals(x, y);
        }

        public override int GetHashCode(string obj)
        {
            if (obj == null)
            {
                return 0;
            }

            return obj.GetHashCode();
        }
    }

    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Conversion - {0}")]
    public class TestLinqConversionOperators
    {
        [Test(ExpectedCount = 13)]
        public static void Test()
        {
            // TEST
            double[] doubles = { 1.7, 2.3, 1.9, 4.1, 2.9 };

            var sameDoubles = from d in doubles
                              select d;
            var doublesArray = sameDoubles.ToArray();

            Assert.True(doublesArray.GetType().ToString().Contains("function Array()"), "ToArray() conversion for doubles - check type name");
            Assert.AreDeepEqual(doublesArray, doubles, "ToArray() conversion for doubles - check content");

            // TEST
            string[] words = { "1.one", "2.two", "3.three" };

            var wordList1 = (from w in words
                             orderby w descending
                             select w).ToList<string>();
            var wordListExpected1 = new List<string>(new[] { "3.three", "2.two", "1.one" });

            Assert.AreEqual(TypeHelper.GetTypeName(wordList1), "Bridge.List$1$String", "ToList() conversion with explicit String type for string - check type name");
            Assert.AreDeepEqual(wordList1, wordListExpected1, "ToList() conversion for strings with explicit String type - check content");

            // TEST
            var wordList2 = (from w in words
                             orderby w descending
                             select w).ToList();
            var wordListExpected2 = new List<string>(new[] { "3.three", "2.two", "1.one" });

            Assert.AreEqual(TypeHelper.GetTypeName(wordList2), "Bridge.List$1$String", "ToList() conversion for string - check type name");
            Assert.AreDeepEqual(wordList2, wordListExpected2, "ToList() conversion for strings - check content");

            // TEST
            var groups = Group.GetGroups();
            var groupDictionary1 = (from g in groups
                                    select g).ToDictionary(g => g.Name, g => g);
            var expectedGroupDictionary1 = new Dictionary<string, Group>();

            expectedGroupDictionary1.Add("A", new Group()
            {
                Name = "A",
                Limit = 1000
            });
            expectedGroupDictionary1.Add("B", new Group()
            {
                Name = "B",
                Limit = 400
            });
            expectedGroupDictionary1.Add("C", new Group()
            {
                Name = "C",
                Limit = 800
            });
            expectedGroupDictionary1.Add("D", new Group()
            {
                Name = "D",
                Limit = 200
            });
            Assert.AreEqual(TypeHelper.GetTypeName(groupDictionary1), "Bridge.Dictionary$2$String$Bridge.ClientTest.Utilities.Group", "ToDictionary(keySelector, elementSelector) conversion for <string, Group> - check type name");
            Assert.AreDeepEqual(groupDictionary1, expectedGroupDictionary1, "ToDictionary(keySelector, elementSelector) conversion for <string, Group> - check content");

            // TEST
            var comparer = new TestLinqConversionOperatorsIEqualityComparer();
            var expectedGroupDictionary2 = new Dictionary<string, Group>(comparer);

            expectedGroupDictionary2.Add("A", new Group()
            {
                Name = "A",
                Limit = 1000
            });
            expectedGroupDictionary2.Add("B", new Group()
            {
                Name = "B",
                Limit = 400
            });
            expectedGroupDictionary2.Add("C", new Group()
            {
                Name = "C",
                Limit = 800
            });
            expectedGroupDictionary2.Add("D", new Group()
            {
                Name = "D",
                Limit = 200
            });

            var groupDictionary2 = (from g in groups
                                    select g).ToDictionary(g => g.Name, g => g, comparer);

            Assert.AreEqual(TypeHelper.GetTypeName(groupDictionary2), "Bridge.Dictionary$2$String$Bridge.ClientTest.Utilities.Group", "ToDictionary(keySelector, elementSelector, IEqualityComparer) conversion for <string, Group> - check type name");
            Assert.AreDeepEqual(groupDictionary2, expectedGroupDictionary2, "ToDictionary(keySelector, elementSelector, IEqualityComparer) conversion for <string, Group> - check content");

            // TEST
            var groupDictionary3 = (from g in groups
                                    select g).ToDictionary(g => g.Name);

            Assert.AreEqual(TypeHelper.GetTypeName(groupDictionary3), "Bridge.Dictionary$2$String$Bridge.ClientTest.Utilities.Group", "ToDictionary(keySelector) conversion for <string, Group> - check type name");
            Assert.AreDeepEqual(groupDictionary3, expectedGroupDictionary1, "ToDictionary(keySelector) conversion for <string, Group> - check content");

            // TEST
            object[] numbers = { null, 1.0, "two", 3, "four", 5, "six", 7.0 };

            var doubleNumbers = numbers.OfType<double>().ToArray();

            Assert.AreDeepEqual(doubleNumbers, new[] { 1.0, 3, 5, 7.0 }, "Issue #218. OfType<double> should get only double type items");
        }
    }
}
