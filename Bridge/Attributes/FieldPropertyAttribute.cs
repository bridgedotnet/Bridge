using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Property)]
    public sealed class FieldPropertyAttribute : Attribute
    {
    }
}