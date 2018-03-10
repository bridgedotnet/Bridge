using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Case label pattern - {0}")]
    public class TestCaseLabelPattern
    {
        public class Rectangle
        {
            public int Height
            {
                get;
                set;
            }

            public int Width
            {
                get;
                set;
            }
        }

        public class Triangle
        {
            public int SideA
            {
                get;
                set;
            }

            public int SideB
            {
                get;
                set;
            }

            public int SideC
            {
                get;
                set;
            }
        }

        public class Circle
        {
        }

        public class Ellipsis
        {
        }

        [Test]
        public static void TestCase()
        {
            Assert.AreEqual(1, Get(new Triangle()));
            Assert.AreEqual(1, Get(new Triangle { SideA =2, SideB = 2, SideC = 2 }));
            Assert.AreEqual(2, Get(new Triangle { SideA = 9 }));
            Assert.AreEqual(3, Get(new Rectangle()));
            Assert.AreEqual(3, Get(new Rectangle { Height = 2, Width = 2}));
            Assert.AreEqual(4, Get(new Rectangle { Height = 9 }));
            Assert.AreEqual(6, Get(new Circle()));
            Assert.AreEqual(7, Get(new Ellipsis()));
            Assert.AreEqual(5, Get(null));
        }

        private static int Get(object shape)
        {
            switch (shape)
            {
                case Triangle t when t.SideA == t.SideB && t.SideB == t.SideC:
                    return 1;

                case Triangle t:
                    return 2;

                case Rectangle r when r.Height == r.Width:
                    return 3;

                case Rectangle r:
                    return 4;

                default:
                    switch(shape)
                    {
                        case Circle c:
                            return 6;
                        case Ellipsis e:
                            return 7;
                    }
                    return 5;
            }            
        }
    }
}