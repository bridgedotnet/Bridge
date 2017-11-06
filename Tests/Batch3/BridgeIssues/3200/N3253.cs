using System;
using Bridge.Test.NUnit;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3253 - {0}")]
    public class Bridge3253
    {
        [Reflectable]
        public class Person
        {
            public Person(int id, string name)
            {
                Id = id;
                Name = name;
            }
            public int Id { get; }
            public string Name { get; }
        }

        [Test]
        public static void TestCanSetForReadonlyProperty()
        {
            var idProperty = typeof(Person).GetProperty("Id");
            Assert.False(idProperty.CanWrite);
        }
    }
}