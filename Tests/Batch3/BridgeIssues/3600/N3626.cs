using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures the .NET's composite format string feature works.
    /// Bug report by Christian "ChrML" Lundheim
    /// </summary>
    [TestFixture(TestNameFormat = "#3626 - {0}")]
    public class Bridge3626
    {
        /// <summary>
        /// Checks the value of a string variable filled using the composite
        /// format string syntax.
        /// </summary>
        [Test]
        public static void TestStringFormat()
        {
            string TestVariable = "Hey";
            var Result = $"{{TEST:{TestVariable}HelloWorld}}";
            Assert.AreEqual("{TEST:HeyHelloWorld}", Result, "Composite format string feature evaluates to the expected result.");
        }

        [Test]
        public static void TestMultiBracketStringFormat()
        {
            string l1 = "l1s";
            string l2 = "l2s";
            var result = $"{{TEST{{:{l1}Hello}}World}}";
            Assert.AreEqual("{TEST{:l1sHello}World}", result, "Two-bracket-enclosed composite format works.");

            result = $"{{TEST{{:{{{l1}}}Hello}}World}}";
            Assert.AreEqual("{TEST{:{l1s}Hello}World}", result, "Three-bracket-enclosed composite format works.");

            result = $"{{T{{E{{S{{T{{:{{{l1}}}H}}e{l2}l}}lo}}Wor}}ld}}";
            Assert.AreEqual("{T{E{S{T{:{l1s}H}el2sl}lo}Wor}ld}", result, "Six-bracket-enclosed composite format works.");
        }

    }
}