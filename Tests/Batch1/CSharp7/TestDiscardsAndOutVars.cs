using Bridge.Test.NUnit;
using System.Collections.Generic;
using static Bridge.Test.NUnit.Assert;
using static System.DayOfWeek;
using static System.Linq.Enumerable;
using static System.Math;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Discards and out variables - {0}")]
    public class TestDiscardsAndOutVars
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

            public void GetCoordinates(out int x, out int y)
            {
                x = X;
                y = Y;
            }
        }

        static (int price, int discount) GetPrice(int itemId)
        {
            var product = (500, 100);
            return product;
        }

        static void Do() => _ = 10 + 20;

        static int Success()
        {
            return 1;
        }

        static int Fail()
        {
            Assert.Fail();
            return 2;
        }

        [Test]
        public static void TestBasic()
        {
            var r = int.TryParse("", out _);
            Assert.False(r);

            r = int.TryParse("", out var _);
            Assert.False(r);

            r = int.TryParse("", out int _);
            Assert.False(r);

            r = int.TryParse("1", out int ii);
            Assert.True(r);

            new Point(10, 20).GetCoordinates(out int px, out int py);
            Assert.AreEqual(10, px);
            Assert.AreEqual(20, py);

            (int price, _) = GetPrice(1);
            Assert.AreEqual(500, price);

            var x = 21;
            _ = x > 20 ? Success() : Fail();

            object y = null;
            if (!(y is var _))
            {
                Assert.Fail();
            }
        }
    }
}