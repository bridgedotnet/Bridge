// ==++==
// 
//   Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// ==--==
/*============================================================
**
** Class:  EndOfStreamException
** 
** <OWNER>Microsoft</OWNER>
**
**
** Purpose: Exception to be thrown when reading past end-of-file.
**
**
===========================================================*/

using Bridge;
using System;
using System.Runtime.Serialization;

namespace System.IO
{
    [Reflectable]
    [FileName("system\\IO\\io.js")]
    [Convention]
    public class EndOfStreamException : IOException
    {
        public EndOfStreamException() : base("Arg_EndOfStreamException")
        {
        }

        public EndOfStreamException(String message) : base(message)
        {
        }

        public EndOfStreamException(String message, Exception innerException) : base(message, innerException)
        {
        }
    }
}