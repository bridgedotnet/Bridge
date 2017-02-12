using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2374 - {0}")]
    public class Bridge2374
    {
        public class Person
        {
            public DateTime CreatedOn { get; set; } = DateTime.Now;
        }

        [Test]
        public static void TestPropertyInitializer()
        {
            var p = new Person();

            Assert.True((object)p.CreatedOn is DateTime);
            Assert.AreEqual(DateTime.Now.Year, p.CreatedOn.Year);
        }
    }
}