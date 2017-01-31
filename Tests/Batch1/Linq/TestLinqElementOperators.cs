using Bridge.ClientTest.Utilities;
using Bridge.Test.NUnit;
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

            Assert.AreDeepEqual(Person.GetPersons()[2], person3, "First() with ID = 3");
            Assert.AreDeepEqual(Person.GetPersons()[2], persons.First(x => x.ID == 3), "First() with ID = 3 by lambda");
            Assert.AreDeepEqual(Person.GetPersons()[2], persons.Where(x => x.ID == 3).First(), "First() with Where() with ID = 3 by lambda");
            Assert.AreDeepEqual(Person.GetPersons()[1], persons.First(x => x.Group == "C"), "First() with Group = 'C' by lambda");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnFirst1, "First() should throw exception if no element found");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnFirst2, "First() should throw exception on empty collection");

            // TEST
            Assert.AreEqual(null, persons.FirstOrDefault(x => x.ID == -1), "FirstOrDefault() unexisting element by lambda");
            Assert.AreEqual(null, persons.Where(x => x.ID == -1).FirstOrDefault(), "FirstOrDefault() with Where() unexisting element by lambda");
            Assert.AreEqual(persons[7], persons.FirstOrDefault(x => x.Name == "Nemo"), "FirstOrDefault() with Name = 'Nemo' by lambda");
            Assert.AreEqual(persons[7], persons.Where(x => x.Name == "Nemo").FirstOrDefault(), "FirstOrDefault() with Where() with Name = 'Nemo' by lambda");
            Assert.AreEqual(null, (new object[] { }).FirstOrDefault(), "FirstOrDefault() within zero-length array by lambda");

            // TEST
            var lastPerson = (from p in Person.GetPersons()
                              select p).Last();

            Assert.AreDeepEqual(Person.GetPersons()[7], lastPerson, "Last() person");
            Assert.AreDeepEqual(Person.GetPersons()[3], persons.Last(x => x.ID == 4), "Last() with ID = 4 by lambda");
            Assert.AreDeepEqual(Person.GetPersons()[6], persons.Last(x => x.Group == "B"), "Last() with Group = 'B' by lambda");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnLast1, "Last() should throw exception if no element found");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnLast2, "Last() should throw exception on empty collection");

            // TEST
            Assert.AreEqual(null, persons.LastOrDefault(x => x.ID == -1), "LastOrDefault() unexisting element by lambda");
            Assert.AreEqual(null, persons.Where(x => x.ID == -1).LastOrDefault(), "LastOrDefault() with Where() unexisting element by lambda");
            Assert.AreEqual(persons[7], persons.LastOrDefault(x => x.Name == "Nemo"), "LastOrDefault() with Name = 'Nemo' by lambda");
            Assert.AreEqual(null, (new object[] { }).LastOrDefault(), "LastOrDefault() within zero-length array by lambda");

            // TEST
            int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
            int elementAt1 = (from n in numbers
                              where n > 5
                              select n).ElementAt(1);

            Assert.AreEqual(8, elementAt1, "ElementAt() should return 8");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnElementAt1, "ElementAt() should throw exception if no element found");
            Assert.Throws(TestLinqElementOperators.ThrowExceptionOnElementAt2, "ElementAt() should throw exception on empty collection");

            // TEST
            int elementAt1OrDefault = numbers.ElementAtOrDefault(1);
            Assert.AreEqual(4, elementAt1OrDefault, "ElementAtOrDefault() should return 4");

            // TEST
            int elementAt2OrDefault = (from n in numbers
                                       where n > 5
                                       select n).ElementAtOrDefault(2);
            Assert.AreEqual(6, elementAt2OrDefault, "ElementAtOrDefault() should return 6");

            // TEST
            int elementAt100OrDefault = (from n in numbers
                                         where n > 5
                                         select n).ElementAtOrDefault(100);
            Assert.AreEqual(0, elementAt100OrDefault, "ElementAtOrDefault() should return 0");
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