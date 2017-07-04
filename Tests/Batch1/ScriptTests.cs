using Bridge.Html5;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_SCRIPT)]
    [TestFixture]
    public class ScriptTests
    {
        public class TestType
        {
            public TestType()
            {
                i = 42;
                P = 42;
            }

            public int i;

            public int P
            {
                get;
                set;
            }

            public int P2
            {
                get
                {
                    return 0;
                }
            }

            public int P3
            {
                set
                {
                }
            }

            public event EventHandler Evt;

            public void Raise()
            {
                if (Evt != null)
                    Evt(this, null);
            }

            public void InstanceMethod()
            {
            }

            public static void StaticMethod()
            {
            }

            public int F1()
            {
                return 42;
            }

            public int F2(int i)
            {
                return i + 10;
            }

            public int F3(int i, int j)
            {
                return i + j;
            }
        }

        // #SPI
        [Test]
        public void BooleanWorks_SPI_1619()
        {
            // #1619
            Assert.AreStrictEqual(Script.Boolean(0), false);
            Assert.AreStrictEqual(Script.Boolean(""), false);
            Assert.AreStrictEqual(Script.Boolean("1"), true);
        }

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
        [Test]
        public void IsNullWorks_SPI_1618()
        {
            // #1618
            Assert.True(Script.IsNull(null));
            Assert.False(Script.IsNull(Undefined));
            Assert.False(Script.IsNull(3));
        }

        // #SPI
        [Test]
        public void IsUndefinedWorks_SPI_1616()
        {
            // #1616
            Assert.False(Script.IsUndefined(null));
            Assert.True(Script.IsUndefined(Undefined));
            Assert.False(Script.IsUndefined(3));
        }

        // #SPI
        [Test]
        public void HasValueWorks_SPI_1617()
        {
            // 1617
            Assert.False(Script.HasValue(null));
            Assert.False(Script.HasValue(Undefined));
            Assert.True(Script.HasValue(3));
        }

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

        [Test(ExpectedCount = 9)]
        public void DeleteWorksForJsClass_SPI_1571()
        {
            // #1571
            dynamic c = new object();
            c.i = 42;
            Assert.AreEqual(42, c.i);

            var r = Script.Delete(c, "i");
            Assert.True(r);
            Assert.Null(c.i);
            Assert.AreEqual("undefined", Script.TypeOf(c.i));

            dynamic c2 = new object();
            c2.i = 43;
            Assert.AreEqual(43, c2.i);
            Func<string> f = () => { return "i"; };

            var r2 = Script.Delete(c2, "i");
            Assert.True(r2);
            Assert.Null(c2.i);
            Assert.AreEqual("undefined", Script.TypeOf(c2.i));

            Assert.Throws(() =>
            {
                dynamic o = Script.Get("Object");
                Script.Delete(o.prototype); // throws a TypeError in strict mode
            });


            // The test cannot be run in strict mode due to
            // 'SyntaxError: Delete of an unqualified identifier in strict mode.'
            //r = Script.Delete(c2);
            //Assert.True(r);
            //Assert.Null(c2);
            //Assert.AreEqual("undefined", Script.TypeOf(c2));
        }

        [Test(ExpectedCount = 9)]
        public void DeleteWorksForClassPrototype_SPI_1571()
        {
            // #1571
            TestType c = new TestType();
            Assert.AreEqual(42, c.i);

            var r = Script.Delete(c, "i");
            Assert.True(r);
            Assert.AreEqual(0, c.i);
            Assert.AreEqual("number", Script.TypeOf(c.i));

            TestType c2 = new TestType() { i = 43 };
            Assert.AreEqual(43, c2.i);
            Func<string> f = () => { return "i"; };

            var r2 = Script.Delete(c2, "i");
            Assert.True(r2);
            Assert.AreEqual(0, c2.i);
            Assert.AreEqual("number", Script.TypeOf(c2.i));

            Assert.Throws(() =>
            {
                dynamic o = Script.Get("Object");
                Script.Delete(o.prototype); // throws a TypeError in strict mode
            });


            // The test cannot be run in strict mode due to
            // 'SyntaxError: Delete of an unqualified identifier in strict mode.'
            //r = Script.Delete(c2);
            //Assert.True(r);
            //Assert.Null(c2);
            //Assert.AreEqual("undefined", Script.TypeOf(c2));
        }

        // #SPI
        [Test]
        public void InWorks_SPI_1573()
        {
            // #1573
            var c = new TestType();
            Assert.True(Script.In(c, "i"));
            Assert.False(Script.In(c, "x"));
            Assert.True(Script.In(c, "P"));
        }

        // #SPI
        [Test]
        public void InvokeMethodWorks_SPI_1572()
        {
            var c = new TestType();
            Assert.AreEqual(Script.InvokeMethod(c, "F1"), 42);
            Assert.AreEqual(Script.InvokeMethod(c, "F2", 17), 27);
            Assert.AreEqual(Script.InvokeMethod(c, "F3", 19, 2), 21);
        }

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