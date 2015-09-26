using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testValueTypes.js")]
    public struct Point
    {
        //TODO Add more types
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
            return new Point() { x = this.x + p.x, y = this.y + p.y };
        }

        public static int Test3()
        {
            return Point.StatitIntNotInitialized + Point.StaticInt;
        }
    }

    [FileName("testValueTypes.js")]
    public struct Rectangle
    {
        public Point l;
        public Point t;

        public Rectangle(int x, int y)
        {
            //[#69]
            this = new Rectangle();

            this.l.x = x;
            this.l.y = y;
        }

        //[#66]
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
    class TestValueTypes
    {
        //Check instance methods and constructors
        public static void TestInstanceConstructorsAndMethods(Assert assert)
        {
            assert.Expect(18);

            //Check parameterless constructor
            var a = new Point();

            assert.DeepEqual(a.x, 0, "x 0");
            assert.DeepEqual(a.y, 0, "y 0");

            var r = new Rectangle();

            assert.DeepEqual(r.l.x, 0, "r.l.x 0");
            assert.DeepEqual(r.l.y, 0, "r.l.y 0");
            assert.DeepEqual(r.t.x, 0, "r.t.x 0");
            assert.DeepEqual(r.t.y, 0, "r.t.y 0");

            r = new Rectangle(10, 20);

            assert.DeepEqual(r.l.x, 10, "r.l.x 10");
            assert.DeepEqual(r.l.y, 20, "r.l.y 20");
            assert.DeepEqual(r.t.x, 0, "r.t.x 0");
            assert.DeepEqual(r.t.y, 0, "r.t.y 0");

            r = new Rectangle(30, 40, 50, 60);

            assert.DeepEqual(r.l.x, 30, "r.l.x 30");
            assert.DeepEqual(r.l.y, 40, "r.l.y 40");
            assert.DeepEqual(r.t.x, 50, "r.t.x 50");
            assert.DeepEqual(r.t.y, 60, "r.t.y 60");

            var i = a.Test1();

            assert.DeepEqual(i, 500, "i 500");
            a.x = 300;
            i = a.Test1();
            assert.DeepEqual(i, 800, "i 800");

            a.y = 400;

            var b = new Point(){x = 5, y = 7};
            var c = b.Test2(a);

            assert.DeepEqual(c.x, 305, "c.x 305");
            assert.DeepEqual(c.y, 407, "c.y 407");
        }

        //Check static methods and constructor
        public static void TestStaticConstructorsAndMethods(Assert assert)
        {
            assert.Expect(7);

            assert.DeepEqual(Point.StaticInt, 500, "Point.StaticInt 500");
            assert.DeepEqual(Point.StaticString, "Initialized", "Point.StaticString Initialized");
            assert.DeepEqual(Point.StatitIntNotInitialized, 0, "Point.StatitIntNotInitialized 0");
            assert.DeepEqual(Point.StatitStringNotInitialized, null, "Point.StatitStringNotInitialized null");
            assert.DeepEqual(Point.CONST_CHAR, (int)'W', "Point.CONST_CHAR W");

            Point.StatitIntNotInitialized = -1;
            assert.DeepEqual(Point.StatitIntNotInitialized, -1, "Point.StatitIntNotInitialized -1");

            var i = Point.Test3();
            assert.DeepEqual(i, 499, "i 499");
        }
    }
}
