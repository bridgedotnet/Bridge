﻿//------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//------------------------------------------------------------

using Bridge;

namespace System.Runtime.Serialization
{
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property, Inherited = false, AllowMultiple = false)]
    [NonScriptable, External]
    public sealed class DataMemberAttribute : Attribute
    {
        public extern DataMemberAttribute();

        public extern string Name { get; set; }

        public extern bool IsNameSetExplicitly { get; }

        public extern int Order { get; set; }

        public extern bool IsRequired { get; set; }

        public extern bool EmitDefaultValue { get; set; }
    }
}