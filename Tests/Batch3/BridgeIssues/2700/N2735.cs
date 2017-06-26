using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;
using Base2723 = Problem2723.Classes2723.A2723;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2735 - {0}")]
    [Reflectable]
    public class Bridge2735
    {
        [Init(InitPosition.Top)]
        public static void CreatePersonDefinition()
        {
            /*@
            var Person2735 = (function () {
                function Person2735() {
                }
                return Person2735;
            }());
            */
        }

        public class Employee : Person
        {
            public int Salary;

            public static Employee Create(string name, int salary)
            {
                var employee = new Employee();
                employee.Name = name;
                employee.Salary = salary;
                return employee;
            }
        }

        [External]
        [Name("Person2735")]
        public class Person
        {
            public string Name;
            public Person()
            {
            }
        }

        [Test]
        public static void TestExternalInheritanceWithoutCtor()
        {
            var employee = Employee.Create("John Doe", 100);

            Assert.AreEqual("John Doe", employee.Name);
            Assert.AreEqual(100, employee.Salary);
        }
    }
}