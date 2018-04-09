// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class:  StreamWriter
**
** <OWNER>gpaperin</OWNER>
**
**
** Purpose: For writing text to streams in a particular
** encoding.
**
**
===========================================================*/
/*
 * https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/io/streamwriter.cs
 */

using System;
using System.Text;
using System.Diagnostics.Contracts;
using System.Runtime.InteropServices;

namespace System.IO
{
    // This class implements a TextWriter for writing characters to a Stream.
    // This is designed for character output in a particular Encoding,
    // whereas the Stream class is designed for byte input and output.
    //
    public class StreamWriter : TextWriter
    {
        // For UTF-8, the values of 1K for the default buffer size and 4K for the
        // file stream buffer size are reasonable & give very reasonable
        // performance for in terms of construction time for the StreamWriter and
        // write perf.  Note that for UTF-8, we end up allocating a 4K byte buffer,
        // which means we take advantage of adaptive buffering code.
        // The performance using UnicodeEncoding is acceptable.
        internal const int DefaultBufferSize = 1024;   // char[]
        private const int DefaultFileStreamBufferSize = 4096;
        private const int MinBufferSize = 128;

        // Bit bucket - Null has no backing store. Non closable.
        public new static readonly StreamWriter Null = new StreamWriter(Stream.Null, new UTF8Encoding(false, true), MinBufferSize, true);

        private Stream stream;
        private Encoding encoding;
        private byte[] byteBuffer;
        private char[] charBuffer;
        private int charPos;
        private int charLen;
        private bool autoFlush;
        private bool haveWrittenPreamble;
        private bool closable;

        // The high level goal is to be tolerant of encoding errors when we read and very strict
        // when we write. Hence, default StreamWriter encoding will throw on encoding error.
        // Note: when StreamWriter throws on invalid encoding chars (for ex, high surrogate character
        // D800-DBFF without a following low surrogate character DC00-DFFF), it will cause the
        // internal StreamWriter's state to be irrecoverable as it would have buffered the
        // illegal chars and any subsequent call to Flush() would hit the encoding error again.
        // Even Close() will hit the exception as it would try to flush the unwritten data.
        // Maybe we can add a DiscardBufferedData() method to get out of such situation (like
        // StreamReader though for different reason). Either way, the buffered data will be lost!
        private static volatile Encoding _UTF8NoBOM;

        internal static Encoding UTF8NoBOM
        {
            get
            {
                if (_UTF8NoBOM == null)
                {
                    // No need for double lock - we just want to avoid extra
                    // allocations in the common case.
                    UTF8Encoding noBOM = new UTF8Encoding(false, true);
                    _UTF8NoBOM = noBOM;
                }
                return _UTF8NoBOM;
            }
        }


        internal StreamWriter() : base(null)
        { // Ask for CurrentCulture all the time
        }

        public StreamWriter(Stream stream)
            : this(stream, UTF8NoBOM, DefaultBufferSize, false)
        {
        }

        public StreamWriter(Stream stream, Encoding encoding)
            : this(stream, encoding, DefaultBufferSize, false)
        {
        }

        // Creates a new StreamWriter for the given stream.  The
        // character encoding is set by encoding and the buffer size,
        // in number of 16-bit characters, is set by bufferSize.
        //
        public StreamWriter(Stream stream, Encoding encoding, int bufferSize)
            : this(stream, encoding, bufferSize, false)
        {
        }

        public StreamWriter(Stream stream, Encoding encoding, int bufferSize, bool leaveOpen)
            : base(null) // Ask for CurrentCulture all the time
        {
            if (stream == null || encoding == null)
                throw new ArgumentNullException((stream == null ? "stream" : "encoding"));
            if (!stream.CanWrite)
                throw new ArgumentException("Argument_StreamNotWritable");
            if (bufferSize <= 0) throw new ArgumentOutOfRangeException("bufferSize", "ArgumentOutOfRange_NeedPosNum");
            Contract.EndContractBlock();

            Init(stream, encoding, bufferSize, leaveOpen);
        }

        public StreamWriter(String path)
            : this(path, false, UTF8NoBOM, DefaultBufferSize)
        {
        }

        public StreamWriter(String path, bool append)
            : this(path, append, UTF8NoBOM, DefaultBufferSize)
        {
        }

        public StreamWriter(String path, bool append, Encoding encoding)
            : this(path, append, encoding, DefaultBufferSize)
        {
        }

        public StreamWriter(String path, bool append, Encoding encoding, int bufferSize) : this(path, append, encoding, bufferSize, true)
        {
        }

        internal StreamWriter(String path, bool append, Encoding encoding, int bufferSize, bool checkHost)
            : base(null)
        {
            throw new NotSupportedException();
        }

        private void Init(Stream streamArg, Encoding encodingArg, int bufferSize, bool shouldLeaveOpen)
        {
            this.stream = streamArg;
            this.encoding = encodingArg;
            if (bufferSize < MinBufferSize) bufferSize = MinBufferSize;
            charBuffer = new char[bufferSize];
            byteBuffer = new byte[encoding.GetMaxByteCount(bufferSize)];
            charLen = bufferSize;
            // If we're appending to a Stream that already has data, don't write
            // the preamble.
            if (stream.CanSeek && stream.Position > 0)
                haveWrittenPreamble = true;
            closable = !shouldLeaveOpen;
        }

        public override void Close()
        {
            Dispose(true);
        }

        protected override void Dispose(bool disposing)
        {
            try
            {
                // We need to flush any buffered data if we are being closed/disposed.
                // Also, we never close the handles for stdout & friends.  So we can safely
                // write any buffered data to those streams even during finalization, which
                // is generally the right thing to do.
                if (stream != null)
                {
                    // Note: flush on the underlying stream can throw (ex., low disk space)
                    if (disposing)
                    {
                        Flush(true, true);
                    }
                }
            }
            finally
            {
                // Dispose of our resources if this StreamWriter is closable.
                // Note: Console.Out and other such non closable streamwriters should be left alone
                if (!LeaveOpen && stream != null)
                {
                    try
                    {
                        // Attempt to close the stream even if there was an IO error from Flushing.
                        // Note that Stream.Close() can potentially throw here (may or may not be
                        // due to the same Flush error). In this case, we still need to ensure
                        // cleaning up internal resources, hence the finally block.
                        if (disposing)
                            stream.Close();
                    }
                    finally
                    {
                        stream = null;
                        byteBuffer = null;
                        charBuffer = null;
                        encoding = null;
                        charLen = 0;
                        base.Dispose(disposing);
                    }
                }
            }
        }

        public override void Flush()
        {
            Flush(true, true);
        }

        private void Flush(bool flushStream, bool flushEncoder)
        {
            // flushEncoder should be true at the end of the file and if
            // the user explicitly calls Flush (though not if AutoFlush is true).
            // This is required to flush any dangling characters from our UTF-7
            // and UTF-8 encoders.
            if (stream == null)
                __Error.WriterClosed();

            // Perf boost for Flush on non-dirty writers.
            if (charPos == 0 && (!flushStream && !flushEncoder))
                return;

            /*if (!haveWrittenPreamble) {
                haveWrittenPreamble = true;
                byte[] preamble = encoding.GetPreamble();
                if (preamble.Length > 0)
                    stream.Write(preamble, 0, preamble.Length);
            }*/

            int count = encoding.GetBytes(charBuffer, 0, charPos, byteBuffer, 0);
            charPos = 0;
            if (count > 0)
                stream.Write(byteBuffer, 0, count);
            // By definition, calling Flush should flush the stream, but this is
            // only necessary if we passed in true for flushStream.  The Web
            // Services guys have some perf tests where flushing needlessly hurts.
            if (flushStream)
                stream.Flush();
        }

        public virtual bool AutoFlush
        {
            get
            {
                return autoFlush;
            }

            set
            {
                autoFlush = value;
                if (value) Flush(true, false);
            }
        }

        public virtual Stream BaseStream
        {
            get
            {
                return stream;
            }
        }

        internal bool LeaveOpen
        {
            get
            {
                return !closable;
            }
        }

        internal bool HaveWrittenPreamble
        {
            set
            {
                haveWrittenPreamble = value;
            }
        }

        public override Encoding Encoding
        {
            get
            {
                return encoding;
            }
        }

        public override void Write(char value)
        {
            if (charPos == charLen) Flush(false, false);
            charBuffer[charPos] = value;
            charPos++;
            if (autoFlush) Flush(true, false);
        }

        public override void Write(char[] buffer)
        {
            // This may be faster than the one with the index & count since it
            // has to do less argument checking.
            if (buffer == null)
                return;

            int index = 0;
            int count = buffer.Length;
            while (count > 0)
            {
                if (charPos == charLen) Flush(false, false);
                int n = charLen - charPos;
                if (n > count) n = count;
                Contract.Assert(n > 0, "StreamWriter::Write(char[]) isn't making progress!  This is most likely a ---- in user code.");
                Array.Copy(buffer, index, charBuffer, charPos, n);
                charPos += n;
                index += n;
                count -= n;
            }
            if (autoFlush) Flush(true, false);
        }

        public override void Write(char[] buffer, int index, int count)
        {
            if (buffer == null)
                throw new ArgumentNullException("buffer", "ArgumentNull_Buffer");
            if (index < 0)
                throw new ArgumentOutOfRangeException("index", "ArgumentOutOfRange_NeedNonNegNum");
            if (count < 0)
                throw new ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
            if (buffer.Length - index < count)
                throw new ArgumentException("Argument_InvalidOffLen");
            Contract.EndContractBlock();

            while (count > 0)
            {
                if (charPos == charLen) Flush(false, false);
                int n = charLen - charPos;
                if (n > count) n = count;
                Contract.Assert(n > 0, "StreamWriter::Write(char[], int, int) isn't making progress!  This is most likely a race condition in user code.");
                Array.Copy(buffer, index, charBuffer, charPos, n);
                charPos += n;
                index += n;
                count -= n;
            }
            if (autoFlush) Flush(true, false);
        }

        public override void Write(String value)
        {
            if (value != null)
            {
                int count = value.Length;
                int index = 0;
                while (count > 0)
                {
                    if (charPos == charLen) Flush(false, false);
                    int n = charLen - charPos;
                    if (n > count) n = count;
                    Contract.Assert(n > 0, "StreamWriter::Write(String) isn't making progress!  This is most likely a race condition in user code.");
                    value.CopyTo(index, charBuffer, charPos, n);
                    charPos += n;
                    index += n;
                    count -= n;
                }
                if (autoFlush) Flush(true, false);
            }
        }
    }  // class StreamWriter
}  // namespace
