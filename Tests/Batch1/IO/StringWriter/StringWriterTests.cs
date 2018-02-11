// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "StringWriterTests - {0}")]
    public class StringWriterTests
    {
        static int[] iArrInvalidValues = new int[] { -1, -2, -100, -1000, -10000, -100000, -1000000, -10000000, -100000000, -1000000000, int.MinValue, short.MinValue };
        static int[] iArrLargeValues = new int[] { int.MaxValue, int.MaxValue - 1, int.MaxValue / 2, int.MaxValue / 10, int.MaxValue / 100 };
        static int[] iArrValidValues = new int[] { 10000, 100000, int.MaxValue / 2000, int.MaxValue / 5000, short.MaxValue };

        private static char[] getCharArray()
        {
            return new char[]{
            char.MinValue
            ,char.MaxValue
            ,'\t'
            ,' '
            ,'$'
            ,'@'
            ,'#'
            ,'\0'
            ,'\v'
            ,'\''
            ,'\u3190'
            ,'\uC3A0'
            ,'A'
            ,'5'
            ,'\uFE70'
            ,'-'
            ,';'
            ,'\u00E6'
        };
        }

        private static StringBuilder getSb()
        {
            var chArr = getCharArray();
            var sb = new StringBuilder(40);
            for (int i = 0; i < chArr.Length; i++)
                sb.Append(chArr[i]);

            return sb;
        }

        [Test]
        public static void Ctor()
        {
            StringWriter sw = new StringWriter();
            Assert.NotNull(sw);
        }

        [Test]
        public static void CtorWithStringBuilder()
        {
            var sb = getSb();
            StringWriter sw = new StringWriter(getSb());
            Assert.NotNull(sw);
            Assert.AreEqual(sb.Length, sw.GetStringBuilder().Length);
        }

        [Test]
        public static void CtorWithCultureInfo()
        {
            StringWriter sw = new StringWriter(CultureInfo.GetCultureInfo("en-US"));
            Assert.NotNull(sw);

            Assert.AreEqual(CultureInfo.GetCultureInfo("en-US"), sw.FormatProvider);
        }

        [Test]
        public static void SimpleWriter()
        {
            var sw = new StringWriter();
            sw.Write(4);
            var sb = sw.GetStringBuilder();
            Assert.AreEqual("4", sb.ToString());
        }

        [Test]
        public static void WriteArray()
        {
            var chArr = getCharArray();
            StringBuilder sb = getSb();
            StringWriter sw = new StringWriter(sb);

            var sr = new StringReader(sw.GetStringBuilder().ToString());

            for (int i = 0; i < chArr.Length; i++)
            {
                int tmp = sr.Read();
                Assert.AreEqual((int)chArr[i], tmp);
            }
        }

        [Test]
        public static void CantWriteNullArray()
        {
            var sw = new StringWriter();
            Assert.Throws<ArgumentNullException>(() => sw.Write(null, 0, 0));
        }

        [Test]
        public static void CantWriteNegativeOffset()
        {
            var sw = new StringWriter();
            Assert.Throws<ArgumentOutOfRangeException>(() => sw.Write(new char[0], -1, 0));
        }

        [Test]
        public static void CantWriteNegativeCount()
        {
            var sw = new StringWriter();
            Assert.Throws<ArgumentOutOfRangeException>(() => sw.Write(new char[0], 0, -1));
        }

        [Test]
        public static void CantWriteIndexLargeValues()
        {
            var chArr = getCharArray();
            for (int i = 0; i < iArrLargeValues.Length; i++)
            {
                StringWriter sw = new StringWriter();
                Assert.Throws<ArgumentException>(() => sw.Write(chArr, iArrLargeValues[i], chArr.Length));
            }
        }

        [Test]
        public static void CantWriteCountLargeValues()
        {
            var chArr = getCharArray();
            for (int i = 0; i < iArrLargeValues.Length; i++)
            {
                StringWriter sw = new StringWriter();
                Assert.Throws<ArgumentException>(() => sw.Write(chArr, 0, iArrLargeValues[i]));
            }
        }

        [Test]
        public static void WriteWithOffset()
        {
            StringWriter sw = new StringWriter();
            StringReader sr;

            var chArr = getCharArray();

            sw.Write(chArr, 2, 5);

            sr = new StringReader(sw.ToString());
            for (int i = 2; i < 7; i++)
            {
                int tmp = sr.Read();
                Assert.AreEqual((int)chArr[i], tmp);
            }
        }

        [Test]
        public static void WriteWithLargeIndex()
        {
            for (int i = 0; i < iArrValidValues.Length; i++)
            {
                StringBuilder sb = new StringBuilder(int.MaxValue / 2000);
                StringWriter sw = new StringWriter(sb);

                var chArr = new char[int.MaxValue / 2000];
                for (int j = 0; j < chArr.Length; j++)
                    chArr[j] = (char)(j % 256);
                sw.Write(chArr, iArrValidValues[i] - 1, 1);

                string strTemp = sw.GetStringBuilder().ToString();
                Assert.AreEqual(1, strTemp.Length);
            }
        }

        [Test]
        public static void WriteWithLargeCount()
        {
            for (int i = 0; i < iArrValidValues.Length; i++)
            {
                StringBuilder sb = new StringBuilder(int.MaxValue / 2000);
                StringWriter sw = new StringWriter(sb);

                var chArr = new char[int.MaxValue / 2000];
                for (int j = 0; j < chArr.Length; j++)
                    chArr[j] = (char)(j % 256);

                sw.Write(chArr, 0, iArrValidValues[i]);

                string strTemp = sw.GetStringBuilder().ToString();
                Assert.AreEqual(iArrValidValues[i], strTemp.Length);
            }
        }

        [Test]
        public static void NewStringWriterIsEmpty()
        {
            var sw = new StringWriter();
            Assert.AreEqual(string.Empty, sw.ToString());
        }

        [Test]
        public static void NewStringWriterHasEmptyStringBuilder()
        {
            var sw = new StringWriter();
            Assert.AreEqual(string.Empty, sw.GetStringBuilder().ToString());
        }

        [Test]
        public static void ToStringReturnsWrittenData()
        {
            StringBuilder sb = getSb();
            StringWriter sw = new StringWriter(sb);

            sw.Write(sb.ToString());

            Assert.AreEqual(sb.ToString(), sw.ToString());
        }

        [Test]
        public static void StringBuilderHasCorrectData()
        {
            StringBuilder sb = getSb();
            StringWriter sw = new StringWriter(sb);

            sw.Write(sb.ToString());

            Assert.AreEqual(sb.ToString(), sw.GetStringBuilder().ToString());
        }

        [Test]
        public static void Closed_DisposedExceptions()
        {
            StringWriter sw = new StringWriter();
            sw.Close();
            ValidateDisposedExceptions(sw);
        }

        [Test]
        public static void Disposed_DisposedExceptions()
        {
            StringWriter sw = new StringWriter();
            sw.Dispose();
            ValidateDisposedExceptions(sw);
        }

        private static void ValidateDisposedExceptions(StringWriter sw)
        {
            Assert.Throws<Exception>(() => { sw.Write('a'); });
            Assert.Throws<Exception>(() => { sw.Write(new char[10], 0, 1); });
            Assert.Throws<Exception>(() => { sw.Write("abc"); });
        }

        [Test]
        public static void FlushAsyncWorks()
        {
            StringBuilder sb = getSb();
            StringWriter sw = new StringWriter(sb);

            sw.Write(sb.ToString());

            sw.Flush();

            Assert.AreEqual(sb.ToString(), sw.GetStringBuilder().ToString());
        }

        [Test]
        public static void MiscWrites()
        {
            var sw = new StringWriter();
            sw.Write('H');
            sw.Write("ello World!");

            Assert.AreEqual("Hello World!", sw.ToString());
        }

        [Test]
        public static void MiscWritesAsync()
        {
            var sw = new StringWriter();
            sw.Write('H');
            sw.Write(new char[] { 'e', 'l', 'l', 'o', ' ' });
            sw.Write("World!");

            Assert.AreEqual("Hello World!", sw.ToString());
        }

        [Test]
        public static void MiscWriteLineAsync()
        {
            var sw = new StringWriter();
            sw.WriteLine('H');
            sw.WriteLine(new char[] { 'e', 'l', 'l', 'o' });
            sw.WriteLine("World!");

            Assert.AreEqual(
                string.Format("H{0}ello{0}World!{0}", "\r\n"),
                sw.ToString());
        }

        [Test]
        public static void GetEncoding()
        {
            var sw = new StringWriter();
            Assert.AreEqual(Encoding.Unicode.EncodingName, sw.Encoding.EncodingName);
        }

        [Test]
        public static void TestWriteMisc()
        {
            CultureInfo old = CultureInfo.CurrentCulture;
            CultureInfo.CurrentCulture = new CultureInfo("en-US"); // floating-point formatting comparison depends on culture
            try
            {
                var sw = new StringWriter();

                sw.Write(true);
                sw.Write((char)'a');
                sw.Write(new decimal(1234.01));
                sw.Write((double)3452342.01);
                sw.Write((int)23456);
                sw.Write((long)long.MinValue);
                sw.Write((float)1234.50f);
                sw.Write((uint)uint.MaxValue);
                sw.Write((ulong)ulong.MaxValue);

                Assert.AreEqual("Truea1234.013452342.0123456-92233720368547758081234.5429496729518446744073709551615", sw.ToString());
            }
            finally
            {
                CultureInfo.CurrentCulture = old;
            }
        }

        [Test]
        public static void TestWriteObject()
        {
            var sw = new StringWriter();
            sw.Write(new Object());
            Assert.AreEqual("System.Object", sw.ToString());
        }

        [Test]
        public static void TestWriteLineMisc()
        {
            CultureInfo old = CultureInfo.CurrentCulture;
            CultureInfo.CurrentCulture = new CultureInfo("en-US"); // floating-point formatting comparison depends on culture
            try
            {
                var sw = new StringWriter();
                sw.WriteLine((bool)false);
                sw.WriteLine((char)'B');
                sw.WriteLine((int)987);
                sw.WriteLine((long)875634);
                sw.WriteLine((float)1.23457f);
                sw.WriteLine((uint)45634563);
                sw.WriteLine((ulong.MaxValue));

                Assert.AreEqual(
                    string.Format("False{0}B{0}987{0}875634{0}1.23457{0}45634563{0}18446744073709551615{0}", "\r\n"),
                    sw.ToString());
            }
            finally
            {
                CultureInfo.CurrentCulture = old;
            }
        }

        [Test]
        public static void TestWriteLineObject()
        {
            var sw = new StringWriter();
            sw.WriteLine(new Object());
            Assert.AreEqual("System.Object\r\n", sw.ToString());
        }

        [Test]
        public static void TestWriteLineAsyncCharArray()
        {
            StringWriter sw = new StringWriter();
            sw.WriteLine(new char[] { 'H', 'e', 'l', 'l', 'o' });

            Assert.AreEqual("Hello\r\n", sw.ToString());
        }

        [Test]
        public void NullNewLineAsync()
        {
            using (MemoryStream ms = new MemoryStream())
            {
                string newLine;
                using (StreamWriter sw = new StreamWriter(ms, Encoding.UTF8, 16, true))
                {
                    newLine = sw.NewLine;
                    sw.WriteLine(default(string));
                    sw.WriteLine(default(string));
                }
                ms.Seek(0, SeekOrigin.Begin);
                using (StreamReader sr = new StreamReader(ms))
                {
                    Assert.AreEqual(newLine + newLine, sr.ReadToEnd());
                }
            }
        }
    }
}
