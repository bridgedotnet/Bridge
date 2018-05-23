using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring the changing a boxed object's
    /// properties can be changed thru reflection, and that the resulting
    /// value can be fetched when it is cast back.
    /// </summary>
    [TestFixture(TestNameFormat = "#3545 - {0}")]
    public class Bridge3545
    {
        /// <summary>
        /// Object to use as a probe.
        /// </summary>
        [Reflectable]
        public struct Size
        {
            public int Width { get; set; }
            public int Height { get; set; }
        }

        /// <summary>
        /// Test by instantiating the object, binding it to a general-purpose
        /// object, then setting the property value thru reflection. Then
        /// casting it back to the original type and checking the value carried
        /// out.
        /// </summary>
        [Test]
        public static void TestSetValueByReflection()
        {
            // Init value typed data-structure
            Size Test = new Size { Width = 10, Height = 20 };

            // Box the value-type and change it through Reflection
            Object Boxed = Test;
            Boxed.GetType().GetProperty("Height").SetValue(Boxed, 1234);

            // Unbox it back
            Test = (Size)Boxed;

            // Should output: Width=10, Height=1234
            // (correct output observed on C# Windows Console Application)
            Assert.AreEqual(10, Test.Width, "Value changed by reflection works for object's first property.");
            Assert.AreEqual(1234, Test.Height, "Value changed by reflection works for object's second property.");
        }
    }
}