// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BinaryWriterTests - {0}")]
    public class BinaryWriterTests
    {
        protected virtual Stream CreateStream()
        {
            return new MemoryStream();
        }

        [Test]
        public void BinaryWriter_CtorAndWriteTests1()
        {
            // [] Smoke test to ensure that we can write with the constructed writer
            using (Stream mstr = CreateStream())
            using (BinaryWriter dw2 = new BinaryWriter(mstr))
            using (BinaryReader dr2 = new BinaryReader(mstr))
            {
                dw2.Write(true);
                dw2.Flush();
                mstr.Position = 0;

                Assert.True(dr2.ReadBoolean());
            }
        }

        [Test]
        public void BinaryWriter_CtorAndWriteTests1_Negative()
        {
            // [] Should throw ArgumentNullException for null argument
            Assert.Throws<ArgumentNullException>(() => new BinaryWriter(null));

            // [] Can't construct a BinaryWriter on a readonly stream
            using (Stream memStream = new MemoryStream(new byte[10], false))
            {
                Assert.Throws<ArgumentException>(() => new BinaryWriter(memStream));
            }

            // [] Can't construct a BinaryWriter with a closed stream
            {
                Stream memStream = CreateStream();
                memStream.Dispose();
                Assert.Throws<ArgumentException>(() => new BinaryWriter(memStream));
            }
        }

        [Test]
        public void BinaryWriter_EncodingCtorAndWriteTests()
        {
            foreach (var array in EncodingAndEncodingStrings)
            {
                Encoding encoding = (Encoding)array[0];
                string testString = (string)array[1];

                using (Stream memStream = CreateStream())
                using (BinaryWriter writer = new BinaryWriter(memStream, encoding))
                using (BinaryReader reader = new BinaryReader(memStream, encoding))
                {
                    writer.Write(testString);
                    writer.Flush();
                    memStream.Position = 0;

                    Assert.AreEqual(testString, reader.ReadString());
                }
            }
        }

        public static IEnumerable<object[]> EncodingAndEncodingStrings
        {
            get
            {
                yield return new object[] { Encoding.UTF8, "This is UTF8\u00FF" };
                yield return new object[] { Encoding.BigEndianUnicode, "This is BigEndianUnicode\u00FF" };
                yield return new object[] { Encoding.Unicode, "This is Unicode\u00FF" };
            }
        }

        [Test]
        public void BinaryWriter_EncodingCtorAndWriteTests_Negative()
        {
            // [] Check for ArgumentNullException on null stream
            Assert.Throws<ArgumentNullException>(() => new BinaryReader((Stream)null, Encoding.UTF8));

            // [] Check for ArgumentNullException on null encoding
            Assert.Throws<ArgumentNullException>(() => new BinaryReader(CreateStream(), null));
        }

        [Test]
        public void BinaryWriter_SeekTests()
        {
            int[] iArrLargeValues = new int[] { 10000, 100000, int.MaxValue / 200, int.MaxValue / 1000, short.MaxValue, int.MaxValue, int.MaxValue - 1, int.MaxValue / 2, int.MaxValue / 10, int.MaxValue / 100 };

            BinaryWriter dw2 = null;
            MemoryStream mstr = null;
            byte[] bArr = null;
            StringBuilder sb = new StringBuilder();
            Int64 lReturn = 0;

            mstr = new MemoryStream();
            dw2 = new BinaryWriter(mstr);
            dw2.Write("Hello, this is my string".ToCharArray());
            for (int iLoop = 0; iLoop < iArrLargeValues.Length; iLoop++)
            {
                lReturn = dw2.Seek(iArrLargeValues[iLoop], SeekOrigin.Begin);

                Assert.True(iArrLargeValues[iLoop] == lReturn);
            }
            dw2.Dispose();
            mstr.Dispose();

            // [] Seek from start of stream
            mstr = new MemoryStream();
            dw2 = new BinaryWriter(mstr);
            dw2.Write("0123456789".ToCharArray());
            lReturn = dw2.Seek(0, SeekOrigin.Begin);

            Assert.True(0 == lReturn);

            dw2.Write("lki".ToCharArray());
            dw2.Flush();
            bArr = mstr.ToArray();
            sb = new StringBuilder();
            for (int i = 0; i < bArr.Length; i++)
                sb.Append((char)bArr[i]);

            Assert.AreEqual("lki3456789", sb.ToString());

            dw2.Dispose();
            mstr.Dispose();

            // [] Seek into stream from start
            mstr = new MemoryStream();
            dw2 = new BinaryWriter(mstr);
            dw2.Write("0123456789".ToCharArray());
            lReturn = dw2.Seek(3, SeekOrigin.Begin);

            Assert.True(3 == lReturn);

            dw2.Write("lk".ToCharArray());
            dw2.Flush();
            bArr = mstr.ToArray();
            sb = new StringBuilder();
            for (int i = 0; i < bArr.Length; i++)
                sb.Append((char)bArr[i]);

            Assert.AreEqual("012lk56789", sb.ToString());

            dw2.Dispose();
            mstr.Dispose();

            // [] Seek from end of stream
            mstr = new MemoryStream();
            dw2 = new BinaryWriter(mstr);
            dw2.Write("0123456789".ToCharArray());
            lReturn = dw2.Seek(-3, SeekOrigin.End);

            Assert.True(7 == lReturn);

            dw2.Write("ll".ToCharArray());
            dw2.Flush();
            bArr = mstr.ToArray();
            sb = new StringBuilder();
            for (int i = 0; i < bArr.Length; i++)
                sb.Append((char)bArr[i]);

            Assert.AreEqual("0123456ll9", sb.ToString());

            dw2.Dispose();
            mstr.Dispose();

            // [] Seeking from current position
            mstr = new MemoryStream();
            dw2 = new BinaryWriter(mstr);
            dw2.Write("0123456789".ToCharArray());
            mstr.Position = 2;
            lReturn = dw2.Seek(2, SeekOrigin.Current);

            Assert.True(4 == lReturn);

            dw2.Write("ll".ToCharArray());
            dw2.Flush();
            bArr = mstr.ToArray();
            sb = new StringBuilder();
            for (int i = 0; i < bArr.Length; i++)
                sb.Append((char)bArr[i]);

            Assert.AreEqual("0123ll6789", sb.ToString());

            dw2.Dispose();
            mstr.Dispose();

            // [] Seeking past the end from middle
            mstr = new MemoryStream();
            dw2 = new BinaryWriter(mstr);
            dw2.Write("0123456789".ToCharArray());
            lReturn = dw2.Seek(4, SeekOrigin.End); //This won't throw any exception now.

            Assert.True(14 == mstr.Position);


            dw2.Dispose();
            mstr.Dispose();

            // [] Seek past the end from beginning
            mstr = new MemoryStream();
            dw2 = new BinaryWriter(mstr);
            dw2.Write("0123456789".ToCharArray());
            lReturn = dw2.Seek(11, SeekOrigin.Begin);  //This won't throw any exception now.

            Assert.True(11 == mstr.Position);

            dw2.Dispose();
            mstr.Dispose();

            // [] Seek to the end
            mstr = new MemoryStream();
            dw2 = new BinaryWriter(mstr);
            dw2.Write("0123456789".ToCharArray());
            lReturn = dw2.Seek(10, SeekOrigin.Begin);

            Assert.True(10 == lReturn);

            dw2.Write("ll".ToCharArray());
            bArr = mstr.ToArray();
            sb = new StringBuilder();
            for (int i = 0; i < bArr.Length; i++)
                sb.Append((char)bArr[i]);

            Assert.AreEqual("0123456789ll", sb.ToString());

            dw2.Dispose();
            mstr.Dispose();
        }

        [Test]
        public void BinaryWriter_SeekTests_NegativeOffset()
        {
            var data = new int[] { -1, -2, -10000, int.MinValue };
            foreach (var invalidValue in data)
            {
                // [] IOException if offset is negative
                using (Stream memStream = CreateStream())
                using (BinaryWriter writer = new BinaryWriter(memStream))
                {
                    writer.Write("Hello, this is my string".ToCharArray());
                    Assert.Throws<IOException>(() => writer.Seek(invalidValue, SeekOrigin.Begin));
                }
            }
        }

        [Test]
        public void BinaryWriter_SeekTests_InvalidSeekOrigin()
        {
            // [] ArgumentException for invalid seekOrigin
            using (Stream memStream = CreateStream())
            using (BinaryWriter writer = new BinaryWriter(memStream))
            {
                writer.Write("012345789".ToCharArray());

                Assert.Throws<ArgumentException>(() =>
                {
                    writer.Seek(3, ~SeekOrigin.Begin);
                });
            }
        }

        [Test]
        public void BinaryWriter_BaseStreamTests()
        {
            // [] Get the base stream for MemoryStream
            using (Stream ms2 = CreateStream())
            using (BinaryWriter sr2 = new BinaryWriter(ms2))
            {
                Assert.AreStrictEqual(ms2, sr2.BaseStream);
            }
        }

        [Test]
        public virtual void BinaryWriter_FlushTests()
        {
            // [] Check that flush updates the underlying stream
            using (Stream memstr2 = CreateStream())
            using (BinaryWriter bw2 = new BinaryWriter(memstr2))
            {
                string str = "HelloWorld";
                int expectedLength = str.Length + 1; // 1 for 7-bit encoded length
                bw2.Write(str);
                Assert.True(expectedLength == memstr2.Length);
                bw2.Flush();
                Assert.True(expectedLength == memstr2.Length);
            }

            // [] Flushing a closed writer may throw an exception depending on the underlying stream
            using (Stream memstr2 = CreateStream())
            {
                BinaryWriter bw2 = new BinaryWriter(memstr2);
                bw2.Dispose();
                bw2.Flush();
            }
        }

        [Test(ExpectedCount = 0)]
        public void BinaryWriter_DisposeTests()
        {
            // Disposing multiple times should not throw an exception
            using (Stream memStream = CreateStream())
            using (BinaryWriter binaryWriter = new BinaryWriter(memStream))
            {
                binaryWriter.Dispose();
                binaryWriter.Dispose();
                binaryWriter.Dispose();
            }
        }

        [Test(ExpectedCount = 0)]
        public void BinaryWriter_CloseTests()
        {
            // Closing multiple times should not throw an exception
            using (Stream memStream = CreateStream())
            using (BinaryWriter binaryWriter = new BinaryWriter(memStream))
            {
                binaryWriter.Close();
                binaryWriter.Close();
                binaryWriter.Close();
            }
        }

        [Test]
        public void BinaryWriter_DisposeTests_Negative()
        {
            using (Stream memStream = CreateStream())
            {
                BinaryWriter binaryWriter = new BinaryWriter(memStream);
                binaryWriter.Dispose();
                ValidateDisposedExceptions(binaryWriter);
            }
        }

        [Test]
        public void BinaryWriter_CloseTests_Negative()
        {
            using (Stream memStream = CreateStream())
            {
                BinaryWriter binaryWriter = new BinaryWriter(memStream);
                binaryWriter.Close();
                ValidateDisposedExceptions(binaryWriter);
            }
        }

        private void ValidateDisposedExceptions(BinaryWriter binaryWriter)
        {
            Assert.Throws<Exception>(() => binaryWriter.Seek(1, SeekOrigin.Begin));
            Assert.Throws<Exception>(() => binaryWriter.Write(new byte[2], 0, 2));
            Assert.Throws<Exception>(() => binaryWriter.Write(new char[2], 0, 2));
            Assert.Throws<Exception>(() => binaryWriter.Write(true));
            Assert.Throws<Exception>(() => binaryWriter.Write((byte)4));
            Assert.Throws<Exception>(() => binaryWriter.Write(new byte[] { 1, 2 }));
            Assert.Throws<Exception>(() => binaryWriter.Write('a'));
            Assert.Throws<Exception>(() => binaryWriter.Write(new char[] { 'a', 'b' }));
            Assert.Throws<Exception>(() => binaryWriter.Write(5.3));
            Assert.Throws<Exception>(() => binaryWriter.Write((short)3));
            Assert.Throws<Exception>(() => binaryWriter.Write(33));
            Assert.Throws<Exception>(() => binaryWriter.Write((Int64)42));
            Assert.Throws<Exception>(() => binaryWriter.Write((sbyte)4));
            Assert.Throws<Exception>(() => binaryWriter.Write("Hello There"));
            Assert.Throws<Exception>(() => binaryWriter.Write((float)4.3));
            Assert.Throws<Exception>(() => binaryWriter.Write((UInt16)3));
            Assert.Throws<Exception>(() => binaryWriter.Write((uint)4));
            Assert.Throws<Exception>(() => binaryWriter.Write((ulong)5));
            Assert.Throws<Exception>(() => binaryWriter.Write("Bah"));
        }
    }
}
