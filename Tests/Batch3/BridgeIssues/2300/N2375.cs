using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2375 - {0}")]
    public class Bridge2375
    {
        [Reflectable]
        public class Person
        {
            public string FirstName { get; set; } = "Test value";
        }

        [Test]
        public static void TestNameofWithReflection()
        {
            var result = typeof(Person).GetProperty(nameof(Person.FirstName));

            Assert.AreEqual("Test value", result.GetValue(new Person()));
        }
    }
}