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
    [TestFixture(TestNameFormat = "WriteTests - {0}")]
    public class WriteTests
    {
        protected virtual Stream CreateStream()
        {
            return new MemoryStream();
        }

        [Test]
        public void Synchronized_NewObject()
        {
            using (Stream str = CreateStream())
            {
                StreamWriter writer = new StreamWriter(str);
                TextWriter synced = TextWriter.Synchronized(writer); // different with .NET, Bridge return the same writer in Synchronized
                Assert.True(writer == synced);
                writer.Write("app");
                synced.Write("pad");

                writer.Flush();
                synced.Flush();

                str.Position = 0;
                StreamReader reader = new StreamReader(str);
                Assert.AreEqual("apppad", reader.ReadLine());
            }
        }

        [Test]
        public void WriteChars()
        {
            char[] chArr = setupArray();

            // [] Write a wide variety of characters and read them back

            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);
            StreamReader sr;

            for (int i = 0; i < chArr.Length; i++)
                sw.Write(chArr[i]);
            sw.Flush();
            ms.Position = 0;
            sr = new StreamReader(ms);

            for (int i = 0; i < chArr.Length; i++)
            {
                Assert.AreEqual((int)chArr[i], sr.Read());
            }
        }

        private static char[] setupArray()
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

        [Test]
        public void NullArray()
        {
            // [] Exception for null array
            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);

            Assert.Throws<ArgumentNullException>(() => sw.Write(null, 0, 0));
            sw.Dispose();
        }

        [Test]
        public void NegativeOffset()
        {
            char[] chArr = setupArray();

            // [] Exception if offset is negative
            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);

            Assert.Throws<ArgumentOutOfRangeException>(() => sw.Write(chArr, -1, 0));
            sw.Dispose();
        }

        [Test]
        public void NegativeCount()
        {
            char[] chArr = setupArray();

            // [] Exception if count is negative
            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);

            Assert.Throws<ArgumentOutOfRangeException>(() => sw.Write(chArr, 0, -1));
            sw.Dispose();
        }

        [Test]
        public void WriteCustomLenghtStrings()
        {
            char[] chArr = setupArray();

            // [] Write some custom length strings
            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);
            StreamReader sr;

            sw.Write(chArr, 2, 5);
            sw.Flush();
            ms.Position = 0;
            sr = new StreamReader(ms);
            int tmp = 0;
            for (int i = 2; i < 7; i++)
            {
                tmp = sr.Read();
                Assert.AreEqual((int)chArr[i], tmp);
            }
            ms.Dispose();
        }

        [Test]
        public void WriteToStreamWriter()
        {
            char[] chArr = setupArray();
            // [] Just construct a streamwriter and write to it
            //-------------------------------------------------
            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);
            StreamReader sr;

            sw.Write(chArr, 0, chArr.Length);
            sw.Flush();
            ms.Position = 0;
            sr = new StreamReader(ms);

            for (int i = 0; i < chArr.Length; i++)
            {
                Assert.AreEqual((int)chArr[i], sr.Read());
            }
            ms.Dispose();
        }

        [Test]
        public void TestWritingPastEndOfArray()
        {
            char[] chArr = setupArray();
            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);

            Assert.Throws<ArgumentException>(() => sw.Write(chArr, 1, chArr.Length));
            sw.Dispose();
        }

        [Test]
        public void VerifyWrittenString()
        {
            char[] chArr = setupArray();
            // [] Write string with wide selection of characters and read it back

            StringBuilder sb = new StringBuilder(40);
            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);
            StreamReader sr;

            for (int i = 0; i < chArr.Length; i++)
                sb.Append(chArr[i]);

            sw.Write(sb.ToString());
            sw.Flush();
            ms.Position = 0;
            sr = new StreamReader(ms);

            for (int i = 0; i < chArr.Length; i++)
            {
                Assert.AreEqual((int)chArr[i], sr.Read());
            }
        }

        [Test]
        public void NullStreamThrows()
        {
            // [] Null string should write nothing

            Stream ms = CreateStream();
            StreamWriter sw = new StreamWriter(ms);
            sw.Write((string)null);
            sw.Flush();
            Assert.True(0 == ms.Length);
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
