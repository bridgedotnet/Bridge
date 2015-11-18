// JSON WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties it has no interesting functionality of its own.
    /// </summary>
    [External]
    [Name("JSON")]
    public static class JSON
    {
        /// <summary>
        /// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
        /// </summary>
        /// <param name="text">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        public static object Parse(string text)
        {
            return null;
        }

        /// <summary>
        /// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
        /// </summary>
        /// <param name="text">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.merge(new {T}(), JSON.parse({text}))")]
        public static T Parse<T>(string text)
        {
            return default(T);
        }

        /// <summary>
        /// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
        /// </summary>
        /// <param name="text">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <param name="reviver">If a function, prescribes how the value originally produced by parsing is transformed, before being returned.</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        public static object Parse(string text, Delegate reviver)
        {
            return null;
        }

        /// <summary>
        /// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
        /// </summary>
        /// <param name="text">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <param name="reviver">If a function, prescribes how the value originally produced by parsing is transformed, before being returned.</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        public static object Parse(string text, Func<string, object, object> reviver)
        {
            return null;
        }

        /// <summary>
        /// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
        /// </summary>
        /// <param name="text">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <param name="reviver">If a function, prescribes how the value originally produced by parsing is transformed, before being returned.</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.merge(new {T}(), JSON.parse({text}, {reviver}))")]
        public static T Parse<T>(string text, Delegate reviver)
        {
            return default(T);
        }

        /// <summary>
        /// The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
        /// </summary>
        /// <param name="text">The string to parse as JSON. See the JSON object for a description of JSON syntax.</param>
        /// <param name="reviver">If a function, prescribes how the value originally produced by parsing is transformed, before being returned.</param>
        /// <returns>The Object corresponding to the given JSON text.</returns>
        [Template("Bridge.merge(new {T}(), JSON.parse({text}, {reviver}))")]
        public static T Parse<T>(string text, Func<string, object, object> reviver)
        {
            return default(T);
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, Delegate replacer)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, Func<string, object, object> replacer)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <param name="space">Causes the resulting string to be pretty-printed. If it is a number, successive levels in the stringification will each be indented by this many space characters (up to 10). If it is a string, successive levels will indented by this string (or the first ten characters of it).</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, Delegate replacer, int space)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <param name="space">Causes the resulting string to be pretty-printed. If it is a number, successive levels in the stringification will each be indented by this many space characters (up to 10). If it is a string, successive levels will indented by this string (or the first ten characters of it).</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, Func<string, object, object> replacer, int space)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <param name="space">Causes the resulting string to be pretty-printed. If it is a number, successive levels in the stringification will each be indented by this many space characters (up to 10). If it is a string, successive levels will indented by this string (or the first ten characters of it).</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, Delegate replacer, string space)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <param name="space">Causes the resulting string to be pretty-printed. If it is a number, successive levels in the stringification will each be indented by this many space characters (up to 10). If it is a string, successive levels will indented by this string (or the first ten characters of it).</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, Func<string, object, object> replacer, string space)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, string[] replacer)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <param name="space">Causes the resulting string to be pretty-printed. If it is a number, successive levels in the stringification will each be indented by this many space characters (up to 10). If it is a string, successive levels will indented by this string (or the first ten characters of it).</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, string[] replacer, string space)
        {
            return null;
        }

        /// <summary>
        /// The JSON.stringify() method converts a value to JSON, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
        /// </summary>
        /// <param name="value">The value to convert to a JSON string.</param>
        /// <param name="replacer">If a function, transforms values and properties encountered while stringifying; if an array, specifies the set of properties included in objects in the final string.</param>
        /// <param name="space">Causes the resulting string to be pretty-printed. If it is a number, successive levels in the stringification will each be indented by this many space characters (up to 10). If it is a string, successive levels will indented by this string (or the first ten characters of it).</param>
        /// <returns>The resulting JSON string</returns>
        public static string Stringify(object value, string[] replacer, int space)
        {
            return null;
        }
    }
}
