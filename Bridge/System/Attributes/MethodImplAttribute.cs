// ==++==
// 
//   Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// ==--==

namespace System.Runtime.CompilerServices
{
    using System;
    using System.Reflection;

    // This Enum matchs the miImpl flags defined in corhdr.h. It is used to specify 
    // certain method properties.

    [Serializable]
    [Bridge.NonScriptable]
    [Bridge.External]
    [Flags]
    [System.Runtime.InteropServices.ComVisible(true)]
    public enum MethodImplOptions
    {
        Unmanaged,
        ForwardRef,
        PreserveSig,
        InternalCall,
        Synchronized,
        NoInlining,
        [System.Runtime.InteropServices.ComVisible(false)]
        AggressiveInlining,
        NoOptimization,
        // **** If you add something, update internal MethodImplAttribute(MethodImplAttributes methodImplAttributes)! ****
    }

    [Serializable]
    [System.Runtime.InteropServices.ComVisible(true)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public enum MethodCodeType
    {
        IL,
        Native,
        /// <internalonly/>
        OPTIL,
        Runtime
    }

    // Custom attribute to specify additional method properties.
    [Serializable]
    [Bridge.NonScriptable]
    [Bridge.External]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Constructor, Inherited = false)]
    [System.Runtime.InteropServices.ComVisible(true)]
    sealed public class MethodImplAttribute : Attribute
    {
        public MethodCodeType MethodCodeType;

        public extern MethodImplAttribute(MethodImplOptions methodImplOptions);

        public extern MethodImplAttribute(short value);

        public extern MethodImplAttribute();

        public extern MethodImplOptions Value { get; }
    }

}
