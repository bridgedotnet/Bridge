using System;
using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3240 - {0}")]
    public class Bridge3240
    {
        [Reflectable]
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class Person
        {
            public Person(DateTime value)
            {
                Value = value;
            }

            public DateTime Value { get; }
        }

        [Test]
        public static void TestObjectLiteralReflectionCtor()
        {
            var date = DateTime.Now;
            var p = (Person)(typeof(Person).GetConstructors().First().Invoke(date));

            Assert.AreEqual(date, p.Value);
        }
    }
}