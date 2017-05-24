using Bridge.ClientTest.Utilities;
using Bridge.Test.NUnit;
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

            Assert.AreEqual("System.Double[]", doublesArray.GetType().ToString(), "ToArray() conversion for doubles - check type name");
            Assert.AreDeepEqual(doubles, doublesArray, "ToArray() conversion for doubles - check content");

            // TEST
            string[] words = { "1.one", "2.two", "3.three" };

            var wordList1 = (from w in words
                             orderby w descending
                             select w).ToList<string>();
            var wordListExpected1 = new List<string>(new[] { "3.three", "2.two", "1.one" });

            Assert.AreEqual("System.Collections.Generic.List`1[[System.String, mscorlib]]", wordList1.GetType().FullName, "ToList() conversion with explicit String type for string - check type name");
            Assert.AreDeepEqual(wordListExpected1, wordList1, "ToList() conversion for strings with explicit String type - check content");

            // TEST
            var wordList2 = (from w in words
                             orderby w descending
                             select w).ToList();
            var wordListExpected2 = new List<string>(new[] { "3.three", "2.two", "1.one" });

            Assert.AreEqual("System.Collections.Generic.List`1[[System.String, mscorlib]]", wordList2.GetType().FullName, "ToList() conversion for string - check type name");
            Assert.AreDeepEqual(wordListExpected2, wordList2, "ToList() conversion for strings - check content");

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
            Assert.AreEqual("System.Collections.Generic.Dictionary`2[[System.String, mscorlib],[Bridge.ClientTest.Utilities.Group, Bridge.ClientTest]]", groupDictionary1.GetType().FullName, "ToDictionary(keySelector, elementSelector) conversion for <string, Group> - check type name");
            Assert.AreDeepEqual(expectedGroupDictionary1, groupDictionary1, "ToDictionary(keySelector, elementSelector) conversion for <string, Group> - check content");

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

            Assert.AreEqual("System.Collections.Generic.Dictionary`2[[System.String, mscorlib],[Bridge.ClientTest.Utilities.Group, Bridge.ClientTest]]", groupDictionary2.GetType().FullName, "ToDictionary(keySelector, elementSelector, IEqualityComparer) conversion for <string, Group> - check type name");
            Assert.AreDeepEqual(expectedGroupDictionary2, groupDictionary2, "ToDictionary(keySelector, elementSelector, IEqualityComparer) conversion for <string, Group> - check content");

            // TEST
            var groupDictionary3 = (from g in groups
                                    select g).ToDictionary(g => g.Name);

            Assert.AreEqual("System.Collections.Generic.Dictionary`2[[System.String, mscorlib],[Bridge.ClientTest.Utilities.Group, Bridge.ClientTest]]", groupDictionary3.GetType().FullName, "ToDictionary(keySelector) conversion for <string, Group> - check type name");
            Assert.AreDeepEqual(expectedGroupDictionary1, groupDictionary3, "ToDictionary(keySelector) conversion for <string, Group> - check content");

            // TEST
            object[] numbers = { null, 1.0, "two", 3, "four", 5, "six", 7.0 };

            var doubleNumbers = numbers.OfType<double>().ToArray();

            Assert.AreDeepEqual(new[] { 1.0, 7.0 }, doubleNumbers, "Issue #218. OfType<double> should get only double type items");
        }
    }
}