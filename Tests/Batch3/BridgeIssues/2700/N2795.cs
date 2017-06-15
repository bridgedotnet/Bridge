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

        [Test]
        public static void TestVirtualType()
        {
            object s = new Student();
            Assert.True(s is Person, "Student is Person");

            object w = new Person.Worker();
            Assert.True(w is Person, "Worker is Person");

            object p = new Professor();
            Assert.True(p is Person, "Professor is Person");
        }
    }
}