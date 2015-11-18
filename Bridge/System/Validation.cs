using System;

namespace Bridge
{
    [External]
    [Name("Bridge.Validation")]
    public sealed class Validation
    {
        public static bool IsNull(object value)
        {
            return false;
        }

        public static bool IsEmpty(object value)
        {
            return false;
        }

        public static bool IsNotEmptyOrWhitespace(string value)
        {
            return false;
        }

        public static bool IsNotNull(object value)
        {
            return false;
        }

        public static bool IsNotEmpty(object value)
        {
            return false;
        }

        public static bool Email(string value)
        {
            return false;
        }

        public static bool Url(string value)
        {
            return false;
        }

        public static bool Alpha(string value)
        {
            return false;
        }

        public static bool AlphaNum(string value)
        {
            return false;
        }

        public static bool CreditCard(string value)
        {
            return false;
        }

        public static bool CreditCard(string value, CreditCardType type)
        {
            return false;
        }
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
