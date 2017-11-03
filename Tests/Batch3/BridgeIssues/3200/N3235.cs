using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3235 - {0}")]
    public class Bridge3235
    {
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class Person
        {
            public Person(string name)
            {
                Name = name;
            }

            public string Name { get; }
        }

        public class Employee : Person
        {
            public Employee(string name, string role) : base(name)
            {
                Role = role;
            }

            public string Role { get; }
        }

        [Test]
        public static void TestObjectLiteralBaseCtor()
        {
            var x = new Employee("Test", "R123");

            Assert.AreEqual("Test", x.Name);
            Assert.AreEqual("R123", x.Role);
        }
    }
}