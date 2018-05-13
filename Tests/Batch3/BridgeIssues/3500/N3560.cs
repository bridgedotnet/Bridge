using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3560 - {0}")]
    public class Bridge3560
    {
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

            Assert.AreEqual(11, i);
        }

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

            Assert.AreEqual("FG", buffer);
        }
    }
}