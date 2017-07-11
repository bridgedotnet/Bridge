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

namespace System
{
    [Serializable]
    [AttributeUsage(AttributeTargets.All, Inherited = true, AllowMultiple = false)]
    [System.Runtime.InteropServices.ComVisible(true)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public sealed class CLSCompliantAttribute : Attribute
    {
        public extern CLSCompliantAttribute(bool isCompliant);
        public extern bool IsCompliant { get; }
    }
}
