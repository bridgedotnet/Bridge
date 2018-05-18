using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in verifying the Script.Return method works
    /// in a generic situation.
    /// Notice despite the tests here just check whether it takes over return
    /// values from methods, its intended use is for javascript events which
    /// can be represented in regular C# blocks, which can't handle a 'return'
    /// statement.
    /// </summary>
    [TestFixture(TestNameFormat = "#3580 - {0}")]
    public class Bridge3580
    {
        /// <summary>
        /// Test returning a string constant.
        /// </summary>
        /// <returns>A string 'correct' instead of the native 'wrong'.</returns>
        public static string Probe0()
        {
            Script.Return("correct");

            return "wrong";
        }

        /// <summary>
        /// Test returning a boolean constant.
        /// </summary>
        /// <returns>A boolean 'true' instead of a native 'false'.</returns>
        public static bool Probe1()
        {
            Script.Return(true);

            return false;
        }

        /// <summary>
        /// Checks whether the functions return values are taken over by the
        /// Script.Return() call.
        /// </summary>
        [Test]
        public static void TestScriptReturn()
        {
            Assert.AreEqual("correct", Probe0(), "Script.Return() takes over the return value of a string returning method.");
            Assert.True(Probe1(), "Script.Return() takes over the return value of a boolean returning method.");
        }
    }
}