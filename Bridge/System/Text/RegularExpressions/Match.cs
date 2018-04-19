namespace System.Text.RegularExpressions
{
    /// <summary>
    /// Represents the results from a single regular expression match.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public class Match : Group
    {
        internal extern Match(Regex regex, int capcount, String text, int begpos, int len, int startpos);

        /// <summary>
        /// Gets the empty group. All failed matches return this empty match.
        /// </summary>
        public extern static Match Empty
        {
            [Bridge.Template("{this}.getEmpty()")]
            get;
        }

        /// <summary>
        /// Gets a collection of groups matched by the regular expression.
        /// </summary>
        public extern virtual GroupCollection Groups
        {
            [Bridge.Template("getGroups()")]
            get;
        }

        /// <summary>
        /// Returns a new Match object with the results for the next match, starting at the position at which the last match ended (at the character after the last matched character).
        /// </summary>
        public extern Match NextMatch();

        /// <summary>
        /// Returns the expansion of the specified replacement pattern.
        /// </summary>
        public extern virtual string Result(string replacement);

        /// <summary>
        /// Returns a Match instance equivalent to the one supplied that is suitable to share between multiple threads.
        /// </summary>
        public extern static Match Synchronized(Match inner);
    }
}