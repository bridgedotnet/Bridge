using Bridge.Test.NUnit;
using System.Reflection;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The tests here consists in esuring the non-trailing named arguments
    /// C# 7.2 feature works as expected.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "C# Non-Trailing named arguments - {0}")]
    public class TestNonTrailingNamedArg
    {
        public static int Sum(int num1st, int num2nd = default, int num3rd = default, int num4th = default)
        {
            return num1st + num2nd + num3rd + num4th;
        }

        /// <summary>
        /// The named argument can only be followed by non-named ones when and
        /// only when it is placed in the position it appears in the method's
        /// prototype.
        /// </summary>
        [Test]
        public static void TestBasic()
        {
            Assert.AreEqual(100, Sum(num1st: 10, 20, 30, 40), "Named argument works on first position.");
            Assert.AreEqual(100, Sum(10, num2nd: 20, 30, 40), "Named argument works on second position.");
            Assert.AreEqual(100, Sum(num1st: 10, num2nd: 20, 30, 40), "Named argument works on first and second positions.");
            Assert.AreEqual(100, Sum(10, num2nd: 20, 30, 40), "Named argument works on first and second position.");
            Assert.AreEqual(100, Sum(num1st: 10, 20, 30, num4th: 40), "Named argument works on first and last positions.");
            Assert.AreEqual(100, Sum(10, num2nd: 20, 30, num4th: 40), "Named argument works on second and last positions.");
            Assert.AreEqual(100, Sum(10, 20, num3rd: 30, num4th: 40), "Named argument works on third and last positions.");
            Assert.AreEqual(100, Sum(num1st: 10, num2nd: 20, num3rd: 30, num4th: 40), "Named argument works on all positions.");

            Assert.AreEqual(60, Sum(num1st: 10, 20, 30), "Named argument works on first position with missing parameters.");
            Assert.AreEqual(60, Sum(10, num2nd: 20, 30), "Named argument works on second position with missing parameters.");
            Assert.AreEqual(60, Sum(num1st: 10, num2nd: 20, 30), "Named argument works on first and second positions with missing parameters.");
            Assert.AreEqual(30, Sum(10, num2nd: 20), "Named argument works on second position as last parameter.");
            Assert.AreEqual(60, Sum(num1st: 10, num2nd: 20, num3rd: 30), "Named argument works on all positions with missing last parameter.");

        }
    }
}