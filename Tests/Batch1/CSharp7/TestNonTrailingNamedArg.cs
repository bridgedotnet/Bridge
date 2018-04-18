using Bridge.Test.NUnit;
using System.Reflection;

namespace Bridge.ClientTest.CSharp7
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "C# Non-Trailing named arguments - {0}")]
    public class TestNonTrailingNamedArg
    {
        public static int Sum(int num1st, int num2nd = default, int num3rd = default, int num4rd = default)
        {
            return num1st + num2nd + num3rd + num4rd;
        }

        [Test]
        public static void TestBasic()
        {
            Assert.AreEqual(60, Sum(10, num2nd: 20, 30));
            Assert.AreEqual(100, Sum(10, num2nd: 20, 30, 40));
        }
    }
}