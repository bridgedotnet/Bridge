using Bridge;
using System;
using System.Runtime.InteropServices;
using System.Text;

namespace System.IO
{
    
    [ComVisible(true)]
    [FileName("io.js")]
    public class BinaryReader : IDisposable
    {
        private const int MaxCharBytesSize = 128;

        private Stream m_stream;

        private byte[] m_buffer;

        //private Decoder m_decoder;

        //private byte[] m_charBytes;

        //private char[] m_singleChar;

        //private char[] m_charBuffer;

        //private int m_maxCharsSize;

        //private bool m_2BytesPerChar;

        private bool m_isMemoryStream;

        //private bool m_leaveOpen;

        
        public virtual Stream BaseStream
        {
            
            get
            {
                return this.m_stream;
            }
        }

        
        public BinaryReader(Stream input)
        {
            if (input == null)
            {
                throw new ArgumentNullException("input");
            }
            if (!input.CanRead)
            {
                throw new ArgumentException();
            }
            this.m_stream = input;
            //this.m_decoder = encoding.GetDecoder();
            //this.m_maxCharsSize = encoding.GetMaxCharCount(128);
            //int maxByteCount = encoding.GetMaxByteCount(1);
            //if (maxByteCount < 16)
            //{
            //    maxByteCount = 16;
            //}
            this.m_buffer = new byte[8];
            //this.m_2BytesPerChar = encoding is UnicodeEncoding;
            this.m_isMemoryStream = this.m_stream.GetType() == typeof(MemoryStream);
            //this.m_leaveOpen = leaveOpen;
        }

        public virtual void Close()
        {
            this.Dispose(true);
        }

        
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                Stream mStream = this.m_stream;
                this.m_stream = null;
                if (mStream != null/* && !this.m_leaveOpen*/)
                {
                    mStream.Close();
                }
            }
            this.m_stream = null;
            this.m_buffer = null;
            //this.m_decoder = null;
            //this.m_charBytes = null;
            //this.m_singleChar = null;
            //this.m_charBuffer = null;
        }

        
        public void Dispose()
        {
            this.Dispose(true);
        }

        
        protected virtual void FillBuffer(int numBytes)
        {
            if (this.m_buffer != null && (numBytes < 0 || numBytes > (int)this.m_buffer.Length))
            {
                throw new ArgumentOutOfRangeException("numBytes");
            }
            int num = 0;
            int num1 = 0;
            if (this.m_stream == null)
            {
                throw new Exception();
            }
            if (numBytes == 1)
            {
                num1 = this.m_stream.ReadByte();
                if (num1 == -1)
                {
                    throw new Exception();
                }
                this.m_buffer[0] = (byte)num1;
                return;
            }
            do
            {
                num1 = this.m_stream.Read(this.m_buffer, num, numBytes - num);
                if (num1 == 0)
                {
                    throw new Exception();
                }
                num = num + num1;
            }
            while (num < numBytes);
        }

        
        //private int InternalReadChars(char[] buffer, int index, int count)
        //{
        //    unsafe
        //    {
        //        byte* numPointer;
        //        char* chrPointer;
        //        int num = 0;
        //        int num1 = count;
        //        if (this.m_charBytes == null)
        //        {
        //            this.m_charBytes = new byte[128];
        //        }
        //        while (num1 > 0)
        //        {
        //            int chars = 0;
        //            num = num1;
        //            DecoderNLS mDecoder = this.m_decoder as DecoderNLS;
        //            if (mDecoder != null && mDecoder.HasState && num > 1)
        //            {
        //                num--;
        //            }
        //            if (this.m_2BytesPerChar)
        //            {
        //                num = num << 1;
        //            }
        //            if (num > 128)
        //            {
        //                num = 128;
        //            }
        //            int num2 = 0;
        //            byte[] mCharBytes = null;
        //            if (!this.m_isMemoryStream)
        //            {
        //                num = this.m_stream.Read(this.m_charBytes, 0, num);
        //                mCharBytes = this.m_charBytes;
        //            }
        //            else
        //            {
        //                MemoryStream mStream = this.m_stream as MemoryStream;
        //                num2 = mStream.InternalGetPosition();
        //                num = mStream.InternalEmulateRead(num);
        //                mCharBytes = mStream.InternalGetBuffer();
        //            }
        //            if (num == 0)
        //            {
        //                return count - num1;
        //            }
        //            if (num2 < 0 || num < 0 || checked(num2 + num) > (int)mCharBytes.Length)
        //            {
        //                throw new ArgumentOutOfRangeException("byteCount");
        //            }
        //            if (index < 0 || num1 < 0 || checked(index + num1) > (int)buffer.Length)
        //            {
        //                throw new ArgumentOutOfRangeException("charsRemaining");
        //            }
        //            byte[] numArray = mCharBytes;
        //            byte[] numArray1 = numArray;
        //            if (numArray == null || (int)numArray1.Length == 0)
        //            {
        //                numPointer = null;
        //            }
        //            else
        //            {
        //                numPointer = &numArray1[0];
        //            }
        //            char[] chrArray = buffer;
        //            char[] chrArray1 = chrArray;
        //            if (chrArray == null || (int)chrArray1.Length == 0)
        //            {
        //                chrPointer = null;
        //            }
        //            else
        //            {
        //                chrPointer = &chrArray1[0];
        //            }
        //            chars = this.m_decoder.GetChars(checked(numPointer + num2), num, checked(chrPointer + checked(index * 2)), num1, false);
        //            chrPointer = null;
        //            numPointer = null;
        //            num1 = num1 - chars;
        //            index = index + chars;
        //        }
        //        return count - num1;
        //    }
        //}

        //private int InternalReadOneChar()
        //{
        //    int chars = 0;
        //    int num = 0;
        //    long num1 = (long)0;
        //    long position = num1;
        //    position = num1;
        //    if (this.m_stream.CanSeek)
        //    {
        //        position = this.m_stream.Position;
        //    }
        //    if (this.m_charBytes == null)
        //    {
        //        this.m_charBytes = new byte[128];
        //    }
        //    if (this.m_singleChar == null)
        //    {
        //        this.m_singleChar = new char[1];
        //    }
        //    while (chars == 0)
        //    {
        //        num = (this.m_2BytesPerChar ? 2 : 1);
        //        int num2 = this.m_stream.ReadByte();
        //        this.m_charBytes[0] = (byte)num2;
        //        if (num2 == -1)
        //        {
        //            num = 0;
        //        }
        //        if (num == 2)
        //        {
        //            num2 = this.m_stream.ReadByte();
        //            this.m_charBytes[1] = (byte)num2;
        //            if (num2 == -1)
        //            {
        //                num = 1;
        //            }
        //        }
        //        if (num == 0)
        //        {
        //            return -1;
        //        }
        //        try
        //        {
        //            chars = this.m_decoder.GetChars(this.m_charBytes, 0, num, this.m_singleChar, 0);
        //        }
        //        catch
        //        {
        //            if (this.m_stream.CanSeek)
        //            {
        //                this.m_stream.Seek(position - this.m_stream.Position, SeekOrigin.Current);
        //            }
        //            throw;
        //        }
        //    }
        //    if (chars == 0)
        //    {
        //        return -1;
        //    }
        //    return this.m_singleChar[0];
        //}

        
        //public virtual int PeekChar()
        //{
        //    if (this.m_stream == null)
        //    {
        //        throw new Exception();
        //    }
        //    if (!this.m_stream.CanSeek)
        //    {
        //        return -1;
        //    }
        //    long position = this.m_stream.Position;
        //    int num = this.Read();
        //    this.m_stream.Position = position;
        //    return num;
        //}

        
        //public virtual int Read()
        //{
        //    if (this.m_stream == null)
        //    {
        //        throw new Exception();
        //    }
        //    return this.InternalReadOneChar();
        //}

        
        //[SecuritySafeCritical]
        //public virtual int Read(char[] buffer, int index, int count)
        //{
        //    if (buffer == null)
        //    {
        //        throw new ArgumentNullException("buffer", Environment.GetResourceString("ArgumentNull_Buffer"));
        //    }
        //    if (index < 0)
        //    {
        //        throw new ArgumentOutOfRangeException("index", Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
        //    }
        //    if (count < 0)
        //    {
        //        throw new ArgumentOutOfRangeException("count", Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
        //    }
        //    if ((int)buffer.Length - index < count)
        //    {
        //        throw new ArgumentException(Environment.GetResourceString("Argument_InvalidOffLen"));
        //    }
        //    if (this.m_stream == null)
        //    {
        //        __Error.FileNotOpen();
        //    }
        //    return this.InternalReadChars(buffer, index, count);
        //}

        
        public virtual int Read(byte[] buffer, int index, int count)
        {
            if (buffer == null)
            {
                throw new ArgumentNullException("buffer"/*, Environment.GetResourceString("ArgumentNull_Buffer")*/);
            }
            if (index < 0)
            {
                throw new ArgumentOutOfRangeException("index"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
            }
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException("count"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
            }
            if ((int)buffer.Length - index < count)
            {
                throw new ArgumentException();
            }
            if (this.m_stream == null)
            {
                throw new Exception();
            }
            return this.m_stream.Read(buffer, index, count);
        }

        
        protected internal int Read7BitEncodedInt()
        {
            byte num;
            int num1 = 0;
            int num2 = 0;
            do
            {
                if (num2 == 35)
                {
                    throw new FormatException(/*Environment.GetResourceString("Format_Bad7BitInt32")*/);
                }
                num = this.ReadByte();
                num1 = num1 | (num & 127) << (num2 & 31);
                num2 = num2 + 7;
            }
            while ((num & 128) != 0);
            return num1;
        }

        
        public virtual bool ReadBoolean()
        {
            this.FillBuffer(1);
            return this.m_buffer[0] != 0;
        }

        
        public virtual byte ReadByte()
        {
            if (this.m_stream == null)
            {
                throw new Exception();
            }
            int num = this.m_stream.ReadByte();
            if (num == -1)
            {
                throw new Exception();
            }
            return (byte)num;
        }

        
        public virtual byte[] ReadBytes(int count)
        {
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException("count");
            }
            if (this.m_stream == null)
            {
                throw new Exception();
            }
            if (count == 0)
            {
                return new byte[] { };
            }
            byte[] numArray = new byte[count];
            int num = 0;
            do
            {
                int num1 = this.m_stream.Read(numArray, num, count);
                if (num1 == 0)
                {
                    break;
                }
                num = num + num1;
                count = count - num1;
            }
            while (count > 0);
            if (num != (int)numArray.Length)
            {
                byte[] numArray1 = new byte[num];
                Array.Copy(numArray, 0, numArray1, 0, num);
                numArray = numArray1;
            }
            return numArray;
        }

        
        //public virtual char ReadChar()
        //{
        //    int num = this.Read();
        //    if (num == -1)
        //    {
        //        throw new Exception();
        //    }
        //    return (char)num;
        //}

        
        //[SecuritySafeCritical]
        //public virtual char[] ReadChars(int count)
        //{
        //    if (count < 0)
        //    {
        //        throw new ArgumentOutOfRangeException("count", Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
        //    }
        //    if (this.m_stream == null)
        //    {
        //        __Error.FileNotOpen();
        //    }
        //    if (count == 0)
        //    {
        //        return EmptyArray<char>.Value;
        //    }
        //    char[] chrArray = new char[count];
        //    int num = this.InternalReadChars(chrArray, 0, count);
        //    if (num != count)
        //    {
        //        char[] chrArray1 = new char[num];
        //        Buffer.InternalBlockCopy(chrArray, 0, chrArray1, 0, 2 * num);
        //        chrArray = chrArray1;
        //    }
        //    return chrArray;
        //}

        
        //public virtual decimal ReadDecimal()
        //{
        //    decimal num;
        //    this.FillBuffer(16);
        //    try
        //    {
        //        num = decimal.ToDecimal(this.m_buffer);
        //    }
        //    catch (ArgumentException argumentException)
        //    {
        //        throw new IOException(Environment.GetResourceString("Arg_DecBitCtor"), argumentException);
        //    }
        //    return num;
        //}

        
        public virtual double ReadDouble()
        {
            this.FillBuffer(8);
            uint mBuffer = (uint)(this.m_buffer[0] | this.m_buffer[1] << 8 | this.m_buffer[2] << 16 | this.m_buffer[3] << 24);
            uint num = (uint)(this.m_buffer[4] | this.m_buffer[5] << 8 | this.m_buffer[6] << 16 | this.m_buffer[7] << 24);
            return BitConverter.Int64BitsToDouble(unchecked((long)((ulong)num << 32 | (ulong)mBuffer)));
        }

        
        public virtual short ReadInt16()
        {
            this.FillBuffer(2);
            return (short)(this.m_buffer[0] | this.m_buffer[1] << 8);
        }

        
        public virtual int ReadInt32()
        {
            if (this.m_isMemoryStream)
            {
                if (this.m_stream == null)
                {
                    throw new Exception();
                }
                return (this.m_stream as MemoryStream).InternalReadInt32();
            }
            this.FillBuffer(4);
            return this.m_buffer[0] | this.m_buffer[1] << 8 | this.m_buffer[2] << 16 | this.m_buffer[3] << 24;
        }

        
        public virtual long ReadInt64()
        {
            this.FillBuffer(8);
            uint mBuffer = (uint)(this.m_buffer[0] | this.m_buffer[1] << 8 | this.m_buffer[2] << 16 | this.m_buffer[3] << 24);
            uint num = (uint)(this.m_buffer[4] | this.m_buffer[5] << 8 | this.m_buffer[6] << 16 | this.m_buffer[7] << 24);
            return (long)((ulong)num << 32 | (ulong)mBuffer);
        }

        
        //[CLSCompliant(false)]
        public virtual sbyte ReadSByte()
        {
            this.FillBuffer(1);
            return (sbyte)this.m_buffer[0];
        }

        
        //[SecuritySafeCritical]
        public virtual float ReadSingle()
        {
            //unsafe
            //{
                this.FillBuffer(4);
                uint mBuffer = (uint)(this.m_buffer[0] | this.m_buffer[1] << 8 | this.m_buffer[2] << 16 | this.m_buffer[3] << 24);
                return BitConverter.ToSingle(BitConverter.GetBytes(mBuffer), 0);
            //}
        }

        
        //public virtual string ReadString()
        //{
        //    if (this.m_stream == null)
        //    {
        //        __Error.FileNotOpen();
        //    }
        //    int num = 0;
        //    int num1 = this.Read7BitEncodedInt();
        //    if (num1 < 0)
        //    {
        //        throw new IOException(Environment.GetResourceString("IO.IO_InvalidStringLen_Len", new object[] { num1 }));
        //    }
        //    if (num1 == 0)
        //    {
        //        return string.Empty;
        //    }
        //    if (this.m_charBytes == null)
        //    {
        //        this.m_charBytes = new byte[128];
        //    }
        //    if (this.m_charBuffer == null)
        //    {
        //        this.m_charBuffer = new char[this.m_maxCharsSize];
        //    }
        //    StringBuilder stringBuilder = null;
        //    do
        //    {
        //        int num2 = this.m_stream.Read(this.m_charBytes, 0, (num1 - num > 128 ? 128 : num1 - num));
        //        if (num2 == 0)
        //        {
        //            __Error.EndOfFile();
        //        }
        //        int chars = this.m_decoder.GetChars(this.m_charBytes, 0, num2, this.m_charBuffer, 0);
        //        if (num == 0 && num2 == num1)
        //        {
        //            return new string(this.m_charBuffer, 0, chars);
        //        }
        //        if (stringBuilder == null)
        //        {
        //            stringBuilder = StringBuilderCache.Acquire(num1);
        //        }
        //        stringBuilder.Append(this.m_charBuffer, 0, chars);
        //        num = num + num2;
        //    }
        //    while (num < num1);
        //    return StringBuilderCache.GetStringAndRelease(stringBuilder);
        //}

        
        //[CLSCompliant(false)]
        public virtual ushort ReadUInt16()
        {
            this.FillBuffer(2);
            return (ushort)(this.m_buffer[0] | this.m_buffer[1] << 8);
        }

        
        //[CLSCompliant(false)]
        public virtual uint ReadUInt32()
        {
            this.FillBuffer(4);
            return (uint)(this.m_buffer[0] | this.m_buffer[1] << 8 | this.m_buffer[2] << 16 | this.m_buffer[3] << 24);
        }

        
        //[CLSCompliant(false)]
        public virtual ulong ReadUInt64()
        {
            this.FillBuffer(8);
            uint mBuffer = (uint)(this.m_buffer[0] | this.m_buffer[1] << 8 | this.m_buffer[2] << 16 | this.m_buffer[3] << 24);
            uint num = (uint)(this.m_buffer[4] | this.m_buffer[5] << 8 | this.m_buffer[6] << 16 | this.m_buffer[7] << 24);
            return (ulong)num << 32 | (ulong)mBuffer;
        }
    }
}
