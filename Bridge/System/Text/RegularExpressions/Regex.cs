using Bridge;

namespace System.Text.RegularExpressions
{
    public sealed class Regex
    {
        public extern Regex(string pattern);

        public extern Regex(string pattern, RegexOptions options);

        public extern Regex(string pattern, RegexOptions options, TimeSpan matchTimeout);

        #region Instance members

        /// <summary>
        /// Gets the time-out interval of the current instance.
        /// </summary>
        public extern TimeSpan MatchTimeout
        {
            [Template("getMatchTimeout()")]
            get;
        }

        /// <summary>
        /// Gets the options that were passed into the Regex constructor.
        /// </summary>
        public extern RegexOptions Options
        {
            [Template("getOptions()")]
            get;
        }

        /// <summary>
        /// Gets a value that indicates whether the regular expression searches from right to left.
        /// </summary>
        public extern bool RightToLeft
        {
            [Template("getRightToLeft()")]
            get;
        }

        /// <summary>
        /// Returns an array of capturing group names for the regular expression.
        /// </summary>
        public extern string[] GetGroupNames();

        /// <summary>
        /// Returns an array of capturing group numbers that correspond to group names in an array.
        /// </summary>
        public extern int[] GetGroupNumbers();

        /// <summary>
        /// Gets the group name that corresponds to the specified group number.
        /// </summary>
        public extern string GroupNameFromNumber(int i);

        /// <summary>
        /// Returns the group number that corresponds to the specified group name.
        /// </summary>
        public extern int GroupNumberFromName(string name);

        /// <summary>
        /// Indicates whether the regular expression specified in the Regex constructor finds a match in a specified input string.
        /// </summary>
        public extern bool IsMatch(string input);

        /// <summary>
        /// Indicates whether the regular expression specified in the Regex constructor finds a match in the specified input string, beginning at the specified starting position in the string.
        /// </summary>
        public extern bool IsMatch(string input, int startat);

        /// <summary>
        /// Searches the specified input string for the first occurrence of the regular expression specified in the Regex constructor.
        /// </summary>
        public extern Match Match(string input);

        /// <summary>
        /// Searches the input string for the first occurrence of a regular expression, beginning at the specified starting position in the string.
        /// </summary>
        public extern Match Match(string input, int startat);

        /// <summary>
        /// Searches the input string for the first occurrence of a regular expression, beginning at the specified starting position and searching only the specified number of characters.
        /// </summary>
        public extern Match Match(string input, int beginning, int length);

        /// <summary>
        /// Searches the specified input string for all occurrences of a regular expression.
        /// </summary>
        public extern MatchCollection Matches(string input);

        /// <summary>
        /// Searches the specified input string for all occurrences of a regular expression, beginning at the specified starting position in the string.
        /// </summary>
        public extern MatchCollection Matches(string input, int startat);

        /// <summary>
        /// In a specified input string, replaces all strings that match a regular expression pattern with a specified replacement string.
        /// </summary>
        public extern string Replace(string input, string replacement);

        /// <summary>
        /// In a specified input string, replaces a specified maximum number of strings that match a regular expression pattern with a specified replacement string.
        /// </summary>
        public extern string Replace(string input, string replacement, int count);

        /// <summary>
        /// In a specified input substring, replaces a specified maximum number of strings that match a regular expression pattern with a specified replacement string.
        /// </summary>
        public extern string Replace(string input, string replacement, int count, int startat);

        /// <summary>
        /// In a specified input string, replaces all strings that match a specified regular expression with a string returned by a <see cref="MatchEvaluator"/> delegate.
        /// </summary>
        public extern string Replace(string input, MatchEvaluator evaluator);

        /// <summary>
        /// In a specified input string, replaces a specified maximum number of strings that match a regular expression pattern with a string returned by a <see cref="MatchEvaluator"/> delegate.
        /// </summary>
        public extern string Replace(string input, MatchEvaluator evaluator, int count);

        /// <summary>
        /// In a specified input substring, replaces a specified maximum number of strings that match a regular expression pattern with a string returned by a <see cref="MatchEvaluator"/> delegate.
        /// </summary>
        public extern string Replace(string input, MatchEvaluator evaluator, int count, int startat);

        /// <summary>
        /// Splits an input string into an array of substrings at the positions defined by a regular expression pattern specified in the Regex constructor.
        /// </summary>
        public extern string[] Split(string input);

        /// <summary>
        /// Splits an input string a specified maximum number of times into an array of substrings, at the positions defined by a regular expression specified in the Regex constructor.
        /// </summary>
        public extern string[] Split(string input, int count);

        /// <summary>
        /// Splits an input string a specified maximum number of times into an array of substrings, at the positions defined by a regular expression specified in the Regex constructor. The search for the regular expression pattern starts at a specified character position in the input string.
        /// </summary>
        public extern string[] Split(string input, int count, int startat);

        #endregion Instance members

        #region Static members

        //TODO: Enable when Cache is implemented.
        ///// <summary>
        ///// Gets or sets the maximum number of entries in the current static cache of compiled regular expressions.
        ///// </summary>
        //public static extern int CacheSize { get; set; }

        //#if !SILVERLIGHT
        //        /// <summary>
        //        /// Compiles one or more specified Regex objects to a named assembly.
        //        /// </summary>
        //        public static extern void CompileToAssembly(RegexCompilationInfo[] regexinfos, AssemblyName assemblyname);

        //        /// <summary>
        //        /// Compiles one or more specified Regex objects to a named assembly with the specified attributes.
        //        /// </summary>
        //        public static extern void CompileToAssembly(RegexCompilationInfo[] regexinfos, AssemblyName assemblyname, CustomAttributeBuilder[] attributes);

        //        /// <summary>
        //        /// Compiles one or more specified Regex objects and a specified resource file to a named assembly with the specified attributes.
        //        /// </summary>
        //        public static extern void CompileToAssembly(RegexCompilationInfo[] regexinfos, AssemblyName assemblyname, CustomAttributeBuilder[] attributes, String resourceFile);
        //#endif

        /// <summary>
        /// Determines whether the specified object is equal to the current object.(Inherited from Object.)
        /// </summary>
        public static extern string Escape(string str);

        /// <summary>
        /// Converts any escaped characters in the input string.
        /// </summary>
        public static extern string Unescape(string str);

        /// <summary>
        /// Indicates whether the specified regular expression finds a match in the specified input string.
        /// </summary>
        public static extern bool IsMatch(string input, string pattern);

        /// <summary>
        /// Indicates whether the specified regular expression finds a match in the specified input string, using the specified matching options.
        /// </summary>
        public static extern bool IsMatch(string input, string pattern, RegexOptions options);

        /// <summary>
        /// Indicates whether the specified regular expression finds a match in the specified input string, using the specified matching options and time-out interval.
        /// </summary>
        public static extern bool IsMatch(string input, string pattern, RegexOptions options, TimeSpan matchTimeout);

        /// <summary>
        /// Searches the specified input string for the first occurrence of the specified regular expression.
        /// </summary>
        public static extern Match Match(string input, string pattern);

        /// <summary>
        /// Searches the input string for the first occurrence of the specified regular expression, using the specified matching options.
        /// </summary>
        public static extern Match Match(string input, string pattern, RegexOptions options);

        /// <summary>
        /// Searches the input string for the first occurrence of the specified regular expression, using the specified matching options and time-out interval.
        /// </summary>
        public static extern Match Match(string input, string pattern, RegexOptions options, TimeSpan matchTimeout);

        /// <summary>
        /// Searches the specified input string for all occurrences of a specified regular expression.
        /// </summary>
        public static extern MatchCollection Matches(string input, string pattern);

        /// <summary>
        /// Searches the specified input string for all occurrences of a specified regular expression, using the specified matching options.
        /// </summary>
        public static extern MatchCollection Matches(string input, string pattern, RegexOptions options);

        /// <summary>
        /// Searches the specified input string for all occurrences of a specified regular expression, using the specified matching options and time-out interval.
        /// </summary>
        public static extern MatchCollection Matches(string input, string pattern, RegexOptions options, TimeSpan matchTimeout);

        /// <summary>
        /// In a specified input string, replaces all strings that match a specified regular expression with a specified replacement string.
        /// </summary>
        public static extern string Replace(string input, string pattern, string replacement);

        /// <summary>
        /// In a specified input string, replaces all strings that match a specified regular expression with a specified replacement string. Specified options modify the matching operation.
        /// </summary>
        public static extern string Replace(string input, string pattern, string replacement, RegexOptions options);

        /// <summary>
        /// In a specified input string, replaces all strings that match a specified regular expression with a specified replacement string. Additional parameters specify options that modify the matching operation and a time-out interval if no match is found.
        /// </summary>
        public static extern string Replace(string input, string pattern, string replacement, RegexOptions options, TimeSpan matchTimeout);

        /// <summary>
        /// In a specified input string, replaces all strings that match a specified regular expression with a string returned by a <see cref="MatchEvaluator"/> delegate.
        /// </summary>
        public static extern string Replace(string input, string pattern, MatchEvaluator evaluator);

        /// <summary>
        /// In a specified input string, replaces all strings that match a specified regular expression with a string returned by a <see cref="MatchEvaluator"/> delegate. Specified options modify the matching operation.
        /// </summary>
        public static extern string Replace(string input, string pattern, MatchEvaluator evaluator, RegexOptions options);

        /// <summary>
        /// In a specified input string, replaces all substrings that match a specified regular expression with a string returned by a <see cref="MatchEvaluator"/> delegate. Additional parameters specify options that modify the matching operation and a time-out interval if no match is found.
        /// </summary>
        public static extern string Replace(string input, string pattern, MatchEvaluator evaluator, RegexOptions options, TimeSpan matchTimeout);

        /// <summary>
        /// Splits an input string into an array of substrings at the positions defined by a regular expression pattern.
        /// </summary>
        public static extern string[] Split(string input, string pattern);

        /// <summary>
        /// Splits an input string into an array of substrings at the positions defined by a specified regular expression pattern. Specified options modify the matching operation.
        /// </summary>
        public static extern string[] Split(string input, string pattern, RegexOptions options);

        /// <summary>
        /// Splits an input string into an array of substrings at the positions defined by a specified regular expression pattern. Additional parameters specify options that modify the matching operation and a time-out interval if no match is found.
        /// </summary>
        public static extern string[] Split(string input, string pattern, RegexOptions options, TimeSpan matchTimeout);

        #endregion Static members
    }
}