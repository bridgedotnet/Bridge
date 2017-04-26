using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_SYETM_CONSOLE)]
    [TestFixture]
    public class SystemConsoleTests
    {
        private string ConsoleBuffer
        {
            get
            {
                return Bridge.Utils.Console.Instance.BufferedOutput;
            }
            set
            {
                Bridge.Utils.Console.Instance.BufferedOutput = value;
            }
        }

        [TearDown]
        public void HideConsole()
        {
            ConsoleBuffer = null;
            Bridge.Utils.Console.Hide();
        }

        [SetUp]
        public void CleanConsoleBuffer()
        {
            ConsoleBuffer = "";
        }

        [Test]
        public void TestWriteLine()
        {
            Console.WriteLine();
            AssertConsoleMessage("#1", string.Empty);
        }

        [Test]
        public void TestWriteLineBool()
        {
            Console.WriteLine(true);
            AssertConsoleMessage("#1", "True");

            Console.WriteLine(false);
            AssertConsoleMessage("#2", "False");
        }

        [Test]
        public void TestWriteLineChar()
        {
            Console.WriteLine('a');
            AssertConsoleMessage("#1", "a");
        }

        [Test]
        public void TestWriteLineDecimal()
        {
            Console.WriteLine(-1m);
            AssertConsoleMessage("#1", "-1");

            Console.WriteLine(1m);
            AssertConsoleMessage("#2", "1");

            Console.WriteLine(-12345678m);
            AssertConsoleMessage("#3", "-12345678");

            Console.WriteLine(12345678m);
            AssertConsoleMessage("#4", "12345678");

            Console.WriteLine(-1.12345678m);
            AssertConsoleMessage("#5", "-1.12345678");

            Console.WriteLine(1.12345678m);
            AssertConsoleMessage("#6", "1.12345678");

            Console.WriteLine(-12345678.12345678m);
            AssertConsoleMessage("#7", "-12345678.12345678");

            Console.WriteLine(12345678.12345678m);
            AssertConsoleMessage("#8", "12345678.12345678");
        }

        [Test]
        public void TestWriteLineDouble()
        {
            Console.WriteLine(-1d);
            AssertConsoleMessage("#1", "-1");

            Console.WriteLine(1d);
            AssertConsoleMessage("#2", "1");

            Console.WriteLine(-12345678d);
            AssertConsoleMessage("#3", "-12345678");

            Console.WriteLine(12345678d);
            AssertConsoleMessage("#4", "12345678");

            Console.WriteLine(-1.12345678);
            AssertConsoleMessage("#5", "-1.12345678");

            Console.WriteLine(1.12345678);
            AssertConsoleMessage("#6", "1.12345678");

            Console.WriteLine(-12345678.12345678);
            AssertConsoleMessage("#7", "-12345678.1234568");

            Console.WriteLine(12345678.12345678);
            AssertConsoleMessage("#8", "12345678.1234568");
        }

        [Test]
        public void TestWriteLineInt32()
        {
            Console.WriteLine(0);
            AssertConsoleMessage("#1", "0");

            Console.WriteLine(2147483647);
            AssertConsoleMessage("#2", "2147483647");

            Console.WriteLine(-2147483648);
            AssertConsoleMessage("#3", "-2147483648");
        }

        [Test]
        public void TestWriteLineInt64()
        {
            Console.WriteLine(0L);
            AssertConsoleMessage("#1", "0");

            Console.WriteLine(9223372036854775807);
            AssertConsoleMessage("#2", "9223372036854775807");

            Console.WriteLine(-9223372036854775808);
            AssertConsoleMessage("#3", "-9223372036854775808");
        }

        [Test]
        public void TestWriteLineObject()
        {
            object o = "Hi";

            Console.WriteLine(o);
            AssertConsoleMessage("#1", "Hi");

            o = 1;
            Console.WriteLine(o);
            AssertConsoleMessage("#2", "1");

            o = 9223372036854775807;
            Console.WriteLine(o);
            AssertConsoleMessage("#3", "9223372036854775807");

            o = null;
            Console.WriteLine(o);
            AssertConsoleMessage("#4", "");

            o = Values.Value1;
            Console.WriteLine(o);
            AssertConsoleMessage("#5", "Value1");

            o = 1.01m;
            Console.WriteLine(o);
            AssertConsoleMessage("#6", "1.01");

            o = -2L;
            Console.WriteLine(o);
            AssertConsoleMessage("#7", "-2");

            o = 4UL;
            Console.WriteLine(o);
            AssertConsoleMessage("#8", "4");

            o = new Values?(Values.Value2);
            Console.WriteLine(o);
            AssertConsoleMessage("#9", "2"); // That's a bug in nullable<enum>.ToString(), expected "Value2"

            o = new decimal?(1.01m);
            Console.WriteLine(o);
            AssertConsoleMessage("#10", "1.01");

            o = new long?(-2L);
            Console.WriteLine(o);
            AssertConsoleMessage("#11", "-2");

            o = new ulong?(4UL);
            Console.WriteLine(o);
            AssertConsoleMessage("#12", "4");

            o = new object();
            Console.WriteLine(o);
            AssertConsoleMessage("#13", "{}"); // Non .Net behavior, should be System.Object

            o = new ClassWithCustomToString();
            Console.WriteLine(o);
            AssertConsoleMessage("#14", "Overridden ToString()");

            o = new { Id = 1, Name = "John" };
            Console.WriteLine(o);
            AssertConsoleMessage("#15", "{\"Id\":1,\"Name\":\"John\"}");

            var a = new { Id = 2, Name = "Mary" };
            Console.WriteLine(a);
            AssertConsoleMessage("#16", "{\"Id\":2,\"Name\":\"Mary\"}");

            //@ o = { Id: 3, Name: "Sally" };
            Console.WriteLine(o);
            AssertConsoleMessage("#17", "{\"Id\":3,\"Name\":\"Sally\"}");
        }

        class ClassWithCustomToString
        {
            public override string ToString()
            {
                return "Overridden ToString()";
            }
        }

        [Test]
        public void TestWriteLineSingle()
        {
            Console.WriteLine((float)0);
            AssertConsoleMessage("#1", "0");

            Console.WriteLine((float)1.0);
            AssertConsoleMessage("#2", "1");

            Console.WriteLine((float)-1.0);
            AssertConsoleMessage("#3", "-1");
        }

        [Test]
        public void TestWriteLineString()
        {
            Console.WriteLine((string)null);
            AssertConsoleMessage("#1", "");

            Console.WriteLine("");
            AssertConsoleMessage("#2", "");

            Console.WriteLine("Value1");
            AssertConsoleMessage("#3", "Value1");
        }

        [Test]
        public void TestWriteLineFormatString1()
        {
            string f = "{0}";

            Console.WriteLine(f, 1);
            AssertConsoleMessage("#1", "1");

            Console.WriteLine(f, "\"2\"");
            AssertConsoleMessage("#2", "\"2\"");

            Console.WriteLine(f, null);
            AssertConsoleMessage("#3", "");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.WriteLine(f, 3); });
            AssertConsoleMessage("#4", "");

            f = "{0} {1}";
            Assert.Throws<FormatException>(() => { Console.WriteLine(f, 4); });
            AssertConsoleMessage("#5", "");
        }

        [Test]
        public void TestWriteLineFormatString2()
        {
            string f = "{0} {1}";

            Console.WriteLine(f, 1, "2");
            AssertConsoleMessage("#1", "1 2");

            Console.WriteLine(f, null, false);
            AssertConsoleMessage("#2", " False");

            Console.WriteLine(f, null, null);
            AssertConsoleMessage("#3", " ");

            f = "{0}";
            Console.WriteLine(f, "a", "b");
            AssertConsoleMessage("#4", "a");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.WriteLine(f, 4, 5); });
            AssertConsoleMessage("#5", "");

            f = "{0} {1} {2}";
            Assert.Throws<FormatException>(() => { Console.WriteLine(f, 6, 7); });
            AssertConsoleMessage("#6", "");
        }

        [Test]
        public void TestWriteLineFormatString3()
        {
            string f = "{0} {1} {2}";

            Console.WriteLine(f, 1, "2", true);
            AssertConsoleMessage("#1", "1 2 True");

            Console.WriteLine(f, null, null, false);
            AssertConsoleMessage("#2", "  False");

            Console.WriteLine(f, null, null, null);
            AssertConsoleMessage("#3", "  ");

            f = "{0}";
            Console.WriteLine(f, "a", "b", "c");
            AssertConsoleMessage("#4", "a");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.WriteLine(f, 4, 5, 6); });
            AssertConsoleMessage("#5", "");

            f = "{0} {1} {2} {3}";
            Assert.Throws<FormatException>(() => { Console.WriteLine(f, 6, 7, 8); });
            AssertConsoleMessage("#6", "");
        }

        [Test]
        public void TestWriteLineFormatString4()
        {
            string f = "{0} {1} {2} {3}";

            Console.WriteLine(f, 1, "2", true, 4);
            AssertConsoleMessage("#1", "1 2 True 4");

            Console.WriteLine(f, null, false, null, 3);
            AssertConsoleMessage("#2", " False  3");

            Console.WriteLine(f, null, null, null, null);
            AssertConsoleMessage("#3", "   ");

            f = "{0}";
            Console.WriteLine(f, "a", "b", "c", "d");
            AssertConsoleMessage("#4", "a");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.WriteLine(f, 4, 5, 6, 7); });
            AssertConsoleMessage("#5", "");

            f = "{0} {1} {2} {3} {4}";
            Assert.Throws<FormatException>(() => { Console.WriteLine(f, 6, 7, 8, 9); });
            AssertConsoleMessage("#6", "");
        }

        [Test]
        public void TestWriteLineFormatString5()
        {
            string f = "{0} {1} {2} {3} {4}";

            Console.WriteLine(f, 1, "2", true, 4, 5);
            AssertConsoleMessage("#1", "1 2 True 4 5");

            Console.WriteLine(f, null, false, null, null, 3);
            AssertConsoleMessage("#2", " False   3");

            Console.WriteLine(f, null, null, null, null, null);
            AssertConsoleMessage("#3", "    ");

            f = "{0}";
            Console.WriteLine(f, "a", "b", "c", "d", "e");
            AssertConsoleMessage("#4", "a");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.WriteLine(f, 4, 5, 6, 7, 8); });
            AssertConsoleMessage("#5", "");

            f = "{0} {1} {2} {3} {4} {5}";
            Assert.Throws<FormatException>(() => { Console.WriteLine(f, 6, 7, 8, 9, 10); });
            AssertConsoleMessage("#6", "");
        }

        [Test]
        public void TestWriteLineUInt32()
        {
            uint n = 0;
            Console.WriteLine(n);
            AssertConsoleMessage("#1", "0");

            n = 4294967295;
            Console.WriteLine(n);
            AssertConsoleMessage("#2", "4294967295");
        }

        [Test]
        public void TestWriteLineUInt64()
        {
            Console.WriteLine(0UL);
            AssertConsoleMessage("#1", "0");

            Console.WriteLine(18446744073709551615);
            AssertConsoleMessage("#2", "18446744073709551615");
        }

        [Test]
        public void TestWriteLineCharArray()
        {
            char[] ch = new char[0];
            Console.WriteLine(ch);
            AssertConsoleMessage("#1", "");

            ch = new char[] { 'a', 'b' };
            Console.WriteLine(ch);
            AssertConsoleMessage("#2", "ab");

            ch = null;
            Console.WriteLine(ch);
            AssertConsoleMessage("#3", "");
        }

        [Test]
        public void TestWriteLineCharArrayIndexCount()
        {
            char[] ch = new char[0];
            Console.WriteLine(ch, 0, 0);
            AssertConsoleMessage("#1", "");

            ch = new char[] { 'a', 'b' };

            Console.WriteLine(ch, 0, 0);
            AssertConsoleMessage("#2", "");

            Console.WriteLine(ch, 0, 2);
            AssertConsoleMessage("#3", "ab");

            Console.WriteLine(ch, 1, 1);
            AssertConsoleMessage("#4", "b");

            Console.WriteLine(ch, 0, 1);
            AssertConsoleMessage("#5", "a");

            Assert.Throws<ArgumentOutOfRangeException>(() => { Console.WriteLine(ch, -1, 1); });
            AssertConsoleMessage("#6", "");

            Assert.Throws<ArgumentOutOfRangeException>(() => { Console.WriteLine(ch, 1, -1); });
            AssertConsoleMessage("#7", "");

            Assert.Throws<ArgumentException>(() => { Console.WriteLine(ch, 0, 3); });
            AssertConsoleMessage("#8", "");

            Assert.Throws<ArgumentException>(() => { Console.WriteLine(ch, 1, 2); });
            AssertConsoleMessage("#9", "");

            ch = null;
            Assert.Throws<ArgumentNullException>(() => { Console.WriteLine(ch, 0, 1); });
            AssertConsoleMessage("#10", "");
        }

        enum Values
        {
            Value1 = 1,
            Value2 = 2
        }

        [Test]
        public void TestWriteLineEnum()
        {
            var en = Values.Value1;
            Console.WriteLine(en);
            AssertConsoleMessage("#1", "Value1");

            en = Values.Value2;
            Console.WriteLine(en);
            AssertConsoleMessage("#2", "Value2");
        }

        [Test]
        public void TestWriteLineDecimalNullable()
        {
            decimal? d = -1m;
            Console.WriteLine(d);
            AssertConsoleMessage("#1", "-1");

            d = 1.12345678m;
            Console.WriteLine(d);
            AssertConsoleMessage("#2", "1.12345678");

            d = null;
            Console.WriteLine(d);
            AssertConsoleMessage("#3", "");
        }

        [Test]
        public void TestWriteLineInt64Nullable()
        {
            long? l = 0;
            Console.WriteLine(l);
            AssertConsoleMessage("#1", "0");

            l = 9223372036854775807;
            Console.WriteLine(l);
            AssertConsoleMessage("#2", "9223372036854775807");

            l = -9223372036854775808;
            Console.WriteLine(l);
            AssertConsoleMessage("#3", "-9223372036854775808");

            l = null;
            Console.WriteLine(l);
            AssertConsoleMessage("#4", "");
        }

        [Test]
        public void TestWriteLineUInt64Nullable()
        {
            ulong? l = 0;
            Console.WriteLine(l);
            AssertConsoleMessage("#1", "0");

            l = 18446744073709551615;
            Console.WriteLine(l);
            AssertConsoleMessage("#2", "18446744073709551615");

            l = null;
            Console.WriteLine(l);
            AssertConsoleMessage("#3", "");
        }

        private void AssertConsoleMessage(string description, string expected)
        {
            try
            {
                description += " - ";

                Assert.AreEqual(expected, ConsoleBuffer, description + "expected " + expected);
            }
            finally
            {
                CleanConsoleBuffer();
            }
        }
    }
}