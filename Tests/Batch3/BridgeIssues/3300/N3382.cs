using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether the right constructor is
    /// called when instantiating a class which base's constructor may receive
    /// an arbitrary mount of parameters or a List. The result didn't match
    /// what happens in .NET.
    /// </summary>
    [TestFixture(TestNameFormat = "#3382 - {0}")]
    public class Bridge3382
    {
        static int tag;

        /// <summary>
        /// Base class implementing the two constructors.
        /// </summary>
        public class BaseClass
        {
            public IList<string> Items;

            public BaseClass(params string[] items)
            {
                tag = 1;
                Items = items;
            }

            public BaseClass(IList<string> items)
            {
                tag = 2;
                Items = items;
            }
        }

        /// <summary>
        /// Subclass which should call the params constructor.
        /// </summary>
        public class SubClassBrokenConstructorCall : BaseClass
        {
            public SubClassBrokenConstructorCall()
            {
            }
        }

        /// <summary>
        /// Subclass that forces calling the params constructor (workaround
        /// for the issue that was reproduced here).
        /// </summary>
        public class SubClassWorkAroundConstructorCall : BaseClass
        {
            public SubClassWorkAroundConstructorCall() : base(new string[0])
            {
            }
        }

        /// <summary>
        /// In the test, we'll just instantiate the two classes and check
        /// whether they filled the static 'tag' variable with the value from
        /// the expected constructor.
        /// </summary>
        [Test]
        public static void TestBaseCtor()
        {
            tag = 0;
            new SubClassBrokenConstructorCall();
            Assert.AreEqual(1, tag, "The right constructor was called for the class that used to call wrong constructor.");

            tag = 0;
            new SubClassWorkAroundConstructorCall();
            Assert.AreEqual(1, tag, "The right constructor was called for the class with workaround.");
        }
    }
}