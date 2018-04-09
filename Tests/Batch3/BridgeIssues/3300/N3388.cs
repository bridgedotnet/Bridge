using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This tests consists in making two distinct methods, differing only by
    /// the generics argument passed and ensuring the two methods can be
    /// selectively triggered.
    /// </summary>
    [TestFixture(TestNameFormat = "#3388 - {0}")]
    public class Bridge3388
    {
        /// <summary>
        /// Class implementing two identical signature methods, differring only
        /// by the generics argument requested.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        public class MyClass<T> : IFace<T>, IFace<List<T>>
        {
            string IFace<T>.Method() => "single";
            string IFace<List<T>>.Method() => "list";
        }

        /// <summary>
        /// An interface demanding the method with common name.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        public interface IFace<T>
        {
            string Method();
        }

        /// <summary>
        /// Instantiate the class, then cast it calling the method, expecting
        /// the corresponding one to be called.
        /// </summary>
        [Test]
        public static void TestTwoInterfaceImplementation()
        {
            var c = new MyClass<int>();
            Assert.AreEqual("single", ((IFace<int>)c).Method(), "The expected generic method was called.");
            Assert.AreEqual("list", ((IFace<List<int>>)c).Method(), "The expected generic method variation was called.");
        }
    }
}