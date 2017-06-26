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

        [Template("System.Char.format({this}, {format})")]
        public extern string Format(string format);

        [Template("System.Char.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("System.Char.charCodeAt({s}, 0)")]
        public static extern char Parse(string s);

        [Template(Fn = "String.fromCharCode")]
        public override extern string ToString();

        [Template("System.Char.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("System.Char.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(char other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(char other);

        [Template("Bridge.isLower({ch})")]
        public static extern bool IsLower(char ch);

        [Template("Bridge.isUpper({ch})")]
        public static extern bool IsUpper(char ch);

        [Template("String.fromCharCode({ch}).toLowerCase().charCodeAt(0)")]
        public static extern char ToLower(char ch);

        [Template("String.fromCharCode({ch}).toUpperCase().charCodeAt(0)")]
        public static extern char ToUpper(char ch);

        [Template("System.Char.isLetter({ch})")]
        public static extern bool IsLetter(char ch);

        [Template("System.Char.isLetter({s}.charCodeAt({index}))")]
        public static extern bool IsLetter(string s, int index);

        [Template("System.Char.isDigit({ch})")]
        public static extern bool IsDigit(char ch);

        [Template("System.Char.isDigit({s}.charCodeAt({index}))")]
        public static extern bool IsDigit(string s, int index);

        [Template("(System.Char.isDigit({ch}) || System.Char.isLetter({ch}))")]
        public static extern bool IsLetterOrDigit(char ch);

        [Template("(System.Char.isDigit({s}.charCodeAt({index})) || System.Char.isLetter({s}.charCodeAt({index})))")]
        public static extern bool IsLetterOrDigit(string s, int index);

        [Template("System.Char.isWhiteSpace(String.fromCharCode({ch}))")]
        public static extern bool IsWhiteSpace(char ch);

        [Template("System.Char.isWhiteSpace({s}.charAt({index}))")]
        public static extern bool IsWhiteSpace(string s, int index);

        [Template("System.Char.isHighSurrogate({ch})")]
        public static extern bool IsHighSurrogate(char ch);

        [Template("System.Char.isHighSurrogate({s}.charCodeAt({index}))")]
        public static extern bool IsHighSurrogate(string s, int index);

        [Template("System.Char.isLowSurrogate({ch})")]
        public static extern bool IsLowSurrogate(char ch);

        [Template("System.Char.isLowSurrogate({s}.charCodeAt({index}))")]
        public static extern bool IsLowSurrogate(string s, int index);

        [Template("System.Char.isSurrogate({ch})")]
        public static extern bool IsSurrogate(char ch);

        [Template("System.Char.isSurrogate({s}.charCodeAt({index}))")]
        public static extern bool IsSurrogate(string s, int index);

        [Template("(System.Char.isHighSurrogate({ch1}) && System.Char.isLowSurrogate({ch2}))")]
        public static extern bool IsSurrogatePair(char ch1, char ch2);

        [Template("(System.Char.isHighSurrogate({s}.charCodeAt({index})) && System.Char.isLowSurrogate({s}.charCodeAt({index}+1)))")]
        public static extern bool IsSurrogatePair(string s, int index);

        [Template("System.Char.isSymbol({ch})")]
        public static extern bool IsSymbol(char ch);

        [Template("System.Char.isSymbol({s}.charCodeAt({index}))")]
        public static extern bool IsSymbol(string s, int index);

        [Template("System.Char.isSeparator({ch})")]
        public static extern bool IsSeparator(char ch);

        [Template("System.Char.isSeparator({s}.charCodeAt({index}))")]
        public static extern bool IsSeparator(string s, int index);

        [Template("System.Char.isPunctuation({ch})")]
        public static extern bool IsPunctuation(char ch);

        [Template("System.Char.isPunctuation({s}.charCodeAt({index}))")]
        public static extern bool IsPunctuation(string s, int index);

        [Template("System.Char.isNumber({ch})")]
        public static extern bool IsNumber(char ch);

        [Template("System.Char.isNumber({s}.charCodeAt({index}))")]
        public static extern bool IsNumber(string s, int index);

        [Template("System.Char.isControl({ch})")]
        public static extern bool IsControl(char ch);

        [Template("System.Char.isControl({s}.charCodeAt({index}))")]
        public static extern bool IsControl(string s, int index);

        [Template("System.Char.equals({this}, {other})")]
        public override extern bool Equals(object other);

        [Template(Fn = "System.Char.getHashCode")]
        public override extern int GetHashCode();
    }
}