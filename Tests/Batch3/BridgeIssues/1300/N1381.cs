using System;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1381 - {0}")]
    public class Bridge1381
    {
        public static int value = 4;

        [Test]
        public static void TestReservedWordsUseCase()
        {
            try
            {
                int Date = 3;

                var m = new DateTime().Month;

                Assert.AreEqual(3, Date, "Date");
            }
            catch (Exception)
            {
                Assert.Fail("Date variable");
            }

            try
            {
                int String = 4;

                var s = new System.String()[0];

                Assert.AreEqual(4, String, "String");
            }
            catch (Exception)
            {
                Assert.Fail("String variable");
            }

            try
            {
                int Number = 7;

                new Double();
                new Float();

                Assert.AreEqual(7, Number, "Number");
            }
            catch (Exception)
            {
                Assert.Fail("Number variable");
            }

            try
            {
                int document = 8;

                var c = Document.Children;

                Assert.AreEqual(8, document, "document");
            }
            catch (Exception)
            {
                Assert.Fail("document variable");
            }

            try
            {
                int Bridge = 9;

                Assert.AreEqual(4, value, "value");
                Assert.AreEqual(9, Bridge, "Bridge");
            }
            catch (Exception)
            {
                Assert.Fail("Bridge variable");
            }
        }

        [Test]
        public static void TestReservedWordsNewBatch()
        {
            // Covers next batch of reserved words (except Date, Number, String that covered in TestReservedWordsUseCase test)
            try
            {
                var Array = 2;

                var m = new int[] { 0, 2, 1 };
                var i = System.Array.IndexOf(m, 1);

                Assert.AreEqual(2, Array, "Array");
            }
            catch (Exception)
            {
                Assert.Fail("Array variable");
            }

            try
            {
                var eval = 3;

                Script.Eval("");

                Assert.AreEqual(3, eval, "eval");
            }
            catch (Exception)
            {
                Assert.Fail("eval variable");
            }

            try
            {
                var hasOwnProperty = 4;

                var o = new object();
                o.HasOwnProperty("v");

                Assert.AreEqual(4, hasOwnProperty, "hasOwnProperty");
            }
            catch (Exception)
            {
                Assert.Fail("hasOwnProperty variable");
            }

            try
            {
                var Infinity = 5;

                var o = Script.Infinity;

                Assert.AreEqual(5, Infinity, "Infinity");
            }
            catch (Exception)
            {
                Assert.Fail("Infinity variable");
            }

            try
            {
                var isFinite = 6;

                var o = Script.IsFinite(null);

                Assert.AreEqual(6, isFinite, "isFinite");
            }
            catch (Exception)
            {
                Assert.Fail("isFinite variable");
            }

            try
            {
                var isNaN = 6;

                var o = Script.IsNaN(null);

                Assert.AreEqual(6, isNaN, "isNaN");
            }
            catch (Exception)
            {
                Assert.Fail("isNaN variable");
            }

            try
            {
                var isPrototypeOf = 7;

                var o =  new object().IsPrototypeOf(null);

                Assert.AreEqual(7, isPrototypeOf, "isPrototypeOf");
            }
            catch (Exception)
            {
                Assert.Fail("isPrototypeOf variable");
            }

            try
            {
                var Math = 8;

                var o = System.Math.Abs(0);

                Assert.AreEqual(8, Math, "Math");
            }
            catch (Exception)
            {
                Assert.Fail("Math variable");
            }

            try
            {
                var NaN = 9;

                var o = Script.NaN;

                Assert.AreEqual(9, NaN, "NaN");
                Assert.AreNotEqual(o, NaN, "Not NaN");
            }
            catch (Exception)
            {
                Assert.Fail("NaN variable");
            }

            try
            {
                var Object = 10;

                var o = new object();

                Assert.AreEqual(10, Object, "Object");
                Assert.AreNotEqual(o, Object, "Not Object");
            }
            catch (Exception)
            {
                Assert.Fail("Object variable");
            }

            try
            {
                var prototype = 11;

                var o = Object.GetPrototype<int>();

                Assert.AreEqual(11, prototype, "prototype");
                Assert.AreNotEqual(o, prototype, "Not prototype");
            }
            catch (Exception)
            {
                Assert.Fail("prototype variable");
            }

            try
            {
                var toString = 12;

                var o = new object().ToString();

                Assert.AreEqual(12, toString, "toString");
                Assert.AreNotEqual(o, toString, "Not toString");
            }
            catch (Exception)
            {
                Assert.Fail("toString variable");
            }

            try
            {
                var undefined = 13;

                var o = Script.Undefined;

                Assert.AreEqual(13, undefined, "undefined");
                Assert.AreNotEqual(o, undefined, "Not undefined");
            }
            catch (Exception)
            {
                Assert.Fail("undefined variable");
            }

            try
            {
                var valueOf = 14;

                var o = new object().ValueOf();

                Assert.AreEqual(14, valueOf, "valueOf");
                Assert.AreNotEqual(o, valueOf, "Not valueOf");
            }
            catch (Exception)
            {
                Assert.Fail("valueOf variable");
            }
        }
    }
}