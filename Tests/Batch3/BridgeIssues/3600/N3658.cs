using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3658 - {0}")]
    public class Bridge3658
    {
        public struct Point
        {
            public float X { get; set; }
            public float Y { get; set; }
        }

        [Test]
        public static void TestNullableClone()
        {
            // Initialize a nullable struct variable
            Point? A = new Point { X = 10, Y = 20 };
            Assert.AreEqual(10, A.Value.X);
            Assert.AreEqual(20, A.Value.Y);

            // Copy the struct and modify the copy. Observe that the original struct variable is also modified.
            Point B = A.Value;
            B.X = 100;
            B.Y = 200;

            Assert.AreEqual(10, A.Value.X);
            Assert.AreEqual(20, A.Value.Y);

            Assert.AreEqual(100, B.X);
            Assert.AreEqual(200, B.Y);
        }
    }
}