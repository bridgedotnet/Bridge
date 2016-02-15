using System;

namespace Bridge
{
    [External]
    [Name("Bridge.Validation")]
    public sealed class Validation
    {
        public static extern bool IsNull(object value);

        public static extern bool IsEmpty(object value);

        public static extern bool IsNotEmptyOrWhitespace(string value);

        public static extern bool IsNotNull(object value);

        public static extern bool IsNotEmpty(object value);

        public static extern bool Email(string value);

        public static extern bool Url(string value);

        public static extern bool Alpha(string value);

        public static extern bool AlphaNum(string value);

        public static extern bool CreditCard(string value);

        public static extern bool CreditCard(string value, CreditCardType type);
    }

    [External]
    [Enum(Emit.StringNamePreserveCase)]
    public enum CreditCardType
    {
        Default,
        Visa,
        MasterCard,
        Discover,
        AmericanExpress,
        DinersClub
    }
}