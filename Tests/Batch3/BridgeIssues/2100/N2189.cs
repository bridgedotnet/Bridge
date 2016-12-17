using System;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2189 - {0}")]
    public class Bridge2189
    {
        [Init(InitPosition.Top)]
        public static void CreatePersonDefinition()
        {
            /*@
            Bridge.$MyPerson2189 = function(name){
                this.name = name;
            };
            */
        }

        public class Employee : Person
        {
            public int Salary;

            public Employee(string name, int salary)
                : base(name)
            {
                Salary = salary;
            }
        }

        [External]
        [Name("Bridge.$MyPerson2189")]
        public class Person
        {
            public string Name;
            public Person(string name)
            {
                Name = name;
            }
        }

        [Test]
        public static void TestInheritanceFromExternalAndBaseCtor()
        {
            var employee = new Employee("John Doe", 100);
            object o = employee;
            Assert.True(o is Person);
            Assert.AreEqual("John Doe", employee.Name);
            Assert.AreEqual(100, employee.Salary);
        }
    }
}
