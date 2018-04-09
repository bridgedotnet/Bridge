namespace System
{
    [Bridge.External]
    public enum TypeCode
    {
        Empty = 0,
        Object = 1,
        DBNull = 2,
        Boolean = 3,
        Char = 4,
        SByte = 5,
        Byte = 6,
        Int16 = 7,
        UInt16 = 8,
        Int32 = 9,
        UInt32 = 10,
        Int64 = 11,
        UInt64 = 12,
        Single = 13,
        Double = 14,
        Decimal = 15,
        DateTime = 16,
        String = 18
    }

    [Bridge.External]
    internal static class TypeCodeValues
    {
        public const string Empty = "0";
        public const string Object = "1";
        public const string DBNull = "2";
        public const string Boolean = "3";
        public const string Char = "4";
        public const string SByte = "5";
        public const string Byte = "6";
        public const string Int16 = "7";
        public const string UInt16 = "8";
        public const string Int32 = "9";
        public const string UInt32 = "10";
        public const string Int64 = "11";
        public const string UInt64 = "12";
        public const string Single = "13";
        public const string Double = "14";
        public const string Decimal = "15";
        public const string DateTime = "16";
        public const string String = "18";
    }
}