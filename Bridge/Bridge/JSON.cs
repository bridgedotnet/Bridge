namespace Bridge
{
    [External]
    public static class Json
    {
        /// <summary>
        /// The Deserialize method parses a string as JSON.
        /// </summary>
        /// <param name="value">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.Json.deserialize({value}, {T})")]
        public static extern T Deserialize<T>(string value);

        /// <summary>
        /// The Deserialize method parses a string as JSON.
        /// </summary>
        /// <param name="value">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <param name="settings">Serializer settings</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.Json.deserialize({value}, {T}, {settings})")]
        public static extern T Deserialize<T>(string value, JsonSettings settings);

        /// <summary>
        /// The Deserialize method parses a raw object.
        /// </summary>
        /// <param name="value">The raw object to parse</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.Json.deserialize({value}, {T})")]
        public static extern T Deserialize<T>(object value);

        /// <summary>
        /// The Deserialize method parses a raw object.
        /// </summary>
        /// <param name="value">The raw object to parse</param>
        /// <param name="settings">Serializer settings</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.Json.deserialize({value}, {T})")]
        public static extern T Deserialize<T>(object value, JsonSettings settings);

        [Template("Bridge.Json.deserialize({value}, Bridge.getType({anonymousTypeObject}))")]
        public static extern T Deserialize<T>(string value, T anonymousTypeObject);

        [Template("Bridge.Json.deserialize({value}, Bridge.getType({anonymousTypeObject}), {settings})")]
        public static extern T Deserialize<T>(string value, T anonymousTypeObject, JsonSettings settings);

        [Template("Bridge.Json.deserialize({raw}, Bridge.getType({anonymousTypeObject}), {settings})")]
        public static extern T Deserialize<T>(object raw, T anonymousTypeObject, JsonSettings settings);

        /// <summary>
        /// Convert object to JSON
        /// </summary>
        /// <param name="value">Object to serialize</param>
        /// <returns>The resulting JSON string</returns>
        [Template("Bridge.Json.serialize({value})")]
        [Unbox(false)]
        public static extern string Serialize(object value);

        /// <summary>
        /// Convert object to JSON
        /// </summary>
        /// <param name="value">Object to serialize</param>
        /// <param name="settings">Serializer settings</param>
        /// <returns>The resulting JSON string</returns>
        [Template("Bridge.Json.serialize({value}, {settings})")]
        [Unbox(false)]
        public static extern string Serialize(object value, JsonSettings settings);
    }

    [External]
    [ObjectLiteral]
    public class JsonSettings
    {
        public bool CamelCasePropertyNames
        {
            get; set;
        }

        public bool TypeNameHandling
        {
            get; set;
        }

        public bool IgnoreNullValue
        {
            get; set;
        }
    }
}