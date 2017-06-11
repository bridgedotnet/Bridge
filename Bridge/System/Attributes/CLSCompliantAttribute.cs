// ==++==
// 
//   Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// ==--==
/*=============================================================================
**
** Class: CLSCompliantAttribute
**
**
** Purpose: Container for assemblies.
**
**
=============================================================================*/

using Bridge;

namespace System
{
    [Serializable]
    [AttributeUsage(AttributeTargets.All, Inherited = true, AllowMultiple = false)]
    [Runtime.InteropServices.ComVisible(true)]
    [NonScriptable, External]
    public sealed class CLSCompliantAttribute : Attribute
    {
        public extern CLSCompliantAttribute(bool isCompliant);
        public extern bool IsCompliant { get; }
    }
}