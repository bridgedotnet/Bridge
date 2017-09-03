namespace Bridge
{
    /// <summary>
    /// A simple JavaScript object where a comma separated list of name-value pairs are wrapped in curly braces.
    /// </summary>
    [External]
    [Name("System.Object")]
    public sealed class ObjectLiteral
    {
        /// <summary>
        /// Creates a new JavaScript object literal based on the properties and fields of the source object.
        /// </summary>
        /// <param name="obj">The object returned as a simple object literal in JavaScript</param>
        [Template("{obj:plain}")]
        public extern ObjectLiteral(object obj);

        /// <summary>
        /// Creates an empty JavaScript object literal with the return type of T.
        /// </summary>
        /// <typeparam name="T">The Type of object literal to create.</typeparam>
        /// <returns>An empty object literal of type T.</returns>
        [Template("{ }")]
        public extern static T Create<T>();
    }
}