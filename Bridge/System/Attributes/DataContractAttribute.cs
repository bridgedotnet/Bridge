//------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//------------------------------------------------------------

namespace System.Runtime.Serialization
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum, Inherited = false, AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class DataContractAttribute : Attribute
    {
        public extern DataContractAttribute();

        public extern bool IsReference { get; set; }

        public extern bool IsReferenceSetExplicitly { get; }

        public extern string Namespace { get; set; }

        public extern bool IsNamespaceSetExplicitly { get; }

        public extern string Name { get; set; }

        public extern bool IsNameSetExplicitly { get; set; }
    }
}
