using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring line breaks in script.write string
    /// parameters do not result in broken javascript.
    /// </summary>
    [TestFixture(TestNameFormat = "#3546 - {0}")]
    public class Bridge3546
    {
        /// <summary>
        /// Makes a Script.Call with line breaks within the code and checks if
        /// the resulting code is runnable.
        /// </summary>
        [Test]
        public static void TestScriptNewLines()
        {
            string a = "foo";

            var b = Script.Call<string>(@"    
            (
                function(p){ return p + 'bar';}
            )", a);

            Assert.AreEqual("foobar", b, "Script.Call with line breaks results in runnable code.");
        }
    }
}