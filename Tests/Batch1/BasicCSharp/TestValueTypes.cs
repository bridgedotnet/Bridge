using Bridge.Test.NUnit;

namespace Bridge.ClientTest.BasicCSharp
{
    public struct Point
    {
        // TODO Add more types
        public static int StatitIntNotInitialized;

        public static string StatitStringNotInitialized;
        public static int StaticInt;
        public static string StaticString;

        public const char CONST_CHAR = 'W';

        public int x, y;

        static Point()
        {
            Point.StaticInt = 500;
            Point.StaticString = "Initialized";
        }

        public int Test1()
        {
            return Point.StaticInt + this.x;
        }

        public Point Test2(Point p)
        {
            return new Point()
            {
                x = this.x + p.x,
                y = this.y + p.y
            };
        }

        public static int Test3()
        {
            return Point.StatitIntNotInitialized + Point.StaticInt;
        }
    }

    public struct Rectangle
    {
        public Point l;
        public Point t;

        public Rectangle(int x, int y)
        {
            // [#69]
            this = new Rectangle();

            this.l.x = x;
            this.l.y = y;
        }

        // [#66]
        public Rectangle(int x1, int y1, int x2, int y2)
        {
            this.l.x = x1;
            this.l.y = y1;
            this.t.x = x2;
            this.t.y = y2;
        }
    }

    // Tests:
    // Check value types
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Value types - {0}")]
    public class TestValueTypes
    {
        // Check instance methods and constructors
        [Test(ExpectedCount = 18)]
        public static void TestInstanceConstructorsAndMethods()
        {
            // Check parameterless constructor
            var a = new Point();

            Assert.AreEqual(0, a.x, "x 0");
            Assert.AreEqual(0, a.y, "y 0");

            var r = new Rectangle();

            Assert.AreEqual(0, r.l.x, "r.l.x 0");
            Assert.AreEqual(0, r.l.y, "r.l.y 0");
            Assert.AreEqual(0, r.t.x, "r.t.x 0");
            Assert.AreEqual(0, r.t.y, "r.t.y 0");

            r = new Rectangle(10, 20);

            Assert.AreEqual(10, r.l.x, "r.l.x 10");
            Assert.AreEqual(20, r.l.y, "r.l.y 20");
            Assert.AreEqual(0, r.t.x, "r.t.x 0");
            Assert.AreEqual(0, r.t.y, "r.t.y 0");

            r = new Rectangle(30, 40, 50, 60);

            Assert.AreEqual(30, r.l.x, "r.l.x 30");
            Assert.AreEqual(40, r.l.y, "r.l.y 40");
            Assert.AreEqual(50, r.t.x, "r.t.x 50");
            Assert.AreEqual(60, r.t.y, "r.t.y 60");

            var i = a.Test1();

            Assert.AreEqual(500, i, "i 500");
            a.x = 300;
            i = a.Test1();
            Assert.AreEqual(800, i, "i 800");

            a.y = 400;

            var b = new Point()
            {
                x = 5,
                y = 7
            };
            var c = b.Test2(a);

            Assert.AreEqual(305, c.x, "c.x 305");
            Assert.AreEqual(407, c.y, "c.y 407");
        }

        // Check static methods and constructor
        [Test(ExpectedCount = 7)]
        public static void TestStaticConstructorsAndMethods()
        {
            Assert.AreEqual(500, Point.StaticInt, "Point.StaticInt 500");
            Assert.AreEqual("Initialized", Point.StaticString, "Point.StaticString Initialized");
            Assert.AreEqual(0, Point.StatitIntNotInitialized, "Point.StatitIntNotInitialized 0");
            Assert.AreEqual(null, Point.StatitStringNotInitialized, "Point.StatitStringNotInitialized null");
            Assert.AreEqual((int)'W', Point.CONST_CHAR, "Point.CONST_CHAR W");

            Point.StatitIntNotInitialized = -1;
            Assert.AreEqual(-1, Point.StatitIntNotInitialized, "Point.StatitIntNotInitialized -1");

            var i = Point.Test3();
            Assert.AreEqual(499, i, "i 499");
        }
    }
}