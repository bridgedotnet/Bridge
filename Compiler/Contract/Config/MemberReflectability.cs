using System;

namespace Bridge.Contract
{
    /// <summary>
    /// This enum defines the possibilities for default member reflectability.
    /// </summary>
    public enum MemberAccessibility
    {
        None,

        PublicAndProtected,

        NonPrivate,

        All
    }

    [Flags]
    public enum TypeAccessibility
    {
        None = 1,

        Public = 2,

        NonPrivate = 4,

        Anonymous = 8,

        NonAnonymous = 16,

        All = 32
    }
}