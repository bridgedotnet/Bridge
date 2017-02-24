namespace Bridge
{
    [External]
    public static class JSON
    {
        /// <summary>
        /// The Deserialize method parses a string as JSON.
        /// </summary>
        /// <param name="text">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.JSON.deserialize({text}, {T})")]
        public static extern T Deserialize<T>(string text);

        /// <summary>
        /// The Deserialize method parses a raw object.
        /// </summary>
        /// <param name="raw">The raw object to parse</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.JSON.deserialize({raw}, {T})")]
        public static extern T Deserialize<T>(object raw);

        /// <summary>
        /// Convert object to JSON
        /// </summary>
        /// <param name="value">Object to serialize</param>
        /// <returns>The resulting JSON string</returns>
        [Template("Bridge.JSON.serialize({value})")]
        [Unbox(false)]
        public static extern string Serialize(object value);

        /// <summary>
        /// Convert object (complex instance) to plain object
        /// </summary>
        /// <param name="value">Object which will be converted to plain object</param>
        /// <returns>Plain object</returns>
        [Template("Bridge.JSON.serialize({value}, true)")]
        [Unbox(false)]
        public static extern object Plain(object value);
    }
}