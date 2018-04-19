using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The tests here consists in checking the ValueTuple component and also
    /// exploring some Deconstruction usages.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "ValueTuple and deconstruction - {0}")]
    public class TestValueTupleAndDeconstruction
    {
        /// <summary>
        /// A simple class implementing deconstructor.
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

            public void Deconstruct(out int x1, out int y1)
            {
                x1 = X;
                y1 = Y;
            }
        }

        /// <summary>
        /// A method returning a ValueTuple.
        /// </summary>
        /// <param name="itemId"></param>
        /// <returns></returns>
        static (int price, int discount) GetPrice(int itemId)
        {
            var product = (500, 100);
            return product;
        }

        /// <summary>
        /// Test by exploring different ValueTuple and Deconstructor usages.
        /// </summary>
        [Test]
        public static void TestBasic()
        {
            (var x1, var y1) = new Point(1, 2);
            Assert.AreEqual(1, x1, "Point class' deconstructor returned the expected ValueTuple (1/2).");
            Assert.AreEqual(2, y1, "Point class' deconstructor returned the expected ValueTuple (2/2).");

            var price = GetPrice(1);
            Assert.AreEqual(500, price.price, "Method returning a Value Tuple gives the expected tuple (1/2).");
            Assert.AreEqual(100, price.discount, "Method returning a Value Tuple gives the expected tuple (2/2).");

            var (p, s) = GetPrice(1);
            Assert.AreEqual(500, p, "Method returning a Value Tuple gives the expected broken down value (1/2).");
            Assert.AreEqual(100, s, "Method returning a Value Tuple gives the expected broken down value (2/2).");

            (var p1, var s1) = GetPrice(1);
            Assert.AreEqual(500, p1, "Method returning a Value Tuple gives the expected broken down, preinit value (1/2).");
            Assert.AreEqual(100, s1, "Method returning a Value Tuple gives the expected broken down, preinit value (2/2).");

            var dic = new Dictionary<string, int> { ["Bob"] = 32, ["Alice"] = 17 };

            foreach (var (name, age) in dic)
            {
                if (name == "Bob")
                {
                    Assert.AreEqual(32, age, "ValueTuple in dictionary traversal works (1/2).");
                }
                else if (name == "Alice")
                {
                    Assert.AreEqual(17, age, "ValueTuple in dictionary traversal works (2/2).");
                }
                else
                {
                    Assert.Fail("There's an issue traversing a Dictionary while assigning its values to a ValueTuple.");
                }
            }

            foreach ((var name, var age) in dic)
            {
                if (name == "Bob")
                {
                    Assert.AreEqual(32, age, "ValueTuple in dictionary traversal (broken down) works (1/2).");
                }
                else if (name == "Alice")
                {
                    Assert.AreEqual(17, age, "ValueTuple in dictionary traversal (broken-down) works (2/2).");
                }
                else
                {
                    Assert.Fail("There's an issue traversing a Dictionary while assigning its values to a ValueTuple broken down, prefixed with 'var'.");
                }
            }
        }
    }
}