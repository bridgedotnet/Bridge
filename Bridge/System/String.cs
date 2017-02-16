using Bridge;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Runtime.CompilerServices;

namespace System
{
    /// <summary>
    /// The String global object is a constructor for strings, or a sequence of characters.
    /// </summary>
    [External]
    [Constructor("String")]
    public sealed class String : IEnumerable, ICloneable, IEnumerable<char>, IComparable<String>, IEquatable<String>
    {
        /// <summary>
        /// Gets the number of characters in the current String object.
        /// </summary>
        [Field]
        public extern int Length
        {
            get;
        }

        /// <summary>
        /// Represents the empty string. This field is read-only.
        /// </summary>
        [InlineConst]
        public const string Empty = "";

        [Template("String.fromCharCode.apply(null, {value})")]
        public extern String(char[] value);

        /// <summary>
        /// The String global object is a constructor for strings, or a sequence of characters.
        /// </summary>
        [Template("\"\"")]
        public extern String();

        /// <summary>
        /// Constructs a string from the value indicated by a specified character repeated a specified number of times.
        /// </summary>
        /// <param name="c">A character.</param>
        /// <param name="count">The number of times the character occurs.</param>
        [Template("System.String.fromCharCount({c}, {count})")]
        public extern String(char c, int count);

        [Template("String.fromCharCode.apply(null, {value}.slice({startIndex}, {startIndex} + {length}))")]
        public extern String(char[] value, int startIndex, int length);

        /// <summary>
        /// Indicates whether the specified string is null or an Empty string.
        /// </summary>
        /// <param name="value">The string to test. </param>
        /// <returns>true if the value parameter is null or an empty string (""); otherwise, false.</returns>
        [Template("System.String.isNullOrEmpty({value})")]
        public static extern bool IsNullOrEmpty(string value);

        /// <summary>
        /// Indicates whether a specified string is null, empty, or consists only of white-space characters.
        /// </summary>
        /// <param name="value">The string to test.</param>
        /// <returns>true if the value parameter is null or String.Empty, or if value consists exclusively of white-space characters. </returns>
        [Template("System.String.isNullOrWhiteSpace({value})")]
        public static extern bool IsNullOrWhiteSpace(string value);

        /// <summary>
        /// Determines whether two specified String objects have the same value.
        /// </summary>
        /// <param name="a">The first string to compare, or null. </param>
        /// <param name="b">The second string to compare, or null. </param>
        /// <returns>true if the value of a is the same as the value of b; otherwise, false. If both a and b are null, the method returns true.</returns>
        [Template("System.String.equals({a}, {b})")]
        public static extern bool Equals(string a, string b);

        /// <summary>
        /// Determines whether two specified String objects have the same value. A parameter specifies the culture, case, and sort rules used in the comparison.
        /// </summary>
        /// <param name="a">The first string to compare, or null. </param>
        /// <param name="b">The second string to compare, or null. </param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules for the comparison.</param>
        /// <returns>true if the value of a is the same as the value of b; otherwise, false. If both a and b are null, the method returns true.</returns>
        [Template("System.String.equals({a}, {b}, {comparisonType})")]
        public static extern bool Equals(string a, string b, StringComparison comparisonType);

        /// <summary>
        /// Determines whether this string and a specified String object have the same value. A parameter specifies the culture, case, and sort rules used in the comparison.
        /// </summary>
        /// <param name="value">The string to compare to this instance.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies how the strings will be compared. </param>
        /// <returns>true if the value of the value parameter is the same as this string; otherwise, false.</returns>
        [Template("System.String.equals({this}, {value}, {comparisonType})")]
        public extern bool Equals(string value, StringComparison comparisonType);

        /// <summary>
        /// Determines whether this instance and another specified String object have the same value.
        /// </summary>
        /// <param name="value">The string to compare to this instance.</param>
        /// <returns>true if the value of the value parameter is the same as this string; otherwise, false.</returns>
        [Template("System.String.equals({this}, {value})")]
        public extern bool Equals(string value);

        /// <summary>
        /// Concatenates the members of a constructed IEnumerable collection of type String.
        /// </summary>
        /// <param name="values">A collection object that implements IEnumerable and whose generic type argument is String.</param>
        /// <returns>The concatenated strings in values, or String.Empty if values is an empty IEnumerable(Of String).</returns>
        [Template("System.String.concat(Bridge.toArray({values}))")]
        public static extern string Concat(IEnumerable<string> values);

        /// <summary>
        /// Concatenates two specified instances of String.
        /// </summary>
        /// <param name="str0">The first string to concatenate.</param>
        /// <param name="str1">The second string to concatenate.</param>
        /// <returns></returns>
        [Template("System.String.concat({str0}, {str1})")]
        public static extern string Concat(string str0, string str1);

        /// <summary>
        /// Concatenates two specified instances of String.
        /// </summary>
        /// <param name="str0">The first string to concatenate.</param>
        /// <param name="str1">The second string to concatenate.</param>
        /// <param name="str2">The third string to concatenate.</param>
        /// <returns></returns>
        [Template("System.String.concat({str0}, {str1}, {str2})")]
        public static extern string Concat(string str0, string str1, string str2);

        /// <summary>
        /// Concatenates two specified instances of String.
        /// </summary>
        /// <param name="str0">The first string to concatenate.</param>
        /// <param name="str1">The second string to concatenate.</param>
        /// <param name="str2">The third string to concatenate..</param>
        /// <param name="str3">The fourth string to concatenate.</param>
        /// <returns></returns>
        [Template("System.String.concat({str0}, {str1}, {str2}, {str3})")]
        public static extern string Concat(string str0, string str1, string str2, string str3);

        /// <summary>
        /// Concatenates the elements of a specified String array.
        /// </summary>
        /// <param name="values">An array of string instances.</param>
        /// <returns>The concatenated elements of values.</returns>
        [Template("System.String.concat({values:array})")]
        public static extern string Concat(params string[] values);

        /// <summary>
        /// Creates the string representation of a specified object.
        /// </summary>
        /// <param name="arg0">The object to represent, or null.</param>
        /// <returns>The string representation of the value of arg0, or String.Empty if arg0 is null.</returns>
        [Template("System.String.concat({arg0})")]
        public static extern string Concat(object arg0);

        /// <summary>
        /// Concatenates the string representations of two specified objects.
        /// </summary>
        /// <param name="arg0">The first object to concatenate.</param>
        /// <param name="arg1">The second object to concatenate.</param>
        /// <returns>The concatenated string representations of the values of arg0 and arg1.</returns>
        [Template("System.String.concat({arg0}, {arg1})")]
        public static extern string Concat(object arg0, object arg1);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="arg0">The first object to concatenate.</param>
        /// <param name="arg1">The second object to concatenate.</param>
        /// <param name="arg2">The third object to concatenate.</param>
        /// <returns>The concatenated string representations of the values of arg0, arg1, and arg2.</returns>
        [Template("System.String.concat({arg0}, {arg1}, {arg2})")]
        public static extern string Concat(object arg0, object arg1, object arg2);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="arg0">The first object to concatenate.</param>
        /// <param name="arg1">The second object to concatenate.</param>
        /// <param name="arg2">The third object to concatenate.</param>
        /// <param name="arg3">The fourth object to concatenate.</param>
        /// <returns>The concatenated string representation of each value in the parameter list.</returns>
        [Template("System.String.concat({arg0}, {arg1}, {arg2}, {arg3})")]
        public static extern string Concat(object arg0, object arg1, object arg2, object arg3);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="arg0">The first object to concatenate.</param>
        /// <param name="arg1">The second object to concatenate.</param>
        /// <param name="arg2">The third object to concatenate.</param>
        /// <param name="arg3">The fourth object to concatenate.</param>
        /// <param name="args">An optional comma-delimited list of one or more additional objects to concatenate.</param>
        /// <returns>The concatenated string representation of each value in the parameter list.</returns>
        [Template("System.String.concat({arg0}, {arg1}, {arg2}, {arg3}, {*args})")]
        public static extern string Concat(object arg0, object arg1, object arg2, object arg3, params object[] args);

        /// <summary>
        /// Concatenates the string representations of the elements in a specified Object array.
        /// </summary>
        /// <param name="args">An object array that contains the elements to concatenate.</param>
        /// <returns>The concatenated string representations of the values of the elements in args.</returns>
        [Template("System.String.concat({args:array})")]
        public static extern string Concat(params object[] args);

        /// <summary>
        /// Concatenates the members of an IEnumerable&lt;T&gt; implementation.
        /// </summary>
        /// <typeparam name="T">The type of the members of values.</typeparam>
        /// <param name="values">A collection object that implements the IEnumerable&lt;T&gt; interface.</param>
        /// <returns>The concatenated members in values.</returns>
        [Template("System.String.concat(Bridge.toArray({values}))")]
        public static extern string Concat<T>(IEnumerable<T> values);

        /// <summary>
        /// Compares two specified String objects and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <returns>A 32-bit signed integer that indicates the lexical relationship between the two comparands.</returns>
        [Template("System.String.compare({strA}, {strB})")]
        public static extern int Compare(string strA, string strB);

        /// <summary>
        /// The compare() method compares two specified String objects, ignoring or honoring their case, and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <param name="ignoreCase">true to ignore case during the comparison; otherwise, false.</param>
        /// <returns>A 32-bit signed integer that indicates the lexical relationship between the two comparands.</returns>
        [Template("System.String.compare({strA}, {strB}, {ignoreCase})")]
        public static extern int Compare(string strA, string strB, bool ignoreCase);

        /// <summary>
        /// Compares substrings of two specified String objects and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="indexA">The position of the substring within strA.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <param name="indexB">The position of the substring within strB.</param>
        /// <param name="length">The maximum number of characters in the substrings to compare.</param>
        /// <returns>A 32-bit signed integer indicating the lexical relationship between the two comparands.</returns>
        [Template("System.String.compare({strA}.substr({indexA}, {length}), {strB}.substr({indexB}, {length}))")]
        public static extern int Compare(string strA, int indexA, string strB, int indexB, int length);

        /// <summary>
        /// The compare() method compares substrings of two specified String objects and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="indexA">The position of the substring within strA.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <param name="indexB">The position of the substring within strB.</param>
        /// <param name="length">The maximum number of characters in the substrings to compare.</param>
        /// <param name="ignoreCase">true to ignore case during the comparison; otherwise, false.</param>
        /// <returns>A 32-bit signed integer that indicates the lexical relationship between the two comparands.</returns>
        [Template("System.String.compare({strA}.substr({indexA}, {length}), {strB}.substr({indexB}, {length}), {ignoreCase})")]
        public static extern int Compare(string strA, int indexA, string strB, int indexB, int length, bool ignoreCase);

        /// <summary>
        /// Compares two specified String objects using the specified rules, and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules to use in the comparison.</param>
        /// <returns>A 32-bit signed integer that indicates the lexical relationship between the two comparands.</returns>
        [Template("System.String.compare({strA}, {strB}, {comparisonType})")]
        public static extern int Compare(string strA, string strB, StringComparison comparisonType);

        /// <summary>
        /// Compares two specified String objects, ignoring or honoring their case, and using culture-specific information to influence the comparison, and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <param name="ignoreCase">true to ignore case during the comparison; otherwise, false.</param>
        /// <param name="culture">An object that supplies culture-specific comparison information.</param>
        /// <returns>A 32-bit signed integer that indicates the lexical relationship between the two comparands.</returns>
        [Template("System.String.compare({strA}, {strB}, {ignoreCase}, {culture})")]
        public static extern int Compare(string strA, string strB, bool ignoreCase, CultureInfo culture);

        /// <summary>
        /// Compares substrings of two specified String objects using the specified rules, and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to use in the comparison.</param>
        /// <param name="indexA">The position of the substring within strA.</param>
        /// <param name="strB">The second string to use in the comparison.</param>
        /// <param name="indexB">The position of the substring within strB.</param>
        /// <param name="length">The maximum number of characters in the substrings to compare.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules to use in the comparison.</param>
        /// <returns>A 32-bit signed integer that indicates the lexical relationship between the two comparands.</returns>
        [Template("System.String.compare({strA}.substr({indexA}, {length}), {strB}.substr({indexB}, {length}), {comparisonType})")]
        public static extern int Compare(string strA, int indexA, string strB, int indexB, int length, StringComparison comparisonType);

        /// <summary>
        /// Compares substrings of two specified String objects, ignoring or honoring their case and using culture-specific information to influence the comparison, and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to use in the comparison.</param>
        /// <param name="indexA">The position of the substring within strA.</param>
        /// <param name="strB">The second string to use in the comparison.</param>
        /// <param name="indexB">The position of the substring within strB.</param>
        /// <param name="length">The maximum number of characters in the substrings to compare.</param>
        /// <param name="ignoreCase">true to ignore case during the comparison; otherwise, false.</param>
        /// <param name="culture">An object that supplies culture-specific comparison information.</param>
        /// <returns>An integer that indicates the lexical relationship between the two comparands.</returns>
        [Template("System.String.compare({strA}.substr({indexA}, {length}), {strB}.substr({indexB}, {length}), {ignoreCase}, {culture})")]
        public static extern int Compare(string strA, int indexA, string strB, int indexB, int length, bool ignoreCase, CultureInfo culture);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified Unicode character in this string.
        /// </summary>
        /// <param name="value">A Unicode character to seek.</param>
        /// <returns>The zero-based index position of value if that character is found, or -1 if it is not.</returns>
        [Template("System.String.indexOf({this}, String.fromCharCode({value}))")]
        public extern int IndexOf(char value);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified Unicode character in this string. The search starts at a specified character position.
        /// </summary>
        /// <param name="value">A Unicode character to seek.</param>
        /// <param name="startIndex">The search starting position.</param>
        /// <returns>The zero-based index position of value from the start of the string if that character is found, or -1 if it is not.</returns>
        [Template("System.String.indexOf({this}, String.fromCharCode({value}), {startIndex})")]
        public extern int IndexOf(char value, int startIndex);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified string in this instance.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <returns>The zero-based index position of value if that string is found, or -1 if it is not. If value is String.Empty, the return value is 0.</returns>
        [Template("System.String.indexOf({this}, {value})")]
        public extern int IndexOf(string value);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified string in this instance. The search starts at a specified character position.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <param name="startIndex">The search starting position.</param>
        /// <returns>The zero-based index position of value from the start of the current instance if that string is found, or -1 if it is not. If value is String.Empty, the return value is startIndex.</returns>
        [Template("System.String.indexOf({this}, {value}, {startIndex})")]
        public extern int IndexOf(string value, int startIndex);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified string in this instance. The search starts at a specified character position and examines a specified number of character positions.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <param name="startIndex">The search starting position.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <returns></returns>
        [Template("System.String.indexOf({this}, String.fromCharCode({value}), {startIndex}, {count})")]
        public extern int IndexOf(char value, int startIndex, int count);

        /// <summary>
        /// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value. The search starts at a specified character position and
        /// examines a specified number of character positions. Returns -1 if the value is not found.
        /// </summary>
        /// <param name="searchValue">A string representing the value to search for.</param>
        /// <param name="fromIndex">The location within the calling string to start the search from.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <returns></returns>
        [Template("System.String.indexOf({this}, {searchValue}, {fromIndex}, {count})")]
        public extern int IndexOf(string searchValue, int fromIndex, int count);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified string in the current String object. A parameter specifies the type of search to use for the specified string.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules for the search.</param>
        /// <returns>The index position of the value parameter if that string is found, or -1 if it is not. If value is Empty, the return value is 0.</returns>
        [Template("System.String.indexOf({this}, {value}, 0, {this}.length, {comparisonType})")]
        public extern int IndexOf(string value, StringComparison comparisonType);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified string in the current String object. Parameters specify the starting search position in the current string and the type of search to use for the specified string.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <param name="startIndex">The search starting position.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules for the search.</param>
        /// <returns>The zero-based index position of the value parameter from the start of the current instance if that string is found, or -1 if it is not. If value is Empty, the return value is startIndex.</returns>
        [Template("System.String.indexOf({this}, {value}, {startIndex}, {this}.length, {comparisonType})")]
        public extern int IndexOf(string value, int startIndex, StringComparison comparisonType);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified string in the current String object. Parameters specify the starting search position in the current string, the number of characters in the current string to search, and the type of search to use for the specified string.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <param name="startIndex">The search starting position.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules for the search.</param>
        /// <returns>The zero-based index position of the value parameter from the start of the current instance if that string is found, or -1 if it is not. If value is Empty, the return value is startIndex.</returns>
        [Template("System.String.indexOf({this}, {value}, {startIndex}, {count}, {comparisonType})")]
        public extern int IndexOf(string value, int startIndex, int count, StringComparison comparisonType);

        /// <summary>
        /// Reports the zero-based index position of the last occurrence of a specified Unicode character within this instance.
        /// </summary>
        /// <param name="value">The Unicode character to seek.</param>
        /// <returns>The zero-based index position of value if that character is found, or -1 if it is not.</returns>
        [Template("{this}.lastIndexOf(String.fromCharCode({value}))")]
        public extern int LastIndexOf(char value);

        /// <summary>
        /// Reports the zero-based index position of the last occurrence of a specified Unicode character within this instance. The search starts at a specified character position and proceeds backward toward the beginning of the string.
        /// </summary>
        /// <param name="value">The Unicode character to seek.</param>
        /// <param name="startIndex">The starting position of the search. The search proceeds from startIndex toward the beginning of this instance.</param>
        /// <returns>The zero-based index position of value if that character is found, or -1 if it is not found or if the current instance equals String.Empty.</returns>
        [Template("{this}.lastIndexOf(String.fromCharCode({value}), {startIndex})")]
        public extern int LastIndexOf(char value, int startIndex);

        /// <summary>
        /// Reports the zero-based index position of the last occurrence of the specified Unicode character in a substring within this instance. The search starts at a specified character position and proceeds backward toward the beginning of the string for a specified number of character positions.
        /// </summary>
        /// <param name="value">The Unicode character to seek.</param>
        /// <param name="startIndex">The starting position of the search. The search proceeds from startIndex toward the beginning of this instance.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <returns>The zero-based index position of value if that character is found, or -1 if it is not found or if the current instance equals String.Empty.</returns>
        [Template("System.String.lastIndexOf({this}, String.fromCharCode({value}), {startIndex}, {count})")]
        public extern int LastIndexOf(char value, int startIndex, int count);

        /// <summary>
        /// Reports the zero-based index position of the last occurrence of a specified string within this instance.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <returns>The zero-based starting index position of value if that string is found, or -1 if it is not. If value is String.Empty, the return value is the last index position in this instance.</returns>
        public extern int LastIndexOf(string value);

        /// <summary>
        /// Reports the zero-based index position of the last occurrence of a specified string within this instance. The search starts at a specified character position and proceeds backward toward the beginning of the string.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <param name="startIndex">The search starting position. The search proceeds from startIndex toward the beginning of this instance.</param>
        /// <returns>The zero-based starting index position of value if that string is found, or -1 if it is not found or if the current instance equals String.Empty. If value is String.Empty, the return value is the smaller of startIndex and the last index position in this instance.</returns>
        public extern int LastIndexOf(string value, int startIndex);

        /// <summary>
        /// Reports the zero-based index position of the last occurrence of a specified string within this instance. The search starts at a specified character position and proceeds backward toward the beginning of the string for a specified number of character positions.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <param name="startIndex">The search starting position. The search proceeds from startIndex toward the beginning of this instance.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <returns>The zero-based starting index position of value if that string is found, or -1 if it is not found or if the current instance equals String.Empty. If value is Empty, the return value is the smaller of startIndex and the last index position in this instance.</returns>
        [Template("System.String.lastIndexOf({this}, {value}, {startIndex}, {count})")]
        public extern int LastIndexOf(string value, int startIndex, int count);

        // TODO: Missing System.String.LastIndexOf Method overloads #2396

        /// <summary>
        /// Reports the zero-based index position of the last occurrence in this instance of one or more characters specified in a Unicode array.
        /// </summary>
        /// <param name="anyOf">A Unicode character array containing one or more characters to seek.</param>
        /// <returns>The index position of the last occurrence in this instance where any character in anyOf was found; -1 if no character in anyOf was found.</returns>
        [Template("System.String.lastIndexOfAny({this}, {anyOf:array})")]
        public extern int LastIndexOfAny(params char[] anyOf);

        /// <summary>
        /// Reports the zero-based index position of the last occurrence in this instance of one or more characters specified in a Unicode array. The search starts at a specified character position and proceeds backward toward the beginning of the string.
        /// </summary>
        /// <param name="anyOf">A Unicode character array containing one or more characters to seek.</param>
        /// <param name="startIndex">The search starting position. The search proceeds from startIndex toward the beginning of this instance.</param>
        /// <returns>The index position of the last occurrence in this instance where any character in anyOf was found; -1 if no character in anyOf was found or if the current instance equals String.Empty.</returns>
        [Template("System.String.lastIndexOfAny({this}, {anyOf}, {startIndex})")]
        public extern int LastIndexOfAny(char[] anyOf, int startIndex);

        /// <summary>
        /// Reports the zero-based index position of the last occurrence in this instance of one or more characters specified in a Unicode array. The search starts at a specified character position and proceeds backward toward the beginning of the string for a specified number of character positions.
        /// </summary>
        /// <param name="anyOf">A Unicode character array containing one or more characters to seek.</param>
        /// <param name="startIndex">The search starting position. The search proceeds from startIndex toward the beginning of this instance.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <returns>The index position of the last occurrence in this instance where any character in anyOf was found; -1 if no character in anyOf was found or if the current instance equals String.Empty.</returns>
        [Template("System.String.lastIndexOfAny({this}, {anyOf}, {startIndex}, {count})")]
        public extern int LastIndexOfAny(char[] anyOf, int startIndex, int count);

        /// <summary>
        /// Returns a new string in which all occurrences of a specified Unicode character in this instance are replaced with another specified Unicode character.
        /// </summary>
        /// <param name="oldChar">The Unicode character to be replaced.</param>
        /// <param name="newChar">The Unicode character to replace all occurrences of oldChar.</param>
        /// <returns>A string that is equivalent to this instance except that all instances of oldChar are replaced with newChar. If oldChar is not found in the current instance, the method returns the current instance unchanged.</returns>
        [Template("System.String.replaceAll({this}, String.fromCharCode({oldChar}), String.fromCharCode({newChar}))")]
        public extern string Replace(char oldChar, char newChar);

        /// <summary>
        /// Returns a new string in which all occurrences of a specified string in the current instance are replaced with another specified string.
        /// </summary>
        /// <param name="oldValue">The string to be replaced.</param>
        /// <param name="newValue">The string to replace all occurrences of oldValue.</param>
        /// <returns>A string that is equivalent to the current string except that all instances of oldValue are replaced with newValue. If oldValue is not found in the current instance, the method returns the current instance unchanged.</returns>
        [Template("System.String.replaceAll({this}, {oldValue}, {newValue})")]
        public extern string Replace(string oldValue, string newValue);

        /// <summary>
        /// Splits a string into substrings that are based on the characters in an array.
        /// </summary>
        /// <param name="separator">A character array that delimits the substrings in this string, an empty array that contains no delimiters, or null.</param>
        /// <returns>An array whose elements contain the substrings from this instance that are delimited by one or more characters in separator. For more information, see the Remarks section.</returns>
        [Template("System.String.split({this}, {separator:array}.map(function(i) {{ return String.fromCharCode(i); }}))")]
        public extern string[] Split(params char[] separator);

        /// <summary>
        /// Splits a string into a maximum number of substrings based on the characters in an array. You also specify the maximum number of substrings to return.
        /// </summary>
        /// <param name="separator">A character array that delimits the substrings in this string, an empty array that contains no delimiters, or null.</param>
        /// <param name="count">The maximum number of substrings to return.</param>
        /// <returns>An array whose elements contain the substrings in this instance that are delimited by one or more characters in separator. For more information, see the Remarks section.</returns>
        [Template("System.String.split({this}, {separator}.map(function(i) {{ return String.fromCharCode(i); }}), {count})")]
        public extern string[] Split(char[] separator, int count);

        /// <summary>
        /// Splits a string into a maximum number of substrings based on the characters in an array.
        /// </summary>
        /// <param name="separator">A character array that delimits the substrings in this string, an empty array that contains no delimiters, or null.</param>
        /// <param name="count">The maximum number of substrings to return.</param>
        /// <param name="options">StringSplitOptions.RemoveEmptyEntries to omit empty array elements from the array returned; or StringSplitOptions.None to include empty array elements in the array returned.</param>
        /// <returns>An array whose elements contain the substrings in this string that are delimited by one or more characters in separator. For more information, see the Remarks section.</returns>
        [Template("System.String.split({this}, {separator}.map(function(i) {{ return String.fromCharCode(i); }}), {count}, {options})")]
        public extern string[] Split(char[] separator, int count, StringSplitOptions options);

        /// <summary>
        /// Splits a string into substrings based on the characters in an array. You can specify whether the substrings include empty array elements.
        /// </summary>
        /// <param name="separator">A character array that delimits the substrings in this string, an empty array that contains no delimiters, or null.</param>
        /// <param name="options">StringSplitOptions.RemoveEmptyEntries to omit empty array elements from the array returned; or StringSplitOptions.None to include empty array elements in the array returned.</param>
        /// <returns>An array whose elements contain the substrings in this string that are delimited by one or more characters in separator. For more information, see the Remarks section.</returns>
        [Template("System.String.split({this}, {separator}.map(function(i) {{ return String.fromCharCode(i); }}), null, {options})")]
        public extern string[] Split(char[] separator, StringSplitOptions options);

        /// <summary>
        /// Splits a string into a maximum number of substrings based on the strings in an array. You can specify whether the substrings include empty array elements.
        /// </summary>
        /// <param name="separator">A string array that delimits the substrings in this string, an empty array that contains no delimiters, or null.</param>
        /// <param name="count">The maximum number of substrings to return.</param>
        /// <param name="options">StringSplitOptions.RemoveEmptyEntries to omit empty array elements from the array returned; or StringSplitOptions.None to include empty array elements in the array returned.</param>
        /// <returns>An array whose elements contain the substrings in this string that are delimited by one or more strings in separator. For more information, see the Remarks section.</returns>
        [Template("System.String.split({this}, {separator}, {count}, {options})")]
        public extern string[] Split(string[] separator, int count, StringSplitOptions options);

        /// <summary>
        /// Splits a string into substrings based on the strings in an array. You can specify whether the substrings include empty array elements.
        /// </summary>
        /// <param name="separator">A string array that delimits the substrings in this string, an empty array that contains no delimiters, or null.</param>
        /// <param name="options">StringSplitOptions.RemoveEmptyEntries to omit empty array elements from the array returned; or StringSplitOptions.None to include empty array elements in the array returned.</param>
        /// <returns>An array whose elements contain the substrings in this string that are delimited by one or more strings in separator. For more information, see the Remarks section.</returns>
        [Template("System.String.split({this}, {separator}, null, {options})")]
        public extern string[] Split(string[] separator, StringSplitOptions options);

        /// <summary>
        /// Retrieves a substring from this instance. The substring starts at a specified character position and continues to the end of the string.
        /// </summary>
        /// <param name="startIndex">The zero-based starting character position of a substring in this instance.</param>
        /// <returns>A string that is equivalent to the substring that begins at startIndex in this instance, or Empty if startIndex is equal to the length of this instance.</returns>
        [Name("substr")]
        public extern string Substring(int startIndex);

        /// <summary>
        /// Retrieves a substring from this instance. The substring starts at a specified character position and continues to the end of the string.
        /// </summary>
        /// <param name="startIndex">The zero-based starting character position of a substring in this instance.</param>
        /// <param name="length">The number of characters in the substring.</param>
        /// <returns>A string that is equivalent to the substring of length length that begins at startIndex in this instance, or Empty if startIndex is equal to the length of this instance and length is zero.</returns>
        [Name("substr")]
        public extern string Substring(int startIndex, int length);

        /// <summary>
        /// Returns a copy of this string converted to lowercase.
        /// </summary>
        /// <returns>A string in lowercase.</returns>
        [Template("{this}.toLowerCase()")]
        public extern string ToLower();

        /// <summary>
        /// Returns a copy of this string converted to uppercase.
        /// </summary>
        /// <returns>The uppercase equivalent of the current string.</returns>
        [Template("{this}.toUpperCase()")]
        public extern string ToUpper();

        /// <summary>
        /// Removes all leading and trailing white-space characters from the current String object.
        /// </summary>
        /// <returns>The string that remains after all white-space characters are removed from the start and end of the current string. If no characters can be trimmed from the current instance, the method returns the current instance unchanged.</returns>
        public extern string Trim();

        /// <summary>
        /// Removes all leading and trailing occurrences of a set of characters specified in an array from the current String object.
        /// </summary>
        /// <param name="trimChars">An array of Unicode characters to remove, or null.</param>
        /// <returns>The string that remains after all occurrences of the characters in the trimChars parameter are removed from the start and end of the current string. If trimChars is null or an empty array, white-space characters are removed instead. If no characters can be trimmed from the current instance, the method returns the current instance unchanged.</returns>
        [Template("System.String.trim({this}, {trimChars:array})")]
        public extern string Trim(params char[] trimChars);

        /// <summary>
        /// Removes all trailing occurrences of a set of characters specified in an array from the current String object.
        /// </summary>
        /// <returns>The string that remains after all occurrences of the characters in the trimChars parameter are removed from the end of the current string. If trimChars is null or an empty array, Unicode white-space characters are removed instead. If no characters can be trimmed from the current instance, the method returns the current instance unchanged.</returns>
        [Template("System.String.trimEnd({this})")]
        public extern string TrimEnd();

        /// <summary>
        /// Removes all trailing occurrences of a set of characters specified in an array from the current String object.
        /// </summary>
        /// <param name="trimChars">An array of Unicode characters to remove, or null.</param>
        /// <returns>The string that remains after all occurrences of the characters in the trimChars parameter are removed from the end of the current string. If trimChars is null or an empty array, Unicode white-space characters are removed instead. If no characters can be trimmed from the current instance, the method returns the current instance unchanged.</returns>
        [Template("System.String.trimEnd({this}, {trimChars:array})")]
        public extern string TrimEnd(params char[] trimChars);

        /// <summary>
        /// Removes all leading occurrences of whitespaces specified in an array from the current String object.
        /// </summary>
        /// <returns>The string that remains after all occurrences of characters in the trimChars parameter are removed from the start of the current string. If trimChars is null or an empty array, white-space characters are removed instead.</returns>
        [Template("System.String.trimStart({this})")]
        public extern string TrimStart();

        /// <summary>
        /// Removes all leading occurrences of a set of characters specified in an array from the current String object.
        /// </summary>
        /// <param name="trimChars">An array of Unicode characters to remove, or null.</param>
        /// <returns>The string that remains after all occurrences of characters in the trimChars parameter are removed from the start of the current string. If trimChars is null or an empty array, white-space characters are removed instead.</returns>
        [Template("System.String.trimStart({this}, {trimChars:array})")]
        public extern string TrimStart(params char[] trimChars);

        /// <summary>
        /// Returns a value indicating whether a specified substring occurs within this string.
        /// </summary>
        /// <param name="value">The string to seek.</param>
        /// <returns>true if the value parameter occurs within this string, or if value is the empty string (""); otherwise, false.</returns>
        [Template("System.String.contains({this},{value})")]
        public extern bool Contains(string value);

        /// <summary>
        /// Determines whether the end of this string instance matches the specified string.
        /// </summary>
        /// <param name="value">The string to compare to the substring at the end of this instance.</param>
        /// <returns>true if value matches the end of this instance; otherwise, false.</returns>
        [Template("System.String.endsWith({this}, {value})")]
        public extern bool EndsWith(string value);

        /// <summary>
        /// Determines whether the beginning of this string instance matches the specified string.
        /// </summary>
        /// <param name="value">The string to compare.</param>
        /// <returns>true if value matches the beginning of this string; otherwise, false.</returns>
        [Template("System.String.startsWith({this}, {value})")]
        public extern bool StartsWith(string value);

        /// <summary>
        /// Replaces the format item or items in a specified string with the string representation of the corresponding object. A parameter supplies culture-specific formatting information.
        /// </summary>
        /// <param name="provider">An object that supplies culture-specific formatting information.</param>
        /// <param name="format">A composite format string.</param>
        /// <param name="arg0">The object to format.</param>
        /// <returns>A copy of format in which the format item or items have been replaced by the string representation of arg0.</returns>
        [Template("System.String.formatProvider({provider}, {format}, {arg0})")]
        [Unbox(false)]
        public static extern String Format(IFormatProvider provider, String format, object arg0);

        /// <summary>
        /// Replaces the format items in a specified string with the string representation of two specified objects. A parameter supplies culture-specific formatting information.
        /// </summary>
        /// <param name="provider">An object that supplies culture-specific formatting information.</param>
        /// <param name="format">A composite format string.</param>
        /// <param name="arg0">The first object to format.</param>
        /// <param name="arg1">The second object to format.</param>
        /// <returns>A copy of format in which format items are replaced by the string representations of arg0 and arg1.</returns>
        [Template("System.String.formatProvider({provider}, {format}, {arg0}, {arg1})")]
        [Unbox(false)]
        public static extern String Format(IFormatProvider provider, String format, object arg0, object arg1);

        /// <summary>
        /// Replaces the format items in a specified string with the string representation of three specified objects. An parameter supplies culture-specific formatting information.
        /// </summary>
        /// <param name="provider">An object that supplies culture-specific formatting information.</param>
        /// <param name="format">A composite format string.</param>
        /// <param name="arg0">The first object to format.</param>
        /// <param name="arg1">The second object to format.</param>
        /// <param name="arg2">The third object to format.</param>
        /// <returns>A copy of format in which the format items have been replaced by the string representations of arg0, arg1, and arg2.</returns>
        [Template("System.String.formatProvider({provider}, {format}, {arg0}, {arg1}, {arg2})")]
        [Unbox(false)]
        public static extern String Format(IFormatProvider provider, String format, object arg0, object arg1, object arg2);

        /// <summary>
        /// Replaces the format items in a specified string with the string representations of corresponding objects in a specified array. A parameter supplies culture-specific formatting information.
        /// </summary>
        /// <param name="provider">An object that supplies culture-specific formatting information.</param>
        /// <param name="format">A composite format string.</param>
        /// <param name="args">An object array that contains zero or more objects to format.</param>
        /// <returns>A copy of format in which the format items have been replaced by the string representation of the corresponding objects in args.</returns>
        [Template("System.String.formatProvider({provider}, {format}, {args})")]
        [Unbox(false)]
        public static extern String Format(IFormatProvider provider, String format, params object[] args);

        /// <summary>
        /// Replaces one or more format items in a specified string with the string representation of a specified object.
        /// </summary>
        /// <param name="format">A composite format string.</param>
        /// <param name="arg0">The object to format.</param>
        /// <returns>A copy of format in which any format items are replaced by the string representation of arg0.</returns>
        [Template("System.String.format({format}, {arg0})")]
        [Unbox(false)]
        public static extern String Format(String format, object arg0);

        /// <summary>
        /// Replaces the format items in a specified string with the string representation of two specified objects.
        /// </summary>
        /// <param name="format">A composite format string.</param>
        /// <param name="arg0">The first object to format.</param>
        /// <param name="arg1">The second object to format.</param>
        /// <returns>A copy of format in which format items are replaced by the string representations of arg0 and arg1.</returns>
        [Template("System.String.format({format}, {arg0}, {arg1})")]
        [Unbox(false)]
        public static extern String Format(String format, object arg0, object arg1);

        /// <summary>
        /// Replaces the format items in a specified string with the string representation of three specified objects.
        /// </summary>
        /// <param name="format">A composite format string.</param>
        /// <param name="arg0">The first object to format.</param>
        /// <param name="arg1">The second object to format.</param>
        /// <param name="arg2">The third object to format.</param>
        /// <returns>A copy of format in which the format items have been replaced by the string representations of arg0, arg1, and arg2.</returns>
        [Template("System.String.format({format}, {arg0}, {arg1}, {arg2})")]
        [Unbox(false)]
        public static extern String Format(String format, object arg0, object arg1, object arg2);

        /// <summary>
        /// Replaces the format item in a specified string with the string representation of a corresponding object in a specified array.
        /// </summary>
        /// <param name="format">A composite format string.</param>
        /// <param name="args">An object array that contains zero or more objects to format.</param>
        /// <returns>A copy of format in which the format items have been replaced by the string representation of the corresponding objects in args.</returns>
        [Template("System.String.format({format}, {args})")]
        [Unbox(false)]
        public static extern string Format(string format, params object[] args);

        /// <summary>
        /// Reports the zero-based index of the first occurrence in this instance of any character in a specified array of Unicode characters.
        /// </summary>
        /// <param name="anyOf">A Unicode character array containing one or more characters to seek.</param>
        /// <returns>The zero-based index position of the first occurrence in this instance where any character in anyOf was found; -1 if no character in anyOf was found.</returns>
        [Template("System.String.indexOfAny({this}, {anyOf})")]
        public extern int IndexOfAny(char[] anyOf);

        /// <summary>
        /// Reports the zero-based index of the first occurrence in this instance of any character in a specified array of Unicode characters. The search starts at a specified character position.
        /// </summary>
        /// <param name="anyOf">A Unicode character array containing one or more characters to seek.</param>
        /// <param name="startIndex">The search starting position.</param>
        /// <returns></returns>
        [Template("System.String.indexOfAny({this}, {anyOf}, {startIndex})")]
        public extern int IndexOfAny(char[] anyOf, int startIndex);

        /// <summary>
        /// Reports the zero-based index of the first occurrence in this instance of any character in a specified array of Unicode characters. The search starts at a specified character position and examines a specified number of character positions.
        /// </summary>
        /// <param name="anyOf">A Unicode character array containing one or more characters to seek.</param>
        /// <param name="startIndex">The search starting position.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <returns>The zero-based index position of the first occurrence in this instance where any character in anyOf was found; -1 if no character in anyOf was found.</returns>
        [Template("System.String.indexOfAny({this}, {anyOf}, {startIndex}, {count})")]
        public extern int IndexOfAny(char[] anyOf, int startIndex, int count);

        /// <summary>
        /// Copies the characters in this instance to a Unicode character array.
        /// </summary>
        /// <returns>A Unicode character array whose elements are the individual characters of this instance. If this instance is an empty string, the returned array is empty and has a zero length.</returns>
        [Template("System.String.toCharArray({this}, 0, {this}.length)")]
        public extern char[] ToCharArray();

        /// <summary>
        /// Copies the characters in a specified substring in this instance to a Unicode character array.
        /// </summary>
        /// <param name="startIndex">The starting position of a substring in this instance.</param>
        /// <param name="length">The length of the substring in this instance.</param>
        /// <returns>A Unicode character array whose elements are the length number of characters in this instance starting from character position startIndex.</returns>
        [Template("System.String.toCharArray({this}, {startIndex}, {length})")]
        public extern char[] ToCharArray(int startIndex, int length);

        public static extern bool operator ==(string s1, string s2);

        public static extern bool operator !=(string s1, string s2);

        /// <summary>
        /// Gets the Char object at a specified position in the current String object.
        /// </summary>
        /// <param name="index">A position in the current string.</param>
        /// <returns>The object at position index.</returns>
        [IndexerName("Chars")]
        public extern char this[int index]
        {
            [External]
            [Template("charCodeAt({0})")]
            get;
        }

        /// <summary>
        /// Retrieves an object that can iterate through the individual characters in this string.
        /// </summary>
        /// <returns>An enumerator object.</returns>
        [Template("Bridge.getEnumerator({this})")]
        public extern CharEnumerator GetEnumerator();

        /// <summary>
        /// Retrieves an object that can iterate through the individual characters in this string.
        /// </summary>
        /// <returns>An enumerator object.</returns>
        [Template("Bridge.getEnumerator({this})")]
        extern IEnumerator<char> IEnumerable<char>.GetEnumerator();

        /// <summary>
        /// Retrieves an object that can iterate through the individual characters in this string.
        /// </summary>
        /// <returns>An enumerator object.</returns>
        [Template("Bridge.getEnumerator({this})")]
        extern IEnumerator IEnumerable.GetEnumerator();

        /// <summary>
        /// Compares this instance with a specified Object and indicates whether this instance precedes, follows, or appears in the same position in the sort order as the specified Object.
        /// </summary>
        /// <param name="value">An object that evaluates to a String.</param>
        /// <returns>A 32-bit signed integer that indicates whether this instance precedes, follows, or appears in the same position in the sort order as the value parameter.</returns>
        [Template("System.String.compare({this}, {value}.toString())")]
        public extern int CompareTo(object value);

        /// <summary>
        /// Compares this instance with a specified String object and indicates whether this instance precedes, follows, or appears in the same position in the sort order as the specified string.
        /// </summary>
        /// <param name="strB">The string to compare with this instance.</param>
        /// <returns>A 32-bit signed integer that indicates whether this instance precedes, follows, or appears in the same position in the sort order as the strB parameter.</returns>
        [Template("System.String.compare({this}, {strB})")]
        public extern int CompareTo(string strB);

        /// <summary>
        /// Returns a new string in which a specified string is inserted at a specified index position in this instance.
        /// </summary>
        /// <param name="startIndex">The zero-based index position of the insertion.</param>
        /// <param name="value">The string to insert.</param>
        /// <returns>A new string that is equivalent to this instance, but with value inserted at position startIndex.</returns>
        [Template("System.String.insert({startIndex}, {this}, {value})")]
        public extern string Insert(int startIndex, string value);

        /// <summary>
        /// Concatenates the members of a constructed IEnumerable&lt;T&gt; collection of type String, using the specified separator between each member.
        /// </summary>
        /// <param name="separator">The string to use as a separator.separator is included in the returned string only if values has more than one element.</param>
        /// <param name="values">A collection that contains the strings to concatenate.</param>
        /// <returns>A string that consists of the members of values delimited by the separator string. If values has no members, the method returns String.Empty.</returns>
        [Template("Bridge.toArray({values}).join({separator})")]
        public static extern string Join(string separator, IEnumerable<string> values);

        /// <summary>
        /// Concatenates the elements of an object array, using the specified separator between each element.
        /// </summary>
        /// <param name="separator">The string to use as a separator. separator is included in the returned string only if values has more than one element.</param>
        /// <param name="values">An array that contains the elements to concatenate.</param>
        /// <returns>A string that consists of the elements of values delimited by the separator string. If values is an empty array, the method returns String.Empty.</returns>
        [Template("{values:array}.join({separator})")]
        [Unbox(false)]
        public static extern string Join(string separator, params object[] values);

        /// <summary>
        /// Concatenates all the elements of a string array, using the specified separator between each element.
        /// </summary>
        /// <param name="separator">The string to use as a separator. separator is included in the returned string only if value has more than one element.</param>
        /// <param name="value">An array that contains the elements to concatenate.</param>
        /// <returns>A string that consists of the elements in value delimited by the separator string. If value is an empty array, the method returns String.Empty.</returns>
        [Template("{value:array}.join({separator})")]
        public static extern string Join(string separator, params string[] value);

        /// <summary>
        /// Concatenates the specified elements of a string array, using the specified separator between each element.
        /// </summary>
        /// <param name="separator">The string to use as a separator. separator is included in the returned string only if value has more than one element.</param>
        /// <param name="value">An array that contains the elements to concatenate.</param>
        /// <param name="startIndex">The first element in value to use.</param>
        /// <param name="count">The number of elements of value to use.</param>
        /// <returns>A string that consists of the strings in value delimited by the separator string. -or- String.Empty if count is zero, value has no elements, or separator and all the elements of value are String.Empty.</returns>
        [Template("{value}.slice({startIndex}, {startIndex} + {count}).join({separator})")]
        public static extern string Join(string separator, string[] value, int startIndex, int count);

        /// <summary>
        /// Concatenates the members of a collection, using the specified separator between each member.
        /// </summary>
        /// <typeparam name="T">The type of the members of values.</typeparam>
        /// <param name="separator">The string to use as a separator.separator is included in the returned string only if values has more than one element.</param>
        /// <param name="values">A collection that contains the objects to concatenate.</param>
        /// <returns>A string that consists of the members of values delimited by the separator string. If values has no members, the method returns String.Empty.</returns>
        [Template("Bridge.toArray({values}).join({separator})")]
        [Unbox(false)]
        public static extern string Join<T>(string separator, IEnumerable<T> values);

        /// <summary>
        /// Returns a new string that right-aligns the characters in this instance by padding them with spaces on the left, for a specified total length.
        /// </summary>
        /// <param name="totalWidth">The number of characters in the resulting string, equal to the number of original characters plus any additional padding characters.</param>
        /// <returns>A new string that is equivalent to this instance, but right-aligned and padded on the left with as many spaces as needed to create a length of totalWidth. However, if totalWidth is less than the length of this instance, the method returns a reference to the existing instance. If totalWidth is equal to the length of this instance, the method returns a new string that is identical to this instance.</returns>
        [Template("System.String.alignString({this}, {totalWidth})")]
        public extern string PadLeft(int totalWidth);

        /// <summary>
        /// Returns a new string that right-aligns the characters in this instance by padding them on the left with a specified Unicode character, for a specified total length.
        /// </summary>
        /// <param name="totalWidth">The number of characters in the resulting string, equal to the number of original characters plus any additional padding characters.</param>
        /// <param name="paddingChar">A Unicode padding character.</param>
        /// <returns>A new string that is equivalent to this instance, but right-aligned and padded on the left with as many paddingChar characters as needed to create a length of totalWidth. However, if totalWidth is less than the length of this instance, the method returns a reference to the existing instance. If totalWidth is equal to the length of this instance, the method returns a new string that is identical to this instance.</returns>
        [Template("System.String.alignString({this}, {totalWidth}, {paddingChar})")]
        public extern string PadLeft(int totalWidth, char paddingChar);

        /// <summary>
        /// Returns a new string that left-aligns the characters in this string by padding them with spaces on the right, for a specified total length.
        /// </summary>
        /// <param name="totalWidth">The number of characters in the resulting string, equal to the number of original characters plus any additional padding characters.</param>
        /// <returns>A new string that is equivalent to this instance, but left-aligned and padded on the right with as many spaces as needed to create a length of totalWidth. However, if totalWidth is less than the length of this instance, the method returns a reference to the existing instance. If totalWidth is equal to the length of this instance, the method returns a new string that is identical to this instance.</returns>
        [Template("System.String.alignString({this}, -{totalWidth})")]
        public extern string PadRight(int totalWidth);

        /// <summary>
        /// Returns a new string that left-aligns the characters in this string by padding them on the right with a specified Unicode character, for a specified total length.
        /// </summary>
        /// <param name="totalWidth">The number of characters in the resulting string, equal to the number of original characters plus any additional padding characters.</param>
        /// <param name="paddingChar">A Unicode padding character.</param>
        /// <returns>A new string that is equivalent to this instance, but left-aligned and padded on the right with as many paddingChar characters as needed to create a length of totalWidth. However, if totalWidth is less than the length of this instance, the method returns a reference to the existing instance. If totalWidth is equal to the length of this instance, the method returns a new string that is identical to this instance.</returns>
        [Template("System.String.alignString({this}, -{totalWidth}, {paddingChar})")]
        public extern string PadRight(int totalWidth, char paddingChar);

        /// <summary>
        /// Returns a new string in which all the characters in the current instance, beginning at a specified position and continuing through the last position, have been deleted.
        /// </summary>
        /// <param name="startIndex">The zero-based position to begin deleting characters.</param>
        /// <returns>A new string that is equivalent to this string except for the removed characters.</returns>
        [Template("System.String.remove({this}, {startIndex})")]
        public extern string Remove(int startIndex);

        /// <summary>
        /// Returns a new string in which a specified number of characters in the current instance beginning at a specified position have been deleted.
        /// </summary>
        /// <param name="startIndex">The zero-based position to begin deleting characters.</param>
        /// <param name="count">The number of characters to delete.</param>
        /// <returns>A new string that is equivalent to this instance except for the removed characters.</returns>
        [Template("System.String.remove({this}, {startIndex}, {count})")]
        public extern string Remove(int startIndex, int count);

        /// <summary>
        /// Returns a reference to this instance of String.
        /// </summary>
        /// <returns>This instance of String.</returns>
        [Template("{this}")]
        public extern Object Clone();
    }
}