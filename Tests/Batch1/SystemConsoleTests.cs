using System;
using Bridge.ClientTestHelper;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_SYSTEM_CONSOLE)]
    [TestFixture]
    public class SystemConsoleTests
    {
        class ClassWithCustomToString
        {
            public override string ToString()
            {
                return "Overridden ToString()";
            }
        }

        enum Values
        {
            Value1 = 1,
            Value2 = 2
        }

        [External]
        [Enum(Emit.StringName)]
        public enum Format1
        {
            One,
            Two
        }

        [External]
        [Enum(Emit.Value)]
        public enum Format2
        {
            One,
            Two
        }

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

        private void AssertConsoleMessage(string description, string expected, bool noClean = false)
        {
            try
            {
                description += " - ";

                Assert.AreEqual(expected, ConsoleBuffer, description + "expected " + expected);
            }
            finally
            {
                if (!noClean)
                {
                    CleanConsoleBuffer();
                }
            }
        }

        #region Clear

        [Test]
        public void TestClear()
        {
            Console.WriteLine("Message1");
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("Message1"), true);
            Console.WriteLine("Message2");
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("Message1","Message2"), true);

            Console.Clear();
            AssertConsoleMessage("#3", "");

            // Check it works after Clear()
            Console.WriteLine("Message4");
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("Message4"), true);
            Console.WriteLine("Message5");
            AssertConsoleMessage("#5", StringHelper.CombineLinesNL("Message4", "Message5"), true);

            Console.Clear();
            AssertConsoleMessage("#6", "");
        }

        #endregion Clear

        #region WriteLine

        [Test]
        public void TestWriteLine()
        {
            Console.WriteLine();
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL(""));
        }

        [Test]
        public void TestWriteLineMultiline()
        {
            Console.WriteLine("1\n2\n3");
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("1\n2\n3"));
        }

        [Test]
        public void TestWriteLineBool()
        {
            Console.WriteLine(true);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("True"));

            Console.WriteLine(false);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("False"));
        }

        [Test]
        public void TestWriteLineChar()
        {
            Console.WriteLine('a');
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("a"));
        }

        [Test]
        public void TestWriteLineDecimal()
        {
            Console.WriteLine(-1m);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("-1"));

            Console.WriteLine(1m);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("1"));

            Console.WriteLine(-12345678m);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("-12345678"));

            Console.WriteLine(12345678m);
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("12345678"));

            Console.WriteLine(-1.12345678m);
            AssertConsoleMessage("#5", StringHelper.CombineLinesNL("-1.12345678"));

            Console.WriteLine(1.12345678m);
            AssertConsoleMessage("#6", StringHelper.CombineLinesNL("1.12345678"));

            Console.WriteLine(-12345678.12345678m);
            AssertConsoleMessage("#7", StringHelper.CombineLinesNL("-12345678.12345678"));

            Console.WriteLine(12345678.12345678m);
            AssertConsoleMessage("#8", StringHelper.CombineLinesNL("12345678.12345678"));
        }

        [Test]
        public void TestWriteLineDouble()
        {
            Console.WriteLine(-1d);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("-1"));

            Console.WriteLine(1d);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("1"));

            Console.WriteLine(-12345678d);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("-12345678"));

            Console.WriteLine(12345678d);
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("12345678"));

            Console.WriteLine(-1.12345678);
            AssertConsoleMessage("#5", StringHelper.CombineLinesNL("-1.12345678"));

            Console.WriteLine(1.12345678);
            AssertConsoleMessage("#6", StringHelper.CombineLinesNL("1.12345678"));

            Console.WriteLine(-12345678.12345678);
            AssertConsoleMessage("#7", StringHelper.CombineLinesNL("-12345678.1234568"));

            Console.WriteLine(12345678.12345678);
            AssertConsoleMessage("#8", StringHelper.CombineLinesNL("12345678.1234568"));
        }

        [Test]
        public void TestWriteLineInt32()
        {
            Console.WriteLine(0);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("0"));

            Console.WriteLine(2147483647);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("2147483647"));

            Console.WriteLine(-2147483648);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("-2147483648"));
        }

        [Test]
        public void TestWriteLineInt64()
        {
            Console.WriteLine(0L);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("0"));

            Console.WriteLine(9223372036854775807);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("9223372036854775807"));

            Console.WriteLine(-9223372036854775808);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("-9223372036854775808"));
        }

        [Test]
        public void TestWriteLineObject()
        {
            object o = "Hi";

            Console.WriteLine(o);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("Hi"));

            o = 1;
            Console.WriteLine(o);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("1"));

            o = 9223372036854775807;
            Console.WriteLine(o);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("9223372036854775807"));

            o = null;
            Console.WriteLine(o);
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL(""));

            o = Values.Value1;
            Console.WriteLine(o);
            AssertConsoleMessage("#5", StringHelper.CombineLinesNL("Value1"));

            o = 1.01m;
            Console.WriteLine(o);
            AssertConsoleMessage("#6", StringHelper.CombineLinesNL("1.01"));

            o = -2L;
            Console.WriteLine(o);
            AssertConsoleMessage("#7", StringHelper.CombineLinesNL("-2"));

            o = 4UL;
            Console.WriteLine(o);
            AssertConsoleMessage("#8", StringHelper.CombineLinesNL("4"));

            o = new Values?(Values.Value2);
            Console.WriteLine(o);
            AssertConsoleMessage("#9", StringHelper.CombineLinesNL("Value2"));

            o = new decimal?(1.01m);
            Console.WriteLine(o);
            AssertConsoleMessage("#10", StringHelper.CombineLinesNL("1.01"));

            o = new long?(-2L);
            Console.WriteLine(o);
            AssertConsoleMessage("#11", StringHelper.CombineLinesNL("-2"));

            o = new ulong?(4UL);
            Console.WriteLine(o);
            AssertConsoleMessage("#12", StringHelper.CombineLinesNL("4"));

            o = new object();
            Console.WriteLine(o);
            AssertConsoleMessage("#13", StringHelper.CombineLinesNL("{}")); // Non .Net behavior, should be System.Object

            o = new ClassWithCustomToString();
            Console.WriteLine(o);
            AssertConsoleMessage("#14", StringHelper.CombineLinesNL("Overridden ToString()"));

            o = new { Id = 1, Name = "John" };
            Console.WriteLine(o);
            AssertConsoleMessage("#15", StringHelper.CombineLinesNL("{", "    \"Id\": 1,", "    \"Name\": \"John\"", "}"));

            var a = new { Id = 2, Name = "Mary" };
            Console.WriteLine(a);
            AssertConsoleMessage("#16", StringHelper.CombineLinesNL("{", "    \"Id\": 2,", "    \"Name\": \"Mary\"", "}"));

            //@ o = { Id: 3, Name: "Sally" };
            Console.WriteLine(o);
            AssertConsoleMessage("#17", StringHelper.CombineLinesNL("{", "    \"Id\": 3,", "    \"Name\": \"Sally\"", "}"));
        }

        [Test]
        public void TestWriteLineSingle()
        {
            Console.WriteLine((float)0);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("0"));

            Console.WriteLine((float)1.0);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("1"));

            Console.WriteLine((float)-1.0);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("-1"));
        }

        [Test]
        public void TestWriteLineString()
        {
            Console.WriteLine((string)null);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL(""));

            Console.WriteLine("");
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL(""));

            Console.WriteLine("Value1");
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("Value1"));
        }

        [Test]
        public void TestWriteLineFormatString1()
        {
            string f = "{0}";

            Console.WriteLine(f, 1);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("1"));

            Console.WriteLine(f, "\"2\"");
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("\"2\""));

            Console.WriteLine(f, null);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL(""));

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
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("1 2"));

            Console.WriteLine(f, null, false);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL(" False"));

            Console.WriteLine(f, null, null);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL(" "));

            f = "{0}";
            Console.WriteLine(f, "a", "b");
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("a"));

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
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("1 2 True"));

            Console.WriteLine(f, null, null, false);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("  False"));

            Console.WriteLine(f, null, null, null);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("  "));

            f = "{0}";
            Console.WriteLine(f, "a", "b", "c");
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("a"));

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
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("1 2 True 4"));

            Console.WriteLine(f, null, false, null, 3);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL(" False  3"));

            Console.WriteLine(f, null, null, null, null);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("   "));

            f = "{0}";
            Console.WriteLine(f, "a", "b", "c", "d");
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("a"));

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
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("1 2 True 4 5"));

            Console.WriteLine(f, null, false, null, null, 3);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL(" False   3"));

            Console.WriteLine(f, null, null, null, null, null);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("    "));

            f = "{0}";
            Console.WriteLine(f, "a", "b", "c", "d", "e");
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("a"));

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
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("0"));

            n = 4294967295;
            Console.WriteLine(n);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("4294967295"));
        }

        [Test]
        public void TestWriteLineUInt64()
        {
            Console.WriteLine(0UL);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("0"));

            Console.WriteLine(18446744073709551615);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("18446744073709551615"));
        }

        [Test]
        public void TestWriteLineCharArray()
        {
            char[] ch = new char[0];
            Console.WriteLine(ch);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL(""));

            ch = new char[] { 'a', 'b' };
            Console.WriteLine(ch);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("ab"));

            ch = null;
            Console.WriteLine(ch);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL(""));
        }

        [Test]
        public void TestWriteLineCharArrayIndexCount()
        {
            char[] ch = new char[0];
            Console.WriteLine(ch, 0, 0);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL(""));

            ch = new char[] { 'a', 'b' };

            Console.WriteLine(ch, 0, 0);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL(""));

            Console.WriteLine(ch, 0, 2);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("ab"));

            Console.WriteLine(ch, 1, 1);
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("b"));

            Console.WriteLine(ch, 0, 1);
            AssertConsoleMessage("#5", StringHelper.CombineLinesNL("a"));

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

        [Test]
        public void TestWriteLineEnum()
        {
            var en = Values.Value1;
            Console.WriteLine(en);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("Value1"));

            en = Values.Value2;
            Console.WriteLine(en);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("Value2"));

            var f1 = Format1.One;
            Console.WriteLine(f1);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("one"));

            var f2 = Format2.One;
            Console.WriteLine(f2);
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL("0"));
        }

        [Test]
        public void TestWriteLineDecimalNullable()
        {
            decimal? d = -1m;
            Console.WriteLine(d);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("-1"));

            d = 1.12345678m;
            Console.WriteLine(d);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("1.12345678"));

            d = null;
            Console.WriteLine(d);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL(""));
        }

        [Test]
        public void TestWriteLineInt64Nullable()
        {
            long? l = 0;
            Console.WriteLine(l);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("0"));

            l = 9223372036854775807;
            Console.WriteLine(l);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("9223372036854775807"));

            l = -9223372036854775808;
            Console.WriteLine(l);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL("-9223372036854775808"));

            l = null;
            Console.WriteLine(l);
            AssertConsoleMessage("#4", StringHelper.CombineLinesNL(""));
        }

        [Test]
        public void TestWriteLineUInt64Nullable()
        {
            ulong? l = 0;
            Console.WriteLine(l);
            AssertConsoleMessage("#1", StringHelper.CombineLinesNL("0"));

            l = 18446744073709551615;
            Console.WriteLine(l);
            AssertConsoleMessage("#2", StringHelper.CombineLinesNL("18446744073709551615"));

            l = null;
            Console.WriteLine(l);
            AssertConsoleMessage("#3", StringHelper.CombineLinesNL(""));
        }

        #endregion WriteLine

        #region Write

        [Test]
        public void TestWriteMultiline()
        {
            Console.Write("1\n2\n3");
            Console.Write("End");
            AssertConsoleMessage("#1", "1\n2\n3End");
        }

        [Test]
        public void TestWriteBool()
        {
            Console.Write(true);
            AssertConsoleMessage("#1", "True");

            Console.Write(false);
            AssertConsoleMessage("#2", "False");
        }

        [Test]
        public void TestWriteChar()
        {
            Console.Write('a');
            AssertConsoleMessage("#1", "a");
        }

        [Test]
        public void TestWriteDecimal()
        {
            Console.Write(-1m);
            AssertConsoleMessage("#1", "-1");

            Console.Write(1m);
            AssertConsoleMessage("#2", "1");

            Console.Write(-12345678m);
            AssertConsoleMessage("#3", "-12345678");

            Console.Write(12345678m);
            AssertConsoleMessage("#4", "12345678");

            Console.Write(-1.12345678m);
            AssertConsoleMessage("#5", "-1.12345678");

            Console.Write(1.12345678m);
            AssertConsoleMessage("#6", "1.12345678");

            Console.Write(-12345678.12345678m);
            AssertConsoleMessage("#7", "-12345678.12345678");

            Console.Write(12345678.12345678m);
            AssertConsoleMessage("#8", "12345678.12345678");
        }

        [Test]
        public void TestWriteDouble()
        {
            Console.Write(-1d);
            AssertConsoleMessage("#1", "-1");

            Console.Write(1d);
            AssertConsoleMessage("#2", "1");

            Console.Write(-12345678d);
            AssertConsoleMessage("#3", "-12345678");

            Console.Write(12345678d);
            AssertConsoleMessage("#4", "12345678");

            Console.Write(-1.12345678);
            AssertConsoleMessage("#5", "-1.12345678");

            Console.Write(1.12345678);
            AssertConsoleMessage("#6", "1.12345678");

            Console.Write(-12345678.12345678);
            AssertConsoleMessage("#7", "-12345678.1234568");

            Console.Write(12345678.12345678);
            AssertConsoleMessage("#8", "12345678.1234568");
        }

        [Test]
        public void TestWriteInt32()
        {
            Console.Write(0);
            AssertConsoleMessage("#1", "0");

            Console.Write(2147483647);
            AssertConsoleMessage("#2", "2147483647");

            Console.Write(-2147483648);
            AssertConsoleMessage("#3", "-2147483648");
        }

        [Test]
        public void TestWriteInt64()
        {
            Console.Write(0L);
            AssertConsoleMessage("#1", "0");

            Console.Write(9223372036854775807);
            AssertConsoleMessage("#2", "9223372036854775807");

            Console.Write(-9223372036854775808);
            AssertConsoleMessage("#3", "-9223372036854775808");
        }

        [Test]
        public void TestWriteObject()
        {
            object o = "Hi";

            Console.Write(o);
            AssertConsoleMessage("#1", "Hi");

            o = 1;
            Console.Write(o);
            AssertConsoleMessage("#2", "1");

            o = 9223372036854775807;
            Console.Write(o);
            AssertConsoleMessage("#3", "9223372036854775807");

            o = null;
            Console.Write(o);
            AssertConsoleMessage("#4", "");

            o = Values.Value1;
            Console.Write(o);
            AssertConsoleMessage("#5", "Value1");

            o = 1.01m;
            Console.Write(o);
            AssertConsoleMessage("#6", "1.01");

            o = -2L;
            Console.Write(o);
            AssertConsoleMessage("#7", "-2");

            o = 4UL;
            Console.Write(o);
            AssertConsoleMessage("#8", "4");

            o = new Values?(Values.Value2);
            Console.Write(o);
            AssertConsoleMessage("#9", "Value2");

            o = new decimal?(1.01m);
            Console.Write(o);
            AssertConsoleMessage("#10", "1.01");

            o = new long?(-2L);
            Console.Write(o);
            AssertConsoleMessage("#11", "-2");

            o = new ulong?(4UL);
            Console.Write(o);
            AssertConsoleMessage("#12", "4");

            o = new object();
            Console.Write(o);
            AssertConsoleMessage("#13", "{}"); // Non .Net behavior, should be System.Object

            o = new ClassWithCustomToString();
            Console.Write(o);
            AssertConsoleMessage("#14", "Overridden ToString()");

            o = new { Id = 1, Name = "John" };
            Console.Write(o);
            AssertConsoleMessage("#15", StringHelper.CombineLines("{", "    \"Id\": 1,", "    \"Name\": \"John\"", "}"));

            var a = new { Id = 2, Name = "Mary" };
            Console.Write(a);
            AssertConsoleMessage("#16", StringHelper.CombineLines("{", "    \"Id\": 2,", "    \"Name\": \"Mary\"", "}"));

            //@ o = { Id: 3, Name: "Sally" };
            Console.Write(o);
            AssertConsoleMessage("#17", StringHelper.CombineLines("{", "    \"Id\": 3,", "    \"Name\": \"Sally\"", "}"));
        }

        [Test]
        public void TestWriteSingle()
        {
            Console.Write((float)0);
            AssertConsoleMessage("#1", "0");

            Console.Write((float)1.0);
            AssertConsoleMessage("#2", "1");

            Console.Write((float)-1.0);
            AssertConsoleMessage("#3", "-1");
        }

        [Test]
        public void TestWriteString()
        {
            Console.Write((string)null);
            AssertConsoleMessage("#1", "");

            Console.Write("");
            AssertConsoleMessage("#2", "");

            Console.Write("Value1");
            AssertConsoleMessage("#3", "Value1");
        }

        [Test]
        public void TestWriteFormatString1()
        {
            string f = "{0}";

            Console.Write(f, 1);
            AssertConsoleMessage("#1", "1");

            Console.Write(f, "\"2\"");
            AssertConsoleMessage("#2", "\"2\"");

            Console.Write(f, null);
            AssertConsoleMessage("#3", "");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.Write(f, 3); });
            AssertConsoleMessage("#4", "");

            f = "{0} {1}";
            Assert.Throws<FormatException>(() => { Console.Write(f, 4); });
            AssertConsoleMessage("#5", "");
        }

        [Test]
        public void TestWriteFormatString2()
        {
            string f = "{0} {1}";

            Console.Write(f, 1, "2");
            AssertConsoleMessage("#1", "1 2");

            Console.Write(f, null, false);
            AssertConsoleMessage("#2", " False");

            Console.Write(f, null, null);
            AssertConsoleMessage("#3", " ");

            f = "{0}";
            Console.Write(f, "a", "b");
            AssertConsoleMessage("#4", "a");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.Write(f, 4, 5); });
            AssertConsoleMessage("#5", "");

            f = "{0} {1} {2}";
            Assert.Throws<FormatException>(() => { Console.Write(f, 6, 7); });
            AssertConsoleMessage("#6", "");
        }

        [Test]
        public void TestWriteFormatString3()
        {
            string f = "{0} {1} {2}";

            Console.Write(f, 1, "2", true);
            AssertConsoleMessage("#1", "1 2 True");

            Console.Write(f, null, null, false);
            AssertConsoleMessage("#2", "  False");

            Console.Write(f, null, null, null);
            AssertConsoleMessage("#3", "  ");

            f = "{0}";
            Console.Write(f, "a", "b", "c");
            AssertConsoleMessage("#4", "a");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.Write(f, 4, 5, 6); });
            AssertConsoleMessage("#5", "");

            f = "{0} {1} {2} {3}";
            Assert.Throws<FormatException>(() => { Console.Write(f, 6, 7, 8); });
            AssertConsoleMessage("#6", "");
        }

        [Test]
        public void TestWriteFormatString4()
        {
            string f = "{0} {1} {2} {3}";

            Console.Write(f, 1, "2", true, 4);
            AssertConsoleMessage("#1", "1 2 True 4");

            Console.Write(f, null, false, null, 3);
            AssertConsoleMessage("#2", " False  3");

            Console.Write(f, null, null, null, null);
            AssertConsoleMessage("#3", "   ");

            f = "{0}";
            Console.Write(f, "a", "b", "c", "d");
            AssertConsoleMessage("#4", "a");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.Write(f, 4, 5, 6, 7); });
            AssertConsoleMessage("#5", "");

            f = "{0} {1} {2} {3} {4}";
            Assert.Throws<FormatException>(() => { Console.Write(f, 6, 7, 8, 9); });
            AssertConsoleMessage("#6", "");
        }

        [Test]
        public void TestWriteFormatString5()
        {
            string f = "{0} {1} {2} {3} {4}";

            Console.Write(f, 1, "2", true, 4, 5);
            AssertConsoleMessage("#1", "1 2 True 4 5");

            Console.Write(f, null, false, null, null, 3);
            AssertConsoleMessage("#2", " False   3");

            Console.Write(f, null, null, null, null, null);
            AssertConsoleMessage("#3", "    ");

            f = "{0}";
            Console.Write(f, "a", "b", "c", "d", "e");
            AssertConsoleMessage("#4", "a");

            f = null;
            Assert.Throws<ArgumentNullException>(() => { Console.Write(f, 4, 5, 6, 7, 8); });
            AssertConsoleMessage("#5", "");

            f = "{0} {1} {2} {3} {4} {5}";
            Assert.Throws<FormatException>(() => { Console.Write(f, 6, 7, 8, 9, 10); });
            AssertConsoleMessage("#6", "");
        }

        [Test]
        public void TestWriteUInt32()
        {
            uint n = 0;
            Console.Write(n);
            AssertConsoleMessage("#1", "0");

            n = 4294967295;
            Console.Write(n);
            AssertConsoleMessage("#2", "4294967295");
        }

        [Test]
        public void TestWriteUInt64()
        {
            Console.Write(0UL);
            AssertConsoleMessage("#1", "0");

            Console.Write(18446744073709551615);
            AssertConsoleMessage("#2", "18446744073709551615");
        }

        [Test]
        public void TestWriteCharArray()
        {
            char[] ch = new char[0];
            Console.Write(ch);
            AssertConsoleMessage("#1", "");

            ch = new char[] { 'a', 'b' };
            Console.Write(ch);
            AssertConsoleMessage("#2", "ab");

            ch = null;
            Console.Write(ch);
            AssertConsoleMessage("#3", "");
        }

        [Test]
        public void TestWriteCharArrayIndexCount()
        {
            char[] ch = new char[0];
            Console.Write(ch, 0, 0);
            AssertConsoleMessage("#1", "");

            ch = new char[] { 'a', 'b' };

            Console.Write(ch, 0, 0);
            AssertConsoleMessage("#2", "");

            Console.Write(ch, 0, 2);
            AssertConsoleMessage("#3", "ab");

            Console.Write(ch, 1, 1);
            AssertConsoleMessage("#4", "b");

            Console.Write(ch, 0, 1);
            AssertConsoleMessage("#5", "a");

            Assert.Throws<ArgumentOutOfRangeException>(() => { Console.Write(ch, -1, 1); });
            AssertConsoleMessage("#6", "");

            Assert.Throws<ArgumentOutOfRangeException>(() => { Console.Write(ch, 1, -1); });
            AssertConsoleMessage("#7", "");

            Assert.Throws<ArgumentException>(() => { Console.Write(ch, 0, 3); });
            AssertConsoleMessage("#8", "");

            Assert.Throws<ArgumentException>(() => { Console.Write(ch, 1, 2); });
            AssertConsoleMessage("#9", "");

            ch = null;
            Assert.Throws<ArgumentNullException>(() => { Console.Write(ch, 0, 1); });
            AssertConsoleMessage("#10", "");
        }

        [Test]
        public void TestWriteEnum()
        {
            var en = Values.Value1;
            Console.Write(en);
            AssertConsoleMessage("#1", "Value1");

            en = Values.Value2;
            Console.Write(en);
            AssertConsoleMessage("#2", "Value2");

            var f1 = Format1.One;
            Console.Write(f1);
            AssertConsoleMessage("#3", "one");

            var f2 = Format2.One;
            Console.Write(f2);
            AssertConsoleMessage("#4", "0");
        }

        [Test]
        public void TestWriteDecimalNullable()
        {
            decimal? d = -1m;
            Console.Write(d);
            AssertConsoleMessage("#1", "-1");

            d = 1.12345678m;
            Console.Write(d);
            AssertConsoleMessage("#2", "1.12345678");

            d = null;
            Console.Write(d);
            AssertConsoleMessage("#3", "");
        }

        [Test]
        public void TestWriteInt64Nullable()
        {
            long? l = 0;
            Console.Write(l);
            AssertConsoleMessage("#1", "0");

            l = 9223372036854775807;
            Console.Write(l);
            AssertConsoleMessage("#2", "9223372036854775807");

            l = -9223372036854775808;
            Console.Write(l);
            AssertConsoleMessage("#3", "-9223372036854775808");

            l = null;
            Console.Write(l);
            AssertConsoleMessage("#4", "");
        }

        [Test]
        public void TestWriteUInt64Nullable()
        {
            ulong? l = 0;
            Console.Write(l);
            AssertConsoleMessage("#1", "0");

            l = 18446744073709551615;
            Console.Write(l);
            AssertConsoleMessage("#2", "18446744073709551615");

            l = null;
            Console.Write(l);
            AssertConsoleMessage("#3", "");
        }

        #endregion Write
    }
}