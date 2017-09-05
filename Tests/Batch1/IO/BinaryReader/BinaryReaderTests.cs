using Bridge.Test.NUnit;
using System;
using System.IO;
using System.Text;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BinaryReaderTests - {0}")]
    public class BinaryReaderTests
    {
        protected virtual Stream CreateStream()
        {
            return new MemoryStream();
        }

        [Test(ExpectedCount = 0)]
        public void BinaryReader_DisposeTests()
        {
            // Disposing multiple times should not throw an exception
            using (Stream memStream = CreateStream())
            using (BinaryReader binaryReader = new BinaryReader(memStream))
            {
                binaryReader.Dispose();
                binaryReader.Dispose();
                binaryReader.Dispose();
            }
        }

        [Test(ExpectedCount = 0)]
        public void BinaryReader_CloseTests()
        {
            // Closing multiple times should not throw an exception
            using (Stream memStream = CreateStream())
            using (BinaryReader binaryReader = new BinaryReader(memStream))
            {
                binaryReader.Close();
                binaryReader.Close();
                binaryReader.Close();
            }
        }

        [Test]
        public void BinaryReader_DisposeTests_Negative()
        {
            using (Stream memStream = CreateStream())
            {
                BinaryReader binaryReader = new BinaryReader(memStream);
                binaryReader.Dispose();
                ValidateDisposedExceptions(binaryReader);
            }
        }

        [Test]
        public void BinaryReader_CloseTests_Negative()
        {
            using (Stream memStream = CreateStream())
            {
                BinaryReader binaryReader = new BinaryReader(memStream);
                binaryReader.Close();
                ValidateDisposedExceptions(binaryReader);
            }
        }

        private void ValidateDisposedExceptions(BinaryReader binaryReader)
        {
            byte[] byteBuffer = new byte[10];
            char[] charBuffer = new char[10];

            Assert.Throws<Exception>(() => binaryReader.PeekChar());
            Assert.Throws<Exception>(() => binaryReader.Read());
            Assert.Throws<Exception>(() => binaryReader.Read(byteBuffer, 0, 1));
            Assert.Throws<Exception>(() => binaryReader.Read(charBuffer, 0, 1));
            Assert.Throws<Exception>(() => binaryReader.ReadBoolean());
            Assert.Throws<Exception>(() => binaryReader.ReadByte());
            Assert.Throws<Exception>(() => binaryReader.ReadBytes(1));
            Assert.Throws<Exception>(() => binaryReader.ReadChar());
            Assert.Throws<Exception>(() => binaryReader.ReadChars(1));
            Assert.Throws<Exception>(() => binaryReader.ReadDecimal());
            Assert.Throws<Exception>(() => binaryReader.ReadDouble());
            Assert.Throws<Exception>(() => binaryReader.ReadInt16());
            Assert.Throws<Exception>(() => binaryReader.ReadInt32());
            Assert.Throws<Exception>(() => binaryReader.ReadInt64());
            Assert.Throws<Exception>(() => binaryReader.ReadSByte());
            Assert.Throws<Exception>(() => binaryReader.ReadSingle());
            Assert.Throws<Exception>(() => binaryReader.ReadString());
            Assert.Throws<Exception>(() => binaryReader.ReadUInt16());
            Assert.Throws<Exception>(() => binaryReader.ReadUInt32());
            Assert.Throws<Exception>(() => binaryReader.ReadUInt64());
        }
    }
}