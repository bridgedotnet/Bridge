using System;
using System.Reflection;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2216 - {0}")]
    public class Bridge2216
    {
        public class Person : IPerson
        {
            [FieldProperty]
            public string Name { get; set; }

            public Person(string name)
            {
                Name = name;
            }

            public string Introduce()
            {
                return $"This is {Name}";
            }
        }

        [ExternalInterface(IsVirtual = true)]
        public interface IPerson
        {
            [FieldProperty]
            string Name { get; set; }

            string Introduce();
        }

        [Test]
        public static void TestExternalInterface()
        {
            var person = new Person("John Smith");
            Assert.AreEqual("John Smith", person.Name);
            Assert.AreEqual("This is John Smith", person.Introduce());

            var iperson = (IPerson)person;
            Assert.AreEqual("John Smith", iperson.Name);
            Assert.AreEqual("This is John Smith", iperson.Introduce());
        }
    }
}