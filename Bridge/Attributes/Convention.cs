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
        public Notation Notation
        {
            get; set;
        }

        public NotationType Type
        {
            get; set;
        }

        public NotationMember Member
        {
            get; set;
        }

        public NotationAccessibility Accessibility
        {
            get; set;
        }

        public string Filter
        {
            get; set;
        }
    }

    [NonScriptable]
    [Flags]
    public enum NotationType
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
    public enum NotationMember
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
    public enum NotationAccessibility
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
        UpperCase = 1,
        LowerCase = 2,
        LowerCamelCase = 3,
        UpperCamelCase = 4
    }
}