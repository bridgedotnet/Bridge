using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The tests here consists in ensuring Throw Expressions works correctly.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Throw expressions - {0}")]
    public class TestThrowExpression
    {
        /// <summary>
        /// Test by checking whether the expressions within the calls throws
        /// the expected exceptions.
        /// </summary>
        [Test]
        public static void TestBasic()
        {
            Assert.Throws<DivideByZeroException>(()=> {
                var x = 0;
                var y = 0;
                var result = y != 0 ? x % y : throw new DivideByZeroException();
            }, "Throw within an attribution expression works.");

            Assert.Throws<NotImplementedException>(() => {
                Equals();
            }, "Throw from a expression-bodied method works.");
        }

        /// <summary>
        /// A simple expression-bodied method throwing an expression (through
        /// a throw expression).
        /// </summary>
        /// <returns></returns>
        public static bool Equals() => throw new NotImplementedException();
    }
}