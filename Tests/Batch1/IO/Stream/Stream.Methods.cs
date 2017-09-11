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
    [TestFixture(TestNameFormat = "StreamMethods - {0}")]
    public class StreamMethods
    {
        protected virtual Stream CreateStream()
        {
            return new MemoryStream();
        }

        protected virtual Stream CreateStream(int bufferSize)
        {
            return new MemoryStream(new byte[bufferSize]);
        }

        [Test]
        public void Synchronized_NewObject()
        {
            using (Stream str = CreateStream())
            {
                using (Stream synced = Stream.Synchronized(str))
                {
                    synced.Write(new byte[] { 1 }, 0, 1);
                    Assert.True(1 == str.Length);
                }
            }
        }

        [Test]
        public void MemoryStreamSeekStress()
        {
            var ms1 = CreateStream();
            SeekTest(ms1, false);
        }
        [Test]
        public void MemoryStreamSeekStressWithInitialBuffer()
        {
            var ms1 = CreateStream(1024);
            SeekTest(ms1, false);
        }

        [Test]
        public void MemoryStreamStress()
        {
            var ms1 = CreateStream();
            StreamTest(ms1, false);
        }

        public static void SeekTest(Stream stream, Boolean fSuppres)
        {
            long lngPos;
            byte btValue;

            stream.Position = 0;

            Assert.True(0 == stream.Position);

            int length = 1 << 10; //fancy way of writing 2 to the pow 10
            byte[] btArr = new byte[length];
            for (int i = 0; i < btArr.Length; i++)
                btArr[i] = unchecked((byte)i);

            if (stream.CanWrite)
                stream.Write(btArr, 0, btArr.Length);
            else
                stream.Position = btArr.Length;

            Assert.True(btArr.Length == stream.Position);

            lngPos = stream.Seek(0, SeekOrigin.Begin);
            Assert.True(0 == lngPos);

            Assert.True(0 == stream.Position);

            for (int i = 0; i < btArr.Length; i++)
            {
                if (stream.CanWrite)
                {
                    btValue = (byte)stream.ReadByte();
                    Assert.AreEqual(btArr[i], btValue);
                }
                else
                {
                    stream.Seek(1, SeekOrigin.Current);
                }
                Assert.True((i + 1) == stream.Position);
            }

            Assert.Throws<IOException>(() => stream.Seek(-5, SeekOrigin.Begin));

            lngPos = stream.Seek(5, SeekOrigin.Begin);
            Assert.True(5 == lngPos);
            Assert.True(5 == stream.Position);

            lngPos = stream.Seek(5, SeekOrigin.End);
            Assert.True((length + 5) == lngPos);
            Assert.Throws<IOException>(() => stream.Seek(-(btArr.Length + 1), SeekOrigin.End));

            lngPos = stream.Seek(-5, SeekOrigin.End);
            Assert.True(btArr.Length - 5 == lngPos);
            Assert.True((btArr.Length - 5) == stream.Position);

            lngPos = stream.Seek(0, SeekOrigin.End);
            Assert.True(btArr.Length == stream.Position);

            for (int i = btArr.Length; i > 0; i--)
            {
                stream.Seek(-1, SeekOrigin.Current);
                Assert.True(i - 1 == stream.Position);
            }

            Assert.Throws<IOException>(() => stream.Seek(-1, SeekOrigin.Current));
        }

        public static void StreamTest(Stream stream, Boolean fSuppress)
        {

            string strValue;
            int iValue;

            //[] We will first use the stream's 2 writing methods
            int iLength = 1 << 10;
            stream.Seek(0, SeekOrigin.Begin);

            for (int i = 0; i < iLength; i++)
                stream.WriteByte(unchecked((byte)i));

            byte[] btArr = new byte[iLength];
            for (int i = 0; i < iLength; i++)
                btArr[i] = unchecked((byte)i);
            stream.Write(btArr, 0, iLength);

            //we will write many things here using a binary writer
            BinaryWriter bw1 = new BinaryWriter(stream);
            bw1.Write(false);
            bw1.Write(true);

            for (int i = 0; i < 10; i++)
            {
                bw1.Write((byte)i);
                bw1.Write((sbyte)i);
                bw1.Write((short)i);
                bw1.Write((char)i);
                bw1.Write((UInt16)i);
                bw1.Write(i);
                bw1.Write((uint)i);
                bw1.Write((Int64)i);
                bw1.Write((ulong)i);
                bw1.Write((float)i);
                bw1.Write((double)i);
            }

            //Some strings, chars and Bytes
            char[] chArr = new char[iLength];
            for (int i = 0; i < iLength; i++)
                chArr[i] = (char)i;

            bw1.Write(chArr);
            bw1.Write(chArr, 512, 512);

            bw1.Write(new string(chArr));
            bw1.Write(new string(chArr));

            //[] we will now read
            stream.Seek(0, SeekOrigin.Begin);
            for (int i = 0; i < iLength; i++)
            {
                Assert.AreEqual(i % 256, stream.ReadByte());
            }


            btArr = new byte[iLength];
            stream.Read(btArr, 0, iLength);
            for (int i = 0; i < iLength; i++)
            {
                Assert.AreEqual(unchecked((byte)i), btArr[i]);
            }

            //Now, for the binary reader
            BinaryReader br1 = new BinaryReader(stream);

            Assert.False(br1.ReadBoolean());
            Assert.True(br1.ReadBoolean());

            for (int i = 0; i < 10; i++)
            {
                Assert.AreEqual((byte)i, br1.ReadByte());
                Assert.AreEqual((sbyte)i, br1.ReadSByte());
                Assert.AreEqual((short)i, br1.ReadInt16());
                Assert.AreEqual((char)i, br1.ReadChar());
                Assert.AreEqual((UInt16)i, br1.ReadUInt16());
                Assert.AreEqual(i, br1.ReadInt32());
                Assert.AreEqual((uint)i, br1.ReadUInt32());
                Assert.True((Int64)i == br1.ReadInt64());
                Assert.True((ulong)i == br1.ReadUInt64());
                Assert.AreEqual((float)i, br1.ReadSingle());
                Assert.AreEqual((double)i, br1.ReadDouble());
            }

            chArr = br1.ReadChars(iLength);
            for (int i = 0; i < iLength; i++)
            {
                Assert.AreEqual((char)i, chArr[i]);
            }

            chArr = new char[512];
            chArr = br1.ReadChars(iLength / 2);
            for (int i = 0; i < iLength / 2; i++)
            {
                Assert.AreEqual((char)(iLength / 2 + i), chArr[i]);
            }

            chArr = new char[iLength];
            for (int i = 0; i < iLength; i++)
                chArr[i] = (char)i;
            strValue = br1.ReadString();
            Assert.AreEqual(new string(chArr), strValue);

            strValue = br1.ReadString();
            Assert.AreEqual(new string(chArr), strValue);

            stream.Seek(1, SeekOrigin.Current); // In the original test, success here would end the test

            //[] we will do some async tests here now
            stream.Position = 0;

            btArr = new byte[iLength];
            for (int i = 0; i < iLength; i++)
                btArr[i] = unchecked((byte)(i + 5));

            stream.Write(btArr, 0, btArr.Length);

            stream.Position = 0;
            for (int i = 0; i < iLength; i++)
            {
                Assert.AreEqual(unchecked((byte)(i + 5)), stream.ReadByte());
            }

            //we will read asynchronously
            stream.Position = 0;

            byte[] compArr = new byte[iLength];

            iValue = stream.Read(compArr, 0, compArr.Length);

            Assert.AreEqual(btArr.Length, iValue);

            for (int i = 0; i < iLength; i++)
            {
                Assert.AreEqual(compArr[i], btArr[i]);
            }
        }

        [Test]
        public void FlushAsyncTest()
        {
            byte[] data = Enumerable.Range(0, 8000).Select(i => unchecked((byte)i)).ToArray();
            Stream stream = CreateStream();

            for (int i = 0; i < 4; i++)
            {
                stream.Write(data, 2000 * i, 2000);
                stream.Flush();
            }

            stream.Position = 0;
            byte[] output = new byte[data.Length];
            int bytesRead, totalRead = 0;
            while ((bytesRead = stream.Read(output, totalRead, data.Length - totalRead)) > 0)
                totalRead += bytesRead;
            Assert.AreEqual(data, output);
        }
    }
}
