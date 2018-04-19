// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class:  File
**
** <OWNER>Microsoft</OWNER>
**
**
** Purpose: A collection of methods for manipulating Files.
**
**        April 09,2000 (some design refactorization)
**
===========================================================*/
/*
 * https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/io/file.cs
 */

using System;
using System.Runtime.InteropServices;
using System.Security;
using System.Text;
using System.Collections.Generic;
using System.Globalization;
using System.Runtime.Versioning;
using System.Diagnostics.Contracts;

namespace System.IO
{
    // Class for creating FileStream objects, and some basic file management
    // routines such as Delete, etc.
    public static class File
    {
        public static StreamReader OpenText(String path)
        {
            if (path == null)
                throw new ArgumentNullException("path");
            Contract.EndContractBlock();
            return new StreamReader(path);
        }

        public static FileStream OpenRead(String path)
        {
            return new FileStream(path, FileMode.Open);
        }

        public static String ReadAllText(String path)
        {
            if (path == null)
                throw new ArgumentNullException("path");
            if (path.Length == 0)
                throw new ArgumentException("Argument_EmptyPath");
            Contract.EndContractBlock();

            return InternalReadAllText(path, Encoding.UTF8, true);
        }

        public static String ReadAllText(String path, Encoding encoding)
        {
            if (path == null)
                throw new ArgumentNullException("path");
            if (encoding == null)
                throw new ArgumentNullException("encoding");
            if (path.Length == 0)
                throw new ArgumentException("Argument_EmptyPath");
            Contract.EndContractBlock();

            return InternalReadAllText(path, encoding, true);
        }

        private static String InternalReadAllText(String path, Encoding encoding, bool checkHost)
        {
            Contract.Requires(path != null);
            Contract.Requires(encoding != null);
            Contract.Requires(path.Length > 0);

            using (StreamReader sr = new StreamReader(path, encoding, true, StreamReader.DefaultBufferSize, checkHost))
                return sr.ReadToEnd();
        }

        public static byte[] ReadAllBytes(String path)
        {
            return InternalReadAllBytes(path, true);
        }

        private static byte[] InternalReadAllBytes(String path, bool checkHost)
        {
            byte[] bytes;
            using (FileStream fs = new FileStream(path, FileMode.Open))
            {
                // Do a blocking read
                int index = 0;
                long fileLength = fs.Length;
                if (fileLength > Int32.MaxValue)
                    throw new IOException("IO.IO_FileTooLong2GB");
                int count = (int)fileLength;
                bytes = new byte[count];
                while (count > 0)
                {
                    int n = fs.Read(bytes, index, count);
                    if (n == 0)
                        __Error.EndOfFile();
                    index += n;
                    count -= n;
                }
            }
            return bytes;
        }

        public static String[] ReadAllLines(String path)
        {
            if (path == null)
                throw new ArgumentNullException("path");
            if (path.Length == 0)
                throw new ArgumentException("Argument_EmptyPath");
            Contract.EndContractBlock();

            return InternalReadAllLines(path, Encoding.UTF8);
        }

        public static String[] ReadAllLines(String path, Encoding encoding)
        {
            if (path == null)
                throw new ArgumentNullException("path");
            if (encoding == null)
                throw new ArgumentNullException("encoding");
            if (path.Length == 0)
                throw new ArgumentException("Argument_EmptyPath");
            Contract.EndContractBlock();

            return InternalReadAllLines(path, encoding);
        }

        private static String[] InternalReadAllLines(String path, Encoding encoding)
        {
            Contract.Requires(path != null);
            Contract.Requires(encoding != null);
            Contract.Requires(path.Length != 0);

            String line;
            List<String> lines = new List<String>();

            using (StreamReader sr = new StreamReader(path, encoding))
                while ((line = sr.ReadLine()) != null)
                    lines.Add(line);

            return lines.ToArray();
        }

        public static IEnumerable<String> ReadLines(String path)
        {
            if (path == null)
                throw new ArgumentNullException("path");
            if (path.Length == 0)
                throw new ArgumentException("Argument_EmptyPath", "path");
            Contract.EndContractBlock();

            return ReadLinesIterator.CreateIterator(path, Encoding.UTF8);
        }

        public static IEnumerable<String> ReadLines(String path, Encoding encoding)
        {
            if (path == null)
                throw new ArgumentNullException("path");
            if (encoding == null)
                throw new ArgumentNullException("encoding");
            if (path.Length == 0)
                throw new ArgumentException("Argument_EmptyPath", "path");
            Contract.EndContractBlock();

            return ReadLinesIterator.CreateIterator(path, encoding);
        }
    }
}
