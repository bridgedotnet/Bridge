using Bridge;
using Bridge.Text.RegularExpressions;
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
    [Name("String")]
    [Constructor("String")]
    public sealed class String : IEnumerable, ICloneable, IEnumerable<char>, IComparable<String>, IEquatable<String>
    {
        [FieldProperty]
        public extern int Length
        {
            get;
        }

        [InlineConst]
        public const string Empty = "";

        [Template("String.fromCharCode.apply(null, {value})")]
        public extern String(char[] value);

        /// <summary>
        /// The String global object is a constructor for strings, or a sequence of characters.
        /// </summary>
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
        /// The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
        /// </summary>
        /// <returns>String.Empty</returns>
        public static extern string FromCharCode();

        /// <summary>
        /// The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
        /// </summary>
        /// <param name="numbers">A sequence of numbers that are Unicode values.</param>
        /// <returns></returns>
        public static extern string FromCharCode(params int[] numbers);

        /// <summary>
        /// The charAt() method returns the specified character from a string.
        /// </summary>
        /// <param name="index">An integer between 0 and 1-less-than the length of the string.</param>
        /// <returns></returns>
        public extern string CharAt(int index);

        /// <summary>
        /// The charCodeAt() method returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000).
        /// </summary>
        /// <param name="index">An integer greater than or equal to 0 and less than the length of the string; if it is not a number, it defaults to 0.</param>
        /// <returns></returns>
        public extern int CharCodeAt(int index);

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
        [Template("Bridge.toArray({values}).join('')")]
        public static extern string Concat(IEnumerable<string> values);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="string1">Strings to concatenate to this string.</param>
        /// <param name="string2">Strings to concatenate to this string.</param>
        /// <returns></returns>
        [Template("[{string1}, {string2}].join('')")]
        public static extern string Concat(string string1, string string2);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="string1">Strings to concatenate to this string.</param>
        /// <param name="string2">Strings to concatenate to this string.</param>
        /// <param name="string3">Strings to concatenate to this string.</param>
        /// <returns></returns>
        [Template("[{string1}, {string2}, {string3}].join('')")]
        public static extern string Concat(string string1, string string2, string string3);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="string1">Strings to concatenate to this string.</param>
        /// <param name="string2">Strings to concatenate to this string.</param>
        /// <param name="string3">Strings to concatenate to this string.</param>
        /// <param name="string4">Strings to concatenate to this string.</param>
        /// <returns></returns>
        [Template("[{string1}, {string2}, {string3}, {string4}].join('')")]
        public static extern string Concat(string string1, string string2, string string3, string string4);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="strings">Strings to concatenate to this string.</param>
        /// <returns></returns>
        [Template("{strings:array}.toString().split(',').join('')")]
        public static extern string Concat(params string[] strings);

        /// <summary>
        /// Creates the string representation of a specified object.
        /// </summary>
        /// <param name="arg0">The object to represent, or null.</param>
        /// <returns>The string representation of the value of arg0, or String.Empty if arg0 is null.</returns>
        [Template("[{arg0}].join('')")]
        public static extern string Concat(object arg0);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="object1">Strings to concatenate to this string.</param>
        /// <param name="object2">Strings to concatenate to this string.</param>
        /// <returns></returns>
        [Template("[{object1}, {object2}].join('')")]
        public static extern string Concat(object object1, object object2);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="object1">Strings to concatenate to this string.</param>
        /// <param name="object2">Strings to concatenate to this string.</param>
        /// <param name="object3">Strings to concatenate to this string.</param>
        /// <returns></returns>
        [Template("[{object1}, {object2}, {object3}].join('')")]
        public static extern string Concat(object object1, object object2, object object3);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="object1">Strings to concatenate to this string.</param>
        /// <param name="object2">Strings to concatenate to this string.</param>
        /// <param name="object3">Strings to concatenate to this string.</param>
        /// <param name="object4">Strings to concatenate to this string.</param>
        /// <returns></returns>
        [Template("[{object1}, {object2}, {object3}, {object4}].join('')")]
        public static extern string Concat(object object1, object object2, object object3, object object4);

        /// <summary>
        /// The concat() method combines the text of two or more strings and returns a new string.
        /// </summary>
        /// <param name="objects">Strings to concatenate to this string.</param>
        /// <returns></returns>
        [Template("{objects:array}.toString().split(',').join('')")]
        public static extern string Concat(params object[] objects);

        /// <summary>
        /// Concatenates the members of a constructed generic IEnumerable collection.
        /// </summary>
        /// <param name="values">A collection object that implements generic IEnumerable.</param>
        /// <returns>The concatenated members in values.</returns>
        [Template("Bridge.toArray({values}).join('')")]
        public static extern string Concat<T>(IEnumerable<T> values);

        /// <summary>
        /// The compare() method compares two specified String objects and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <returns></returns>
        [Template("System.String.compare({strA}, {strB})")]
        public static extern int Compare(string strA, string strB);

        /// <summary>
        /// The compare() method compares two specified String objects, ignoring or honoring their case, and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <param name="ignoreCase">true to ignore case during the comparison; otherwise, false.</param>
        /// <returns></returns>
        [Template("System.String.compare({strA}, {strB}, {ignoreCase})")]
        public static extern int Compare(string strA, string strB, bool ignoreCase);

        /// <summary>
        /// The compare() method compares substrings of two specified String objects and returns an integer that indicates their relative position in the sort order.
        /// </summary>
        /// <param name="strA">The first string to compare.</param>
        /// <param name="indexA">The position of the substring within strA.</param>
        /// <param name="strB">The second string to compare.</param>
        /// <param name="indexB">The position of the substring within strB.</param>
        /// <param name="length">The maximum number of characters in the substrings to compare.</param>
        /// <returns></returns>
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
        /// <returns></returns>
        [Template("System.String.compare({strA}.substr({indexA}, {length}), {strB}.substr({indexB}, {length}), {ignoreCase})")]
        public static extern int Compare(string strA, int indexA, string strB, int indexB, int length, bool ignoreCase);

        [Template("System.String.compare({strA}, {strB}, {comparisonType})")]
        public static extern int Compare(string strA, string strB, StringComparison comparisonType);

        [Template("System.String.compare({strA}, {strB}, {ignoreCase}, {culture})")]
        public static extern int Compare(string strA, string strB, bool ignoreCase, CultureInfo culture);

        [Template("System.String.compare({strA}.substr({indexA}, {length}), {strB}.substr({indexB}, {length}), {comparisonType})")]
        public static extern int Compare(string strA, int indexA, string strB, int indexB, int length, StringComparison comparisonType);

        [Template("System.String.compare({strA}.substr({indexA}, {length}), {strB}.substr({indexB}, {length}), {ignoreCase}, {culture})")]
        public static extern int Compare(string strA, int indexA, string strB, int indexB, int length, bool ignoreCase, CultureInfo culture);

        /// <summary>
        /// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value. Returns -1 if the value is not found.
        /// </summary>
        /// <param name="searchValue">A character to search for.</param>
        /// <returns>The zero-based index position of value if that character is found, or -1 if it is not.</returns>
        [Template("System.String.indexOf({this}, String.fromCharCode({searchValue}))")]
        public extern int IndexOf(char searchValue);

        /// <summary>
        /// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
        /// </summary>
        /// <param name="searchValue">A character to search for.</param>
        /// <param name="fromIndex">The location within the calling string to start the search from.</param>
        /// <returns>The zero-based index position of value if that character is found, or -1 if it is not.</returns>
        [Template("System.String.indexOf({this}, String.fromCharCode({searchValue}), {fromIndex})")]
        public extern int IndexOf(char searchValue, int fromIndex);

        /// <summary>
        /// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value. Returns -1 if the value is not found.
        /// </summary>
        /// <param name="searchValue">A string representing the value to search for.</param>
        /// <returns></returns>
        [Template("System.String.indexOf({this}, {searchValue})")]
        public extern int IndexOf(string searchValue);

        /// <summary>
        /// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
        /// </summary>
        /// <param name="searchValue">A string representing the value to search for.</param>
        /// <param name="fromIndex">The location within the calling string to start the search from.</param>
        /// <returns></returns>
        [Template("System.String.indexOf({this}, {searchValue}, {fromIndex})")]
        public extern int IndexOf(string searchValue, int fromIndex);

        /// <summary>
        /// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value. The search starts at a specified character position and
        /// examines a specified number of character positions. Returns -1 if the value is not found.
        /// </summary>
        /// <param name="searchValue">A character to search for.</param>
        /// <param name="fromIndex">The location within the calling string to start the search from.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <returns></returns>
        [Template("System.String.indexOf({this}, String.fromCharCode({searchValue}), {fromIndex}, {count})")]
        public extern int IndexOf(char searchValue, int fromIndex, int count);

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
        /// Reports the zero-based index of the first occurrence of the specified string in the current System.String object. A parameter specifies the type of search
        ///  to use for the specified string.
        /// </summary>
        /// <param name="searchValue">The string to search for.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules for the search.</param>
        /// <returns>The zero-based index position of value if that string is found, or -1 if it is not. If value is System.String.Empty, the return value is 0.</returns>
        [Template("System.String.indexOf({this}, {searchValue}, 0, {this}.length, {comparisonType})")]
        public extern int IndexOf(string searchValue, StringComparison comparisonType);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified string in the current System.String object. Parameters specify the starting search
        ///  position in the current string and the type of search to use for the specified string.
        /// </summary>
        /// <param name="searchValue">The string to search for.</param>
        /// <param name="fromIndex">The search starting position.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules for the search.</param>
        /// <returns>The zero-based index position of value if that string is found, or -1 if it is not. If value is System.String.Empty, the return value is 0.</returns>
        [Template("System.String.indexOf({this}, {searchValue}, {fromIndex}, {this}.length, {comparisonType})")]
        public extern int IndexOf(string searchValue, int fromIndex, StringComparison comparisonType);

        /// <summary>
        /// Reports the zero-based index of the first occurrence of the specified string in the current System.String object. Parameters specify the starting search
        ///  position in the current string, the number of characters in the current string
        ///  to search, and the type of search to use for the specified string.
        /// </summary>
        /// <param name="searchValue">The string to search for.</param>
        /// <param name="fromIndex">The search starting position.</param>
        /// <param name="count">The number of character positions to examine.</param>
        /// <param name="comparisonType">One of the enumeration values that specifies the rules for the search.</param>
        /// <returns>The zero-based index position of value if that string is found, or -1 if it is not. If value is System.String.Empty, the return value is 0.</returns>
        [Template("System.String.indexOf({this}, {searchValue}, {fromIndex}, {count}, {comparisonType})")]
        public extern int IndexOf(string searchValue, int fromIndex, int count, StringComparison comparisonType);

        [Template("{this}.lastIndexOf(String.fromCharCode({ch}))")]
        public extern int LastIndexOf(char ch);

        public extern int LastIndexOf(string subString);

        public extern int LastIndexOf(string subString, int startIndex);

        [Template("System.String.lastIndexOf({this}, String.fromCharCode({ch}), {startIndex}, {count})")]
        public extern int LastIndexOf(char ch, int startIndex, int count);

        [Template("System.String.lastIndexOf({this}, {subString}, {startIndex}, {count})")]
        public extern int LastIndexOf(string subString, int startIndex, int count);

        [Template("{this}.lastIndexOf(String.fromCharCode({ch}), {startIndex})")]
        public extern int LastIndexOf(char ch, int startIndex);

        [Template("System.String.lastIndexOfAny({this}, {ch:array})")]
        public extern int LastIndexOfAny(params char[] ch);

        [Template("System.String.lastIndexOfAny({this}, {ch}, {startIndex})")]
        public extern int LastIndexOfAny(char[] ch, int startIndex);

        [Template("System.String.lastIndexOfAny({this}, {ch}, {startIndex}, {count})")]
        public extern int LastIndexOfAny(char[] ch, int startIndex, int count);

        /// <summary>
        /// The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
        /// The new locales and options arguments let applications specify the language whose sort order should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale and sort order used are entirely implementation dependent.
        /// </summary>
        /// <param name="compareString">The string against which the referring string is comparing</param>
        /// <returns></returns>
        public extern int LocaleCompare(string compareString);

        /// <summary>
        /// The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
        /// The new locales and options arguments let applications specify the language whose sort order should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale and sort order used are entirely implementation dependent.
        /// </summary>
        /// <param name="compareString">The string against which the referring string is comparing</param>
        /// <param name="locales">A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page. The following Unicode extension keys are allowed:</param>
        /// <returns></returns>
        public extern int LocaleCompare(string compareString, string locales);

        /// <summary>
        /// The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
        /// The new locales and options arguments let applications specify the language whose sort order should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale and sort order used are entirely implementation dependent.
        /// </summary>
        /// <param name="compareString">The string against which the referring string is comparing</param>
        /// <param name="locales">A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page. The following Unicode extension keys are allowed:</param>
        /// <param name="options">An object with some or all of the following properties:</param>
        /// <returns></returns>
        public extern int LocaleCompare(string compareString, string locales, LocaleOptions options);

        /// <summary>
        /// The match() method retrieves the matches when matching a string against a regular expression.
        /// </summary>
        /// <param name="Regex">A regular expression object. If a non-Regex object obj is passed, it is implicitly converted to a Regex by using new Regex(obj).</param>
        /// <returns></returns>
        public extern string[] Match(Regex Regex);

        /// <summary>
        /// The match() method retrieves the matches when matching a string against a regular expression.
        /// </summary>
        /// <param name="Regex">A regular expression object. If a non-Regex object obj is passed, it is implicitly converted to a Regex by using new Regex(obj).</param>
        /// <returns></returns>
        public extern string[] Match(string Regex);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="Regex">A Regex object. The match is replaced by the return value of parameter #2.</param>
        /// <param name="newSubStr">The String that replaces the substring received from parameter #1. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.</param>
        /// <returns></returns>
        public extern string Replace(Regex Regex, string newSubStr);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="Regex">A Regex object. The match is replaced by the return value of parameter #2.</param>
        /// <param name="callback"></param>
        /// <returns></returns>
        public extern string Replace(Regex Regex, Delegate callback);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="Regex">A Regex object. The match is replaced by the return value of parameter #2.</param>
        /// <param name="callback"></param>
        /// <returns></returns>
        public extern string Replace(Regex Regex, Func<string, string> callback);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="Regex">A Regex object. The match is replaced by the return value of parameter #2.</param>
        /// <param name="callback"></param>
        /// <returns></returns>
        public extern string Replace(Regex Regex, Func<string, int, string> callback);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="Regex">A Regex object. The match is replaced by the return value of parameter #2.</param>
        /// <param name="callback"></param>
        /// <returns></returns>
        public extern string Replace(Regex Regex, Func<string, int, string, string> callback);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="substr">A String that is to be replaced by newSubStr.</param>
        /// <param name="newSubStr">The String that replaces the substring received from parameter #1. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.</param>
        /// <returns></returns>
        [Template("System.String.replaceAll({this}, {substr}, {newSubStr})")]
        public extern string Replace(string substr, string newSubStr);

        [Template("System.String.replaceAll({this}, String.fromCharCode({oldChar}), String.fromCharCode({replaceChar}))")]
        public extern string Replace(char oldChar, char replaceChar);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="substr">A String that is to be replaced by newSubStr.</param>
        /// <param name="callback"></param>
        /// <returns></returns>
        [Template("System.String.replaceAll({this}, {substr}, {callback})")]
        public extern string Replace(string substr, Delegate callback);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="substr">A String that is to be replaced by newSubStr.</param>
        /// <param name="callback"></param>
        /// <returns></returns>
        [Template("System.String.replaceAll({this}, {substr}, {callback})")]
        public extern string Replace(string substr, Func<string, string> callback);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="substr">A String that is to be replaced by newSubStr.</param>
        /// <param name="callback"></param>
        /// <returns></returns>
        [Template("System.String.replaceAll({this}, {substr}, {callback})")]
        public extern string Replace(string substr, Func<string, int, string> callback);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a Regex, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="substr">A String that is to be replaced by newSubStr.</param>
        /// <param name="callback"></param>
        /// <returns></returns>
        [Template("System.String.replaceAll({this}, {substr}, {callback})")]
        public extern string Replace(string substr, Func<string, int, string, string> callback);

        /// <summary>
        /// The search() method executes a search for a match between a regular expression and this String object.
        /// </summary>
        /// <param name="Regex">A regular expression object. If a non-Regex object obj is passed, it is implicitly converted to a Regex by using new Regex(obj).</param>
        /// <returns></returns>
        public extern int Search(Regex Regex);

        /// <summary>
        /// The search() method executes a search for a match between a regular expression and this String object.
        /// </summary>
        /// <param name="Regex">A regular expression object. If a non-Regex object obj is passed, it is implicitly converted to a Regex by using new Regex(obj).</param>
        /// <returns></returns>
        public extern int Search(string Regex);

        /// <summary>
        /// The slice() method extracts a section of a string and returns a new string.
        /// </summary>
        /// <param name="beginSlice">The zero-based index at which to begin extraction. If negative, it is treated as (sourceLength-beginSlice) where sourceLength is the length of the string (for example, if beginSlice is -3 it is treated as sourceLength-3).</param>
        /// <returns></returns>
        public extern string Slice(int beginSlice);

        /// <summary>
        /// The slice() method extracts a section of a string and returns a new string.
        /// </summary>
        /// <param name="beginSlice">The zero-based index at which to begin extraction. If negative, it is treated as (sourceLength-beginSlice) where sourceLength is the length of the string (for example, if beginSlice is -3 it is treated as sourceLength-3).</param>
        /// <param name="endSlice">The zero-based index at which to end extraction. If omitted, slice extracts to the end of the string. If negative, it is treated as (sourceLength-endSlice) where sourceLength is the length of the string.</param>
        /// <returns></returns>
        public extern string Slice(int beginSlice, int endSlice);

        [Template("System.String.split({this}, {separator:array}.map(function(i) {{ return String.fromCharCode(i); }}))")]
        public extern string[] Split(params char[] separator);

        [Template("System.String.split({this}, {separator}.map(function(i) {{ return String.fromCharCode(i); }}), {limit})")]
        public extern string[] Split(char[] separator, int limit);

        [Template("System.String.split({this}, {separator}.map(function(i) {{ return String.fromCharCode(i); }}), {limit}, {options})")]
        public extern string[] Split(char[] separator, int limit, StringSplitOptions options);

        [Template("System.String.split({this}, {separator}.map(function(i) {{ return String.fromCharCode(i); }}), null, {options})")]
        public extern string[] Split(char[] separator, StringSplitOptions options);

        [Template("System.String.split({this}, {separator}, null, {options})")]
        public extern string[] Split(string[] separator, StringSplitOptions options);

        [Template("System.String.split({this}, {separator}, {limit}, {options})")]
        public extern string[] Split(string[] separator, int limit, StringSplitOptions options);

        public extern string[] Split(string separator);

        [Template("{this}.split(String.fromCharCode({separator}))")]
        public extern string[] Split(char separator);

        public extern string[] Split(Regex regex);

        [Template("{this}.split(String.fromCharCode({separator}), {limit})")]
        public extern string[] Split(char separator, int limit);

        public extern string[] Split(Regex regex, int limit);

        public extern string[] Split(string separator, int limit);

        /// <summary>
        /// The substring() method returns a subset of a string between one index and another, or through the end of the string.
        /// </summary>
        /// <param name="indexA">An integer between 0 and the length of the string.</param>
        /// <returns></returns>
        [Name("substring")]
        public extern string JsSubstring(int indexA);

        /// <summary>
        /// The substring() method returns a subset of a string between one index and another, or through the end of the string.
        /// </summary>
        /// <param name="indexA">An integer between 0 and the length of the string.</param>
        /// <param name="indexB">An integer between 0 and the length of the string.</param>
        /// <returns></returns>
        [Name("substring")]
        public extern string JsSubstring(int indexA, int indexB);

        /// <summary>
        /// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
        /// </summary>
        /// <param name="start">Location at which to begin extracting characters. If a negative number is given, it is treated as strLength+start where strLength = to the length of the string (for example, if start is -3 it is treated as strLength-3.)</param>
        /// <returns></returns>
        public extern string Substr(int start);

        /// <summary>
        /// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
        /// </summary>
        /// <param name="start">Location at which to begin extracting characters. If a negative number is given, it is treated as strLength+start where strLength = to the length of the string (for example, if start is -3 it is treated as strLength-3.)</param>
        /// <returns></returns>
        [Name("substr")]
        public extern string Substring(int start);

        /// <summary>
        /// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
        /// </summary>
        /// <param name="start">Location at which to begin extracting characters. If a negative number is given, it is treated as strLength+start where strLength = to the length of the string (for example, if start is -3 it is treated as strLength-3.)</param>
        /// <param name="length">The number of characters to extract.</param>
        /// <returns></returns>
        public extern string Substr(int start, int length);

        /// <summary>
        /// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
        /// </summary>
        /// <param name="start">Location at which to begin extracting characters. If a negative number is given, it is treated as strLength+start where strLength = to the length of the string (for example, if start is -3 it is treated as strLength-3.)</param>
        /// <param name="length">The number of characters to extract.</param>
        /// <returns></returns>
        [Name("substr")]
        public extern string Substring(int start, int length);

        /// <summary>
        /// The toLower() method returns the calling string value converted to lowercase.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toLowerCase()")]
        public extern string ToLower();

        /// <summary>
        /// The toUpper() method returns the calling string value converted to uppercase.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toUpperCase()")]
        public extern string ToUpper();

        /// <summary>
        /// The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
        /// </summary>
        /// <returns>The trimmed string</returns>
        public extern string Trim();

        [Template("System.String.trim({this}, {values:array})")]
        public extern string Trim(params char[] values);

        [Template("System.String.trimStart({this}, {values:array})")]
        public extern string TrimStart(params char[] values);

        [Template("System.String.trimEnd({this}, {values:array})")]
        public extern string TrimEnd(params char[] values);

        [Template("System.String.trimStart({this})")]
        public extern string TrimStart();

        [Template("System.String.trimEnd({this})")]
        public extern string TrimEnd();

        /// <summary>
        /// Returns a value indicating whether a specified substring occurs within this string.
        /// </summary>
        /// <param name="value">The string to seek. </param>
        /// <returns>true if the value parameter occurs within this string, or if value is the empty string (""); otherwise, false.</returns>
        [Template("System.String.contains({this},{value})")]
        public extern bool Contains(string value);

        [Template("System.String.endsWith({this}, {suffix})")]
        public extern bool EndsWith(string suffix);

        [Template("System.String.startsWith({this}, {prefix})")]
        public extern bool StartsWith(string prefix);

        /// Summary:
        ///     Replaces the format item in a specified string with the string representation
        ///     of a corresponding object in a specified array.
        ///
        /// Parameters:
        ///   format:
        ///     A composite format string.
        ///
        ///   args:
        ///     An object array that contains zero or more objects to format.
        ///
        /// Returns:
        ///     A copy of format in which the format items have been replaced by the string representation
        ///     of the corresponding objects in args.
        ///
        [Template("System.String.format({format}, {args})")]
        public static extern string Format(string format, params object[] args);

        ///
        /// Summary:
        ///     Replaces one or more format items in a specified string with the string representation
        ///     of a specified object.
        ///
        /// Parameters:
        ///   format:
        ///     A composite format string.
        ///
        ///   arg0:
        ///     The object to format.
        ///
        /// Returns:
        ///     A copy of format in which any format items are replaced by the string representation
        ///     of arg0.
        [Template("System.String.format({format}, {arg0})")]
        public static extern String Format(String format, object arg0);

        ///
        /// Summary:
        ///     Replaces the format items in a specified string with the string representations
        ///     of corresponding objects in a specified array. A parameter supplies culture-specific
        ///     formatting information.
        ///
        /// Parameters:
        ///   provider:
        ///     An object that supplies culture-specific formatting information.
        ///
        ///   format:
        ///     A composite format string.
        ///
        ///   args:
        ///     An object array that contains zero or more objects to format.
        ///
        /// Returns:
        ///     A copy of format in which the format items have been replaced by the string representation
        ///     of the corresponding objects in args.
        [Template("System.String.formatProvider({provider}, {format}, {args})")]
        public static extern String Format(IFormatProvider provider, String format, params object[] args);

        ///
        /// Summary:
        ///     Replaces the format items in a specified string with the string representation
        ///     of two specified objects.
        ///
        /// Parameters:
        ///   format:
        ///     A composite format string.
        ///
        ///   arg0:
        ///     The first object to format.
        ///
        ///   arg1:
        ///     The second object to format.
        ///
        /// Returns:
        ///     A copy of format in which format items are replaced by the string representations
        ///     of arg0 and arg1.
        [Template("System.String.format({format}, {arg0}, {arg1})")]
        public static extern String Format(String format, object arg0, object arg1);

        ///
        /// Summary:
        ///     Replaces the format items in a specified string with the string representation
        ///     of three specified objects.
        ///
        /// Parameters:
        ///   format:
        ///     A composite format string.
        ///
        ///   arg0:
        ///     The first object to format.
        ///
        ///   arg1:
        ///     The second object to format.
        ///
        ///   arg2:
        ///     The third object to format.
        ///
        /// Returns:
        ///     A copy of format in which the format items have been replaced by the string representations
        ///     of arg0, arg1, and arg2.
        [Template("System.String.format({format}, {arg0}, {arg1}, {arg2})")]
        public static extern String Format(String format, object arg0, object arg1, object arg2);

        [Template("System.String.indexOfAny({this}, {anyOf})")]
        public extern int IndexOfAny(char[] anyOf);

        [Template("System.String.indexOfAny({this}, {anyOf}, {startIndex})")]
        public extern int IndexOfAny(char[] anyOf, int startIndex);

        [Template("System.String.indexOfAny({this}, {anyOf}, {startIndex}, {count})")]
        public extern int IndexOfAny(char[] anyOf, int startIndex, int count);

        [Template("System.String.toCharArray({this}, 0, {this}.length)")]
        public extern char[] ToCharArray();

        [Template("System.String.toCharArray({this}, {startIndex}, {count})")]
        public extern char[] ToCharArray(int startIndex, int count);

        public static extern bool operator ==(string s1, string s2);

        public static extern bool operator !=(string s1, string s2);

        [IndexerName("Chars")]
        public extern char this[int index]
        {
            [External]
            [Template("charCodeAt({0})")]
            get;
        }

        [Template("Bridge.getEnumerator({this})")]
        public extern CharEnumerator GetEnumerator();

        [Template("Bridge.getEnumerator({this})")]
        extern IEnumerator<char> IEnumerable<char>.GetEnumerator();

        [Template("Bridge.getEnumerator({this})")]
        extern IEnumerator IEnumerable.GetEnumerator();

        [Template("System.String.compare({this}, {other})")]
        public extern int CompareTo(string other);

        [Template("System.String.insert({startIndex}, {this}, {value})")]
        public extern string Insert(int startIndex, string value);

        [Template("{args:array}.join({separator})")]
        public static extern string Join(string separator, params string[] args);

        [Template("{args:array}.join({separator})")]
        public static extern string Join(string separator, params object[] args);

        [Template("Bridge.toArray({args}).join({separator})")]
        public static extern string Join(string separator, IEnumerable<string> args);

        [Template("Bridge.toArray({args}).join({separator})")]
        public static extern string Join<T>(string separator, IEnumerable<T> args);

        [Template("{args}.slice({startIndex}, {startIndex} + {count}).join({separator})")]
        public static extern string Join(string separator, string[] args, int startIndex, int count);

        [Template("System.String.alignString({this}, {totalWidth})")]
        public extern string PadLeft(int totalWidth);

        [Template("System.String.alignString({this}, {totalWidth}, {ch})")]
        public extern string PadLeft(int totalWidth, char ch);

        [Template("System.String.alignString({this}, -{totalWidth})")]
        public extern string PadRight(int totalWidth);

        [Template("System.String.alignString({this}, -{totalWidth}, {ch})")]
        public extern string PadRight(int totalWidth, char ch);

        [Template("System.String.remove({this}, {index})")]
        public extern string Remove(int index);

        [Template("System.String.remove({this}, {index}, {count})")]
        public extern string Remove(int index, int count);

        [Template("{this}")]
        public extern Object Clone();
    }
}