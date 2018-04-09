using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether Convert.ToString(x) acts
    /// identically to x.ToString(), considering overrridden ToString() method
    /// when it applies.
    /// </summary>
    [TestFixture(TestNameFormat = "#3415 - {0}")]
    public class Bridge3415
    {
        /// <summary>
        /// A class implementing an override to the .ToString method.
        /// </summary>
        public class Overriding
        {
            public string Value { get; set; }

            public override string ToString()
            {
                return Value + " constant value.";
            }
        }

        /// <summary>
        /// A class that does not implement an override to the .ToString method.
        /// </summary>
        public class NotOverriding
        {
            public string Value { get; set; }
        }

        /// <summary>
        /// Test overridden and not overridden class instances against the expected results.
        /// </summary>
        [Test]
        public static void TestToStringOverriding()
        {
            var baseValue = "this is a value";

            var ovr = new Overriding();
            ovr.Value = baseValue;

            var novr = new NotOverriding();
            novr.Value = baseValue;

            Assert.AreEqual(
                baseValue + " constant value.",
                Convert.ToString(ovr),
                "Convert.ToString() considers class' override."
            );

            Assert.AreEqual(
                ovr.ToString(),
                Convert.ToString(ovr),
                "Convert.ToString(var) produces same result as var.ToString() when ToString() is overridden."
            );

            Assert.AreEqual(
                "Bridge.ClientTest.Batch3.BridgeIssues.Bridge3415+NotOverriding",
                Convert.ToString(novr),
                "Convert.ToString() considers class' override."
            );

            Assert.AreEqual(
                novr.ToString(),
                Convert.ToString(novr),
                "Convert.ToString(var) produces same result as var.ToString() when ToString() is not overridden."
            );
        }
    }
}