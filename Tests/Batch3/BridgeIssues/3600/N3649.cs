using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures that a 3-uple's default values works.
    /// </summary>
    [TestFixture(TestNameFormat = "#3649 - {0}")]
    public class Bridge3649
    {
        /// <summary>
        /// Tests by issuing n-uples with different values and ensuring the
        /// defaults are correctly selected.
        /// </summary>
        [Test]
        public static void TestValueTuple()
        {
            (string a, int b, bool c) = default((string, int, bool));

            Assert.Null(a, "Default value for string in 3-uple is correct.");
            Assert.AreEqual(0, b, "Default value for integer in 3-uple is correct.");
            Assert.False(c, "Default value for bool in 3-uple is correct.");

            (string d, string e, string f, string g, string h, string i, string j) = default((string, string, string, string, string, string, string));

            Assert.Null(d, "Default value for 1st string in 7-uple is correct.");
            Assert.AreEqual("null", d ?? "null", "Default value for 1st string in 7-uple works with ?? operator.");
            Assert.Null(e, "Default value for 2nd string in 7-uple is correct.");
            Assert.AreEqual("null", e ?? "null", "Default value for 2nd string in 7-uple works with ?? operator.");
            Assert.Null(f, "Default value for 3rd string in 7-uple is correct.");
            Assert.AreEqual("null", f ?? "null", "Default value for 3rd string in 7-uple works with ?? operator.");
            Assert.Null(g, "Default value for 4th string in 7-uple is correct.");
            Assert.AreEqual("null", g ?? "null", "Default value for 4th string in 7-uple works with ?? operator.");
            Assert.Null(h, "Default value for 5th string in 7-uple is correct.");
            Assert.AreEqual("null", h ?? "null", "Default value for 5th string in 7-uple works with ?? operator.");
            Assert.Null(i, "Default value for 6th string in 7-uple is correct.");
            Assert.AreEqual("null", i ?? "null", "Default value for 6th string in 7-uple works with ?? operator.");
            Assert.Null(j, "Default value for last string in 7-uple is correct.");
            Assert.AreEqual("null", j ?? "null", "Default value for last string in 7-uple works with ?? operator.");

            (string a, string b, string c) val2 = default((string, string, string));
            var val1 = val2;
            val2.a = "xcv";

            Assert.Null(val1.a, "Change in tuple variable bound to another does not propagate.");
            Assert.AreEqual("xcv", val2.a, "Change in tuple variable affect the direct reference.");
            Assert.Null(val1.b, "Change in tuple variable bound to another does not affect original's 2nd variable.");
            Assert.Null(val1.c, "Change in tuple variable bound to another does not affect original's 3rd variable.");
            Assert.Null(val2.b, "Change in tuple variable bound to another does not affect its 2nd variable.");
            Assert.Null(val2.c, "Change in tuple variable bound to another does not affect its 3rd variable.");
        }
    }
}