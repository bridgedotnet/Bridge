using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Enum)]
    [NonScriptable]
    public class EnumAttribute : Attribute
    {
        public extern EnumAttribute(Emit emit);
    }

    [External]
    [NonScriptable]
    public enum Emit
    {
        Name = 1,
        Value = 2,
        StringName = 3,
        StringNamePreserveCase = 4,
        StringNameLowerCase = 5,
        StringNameUpperCase = 6,
        NamePreserveCase = 7,
        NameLowerCase = 8,
        NameUpperCase = 9
    }
}