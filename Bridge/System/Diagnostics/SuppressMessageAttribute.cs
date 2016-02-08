using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Diagnostics.CodeAnalysis
{
	[AttributeUsage(AttributeTargets.All, Inherited = false, AllowMultiple = true)]
	[External]
    [Name("Object")]
	public sealed class SuppressMessageAttribute : Attribute 
    {
        public extern SuppressMessageAttribute(string category, string checkId);

        public extern string Category { get; }

        public extern string CheckId { get; }

        public extern string Justification { get; set; }

        public extern string Scope { get; set; }

        public extern string Target { get; set; }

        public extern string MessageId { get; set; }
	}
}
