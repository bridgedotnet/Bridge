using Bridge.Html5;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "ScriptTests - {0}")]
    public class ScriptTests
    {
        public class TestType
        {
            public TestType()
            {
                i = 42;
                P = 42;
            }

            [Name(false)]
            public int i;

            [Name(false)]
            public int P
            {
                get;
                set;
            }

            [Name(false)]
            public int P2
            {
                get
                {
                    return 0;
                }
            }

            [Name(false)]
            public int P3
            {
                set
                {
                }
            }

            //[Name(false)]
            public event EventHandler Evt;

            public void Raise()
            {
                if (Evt != null)
                    Evt(this, null);
            }

            [Name(false)]
            public void InstanceMethod()
            {
            }

            [Name(false)]
            public static void StaticMethod()
            {
            }

            [Name(false)]
            public int F1()
            {
                return 42;
            }

            [Name(false)]
            public int F2(int i)
            {
                return i + 10;
            }

            [Name(false)]
            public int F3(int i, int j)
            {
                return i + j;
            }
        }

        // #SPI
        //[Test]
        //public void BooleanWorks_SPI_1619()
        //{
        //    // #1619
        //    Assert.AreStrictEqual(Script.Boolean(0), false);
        //    Assert.AreStrictEqual(Script.Boolean(""), false);
        //    Assert.AreStrictEqual(Script.Boolean("1"), true);
        //}

        [Test]
        public void EvalWorks()
        {
            Assert.AreEqual(5, Script.Eval<object>("2 + 3"));
        }

        private static object Undefined
        {
            [Template("undefined")]
            get
            {
                return null;
            }
        }

        // #SPI
        //[Test]
        //public void IsNullWorks_SPI_1618()
        //{
        //    // #1618
        //    Assert.True(Script.IsNull(null));
        //    Assert.False(Script.IsNull(Undefined));
        //    Assert.False(Script.IsNull(3));
        //}

        // #SPI
        //[Test]
        //public void IsNullOrUndefinedWorks_SPI_1616()
        //{
        //    // #1616
        //    Assert.True(Script.IsNullOrUndefined(null));
        //    Assert.True(Script.IsNullOrUndefined(Undefined));
        //    Assert.False(Script.IsNullOrUndefined(3));
        //}

        // #SPI
        //[Test]
        //public void IsValueWorks_SPI_1617()
        //{
        //    // 1617
        //    Assert.False(Script.IsValue(null));
        //    Assert.False(Script.IsValue(Undefined));
        //    Assert.True(Script.IsValue(3));
        //}

        // #SPI
        //[Test]
        //public void UndefinedWorks()
        //{
        //    Assert.True(Script.IsUndefined(Script.Undefined));
        //}

        [Test]
        public void TypeOfWorks()
        {
            Assert.AreEqual("undefined", Script.TypeOf(Script.Undefined), "#1");
            Assert.AreEqual("object", Script.TypeOf(null), "#2");
            Assert.AreEqual("boolean", Script.TypeOf(true), "#3");
            Assert.AreEqual("number", Script.TypeOf(0), "#4");
            Assert.AreEqual("number", Script.TypeOf(double.MaxValue), "#5");
            Assert.AreEqual("string", Script.TypeOf("X"), "#6");
            // #1620
            Assert.AreEqual("function", Script.TypeOf(new Function("", "")), "#7");
            Assert.AreEqual("object", Script.TypeOf(new
            {
            }), "#8");
        }

        [Test(ExpectedCount = 4)]
        public void DeleteWorks_SPI_1571()
        {
            // #1571
            TestType c = null;
            TestHelper.Safe(() => c = new TestType());
            int i1 = 0;
            TestHelper.Safe(() => i1 = c.i);
            Assert.AreEqual(42, i1);
            //Script.Delete(c, "i");
            object ui = null;
            TestHelper.Safe(() => ui = c.i);
            Assert.AreEqual("undefined", Script.TypeOf(ui));

            TestType c2 = null;
            TestHelper.Safe(() => c2 = new TestType() { i = 43 });

            int i2 = 0;
            TestHelper.Safe(() => i1 = c2.i);
            Assert.AreEqual(43, i2);
            // Gets incorrect js code delete c2;
            // Script.Delete(c2);
            Assert.AreEqual("undefined", Script.TypeOf(c2));
        }

        // #SPI
        //[Test]
        //public void InWorks_SPI_1573()
        //{
        //    // #1573
        //    var c = new TestType();
        //    Assert.True(Script.In(c, "i"));
        //    Assert.False(Script.In(c, "x"));
        //    Assert.False(Script.In(c, "P"));
        //}

        // #SPI
        //[Test]
        //public void InvokeMethodWorks_SPI_1572()
        //{
        //    var c = new TestType();
        //    Assert.AreEqual(Script.InvokeMethod(c, "F1"), 42);
        //    Assert.AreEqual(Script.InvokeMethod(c, "F2", 17), 27);
        //    Assert.AreEqual(Script.InvokeMethod(c, "F3", 19, 2), 21);
        //}

        [Test]
        public void ParseIntWithoutRadixWorks()
        {
            Assert.AreEqual(234, Script.ParseInt("234"));
        }

        [Test]
        public void ParseIntWithRadixWorks()
        {
            Assert.AreEqual(0x234, Script.ParseInt("234", 16));
        }
    }
}