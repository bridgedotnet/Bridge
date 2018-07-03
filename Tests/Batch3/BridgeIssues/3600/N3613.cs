using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here ensures that invalid cast exception is thrown when a type
    /// is boxed then cast back, when the type can't be actually cast over,
    /// following native .NET implementation.
    /// </summary>
    [TestFixture(TestNameFormat = "#3613 - {0}")]
    public class Bridge3613
    {
        /// <summary>
        /// Makes the test boxing a byte variable then trying to cast it back
        /// as an integer.
        /// </summary>
        [Test]
        public static void TestUnboxCast()
        {
            Assert.Throws<InvalidCastException>(() => {
                byte byteVal = 255;
                object boxed = byteVal;
                int unboxed = (int)boxed;
            }, "Boxing byte and trying to cast back to int throws InvalidCastException.");
        }
    }
}