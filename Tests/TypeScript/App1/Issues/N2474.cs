using Bridge;

namespace TypeScript.Issues
{
    public class N2474
    {
        public enum Enum
        {
            Value = 1
        }

        [Enum(Emit.Value)]
        public enum ValueEnum
        {
            Value = 2
        }

        [Enum(Emit.Name)]
        public enum NameEnum
        {
            Value = 3
        }

        [Enum(Emit.NameLowerCase)]
        public enum NameLowerCase
        {
            Value = 4
        }

        [Enum(Emit.NamePreserveCase)]
        public enum NamePreserveCase
        {
            Value = 5
        }

        [Enum(Emit.NameUpperCase)]
        public enum NameUpperCase
        {
            Value = 6
        }

        [Enum(Emit.StringName)]
        public enum StringName
        {
            Value = 7
        }

        [Enum(Emit.StringNameLowerCase)]
        public enum StringNameLowerCase
        {
            Value = 8
        }

        [Enum(Emit.StringNamePreserveCase)]
        public enum StringNamePreserveCase
        {
            Value = 9
        }

        [Enum(Emit.StringNameUpperCase)]
        public enum StringNameUpperCase
        {
            Value = 10
        }
    }
}