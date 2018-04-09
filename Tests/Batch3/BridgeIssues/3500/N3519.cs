using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring some types of provided Script.Write
    /// input won't break Bridge output code.
    /// </summary>
    [TestFixture(TestNameFormat = "#3519 - {0}")]
    public class Bridge3519
    {
        private static readonly string[] Keys = { "a", "b" };

        private static readonly Dictionary<string, string> SMap = new Dictionary<string, string>();

        private static Dictionary<string, string> vMap = new Dictionary<string, string>();

        private static string RegExpEscape(string s)
        {
            // because of this string magic happens :)
            return Script.Write<string>("{0}.replace(/[-\\/\\^$*+?.()|[\\]{}]/g, '\\\\$&');", s);
        }

        /// <summary>
        /// This should break the very code execution if wrong
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        private static string SpaceWritten()
        {
#pragma warning disable CS0219 // Variable is assigned but its value is never used
            int i = 0;
#pragma warning restore CS0219 // Variable is assigned but its value is never used
            return Script.Write<string>(" ");
        }

        private static string NothingWritten()
        {
#pragma warning disable CS0219 // Variable is assigned but its value is never used
            int i = 0;
#pragma warning restore CS0219 // Variable is assigned but its value is never used
            return Script.Write<string>("");
        }

        /// <summary>
        /// Tests by issuing the Script-Write-driven methods and checking
        /// whether they provide valid JavaScript output code..
        /// </summary>
        [Test]
        public static void TestInjectScript()
        {
            SMap["a"] = "b";
            SMap["c"] = "d";

            foreach (string vote in Keys)
            {
                // colon and \n missing
                vMap[vote] = vote;
                int a = 1;
                Assert.AreEqual(1, a, "Code can run and key '" + vote + "' value is correct");
            }

            Assert.AreEqual("b", SMap["a"], "'a' still maps to 'b'");
            Assert.AreEqual("d", SMap["c"], "'c' still maps to 'd'");

            Assert.Null(SpaceWritten(), "Blank Script.Write works");
            Assert.Null(NothingWritten(), "Empty Script.Write works");
        }
    }
}