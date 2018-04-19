// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class:  TextReader
**
** <OWNER>Microsoft</OWNER>
**
**
** Purpose: Abstract base class for all Text-only Readers.
** Subclasses will include StreamReader & StringReader.
**
**
===========================================================*/
/*
 * https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/io/textreader.cs
 */

using System;
using System.Text;
using System.Runtime.InteropServices;
using System.Runtime.CompilerServices;
using System.Reflection;
using System.Security.Permissions;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;

namespace System.IO
{
    // This abstract base class represents a reader that can read a sequential
    // stream of characters.  This is not intended for reading bytes -
    // there are methods on the Stream class to read bytes.
    // A subclass must minimally implement the Peek() and Read() methods.
    //
    // This class is intended for character input, not bytes.
    // There are methods on the Stream class for reading bytes.
    public abstract class TextReader : IDisposable
    {
        public static readonly TextReader Null = new NullTextReader();

        protected TextReader()
        {
        }

        // Closes this TextReader and releases any system resources associated with the
        // TextReader. Following a call to Close, any operations on the TextReader
        // may raise exceptions.
        //
        // This default method is empty, but descendant classes can override the
        // method to provide the appropriate functionality.
        public virtual void Close()
        {
            Dispose(true);
        }

        public void Dispose()
        {
            Dispose(true);
        }

        protected virtual void Dispose(bool disposing)
        {
        }

        // Returns the next available character without actually reading it from
        // the input stream. The current position of the TextReader is not changed by
        // this operation. The returned value is -1 if no further characters are
        // available.
        //
        // This default method simply returns -1.
        //
        [Pure]
        public virtual int Peek()
        {
            Contract.Ensures(Contract.Result<int>() >= -1);

            return -1;
        }

        // Reads the next character from the input stream. The returned value is
        // -1 if no further characters are available.
        //
        // This default method simply returns -1.
        //
        public virtual int Read()
        {
            Contract.Ensures(Contract.Result<int>() >= -1);
            return -1;
        }

        // Reads a block of characters. This method will read up to
        // count characters from this TextReader into the
        // buffer character array starting at position
        // index. Returns the actual number of characters read.
        //
        public virtual int Read([In, Out] char[] buffer, int index, int count)
        {
            if (buffer == null)
                throw new ArgumentNullException("buffer");
            if (index < 0)
                throw new ArgumentOutOfRangeException("index");
            if (count < 0)
                throw new ArgumentOutOfRangeException("count");
            if (buffer.Length - index < count)
                throw new ArgumentException();
            Contract.Ensures(Contract.Result<int>() >= 0);
            Contract.Ensures(Contract.Result<int>() <= Contract.OldValue(count));
            Contract.EndContractBlock();

            int n = 0;
            do
            {
                int ch = Read();
                if (ch == -1) break;
                buffer[index + n++] = (char)ch;
            } while (n < count);
            return n;
        }

        public virtual Task<String> ReadToEndAsync()
        {
            return Task.FromResult(ReadToEnd());
        }

        // Reads all characters from the current position to the end of the
        // TextReader, and returns them as one string.
        public virtual String ReadToEnd()
        {
            Contract.Ensures(Contract.Result<String>() != null);

            char[] chars = new char[4096];
            int len;
            StringBuilder sb = new StringBuilder(4096);
            while ((len = Read(chars, 0, chars.Length)) != 0)
            {
                sb.Append(new string(chars, 0, len));
            }
            return sb.ToString();
        }

        // Blocking version of read.  Returns only when count
        // characters have been read or the end of the file was reached.
        //
        public virtual int ReadBlock([In, Out] char[] buffer, int index, int count)
        {
            Contract.Ensures(Contract.Result<int>() >= 0);
            Contract.Ensures(Contract.Result<int>() <= count);

            int i, n = 0;
            do
            {
                n += (i = Read(buffer, index + n, count - n));
            } while (i > 0 && n < count);
            return n;
        }

        // Reads a line. A line is defined as a sequence of characters followed by
        // a carriage return ('\r'), a line feed ('\n'), or a carriage return
        // immediately followed by a line feed. The resulting string does not
        // contain the terminating carriage return and/or line feed. The returned
        // value is null if the end of the input stream has been reached.
        //
        public virtual String ReadLine()
        {
            StringBuilder sb = new StringBuilder();
            while (true)
            {
                int ch = Read();
                if (ch == -1) break;
                if (ch == '\r' || ch == '\n')
                {
                    if (ch == '\r' && Peek() == '\n') Read();
                    return sb.ToString();
                }
                sb.Append((char)ch);
            }
            if (sb.Length > 0) return sb.ToString();
            return null;
        }

        public static TextReader Synchronized(TextReader reader)
        {
            if (reader == null)
                throw new ArgumentNullException("reader");
            Contract.Ensures(Contract.Result<TextReader>() != null);
            Contract.EndContractBlock();

            return reader;
        }

        [Serializable]
        private sealed class NullTextReader : TextReader
        {
            public NullTextReader()
            {
            }

            [SuppressMessage("Microsoft.Contracts", "CC1055")]  // Skip extra error checking to avoid *potential* AppCompat problems.
            public override int Read(char[] buffer, int index, int count)
            {
                return 0;
            }

            public override String ReadLine()
            {
                return null;
            }
        }
    }
}
