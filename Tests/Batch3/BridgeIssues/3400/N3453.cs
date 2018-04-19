using Bridge.Test.NUnit;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring Bridge emits correct code
    /// representing a derived class implementing a generic interface.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3453 - {0}")]
    public class Bridge3453
    {
        /// <summary>
        /// A simple class, to be the specialization parameter to the class.
        /// </summary>
        public class c0
        {
            public int I
            {
                get;
                set;
            }
        }

        /// <summary>
        /// Interface with a generics-enabled contract method.
        /// </summary>
        public interface i1
        {
            Task<TResult> m1<TResult>(TResult result);
        }

        /// <summary>
        /// A class implementing the contract from the interface, but not
        /// contract-bound to the interface.
        /// </summary>
        public class c1
        {
            public Task<TResult> m1<TResult>(TResult result)
            {
                return Task.FromResult<TResult>(result);
            }
        }

        /// <summary>
        /// An empty class, just extending both the class and the
        /// interface itself, so that it would bind the implementation to the
        /// contract with the interface.
        /// </summary>
        public class c2 : c1, i1
        {
        }

        /// <summary>
        /// To explore the issue, we create an instance of the interface
        /// implementing class, then call its cross-implemented method
        /// specifying the simple, unrelated, class.
        /// </summary>
        [Test]
        public static void TestDerivedGenericInterface()
        {
            i1 o1 = new c2();
            var c = new c0 { I = 16 };
            var x = o1.m1<c0>(c).Result;

            Assert.AreEqual(c, x, "The value from the derived class matches the value passed.");
        }
    }
}