using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The tests here consists in ensuring the discard and out variables
    /// works when translating code to Bridge.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Discards and out variables - {0}")]
    public class TestDiscardsAndOutVars
    {
        /// <summary>
        /// A class implementing an out-variable-driven method.
        /// </summary>
        class Point
        {
            public int X { get; }
            public int Y { get; }

            public Point(int x, int y)
            {
                X = x;
                Y = y;
            }

            public void GetCoordinates(out int x, out int y)
            {
                x = X;
                y = Y;
            }
        }

        /// <summary>
        /// A method returning a tuple?
        /// </summary>
        /// <param name="itemId"></param>
        /// <returns></returns>
        static (int price, int discount) GetPrice(int itemId)
        {
            var product = (500, 100);
            return product;
        }

        /// <summary>
        /// A method using an inline expression and returning to whatever is
        /// passed, using the discards concept (underline keyword).
        /// </summary>
        static void Do() => _ = 10 + 20;

        /// <summary>
        /// A simple method that just returns integer 1.
        /// </summary>
        /// <returns></returns>
        static int Success(string message = "Success.")
        {
            Assert.True(true, message);
            return 1;
        }

        /// <summary>
        /// A simple method that will call Assert.Fail() and return int 2.
        /// </summary>
        /// <returns></returns>
        static int Fail(string message = "Failed.")
        {
            Assert.Fail(message);
            return 2;
        }

        [Test]
        public static void TestBasic()
        {
            var r = int.TryParse("", out _);
            Assert.False(r, "Discards works for int.TryParse().");

            r = int.TryParse("", out var _);
            Assert.False(r, "Discards works for int.TryParse() when prefixed with 'var'.");

            r = int.TryParse("", out int _);
            Assert.False(r, "Discards works for int.TryParse() when prefixed with 'int' (type specified).");

            r = int.TryParse("1", out int ii);
            Assert.True(r, "int.TryParse runs successfully when a variable is defined within the method call body.");
            Assert.AreEqual(1, ii, "int.TryParse() correctly fills the call-body-defined variable value when parsing was possible.");

            new Point(10, 20).GetCoordinates(out int px, out int py);
            Assert.AreEqual(10, px, "Class method using call-body-defined out variables works (1/2).");
            Assert.AreEqual(20, py, "Class method using call-body-defined out variables works (2/2).");

            (int price, _) = GetPrice(1);
            Assert.AreEqual(500, price, "Discards works for methods implementing ValueTuple return values.");

            var x = 21;
            _ = x > 20 ? Success("Discards in expressions works.") : Fail("There's an issue with discards in expressions evaluation.");

            Action a = () => {
                var _ = x > 20 ? Success("Discards within method-scoped actions works.") : Fail("There's an issue with discards within action methods.");
            };
            a();

            object y = null;
            if (!(y is var _))
            {
                Assert.Fail("The 'is' test between an object variable and a discards reference failed to match the expected result.");
            }
        }
    }
}