// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

/*=============================================================================
**
**
**
** Purpose: Exception class for bad arithmetic conditions!
**
**
=============================================================================*/

using System.Runtime.Serialization;

namespace System
{
    // The ArithmeticException is thrown when overflow or underflow
    // occurs.
    [Serializable]
    [System.Runtime.CompilerServices.TypeForwardedFrom("mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089")]
    public class OutOfMemoryException : SystemException
    {
        // Creates a new ArithmeticException with its message string set to
        // the empty string, its HRESULT set to COR_E_ARITHMETIC, 
        // and its ExceptionInfo reference set to null. 
        public OutOfMemoryException()
            : base("Insufficient memory to continue the execution of the program.")
        {
            HResult = HResults.COR_E_ARITHMETIC;
        }

        // Creates a new ArithmeticException with its message string set to
        // message, its HRESULT set to COR_E_ARITHMETIC, 
        // and its ExceptionInfo reference set to null. 
        // 
        public OutOfMemoryException(String message)
            : base(message)
        {
            HResult = HResults.COR_E_ARITHMETIC;
        }

        public OutOfMemoryException(String message, Exception innerException)
            : base(message, innerException)
        {
            HResult = HResults.COR_E_ARITHMETIC;
        }

        //protected ArithmeticException(SerializationInfo info, StreamingContext context) : base(info, context)
        //{
        //}
    }
}
