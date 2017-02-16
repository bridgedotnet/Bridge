// JavaScript String instance methods added as extensions methods to System.String instance

using System;

namespace Bridge.Html5
{
    /// <summary>
    /// String global object extension methods for the ECMA String prototype object.
    /// </summary>
    [External]
    public static class StringPrototype
    {
        /// <summary>
        /// The match() method retrieves the matches when matching a string against a regular expression.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regex">A regular expression object. If a non-Regex object obj is passed, it is implicitly converted to a Regex by using new Regex(obj).</param>
        /// <returns>An Array containing the entire match result and any parentheses-captured matched results, or null if there were no matches.</returns>
        [Template("{str}.match({regex})")]
        public static extern string[] Match(this string str, RegExp regex);

        /// <summary>
        /// The match() method retrieves the matches when matching a string against a regular expression.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regex">A regular expression object. If a non-Regex object obj is passed, it is implicitly converted to a Regex by using new Regex(obj).</param>
        /// <returns>An Array containing the entire match result and any parentheses-captured matched results, or null if there were no matches.</returns>
        [Template("{str}.match({regex})")]
        public static extern string[] Match(this string str, string regex);

        /// <summary>
        /// The search() method executes a search for a match between a regular expression and this String object.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regex">A regular expression object. If a non-Regex object obj is passed, it is implicitly converted to a Regex by using new Regex(obj).</param>
        /// <returns>If successful, returns the index of the first match of the regular expression inside the string. Otherwise, it returns -1.</returns>
        [Template("{str}.search({regex})")]
        public static extern int Search(this string str, RegExp regex);

        /// <summary>
        /// The search() method executes a search for a match between a regular expression and this String object.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regex">A regular expression object. If a non-Regex object obj is passed, it is implicitly converted to a Regex by using new Regex(obj).</param>
        /// <returns>If successful, returns the index of the first match of the regular expression inside the string. Otherwise, it returns -1.</returns>
        [Template("{str}.search({regex})")]
        public static extern int Search(this string str, string regex);

        /// <summary>
        /// The toLowerCase() method returns the calling string value converted to lowercase.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <returns>A new string representing the calling string converted to lower case.</returns>
        [Template("{str}.toLowerCase()")]
        public static extern string ToLowerCase(this string str);

        /// <summary>
        /// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <returns>A new string representing the calling string converted to lower case, according to any locale-specific case mappings.</returns>
        [Template("{str}.toLocaleLowerCase()")]
        public static extern string ToLocaleLowerCase(this string str);

        /// <summary>
        /// The toUpperCase() method returns the calling string value converted to uppercase.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <returns>A new string representing the calling string converted to upper case.</returns>
        [Template("{str}.toUpperCase()")]
        public static extern string ToUpperCase(this string str);

        /// <summary>
        /// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <returns>A new string representing the calling string converted to upper case, according to any locale-specific case mappings.</returns>
        [Template("{str}.toLocaleUpperCase()")]
        public static extern string ToLocaleUpperCase(this string str);

        /// <summary>
        /// The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="compareString">The string against which the referring string is compared</param>
        /// <returns>A negative number if the reference string occurs before the compare string; positive if the reference string occurs after the compare string; 0 if they are equivalent.</returns>
        [Template("{str}.localeCompare({compareString})")]
        public static extern int LocaleCompare(this string str, string compareString);

        /// <summary>
        /// The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="compareString">The string against which the referring string is compared</param>
        /// <param name="locales">A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page.</param>
        /// <returns>A negative number if the reference string occurs before the compare string; positive if the reference string occurs after the compare string; 0 if they are equivalent.</returns>
        /// <returns>A negative number if the reference string occurs before the compare string; positive if the reference string occurs after the compare string; 0 if they are equivalent.</returns>
        [Template("{str}.localeCompare({compareString}, {locales})")]
        public static extern int LocaleCompare(this string str, string compareString, string locales);

        /// <summary>
        /// The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="compareString">The string against which the referring string is compared</param>
        /// <param name="locales">A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page.</param>
        /// <param name="options">An object with some or all of the following properties:</param>
        /// <returns>A negative number if the reference string occurs before the compare string; positive if the reference string occurs after the compare string; 0 if they are equivalent.</returns>
        [Template("{str}.localeCompare({compareString}, {locales}, {options})")]
        public static extern int LocaleCompare(this string str, string compareString, string locales, LocaleOptions options);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="substr">A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.</param>
        /// <param name="newSubStr">The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.</param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({substr}, {newSubStr})")]
        public static extern string Replace(this string str, string substr, string newSubStr);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="substr">A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.</param>
        /// <param name="function">A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. </param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({substr}, {function})")]
        public static extern string Replace(this string str, string substr, Delegate function);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="substr">A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.</param>
        /// <param name="function">A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. </param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({substr}, {function})")]
        public static extern string Replace(this string str, string substr, Func<string, string> function);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="substr">A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.</param>
        /// <param name="function">A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. </param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({substr}, {function})")]
        public static extern string Replace(this string str, string substr, Func<string, int, string> function);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="substr">A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.</param>
        /// <param name="function">A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. </param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({substr}, {function})")]
        public static extern string Replace(this string str, string substr, Func<string, int, string, string> function);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regexp">A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.</param>
        /// <param name="newSubStr">The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.</param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({regexp}, {newSubStr})")]
        public static extern string Replace(this string str, RegExp regexp, string newSubStr);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regexp">A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.</param>
        /// <param name="function">A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. </param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({regexp}, {function})")]
        public static extern string Replace(this string str, RegExp regexp, Delegate function);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regexp">A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.</param>
        /// <param name="function">A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. </param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({regexp}, {function})")]
        public static extern string Replace(this string str, RegExp regexp, Func<string, string> function);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regexp">A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.</param>
        /// <param name="function">A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. </param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({regexp}, {function})")]
        public static extern string Replace(this string str, RegExp regexp, Func<string, int, string> function);

        /// <summary>
        /// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="regexp">A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.</param>
        /// <param name="function">A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. </param>
        /// <returns>A new string with some or all matches of a pattern replaced by a replacement.</returns>
        [Template("{str}.replace({regexp}, {function})")]
        public static extern string Replace(this string str, RegExp regexp, Func<string, int, string, string> function);

        /// <summary>
        /// The slice() method extracts a section of a string and returns a new string.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="beginIndex">The zero-based index at which to begin extraction. If negative, it is treated as strLength + beginIndex where strLength is the length of the string (for example, if beginIndex is -3 it is treated as strLength - 3). If beginIndex is greater than or equal to the length of the string, slice() returns an empty string.</param>
        /// <returns>A new string containing the extracted section of the string.</returns>
        [Template("{str}.slice({beginIndex})")]
        public static extern string Slice(this string str, int beginIndex);

        /// <summary>
        /// The slice() method extracts a section of a string and returns a new string.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="beginIndex">The zero-based index at which to begin extraction. If negative, it is treated as strLength + beginIndex where strLength is the length of the string (for example, if beginIndex is -3 it is treated as strLength - 3). If beginIndex is greater than or equal to the length of the string, slice() returns an empty string.</param>
        /// <param name="endIndex">The zero-based index before which to end extraction. The character at this index will not be included. If endIndex is omitted, slice() extracts to the end of the string. If negative, it is treated as strLength + endIndex where strLength is the length of the string (for example, if endIndex is -3 it is treated as strLength - 3).</param>
        /// <returns>A new string containing the extracted section of the string.</returns>
        [Template("{str}.slice({beginIndex}, {endIndex})")]
        public static extern string Slice(this string str, int beginIndex, int endIndex);

        /// <summary>
        /// Splits a String object into an array of strings by separating the string into substrings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="separator">Specifies the character to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.</param>
        /// <returns>An array of strings split at each point where the separator occurs in the given string.</returns>
        [Template("{str}.split(String.fromCharCode({separator}))")]
        public static extern string[] Split(this string str, char separator);

        /// <summary>
        /// Splits a String object into an array of strings by separating the string into substrings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="limit">Integer specifying a limit on the number of splits to be found. The split() method still splits on every match of separator, until the number of split items match the limit or the string falls short of separator.</param>
        /// <returns>An array of strings split at each point where the separator occurs in the given string.</returns>
        [Template("{str}.split({limit})")]
        public static extern string[] Split(this string str, int limit);

        /// <summary>
        /// Splits a String object into an array of strings by separating the string into substrings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="separator">Specifies the character to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.</param>
        /// <param name="limit">Integer specifying a limit on the number of splits to be found. The split() method still splits on every match of separator, until the number of split items match the limit or the string falls short of separator.</param>
        /// <returns>An array of strings split at each point where the separator occurs in the given string.</returns>
        [Template("{str}.split(String.fromCharCode({separator}), {limit})")]
        public static extern string[] Split(this string str, char separator, int limit);

        /// <summary>
        /// The split() method splits a String object into an array of strings by separating the string into substrings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <returns>An array of strings split at each point where the separator occurs in the given string.</returns>
        [Template("{str}.split()")]
        public static extern string[] Split(this string str);

        /// <summary>
        /// The split() method splits a String object into an array of strings by separating the string into substrings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="separator">Specifies the character(s) to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.</param>
        /// <returns>An array of strings split at each point where the separator occurs in the given string.</returns>
        [Template("{str}.split({separator})")]
        public static extern string[] Split(this string str, string separator);

        /// <summary>
        /// The split() method splits a String object into an array of strings by separating the string into substrings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="separator">Specifies the character(s) to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.</param>
        /// <param name="limit">Integer specifying a limit on the number of splits to be found. The split() method still splits on every match of separator, until the number of split items match the limit or the string falls short of separator.</param>
        /// <returns>An array of strings split at each point where the separator occurs in the given string.</returns>
        [Template("{str}.split({separator}, {limit})")]
        public static extern string[] Split(this string str, string separator, int limit);

        /// <summary>
        /// The split() method splits a String object into an array of strings by separating the string into substrings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="separator">Specifies the character(s) to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.</param>
        /// <returns>An array of strings split at each point where the separator occurs in the given string.</returns>
        [Template("{str}.split({separator})")]
        public static extern string[] Split(this string str, RegExp separator);

        /// <summary>
        /// The split() method splits a String object into an array of strings by separating the string into substrings.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="separator">Specifies the character(s) to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.</param>
        /// <param name="limit">Integer specifying a limit on the number of splits to be found. The split() method still splits on every match of separator, until the number of split items match the limit or the string falls short of separator.</param>
        /// <returns>An array of strings split at each point where the separator occurs in the given string.</returns>
        [Template("{str}.split({separator}, {limit})")]
        public static extern string[] Split(this string str, RegExp separator, int limit);

        /// <summary>
        /// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="start">Location at which to begin extracting characters. If a negative number is given, it is treated as strLength + start where strLength is the length of the string (for example, if start is -3 it is treated as strLength - 3.)</param>
        /// <returns>A new string containing the extracted section of the given string. If length is 0 or a negative number, an empty string is returned.</returns>
        [Template("{str}.substr({start})")]
        public static extern string Substr(this string str, int start);

        /// <summary>
        /// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="start">Location at which to begin extracting characters. If a negative number is given, it is treated as strLength + start where strLength is the length of the string (for example, if start is -3 it is treated as strLength - 3.)</param>
        /// <param name="length">The number of characters to extract.</param>
        /// <returns>A new string containing the extracted section of the given string. If length is 0 or a negative number, an empty string is returned.</returns>
        [Template("{str}.substr({start}, {length})")]
        public static extern string Substr(this string str, int start, int length);

        /// <summary>
        /// The substring() method returns a subset of a string between one index and another, or through the end of the string.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="indexStart">An integer between 0 and the length of the string, specifying the offset into the string of the first character to include in the returned substring.</param>
        /// <returns>A new string containing the extracted section of the given string.</returns>
        [Template("{str}.substring({indexStart})")]
        public static extern string Substring(this string str, int indexStart);

        /// <summary>
        /// The substring() method returns a subset of a string between one index and another, or through the end of the string.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="indexStart">An integer between 0 and the length of the string, specifying the offset into the string of the first character to include in the returned substring.</param>
        /// <param name="indexEnd">An integer between 0 and the length of the string, which specifies the offset into the string of the first character not to include in the returned substring.</param>
        /// <returns>A new string containing the extracted section of the given string.</returns>
        [Template("{str}.substring({indexStart}, {indexEnd})")]
        public static extern string Substring(this string str, int indexStart, int indexEnd);

        /// <summary>
        /// The charAt() method returns the specified character from a string.
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="index">An integer between 0 and 1-less-than the length of the string. If no index is provided, charAt() will use 0.</param>
        /// <returns>A string representing the character at the specified index; empty string if index is out of range.</returns>
        [Template("{str}.charAt({index})")]
        public static extern string CharAt(this string str, int index);

        /// <summary>
        /// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index (the UTF-16 code unit matches the Unicode code point for code points representable in a single UTF-16 code unit, but might also be the first code unit of a surrogate pair for code points not representable in a single UTF-16 code unit, e.g. Unicode code points > 0x10000). If you want the entire code point value, use codePointAt().
        /// </summary>
        /// <param name="str">A string instance</param>
        /// <param name="index">An integer greater than or equal to 0 and less than the length of the string; if it is not a number, it defaults to 0.</param>
        /// <returns>A number representing the UTF-16 code unit value of the character at the given index; NaN if index is out of range.</returns>
        [Template("{str}.charCodeAt({index})")]
        public static extern int CharCodeAt(this string str, int index);

        /// <summary>
        /// The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
        /// </summary>
        /// <returns>String.Empty</returns>
        [Template("String.fromCharCode()")]
        public static extern string FromCharCode();

        /// <summary>
        /// The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
        /// </summary>
        /// <param name="numbers">A sequence of numbers that are Unicode values.</param>
        /// <returns></returns>
        [Template("String.fromCharCode({numbers})")]
        public static extern string FromCharCode(params int[] numbers);
    }
}