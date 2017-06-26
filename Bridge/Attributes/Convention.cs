using System;

namespace Bridge
{
    /// <summary>
    /// Controls a type or type members case notation in the script output.
    /// </summary>
    [AttributeUsage(AttributeTargets.All, AllowMultiple = true)]
    [External]
    [NonScriptable]
    public sealed class ConventionAttribute : Attribute
    {
        /// <summary>
        /// Initializes a new instance of the ConventionAttribute class
        /// with default Notation = None (as written in code), Target = All, Member = All, Accessibility = All
        /// </summary>
        public extern ConventionAttribute();

        /// <summary>
        /// Initializes a new instance of the ConventionAttribute class with specified Notation.
        /// </summary>
        /// <param name="notation">Specifies notation to be applied.</param>
        public extern ConventionAttribute(Notation notation);

        /// <summary>
        ///Initializes a new instance of the ConventionAttribute class with specified Notation and Target.
        /// </summary>
        /// <param name="notation"></param>
        /// <param name="target">Specifies target(s) to be filtered by [Convention] attribute.</param>
        public extern ConventionAttribute(Notation notation, ConventionTarget target);

        /// <summary>
        /// Specifies notation to be applied by [Convention] attribute.
        /// </summary>
        public extern Notation Notation
        {
            get; set;
        }

        /// <summary>
        /// Specifies target(s) to be filtered by [Convention] attribute.
        /// </summary>
        public extern ConventionTarget Target
        {
            get; set;
        }

        /// <summary>
        /// Specifies type member(s) to be filtered by [Convention] attribute.
        /// </summary>
        public extern ConventionMember Member
        {
            get; set;
        }

        /// <summary>
        /// Specifies access modifiers to be filtered by [Convention] attribute.
        /// </summary>
        public extern ConventionAccessibility Accessibility
        {
            get; set;
        }

        /// <summary>
        /// Semicolon separated list of type paths (a type member's full name, for example)
        /// to be applied by [Convention] attribute.
        /// It can contain a simple path like "YourNamespace.*"
        /// or a regex form with "regex:" prefix like "regex:YourNamespace\.([A-Za-z0-9\-]*)YourEntity"
        /// </summary>
        public extern string Filter
        {
            get; set;
        }

        /// <summary>
        /// Applied to assembly attributes only
        /// </summary>
        public extern int Priority
        {
            get; set;
        }
    }

    /// <summary>
    /// Specifies target(s) to be filtered by [Convention] attribute.
    /// </summary>
    [NonScriptable]
    [Flags]
    public enum ConventionTarget
    {
        All = 0x0,
        Class = 0x1,
        Struct = 0x2,
        Enum = 0x4,
        Interface = 0x8,
        //Delegate = 0x10,
        ObjectLiteral = 0x20,
        Anonymous = 0x40,
        External = 0x80,
        Member = 0x100
    }

    /// <summary>
    /// Specifies type member(s) to be filtered by [Convention] attribute.
    /// </summary>
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
    
    /// <summary>
    /// Specifies access modifiers to be filtered by [Convention] attribute.
    /// </summary>
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

    /// <summary>
    /// Specifies case notation to be applied by [Convention] attribute for a type or type members.
    /// </summary>
    [NonScriptable]
    public enum Notation
    {
        /// <summary>
        /// Does not change notation, i.e. as written.
        /// </summary>
        None = 0,
        LowerCase = 1,
        UpperCase = 2,
        LowerCamelCase = 3,
        UpperCamelCase = 4
    }
}