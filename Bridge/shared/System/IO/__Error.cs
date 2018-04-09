// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class:  __Error
**
** <OWNER>Microsoft</OWNER>
**
**
** Purpose: Centralized error methods for the IO package.
** Mostly useful for translating Win32 HRESULTs into meaningful
** error strings & exceptions.
**
**
===========================================================*/
/*
 * https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/io/__error.cs
 */

using System;
using System.Diagnostics.Contracts;

namespace System.IO
{
    internal static class __Error
    {
        internal static void EndOfFile()
        {
            throw new EndOfStreamException("IO.EOF_ReadBeyondEOF");
        }

        internal static void FileNotOpen()
        {
            throw new Exception("ObjectDisposed_FileClosed");
        }

        internal static void StreamIsClosed()
        {
            throw new Exception("ObjectDisposed_StreamClosed");
        }

        internal static void MemoryStreamNotExpandable()
        {
            throw new NotSupportedException("NotSupported_MemStreamNotExpandable");
        }

        internal static void ReaderClosed()
        {
            throw new Exception("ObjectDisposed_ReaderClosed");
        }

        internal static void ReadNotSupported()
        {
            throw new NotSupportedException("NotSupported_UnreadableStream");
        }

        internal static void SeekNotSupported()
        {
            throw new NotSupportedException("NotSupported_UnseekableStream");
        }

        internal static void WrongAsyncResult()
        {
            throw new ArgumentException("Arg_WrongAsyncResult");
        }

        internal static void EndReadCalledTwice()
        {
            // Should ideally be InvalidOperationExc but we can't maitain parity with Stream and FileStream without some work
            throw new ArgumentException("InvalidOperation_EndReadCalledMultiple");
        }

        internal static void EndWriteCalledTwice()
        {
            // Should ideally be InvalidOperationExc but we can't maintain parity with Stream and FileStream without some work
            throw new ArgumentException("InvalidOperation_EndWriteCalledMultiple");
        }

        internal static void WriteNotSupported()
        {
            throw new NotSupportedException("NotSupported_UnwritableStream");
        }

        internal static void WriterClosed()
        {
            throw new Exception("ObjectDisposed_WriterClosed");
        }
    }
}
