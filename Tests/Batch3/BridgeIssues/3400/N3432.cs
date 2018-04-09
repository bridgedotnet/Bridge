using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether a two-level interface
    /// inheritance cast works as expected when a member is overridden thru
    /// the inheritance path.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3432 - {0}")]
    public class Bridge3432
    {
        /// <summary>
        /// This interface contains the target query we will be doing in the
        /// test code.
        /// </summary>
        public interface ISome1
        {
            int TestValue { get; }
        }

        /// <summary>
        /// This overrides the interface's member by a member with same name 
        /// and a different type.
        /// </summary>
        public class Some1 : ISome1
        {
            private string testValue;

            public string TestValue
            {
                get
                {
                    return this.testValue;
                }
                set
                {
                    this.testValue = value;
                }
            }

            int ISome1.TestValue
            {
                get
                {
                    return 25;
                }
            }
        }

        /// <summary>
        /// An interface to be bound to the test class, defining a member here
        /// does not affect the reproducibility of the issue.
        /// </summary>
        public interface ISome2 : ISome1
        {
        }

        /// <summary>
        /// The class that will be instantiated and cast into ISome1 to get the
        /// implementation defined in Some1.
        /// </summary>
        public class Some2 : Some1, ISome2
        {
        }

        /// <summary>
        /// The test here consists in just instantiating the class and querying
        /// the value returned from the cast reference.
        /// </summary>
        [Test]
        public static void TestDerivation()
        {
            var probe1 = new Some2() { TestValue = "test text" };
            var probe2 = (ISome1)probe1;
            var probe3 = (Some1)probe1;

            Assert.AreEqual("test text", probe1.TestValue, "Got string return when class not cast at all.");
            Assert.AreEqual(25, probe2.TestValue, "Got integer return when class cast into its main interface.");
            Assert.AreEqual("test text", probe3.TestValue, "Got string return when class cast into the class that just implements the method.");
        }
    }
}