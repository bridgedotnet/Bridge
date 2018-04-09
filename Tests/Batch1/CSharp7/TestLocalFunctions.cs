using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The test here consists in checking C# 7's local functions syntax support.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Local function - {0}")]
    public class TestLocalFunctions
    {
        /// <summary>
        /// Explores several scenarios appliable to the local functions syntax.
        /// </summary>
        [Test(ExpectedCount = 4)]
        public static void LocalFunctionsTests()
        {
            void DoNothing()
            {
                Assert.True(true, "Local functions can be called.");
            }

            int Add(int x, int y)
            {
                return x + y;
            }

            LocalRetType AddCustomType(int x, int y)
            {
                return new LocalRetType() { Value = x + y };
            }

            void Multiply(int x, int y, out int res)
            {
                res = x * y;
            }

            DoNothing();

            Assert.AreEqual(40, Add(15, 25), "Local function returning a value works.");

            var customTypeResult = AddCustomType(1, 2);
            Assert.AreEqual(3, customTypeResult.Value, "Local function returning a custom type works.");

            int multiRes;
            Multiply(20, 2, out multiRes);
            Assert.AreEqual(40, multiRes, "Local function with 'out' parameter works.");
        }

        /// <summary>
        /// Tests expression-bodied local functions.
        /// </summary>
        [Test(ExpectedCount = 5)]
        public static void ExpressioNBodiedLocalFunctionsTests()
        {
            var numbers = new List<string>() { "one", "two" };

            var length = numbers.Count;

            string Length() => $"length is {length}";

            Assert.AreEqual("length is 2", Length(), "Expression bodied local function returning a string works.");

            void DoNothing() => Assert.True(true, "Expression bodied local functions can be called.");

            int Add(int x, int y) => x + y;

            LocalRetType AddCustomType(int x, int y) => new LocalRetType() { Value = x + y };

            void Multiply(int x, int y, out int res) => res = x * y;

            DoNothing();

            Assert.AreEqual(40, Add(15, 25), "Expression bodied local function returning a value works.");

            var customTypeResult = AddCustomType(1, 2);
            Assert.AreEqual(3, customTypeResult.Value, "Expression bodied local function returning a custom type works.");

            int multiRes;
            Multiply(20, 2, out multiRes);
            Assert.AreEqual(40, multiRes, "Expression bodied local function with 'out' parameter works.");
        }

        public class LocalRetType
        {
            public int Value { get; set; }
        }
    }
}