using System;
using System.Linq;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2192 - {0}")]
    public class Bridge2192
    {
        public static Intersection<Person, Loggable> GetLoggablePerson(string name, int id)
        {
            var person = new Person(name);
            var loggable = new Loggable(id);

            //@ person.log = loggable.log;
            //@ person.id = loggable.id;

            return person;
        }

        public class Person
        {
            public string Name;
            public Person(string name)
            {
                Name = name;
            }
        }

        public class Loggable
        {
            public int id;
            public Loggable(int id)
            {
                this.id = id;
            }

            public int Log()
            {
                return id;
            }
        }

        [Test]
        public static void TestIntersection()
        {
            var person = GetLoggablePerson("John Doe #1", 5);
            Assert.AreEqual("John Doe #1", person.Item1.Name);
            Assert.AreEqual(5, person.Item2.Log());
            Assert.AreEqual(5, person.Item2.id);
        }
    }
}
