using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here ensures that local functions' recursion works with
    /// Bridge translated code.
    /// </summary>
    [TestFixture(TestNameFormat = "#3560 - {0}")]
    public class Bridge3560
    {
        /// <summary>
        /// Tests local function recursion.
        /// </summary>
        [Test]
        public static void TestLocalFunctionRecursion()
        {
            int i = 0;
            F(10);

            void F(int x)
            {
                i++;
                if (x > 0)
                    F(x - 1);
            }

            Assert.AreEqual(11, i, "Recursive local function call result in the expected value.");
        }

        /// <summary>
        /// Tests local function referencing.
        /// </summary>
        [Test]
        public static void TestLocalFunctionsReferences()
        {
            string buffer = "";
            F();

            void F()
            {
                buffer += "F";
                G();
            }

            void G()
            {
                buffer += "G";
            }

            Assert.AreEqual("FG", buffer, "Local function referencing results in the expected side effect.");
        }
    }
}