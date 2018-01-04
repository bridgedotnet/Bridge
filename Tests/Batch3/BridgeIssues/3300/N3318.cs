using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether an array's type name has the
    /// expected brackets when fetched using reflection.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3318 - {0}")]
    public class Bridge3318
    {
        public class Foo
        {
        }

        /// <summary>
        /// Just check whether the array's type name has the expected value.
        /// </summary>
        [Test]
        public static void TestArrayName()
        {
            var array = new Foo[10];
            Assert.AreEqual("Foo[]", array.GetType().Name, "Array's GetType().Name is 'Foo[]'.");
        }
    }
}