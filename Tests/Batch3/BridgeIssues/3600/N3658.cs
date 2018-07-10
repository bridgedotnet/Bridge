using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures nullable versions of structs' .Value member is copied rather
    /// than referenced when bound to a non-nullable version of the struct.
    /// </summary>
    [TestFixture(TestNameFormat = "#3658 - {0}")]
    public class Bridge3658
    {
        /// <summary>
        /// An ordinary struct. It will be used as nullable and .Value bound to
        /// another insance to check whether they are copied or just
        /// referenced.
        /// </summary>
        public struct Point
        {
            public int X { get; set; }
            public int Y { get; set; }
        }

        /// <summary>
        /// Instantiate a nullable version of the struct above, then bind its
        /// '.Value' member to a non-nullable instance. Change the value of the
        /// copy and checks it did not affect the value of the original copy.
        /// </summary>
        [Test]
        public static void TestNullableClone()
        {
            // Initialize a nullable struct variable
            Point? A = new Point { X = 10, Y = 20 };
            Assert.AreEqual(10, A.Value.X, "Initialized nullable struct value works.");
            Assert.AreEqual(20, A.Value.Y, "Another initialized value also works.");

            // Copy the struct and modify the copy. Observe that the original struct variable is also modified.
            Point B = A.Value;
            B.X = 100;
            B.Y = 200;

            Assert.AreEqual(10, A.Value.X, "Original struct value untouched when changing struct copy's value.");
            Assert.AreEqual(20, A.Value.Y, "Another struct member also not changed due to changes in the copy.");

            Assert.AreEqual(100, B.X, "Value change in copied struct is reflected therein.");
            Assert.AreEqual(200, B.Y, "Another value change is also effective.");
        }
    }
}