using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    using EmployeeAndCustomer = Bridge.Intersection<Bridge3200.Employee, Bridge3200.Customer>;

    /// <summary>
    /// This issue involves getting whether the intersection results in an
    /// object with Type1 and Type2 properties, so we just check if the
    /// resulting intersection is that.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3200 - {0}")]
    public class Bridge3200
    {
        /// <summary>
        ///
        /// </summary>
        public class Employee
        {
            public int EmployeeId { get; set; }
            public string Name { get; set; }
        }

        /// <summary>
        ///
        /// </summary>
        public class Customer
        {
            public int CustomerId { get; set; }
            public string Name { get; set; }
        }

        /// <summary>
        /// The test itself.
        /// </summary>
        [Test]
        public static void TestEventTemplate()
        {
            var person = ObjectLiteral.Create<EmployeeAndCustomer>();

            person.Type1.EmployeeId = 5;
            person.Type2.CustomerId = 3;

            Assert.AreEqual(person.Type1.EmployeeId, 5);
            Assert.AreEqual(person.Type2.CustomerId, 3);
        }
    }
}