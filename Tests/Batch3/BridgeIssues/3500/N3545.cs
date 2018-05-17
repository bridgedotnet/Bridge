using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3545 - {0}")]
    public class Bridge3545
    {
        [Reflectable]
        public struct Size
        {
            public int Width { get; set; }
            public int Height { get; set; }
        }

        [Test]
        public static void TestSwitchCase()
        {
            Size Test = new Size { Width = 10, Height = 20 };
            Object Boxed = Test;
            Boxed.GetType().GetProperty("Height").SetValue(Boxed, 1234);
            Test = (Size)Boxed;
            Assert.AreEqual(10, Test.Width);
            Assert.AreEqual(1234, Test.Height);
        }
    }
}