using Bridge;

namespace System
{
    [External]
    [Constructor("Number")]
    [Reflectable]
    public struct Char : IComparable, IComparable<Char>, IEquatable<Char>, IFormattable
    {
        private extern Char(int i);

        [InlineConst]
        public const char MinValue = '\0';

        [InlineConst]
        public const char MaxValue = '\xFFFF';

        [Template("System.Char.format({this}, {0})")]
        public extern string Format(string format);

        [Template("System.Char.format({this}, {0}, {1})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("System.Char.charCodeAt({0}, 0)")]
        public static extern char Parse(string s);

        [Template(Fn = "String.fromCharCode")]
        public override extern string ToString();

        [Template("System.Char.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("System.Char.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {0})")]
        public extern int CompareTo(char value);

        [Template("Bridge.compare({this}, {0})")]
        public extern int CompareTo(object value);

        [Template("{this} === {0}")]
        public extern bool Equals(char obj);

        [Template("Bridge.isLower({0})")]
        public static extern bool IsLower(char s);

        [Template("Bridge.isUpper({0})")]
        public static extern bool IsUpper(char s);

        /// <summary>
        /// Indicates whether the character at the specified position in a specified string is categorized as an uppercase letter.
        /// </summary>
        /// <param name="s">A string.</param>
        /// <param name="index">The position of the character to evaluate in s.</param>
        /// <returns>true if the character at position index in s is an uppercase letter; otherwise, false.</returns>
        public extern static bool IsUpper(String s, int index);

        [Template("String.fromCharCode({0}).toLowerCase().charCodeAt(0)")]
        public static extern char ToLower(char c);

        [Template("String.fromCharCode({0}).toUpperCase().charCodeAt(0)")]
        public static extern char ToUpper(char c);

        public static extern bool IsLetter(char c);

        [Template("System.Char.isLetter({0}.charCodeAt({1}))")]
        public static extern bool IsLetter(string s, int index);

        public static extern bool IsDigit(char c);

        [Template("System.Char.isDigit({0}.charCodeAt({1}))")]
        public static extern bool IsDigit(string s, int index);

        [Template("(System.Char.isDigit({0}) || System.Char.isLetter({0}))")]
        public static extern bool IsLetterOrDigit(char c);

        [Template("(System.Char.isDigit({0}.charCodeAt({1})) || System.Char.isLetter({0}.charCodeAt({1})))")]
        public static extern bool IsLetterOrDigit(string s, int index);

        [Template("System.Char.isWhiteSpace(String.fromCharCode({0}))")]
        public static extern bool IsWhiteSpace(char c);

        [Template("System.Char.isWhiteSpace({0}.charAt({1}))")]
        public static extern bool IsWhiteSpace(string s, int index);

        public static extern bool IsHighSurrogate(char c);

        [Template("System.Char.isHighSurrogate({0}.charCodeAt({1}))")]
        public static extern bool IsHighSurrogate(string s, int index);

        public static extern bool IsLowSurrogate(char c);

        [Template("System.Char.isLowSurrogate({0}.charCodeAt({1}))")]
        public static extern bool IsLowSurrogate(string s, int index);

        public static extern bool IsSurrogate(char c);

        [Template("System.Char.isSurrogate({0}.charCodeAt({1}))")]
        public static extern bool IsSurrogate(string s, int index);

        [Template("(System.Char.isHighSurrogate({0}) && System.Char.isLowSurrogate({1}))")]
        public static extern bool IsSurrogatePair(char highSurrogate, char lowSurrogate);

        [Template("(System.Char.isHighSurrogate({0}.charCodeAt({1})) && System.Char.isLowSurrogate({0}.charCodeAt({1} + 1)))")]
        public static extern bool IsSurrogatePair(string s, int index);

        public static extern bool IsSymbol(char c);

        [Template("System.Char.isSymbol({0}.charCodeAt({1}))")]
        public static extern bool IsSymbol(string s, int index);

        public static extern bool IsSeparator(char c);

        [Template("System.Char.isSeparator({0}.charCodeAt({1}))")]
        public static extern bool IsSeparator(string s, int index);

        public static extern bool IsPunctuation(char c);

        [Template("System.Char.isPunctuation({0}.charCodeAt({1}))")]
        public static extern bool IsPunctuation(string s, int index);

        public static extern bool IsNumber(char c);

        [Template("System.Char.isNumber({0}.charCodeAt({1}))")]
        public static extern bool IsNumber(string s, int index);

        public static extern bool IsControl(char c);

        [Template("System.Char.isControl({0}.charCodeAt({1}))")]
        public static extern bool IsControl(string s, int index);

        [Template("System.Char.equals({this}, {0})")]
        public override extern bool Equals(object obj);

        [Template(Fn = "System.Char.getHashCode")]
        public override extern int GetHashCode();
    }
}