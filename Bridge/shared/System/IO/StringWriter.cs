// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class:  StringWriter
**
** <OWNER>Microsoft</OWNER>
**
** Purpose: For writing text to a string
**
**
===========================================================*/
/*
 * https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/io/streamwriter.cs
 */

using System;
using System.Text;
using System.Globalization;
using System.Diagnostics.Contracts;
using System.Runtime.InteropServices;

namespace System.IO
{
    // This class implements a text writer that writes to a string buffer and allows
    // the resulting sequence of characters to be presented as a string.
    //
    public class StringWriter : TextWriter
    {
        private static volatile UnicodeEncoding m_encoding = null;

        private StringBuilder _sb;
        private bool _isOpen;

        // Constructs a new StringWriter. A new StringBuilder is automatically
        // created and associated with the new StringWriter.
        public StringWriter()
            : this(new StringBuilder(), CultureInfo.CurrentCulture)
        {
        }

        public StringWriter(IFormatProvider formatProvider)
            : this(new StringBuilder(), formatProvider)
        {
        }

        // Constructs a new StringWriter that writes to the given StringBuilder.
        //
        public StringWriter(StringBuilder sb) : this(sb, CultureInfo.CurrentCulture)
        {
        }

        public StringWriter(StringBuilder sb, IFormatProvider formatProvider) : base(formatProvider)
        {
            if (sb == null)
                throw new ArgumentNullException("sb");
            Contract.EndContractBlock();
            _sb = sb;
            _isOpen = true;
        }

        public override void Close()
        {
            Dispose(true);
        }

        protected override void Dispose(bool disposing)
        {
            // Do not destroy _sb, so that we can extract this after we are
            // done writing (similar to MemoryStream's GetBuffer & ToArray methods)
            _isOpen = false;
            base.Dispose(disposing);
        }


        public override Encoding Encoding
        {
            get
            {
                if (m_encoding == null)
                {
                    m_encoding = new UnicodeEncoding(false, false);
                }
                return m_encoding;
            }
        }

        // Returns the underlying StringBuilder. This is either the StringBuilder
        // that was passed to the constructor, or the StringBuilder that was
        // automatically created.
        //
        public virtual StringBuilder GetStringBuilder()
        {
            return _sb;
        }

        // Writes a character to the underlying string buffer.
        //
        public override void Write(char value)
        {
            if (!_isOpen)
                __Error.WriterClosed();
            _sb.Append(value);
        }

        // Writes a range of a character array to the underlying string buffer.
        // This method will write count characters of data into this
        // StringWriter from the buffer character array starting at position
        // index.
        //
        public override void Write(char[] buffer, int index, int count)
        {
            if (buffer == null)
                throw new ArgumentNullException("buffer");
            if (index < 0)
                throw new ArgumentOutOfRangeException("index");
            if (count < 0)
                throw new ArgumentOutOfRangeException("count");
            if (buffer.Length - index < count)
                throw new ArgumentException();
            Contract.EndContractBlock();

            if (!_isOpen)
                __Error.WriterClosed();

            _sb.Append(new string(buffer, index, count));
        }

        // Writes a string to the underlying string buffer. If the given string is
        // null, nothing is written.
        //
        public override void Write(String value)
        {
            if (!_isOpen)
                __Error.WriterClosed();
            if (value != null) _sb.Append(value);
        }

        // Returns a string containing the characters written to this TextWriter
        // so far.
        //
        public override String ToString()
        {
            return _sb.ToString();
        }
    }
}
