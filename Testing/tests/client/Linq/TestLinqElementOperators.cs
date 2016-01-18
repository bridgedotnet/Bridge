using Bridge.Test;
using Bridge.ClientTest.Utilities;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Element - {0}")]
    public class TestLinqElementOperators
    {
        [Test(ExpectedCount = 26)]
        public static void Test()
        {
            // TEST
            var persons = Person.GetPersons();
            var person3 = (from p in Person.GetPersons()
                           where p.ID == 3
                           select p).First();

            Assert.AreDeepEqual(person3, Person.GetPersons()[2], "First() with ID = 3");
            Assert.AreDeepEqual(persons.First(x => x.ID == 3), Person.GetPersons()[2], "First() with ID = 3 by lambda");
            Assert.AreDeepEqual(persons.Where(x => x.ID == 3).First(), Person.GetPersons()[2], "First() with Where() with ID = 3 by lambda");
            Assert.AreDeepEqual(persons.First(x => x.Group == "C"), Person.GetPersons()[1], "First() with Group = 'C' by lambda");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnFirst1, "First() should throw exception if no element found");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnFirst2, "First() should throw exception on empty collection");

            // TEST
            Assert.AreEqual(persons.FirstOrDefault(x => x.ID == -1), null, "FirstOrDefault() unexisting element by lambda");
            Assert.AreEqual(persons.Where(x => x.ID == -1).FirstOrDefault(), null, "FirstOrDefault() with Where() unexisting element by lambda");
            Assert.AreEqual(persons.FirstOrDefault(x => x.Name == "Nemo"), persons[7], "FirstOrDefault() with Name = 'Nemo' by lambda");
            Assert.AreEqual(persons.Where(x => x.Name == "Nemo").FirstOrDefault(), persons[7], "FirstOrDefault() with Where() with Name = 'Nemo' by lambda");
            Assert.AreEqual((new object[] { }).FirstOrDefault(), null, "FirstOrDefault() within zero-length array by lambda");

            // TEST
            var lastPerson = (from p in Person.GetPersons()
                              select p).Last();

            Assert.AreDeepEqual(lastPerson, Person.GetPersons()[7], "Last() person");
            Assert.AreDeepEqual(persons.Last(x => x.ID == 4), Person.GetPersons()[3], "Last() with ID = 4 by lambda");
            Assert.AreDeepEqual(persons.Last(x => x.Group == "B"), Person.GetPersons()[6], "Last() with Group = 'B' by lambda");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnLast1, "Last() should throw exception if no element found");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnLast2, "Last() should throw exception on empty collection");

            // TEST
            Assert.AreEqual(persons.LastOrDefault(x => x.ID == -1), null, "LastOrDefault() unexisting element by lambda");
            Assert.AreEqual(persons.Where(x => x.ID == -1).LastOrDefault(), null, "LastOrDefault() with Where() unexisting element by lambda");
            Assert.AreEqual(persons.LastOrDefault(x => x.Name == "Nemo"), persons[7], "LastOrDefault() with Name = 'Nemo' by lambda");
            Assert.AreEqual((new object[] { }).LastOrDefault(), null, "LastOrDefault() within zero-length array by lambda");

            // TEST
            int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
            int elementAt1 = (from n in numbers
                              where n > 5
                              select n).ElementAt(1);

            Assert.AreEqual(elementAt1, 8, "ElementAt() should return 8");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnElementAt1, "ElementAt() should throw exception if no element found");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnElementAt2, "ElementAt() should throw exception on empty collection");

            // TEST
            int elementAt1OrDefault = numbers.ElementAtOrDefault(1);
            Assert.AreEqual(elementAt1OrDefault, 4, "ElementAtOrDefault() should return 4");

            // TEST
            int elementAt2OrDefault = (from n in numbers
                                       where n > 5
                                       select n).ElementAtOrDefault(2);
            Assert.AreEqual(elementAt2OrDefault, 6, "ElementAtOrDefault() should return 6");

            // TEST
            int elementAt100OrDefault = (from n in numbers
                                         where n > 5
                                         select n).ElementAtOrDefault(100);
            Assert.AreEqual(elementAt100OrDefault, 0, "ElementAtOrDefault() should return 0");
        }

        private static void ThrowExceptionOnFirst1()
        {
            var numbers = new[] { 3, 4 };

            numbers.First(x => x == 5);
        }

        private static void ThrowExceptionOnFirst2()
        {
            var numbers = new int[] { };

            numbers.First();
        }

        private static void ThrowExceptionOnLast1()
        {
            var numbers = new[] { 3, 4 };

            numbers.Last(x => x == 5);
        }

        private static void ThrowExceptionOnLast2()
        {
            var numbers = new int[] { };

            numbers.Last();
        }

        private static void ThrowExceptionOnElementAt1()
        {
            var numbers = new[] { 3, 4 };

            numbers.ElementAt(3);
        }

        private static void ThrowExceptionOnElementAt2()
        {
            var numbers = new int[] { };

            numbers.ElementAt(1);
        }
    }
}
