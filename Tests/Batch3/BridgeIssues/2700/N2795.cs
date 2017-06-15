using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2795 - {0}")]
    public class Bridge2795
    {
        [Virtual]
        public class Person
        {
            public class Worker : Person
            {
            }
        }

        public class Student : Person
        {
        }

        public class Professor : Student
        {
        }

        [Virtual(VirtualTarget.Interface)]
        public interface IPerson
        {
        }

        public interface IStudent : IPerson
        {
        }

        public class Postgraduate : IStudent
        {
        }

        [Test]
        public static void TestVirtualClass()
        {
            object s = new Student();
            Assert.True(s is Person, "Student is Person");

            object w = new Person.Worker();
            Assert.True(w is Person, "Worker is Person");

            object p = new Professor();
            Assert.True(p is Person, "Professor is Person");
        }

        [Test]
        public static void TestVirtualInterface()
        {
            object p = new Postgraduate();
            Assert.True(p is IStudent, "Postgraduate is IStudent");
            Assert.True(p is IPerson, "Postgraduate is IPerson");
        }

    }
}