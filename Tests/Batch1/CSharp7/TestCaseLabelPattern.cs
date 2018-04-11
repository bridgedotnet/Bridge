using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The test here consists in checking whether the C#7's switch-case syntax
    /// works the way it is expected to.
    /// </summary>
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

        /// <summary>
        /// Calls the switch-case method with a variety of parameters to check
        /// whether it works as it should.
        /// </summary>
        [Test]
        public static void TestCase()
        {
            Assert.AreEqual(1, Get(new Triangle()), "C#7 switch for empty class 'Triangle' works.");
            Assert.AreEqual(1, Get(new Triangle { SideA = 2, SideB = 2, SideC = 2 }), "C#7 switch for fully specified class 'Triangle' works.");
            Assert.AreEqual(2, Get(new Triangle { SideA = 9 }), "C#7 switch for partially specified class 'Triangle' works.");
            Assert.AreEqual(3, Get(new Rectangle()), "C#7 switch for empty class 'Rectangle' works.");
            Assert.AreEqual(3, Get(new Rectangle { Height = 2, Width = 2}), "C#7 switch for fully specified class 'Rectangle' works.");
            Assert.AreEqual(4, Get(new Rectangle { Height = 9 }), "C#7 switch for partially specified class 'Rectangle' works.");
            Assert.AreEqual(6, Get(new Circle()), "C#7 switch for empty class 'Circle' works.");
            Assert.AreEqual(7, Get(new Ellipsis()), "C#7 switch for empty class 'Ellipsis' works.");
            Assert.AreEqual(5, Get(null), "C#7 switch for partially null (hitting 'default' clause) works.");
        }

        /// <summary>
        /// The 'Get' method will handle different provided parameters using
        /// C#7 switch syntax to infer the parameter type and handle it
        /// accordingly.
        /// </summary>
        /// <param name="shape"></param>
        /// <returns></returns>
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
                    switch (shape)
                    {
                        case Circle c:
                            return 6;
                        case Ellipsis e:
                            return 7;
                    }
                    return 5;
            }
        }

        /// <summary>
        /// Tests 'var' variable definition inlined with switch case
        /// expressions.
        /// </summary>
        [Test]
        public static void TestVarCase()
        {
            var age = 84;
            var msg = "...";

            switch (age)
            {
                case 50:
                    msg = "the big five-oh";
                    break;
                case var testAge when (new List<int>()
              { 80, 81, 82, 83, 84, 85, 86, 87, 88, 89 }).Contains(testAge):
                    msg = "octogenarian";
                    break;
                case var testAge when ((testAge >= 90) & (testAge <= 99)):
                    msg = "nonagenarian";
                    break;
                case var testAge when (testAge >= 100):
                    msg = "centenarian";
                    break;
                default:
                    msg = "just old";
                    break;
            }

            Assert.AreEqual("octogenarian", msg, "Var within switch case statements is correctly evaluated.");
        }

        /// <summary>
        /// Tests 'null' occurrence within a switch case expression.
        /// </summary>
        [Test]
        public static void TestCaseNull()
        {
            object o = null;
            switch (o)
            {
                case int i when i > 100000:
                    Assert.Fail("A null value matched an integer.");
                    break;
                case null:
                    Assert.Null(o, "Null can be used as switch case expression.");
                    break;
                case string _:
                    Assert.Fail("String matched when null was evaluated within a switch case expression.");
                    break;
                default:
                    Assert.Fail("Default/fallthru switch case statement is matched instead of the 'null' entry.");
                    break;
            }
        }
    }
}