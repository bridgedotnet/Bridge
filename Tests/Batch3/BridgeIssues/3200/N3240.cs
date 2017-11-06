using System;
using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This tests whether the constructor is correctly invoked
    /// when an ObjectLiteral is instantiated by reflection.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3240 - {0}")]
    public class Bridge3240
    {
        /// <summary>
        /// ObjectLiteral test class with a constructor
        /// </summary>
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

        /// <summary>
        /// This checks if a directly instantiated DateTime matches the passed
        /// (same) DateTime to the class constructor by reflection.
        /// The Instantiated class's date in Value should be equal to the
        /// passed one.
        /// </summary>
        [Test]
        public static void TestObjectLiteralReflectionCtor()
        {
            var date = DateTime.Now;
            var p = (Person)(typeof(Person).GetConstructors().First().Invoke(date));

            Assert.AreEqual(date, p.Value);
        }
    }
}