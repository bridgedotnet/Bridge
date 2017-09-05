// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "StreamReaderTests - {0}")]
    public class StreamReaderTests
    {
        protected virtual Stream CreateStream()
        {
            return new MemoryStream();
        }

        protected virtual Stream GetSmallStream()
        {
            byte[] testData = new byte[] { 72, 69, 76, 76, 79 };
            return new MemoryStream(testData);
        }

        protected virtual Stream GetLargeStream()
        {
            byte[] testData = new byte[] { 72, 69, 76, 76, 79 };
            // System.Collections.Generic.

            List<byte> data = new List<byte>();
            for (int i = 0; i < 1000; i++)
            {
                data.AddRange(testData);
            }

            return new MemoryStream(data.ToArray());
        }

        protected Tuple<char[], StreamReader> GetCharArrayStream()
        {
            var chArr = new char[]{
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
                ,'\r'
                ,'\uFE70'
                ,'-'
                ,';'
                ,'\r'
                ,'\n'
                ,'T'
                ,'3'
                ,'\n'
                ,'K'
                ,'\u00E6'
            };
            var ms = CreateStream();
            var sw = new StreamWriter(ms);

            for (int i = 0; i < chArr.Length; i++)
                sw.Write(chArr[i]);
            sw.Flush();
            ms.Position = 0;

            return new Tuple<char[], StreamReader>(chArr, new StreamReader(ms));
        }

        [Test]
        public void ObjectClosedReadLine()
        {
            var baseInfo = GetCharArrayStream();
            StreamReader sr = baseInfo.Item2;

            sr.Close();
            Assert.Throws<Exception>(() => sr.ReadLine());
        }

        [Test]
        public void ObjectClosedReadLineBaseStream()
        {
            Stream ms = GetLargeStream();
            StreamReader sr = new StreamReader(ms);

            ms.Close();
            Assert.Throws<Exception>(() => sr.ReadLine());
        }

        [Test]
        public void Synchronized_NewObject()
        {
            using (Stream str = GetLargeStream())
            {
                StreamReader reader = new StreamReader(str);
                TextReader synced = TextReader.Synchronized(reader);
                Assert.True(reader == synced); // different with .NET, Bridge return the same reader in Synchronized
                int res1 = reader.Read();
                int res2 = synced.Read();
                Assert.AreNotEqual(res1, res2);
            }
        }

        public static IEnumerable<object[]> DetectEncoding_EncodingRoundtrips_MemberData()
        {
            yield return new object[] { new UTF8Encoding(encoderShouldEmitUTF8Identifier: true) };
            yield return new object[] { new UTF32Encoding(bigEndian: false, byteOrderMark: true) };
            yield return new object[] { new UTF32Encoding(bigEndian: true, byteOrderMark: true) };
            yield return new object[] { new UnicodeEncoding(bigEndian: false, byteOrderMark: true) };
            yield return new object[] { new UnicodeEncoding(bigEndian: true, byteOrderMark: true) };
        }

        [Test]
        public void EndOfStream()
        {
            var sw = new StreamReader(GetSmallStream());

            var result = sw.ReadToEnd();

            Assert.AreEqual("HELLO", result);

            Assert.True(sw.EndOfStream, "End of Stream was not true after ReadToEnd");
        }

        [Test]
        public void EndOfStreamSmallDataLargeBuffer()
        {
            var sw = new StreamReader(GetSmallStream(), Encoding.UTF8, true, 1024);

            var result = sw.ReadToEnd();

            Assert.AreEqual("HELLO", result);

            Assert.True(sw.EndOfStream, "End of Stream was not true after ReadToEnd");
        }

        [Test]
        public void EndOfStreamLargeDataSmallBuffer()
        {
            var sw = new StreamReader(GetLargeStream(), Encoding.UTF8, true, 1);

            var result = sw.ReadToEnd();

            Assert.AreEqual(5000, result.Length);

            Assert.True(sw.EndOfStream, "End of Stream was not true after ReadToEnd");
        }

        [Test]
        public void EndOfStreamLargeDataLargeBuffer()
        {
            var sw = new StreamReader(GetLargeStream(), Encoding.UTF8, true, 1 << 16);

            var result = sw.ReadToEnd();

            Assert.AreEqual(5000, result.Length);

            Assert.True(sw.EndOfStream, "End of Stream was not true after ReadToEnd");
        }

        [Test]
        public void ReadToEnd()
        {
            var sw = new StreamReader(GetLargeStream());
            var result = sw.ReadToEnd();

            Assert.AreEqual(5000, result.Length);
        }

        [Test]
        public void GetBaseStream()
        {
            var ms = GetSmallStream();
            var sw = new StreamReader(ms);

            Assert.AreStrictEqual(sw.BaseStream, ms);
        }

        [Test]
        public void TestRead()
        {
            var baseInfo = GetCharArrayStream();
            var sr = baseInfo.Item2;


            for (int i = 0; i < baseInfo.Item1.Length; i++)
            {
                int tmp = sr.Read();
                Assert.AreEqual((int)baseInfo.Item1[i], tmp);
            }

            sr.Dispose();
        }

        [Test]
        public void TestPeek()
        {
            var baseInfo = GetCharArrayStream();
            var sr = baseInfo.Item2;

            for (int i = 0; i < baseInfo.Item1.Length; i++)
            {
                var peek = sr.Peek();
                Assert.AreEqual((int)baseInfo.Item1[i], peek);

                sr.Read();
            }
        }

        [Test]
        public void ArgumentNullOnNullArray()
        {
            var baseInfo = GetCharArrayStream();
            var sr = baseInfo.Item2;

            Assert.Throws<ArgumentNullException>(() => sr.Read(null, 0, 0));
        }

        [Test]
        public void ArgumentOutOfRangeOnInvalidOffset()
        {
            var sr = GetCharArrayStream().Item2;
            Assert.Throws<ArgumentOutOfRangeException>(() => sr.Read(new char[0], -1, 0));
        }

        [Test]
        public void ArgumentOutOfRangeOnNegativCount()
        {
            var sr = GetCharArrayStream().Item2;
            Assert.Throws<ArgumentException>(() => sr.Read(new char[0], 0, 1));
        }

        [Test]
        public void ArgumentExceptionOffsetAndCount()
        {
            var sr = GetCharArrayStream().Item2;
            Assert.Throws<ArgumentException>(() => sr.Read(new char[0], 2, 0));
        }

        [Test]
        public void ObjectDisposedExceptionDisposedStream()
        {
            var sr = GetCharArrayStream().Item2;
            sr.Dispose();

            Assert.Throws<Exception>(() => sr.Read(new char[1], 0, 1));
        }

        [Test]
        public void ObjectDisposedExceptionDisposedBaseStream()
        {
            var ms = GetSmallStream();
            var sr = new StreamReader(ms);
            ms.Dispose();

            Assert.Throws<Exception>(() => sr.Read(new char[1], 0, 1));
        }

        [Test]
        public void EmptyStream()
        {
            var ms = CreateStream();
            var sr = new StreamReader(ms);

            var buffer = new char[10];
            int read = sr.Read(buffer, 0, 1);
            Assert.AreEqual(0, read);
        }

        [Test]
        public void VanillaReads1()
        {
            var baseInfo = GetCharArrayStream();
            var sr = baseInfo.Item2;

            var chArr = new char[baseInfo.Item1.Length];

            var read = sr.Read(chArr, 0, chArr.Length);

            Assert.AreEqual(chArr.Length, read);
            for (int i = 0; i < baseInfo.Item1.Length; i++)
            {
                Assert.AreEqual(baseInfo.Item1[i], chArr[i]);
            }
        }

        [Test]
        public void VanillaReads2WithAsync()
        {
            var baseInfo = GetCharArrayStream();

            var sr = baseInfo.Item2;

            var chArr = new char[baseInfo.Item1.Length];

            var read = sr.Read(chArr, 4, 3);

            Assert.AreEqual(read, 3);
            for (int i = 0; i < 3; i++)
            {
                Assert.AreEqual(baseInfo.Item1[i], chArr[i + 4]);
            }
        }

        [Test]
        public void ObjectDisposedReadLine()
        {
            var baseInfo = GetCharArrayStream();
            var sr = baseInfo.Item2;

            sr.Dispose();
            Assert.Throws<Exception>(() => sr.ReadLine());
        }

        [Test]
        public void ObjectDisposedReadLineBaseStream()
        {
            var ms = GetLargeStream();
            var sr = new StreamReader(ms);

            ms.Dispose();
            Assert.Throws<Exception>(() => sr.ReadLine());
        }

        [Test]
        public void VanillaReadLines()
        {
            var baseInfo = GetCharArrayStream();
            var sr = baseInfo.Item2;

            string valueString = new string(baseInfo.Item1);


            var data = sr.ReadLine();
            Assert.AreEqual(valueString.Substring(0, valueString.IndexOf('\r')), data);

            data = sr.ReadLine();
            Assert.AreEqual(valueString.Substring(valueString.IndexOf('\r') + 1, 3), data);

            data = sr.ReadLine();
            Assert.AreEqual(valueString.Substring(valueString.IndexOf('\n') + 1, 2), data);

            data = sr.ReadLine();
            Assert.AreEqual((valueString.Substring(valueString.LastIndexOf('\n') + 1)), data);
        }

        [Test]
        public void VanillaReadLines2()
        {
            var baseInfo = GetCharArrayStream();
            var sr = baseInfo.Item2;

            string valueString = new string(baseInfo.Item1);

            var temp = new char[10];
            sr.Read(temp, 0, 1);
            var data = sr.ReadLine();
            Assert.AreEqual(valueString.Substring(1, valueString.IndexOf('\r') - 1), data);
        }

        [Test]
        public void ContinuousNewLinesAndTabsAsync()
        {
            var ms = CreateStream();
            var sw = new StreamWriter(ms);
            sw.Write("\n\n\r\r\n");
            sw.Flush();

            ms.Position = 0;

            var sr = new StreamReader(ms);

            for (int i = 0; i < 4; i++)
            {
                var data = sr.ReadLine();
                Assert.AreEqual(string.Empty, data);
            }

            var eol = sr.ReadLine();
            Assert.Null(eol);
        }

        [Test]
        public void CurrentEncoding()
        {
            var ms = CreateStream();

            var sr = new StreamReader(ms);
            Assert.AreEqual(Encoding.UTF8, sr.CurrentEncoding);

            sr = new StreamReader(ms, Encoding.Unicode);
            Assert.AreEqual(Encoding.Unicode, sr.CurrentEncoding);

        }
    }
}
