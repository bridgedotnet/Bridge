using System;

namespace Bridge
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
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