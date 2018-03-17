using Bridge.Test.NUnit;
using System.Collections.Generic;
using static Bridge.Test.NUnit.Assert;
using static System.DayOfWeek;
using static System.Linq.Enumerable;
using static System.Math;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "ValueTuple and deconstruction - {0}")]
    public class TestValueTupleAndDeconstruction
    {
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

        static (int price, int discount) GetPrice(int itemId)
        {
            var product = (500, 100);
            return product;
        }

        [Test]
        public static void TestBasic()
        {
            (var x1, var y1) = new Point(1, 2);
            Assert.AreEqual(1, x1);
            Assert.AreEqual(2, y1);

            var price = GetPrice(1);
            Assert.AreEqual(500, price.price);
            Assert.AreEqual(100, price.discount);

            var (p, s) = GetPrice(1);
            Assert.AreEqual(500, p);
            Assert.AreEqual(100, s);

            (var p1, var s1) = GetPrice(1);
            Assert.AreEqual(500, p1);
            Assert.AreEqual(100, s1);

            var dic = new Dictionary<string, int> { ["Bob"] = 32, ["Alice"] = 17 };

            foreach (var (name, age) in dic)
            {
                if (name == "Bob")
                {
                    Assert.AreEqual(32, age);
                }
                else if (name == "Alice")
                {
                    Assert.AreEqual(17, age);
                }
                else
                {
                    Assert.Fail();
                }
            }

            foreach ((var name, var age) in dic)
            {
                if (name == "Bob")
                {
                    Assert.AreEqual(32, age);
                }
                else if (name == "Alice")
                {
                    Assert.AreEqual(17, age);
                }
                else
                {
                    Assert.Fail();
                }
            }
        }
    }
}