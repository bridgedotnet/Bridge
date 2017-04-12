using System;

namespace Bridge
{
    /// <summary>
    /// Can be applied to a member to change case notation in the compiled script.
    /// </summary>
    [AttributeUsage(AttributeTargets.All, AllowMultiple = true)]
    [External]
    [NonScriptable]
    public sealed class ConventionAttribute : Attribute
    {
        public extern ConventionAttribute();
        public extern ConventionAttribute(Notation notation);
        public extern ConventionAttribute(Notation notation, ConventionTarget target);

        public Notation Notation
        {
            get; set;
        }

        public ConventionTarget Target
        {
            get; set;
        }

        public ConventionMember Member
        {
            get; set;
        }

        public ConventionAccessibility Accessibility
        {
            get; set;
        }

        public string Filter
        {
            get; set;
        }

        /// <summary>
        /// Applied to assembly attributes only
        /// </summary>
        public int Priority
        {
            get; set;
        }
    }

    [NonScriptable]
    [Flags]
    public enum ConventionTarget
    {
        All = 0x0,
        Class = 0x1,
        Struct = 0x2,
        Enum = 0x4,
        Interface = 0x8,
        Delegate = 0x10,
        ObjectLiteral = 0x20,
        Anonymous = 0x40,
        External = 0x80,
        Member = 0x100
    }

    [NonScriptable]
    [Flags]
    public enum ConventionMember
    {
        All = 0x0,
        Method = 0x1,
        Property = 0x2,
        Field = 0x4,
        Event = 0x8,
        Const = 0x10,
        EnumItem = 0x20
    }

    [NonScriptable]
    [Flags]
    public enum ConventionAccessibility
    {
        All = 0x0,
        Public = 0x1,
        Protected = 0x2,
        Private = 0x4,
        Internal = 0x8,
        ProtectedInternal = 0x10
    }

    [NonScriptable]
    public enum Notation
    {
        None = 0,
        LowerCase = 1,
        UpperCase = 2,
        LowerCamelCase = 3,
        UpperCamelCase = 4
    }
}