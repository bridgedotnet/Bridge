using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Enum)]
    public class EnumAttribute : Attribute
    {
        public EnumAttribute(Emit emit)
        {
        }
    }

    [External]
    public enum Emit
    {
        Name = 1,
        Value = 2,
        StringName = 3,
        StringNamePreserveCase = 4,
        StringNameLowerCase = 5,
        StringNameUpperCase = 6
    }
}