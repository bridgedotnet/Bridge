// ==++==
// 
//   Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// ==--==
// HostProtectionPermission.cs
// 
// <OWNER>Microsoft</OWNER>
//
 
namespace System.Security.Permissions
{
    using System;
    using System.Text;
    using System.Threading;
    using System.Security;
    using System.Runtime.Serialization;
    using System.Reflection;
    using System.Globalization;
    using System.Diagnostics.Contracts;

    [Serializable]
    [Bridge.NonScriptable]
    [Bridge.External]
    public enum SecurityAction
    {
        // Demand permission of all caller
        Demand = 2,

        // Assert permission so callers don't need
        Assert = 3,

        // Deny permissions so checks will fail
        [Obsolete("Deny is obsolete and will be removed in a future release of the .NET Framework. See http://go.microsoft.com/fwlink/?LinkID=155570 for more information.")]
        Deny = 4,

        // Reduce permissions so check will fail
        PermitOnly = 5,

        // Demand permission of caller
        LinkDemand = 6,

        // Demand permission of a subclass
        InheritanceDemand = 7,

        // Request minimum permissions to run
        [Obsolete("Assembly level declarative security is obsolete and is no longer enforced by the CLR by default. See http://go.microsoft.com/fwlink/?LinkID=155570 for more information.")]
        RequestMinimum = 8,

        // Request optional additional permissions
        [Obsolete("Assembly level declarative security is obsolete and is no longer enforced by the CLR by default. See http://go.microsoft.com/fwlink/?LinkID=155570 for more information.")]
        RequestOptional = 9,

        // Refuse to be granted these permissions
        [Obsolete("Assembly level declarative security is obsolete and is no longer enforced by the CLR by default. See http://go.microsoft.com/fwlink/?LinkID=155570 for more information.")]
        RequestRefuse = 10,
    }

    // Keep this enum in sync with tools\ngen\ngen.cpp and inc\mscoree.idl

    [Serializable]
    [Flags]
    [Runtime.InteropServices.ComVisible(true)]
    [Bridge.NonScriptable]
    [Bridge.External]
    public enum HostProtectionResource
    {
        None = 0x0,
        //--------------------------------
        Synchronization = 0x1,
        SharedState = 0x2,
        ExternalProcessMgmt = 0x4,
        SelfAffectingProcessMgmt = 0x8,
        ExternalThreading = 0x10,
        SelfAffectingThreading = 0x20,
        SecurityInfrastructure = 0x40,
        UI = 0x80,
        MayLeakOnAbort = 0x100,
        //---------------------------------
        All = 0x1ff,
    }

    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Constructor | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Assembly | AttributeTargets.Delegate, AllowMultiple = true, Inherited = false)]
    [System.Runtime.InteropServices.ComVisible(true)]
    [Serializable]
    [Bridge.NonScriptable]
    [Bridge.External]
#if FEATURE_CORECLR
    // This needs to be in the asmmeta to enable SecAnnotate to successfully resolve and run the security rules. It gets marked
    // as internal by BCLRewriter so we are simply marking it as FriendAccessAllowed so it stays in the asmmeta.
    [System.Runtime.CompilerServices.FriendAccessAllowedAttribute]
#endif // FEATURE_CORECLR
#pragma warning disable 618
    sealed public class HostProtectionAttribute : Attribute
#pragma warning restore 618
    {
        public extern HostProtectionAttribute();
        
        public extern HostProtectionAttribute(SecurityAction action);

        public extern HostProtectionResource Resources { get; set; }

        public extern bool Synchronization { get; set; }

        public extern bool SharedState { get; set; }

        public extern bool ExternalProcessMgmt { get; set; }

        public extern bool SelfAffectingProcessMgmt { get; set; }

        public extern bool ExternalThreading { get; set; }

        public extern bool SelfAffectingThreading { get; set; }

        [System.Runtime.InteropServices.ComVisible(true)]
        public extern bool SecurityInfrastructure { get; set; }

        public extern bool UI { get; set; }

        public extern bool MayLeakOnAbort { get; set; }
    }
}
