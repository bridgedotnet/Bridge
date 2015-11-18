// String extension methods

namespace Bridge.Html5
{
    /// <summary>
    /// String global object extension methods to cater for the ECMA String prototype object.
    /// </summary>
    [External]
    public static class StringPrototype
    {
        /// <summary>
        /// The toLowerCase() method returns the calling string value converted to lowercase.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toLowerCase()")]
        public static string ToLowerCase(this string str)
        {
            return null;
        }

        /// <summary>
        /// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toLocaleLowerCase()")]
        public static string ToLocaleLowerCase(this string str)
        {
            return null;
        }

        /// <summary>
        /// The toUpperCase() method returns the calling string value converted to uppercase.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toUpperCase()")]
        public static string ToUpperCase(this string str)
        {
            return null;
        }

        /// <summary>
        /// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toLocaleUpperCase()")]
        public static string ToLocaleUpperCase(this string str)
        {
            return null;
        }
    }
}
