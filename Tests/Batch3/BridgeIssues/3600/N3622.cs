using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensuring base class calling works even when inheriting from an
    /// external class.
    /// </summary>
    [TestFixture(TestNameFormat = "#3622 - {0}")]
    public class Bridge3622
    {
        /// <summary>
        /// A custom implementation of a class.
        /// </summary>
        [Init(InitPosition.Top)]
        public static void Init()
        {
            /*@
    var Bridge3622_A = (function () {
        function Bridge3622_A() {
            this.A_initialized = true;
        }
        return Bridge3622_A;
    }());
            */
        }

        /// <summary>
        /// A class mapping to the custom implemented class.
        /// </summary>
        [Virtual]
        [Name("Bridge3622_A")]
        public class A
        {
        }

        /// <summary>
        /// A class inheriting from the mapped C# class.
        /// </summary>
        public class B : A
        {
            public B()
            {
            }
        }

        /// <summary>
        /// Tests by instantiating the child class and checking whether the
        /// arbitrarily-crafted external class constructor was called.
        /// </summary>
        [Test]
        public static void TestExternalBaseDefaultCtor()
        {
            var b = new B();
            Assert.AreEqual(true, b["A_initialized"], "External, inherited, and mapped class' constructor called.");
        }
    }
}