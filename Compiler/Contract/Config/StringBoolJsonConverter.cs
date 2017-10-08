using System;
using Bridge.Contract.Constants;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Bridge.Contract
{
    public class StringBoolJsonConverter : JsonConverter
    {
        protected string DefaultForTrue
        {
            get; set;
        }

        protected string DefaultForFalse
        {
            get; set;
        }

        public StringBoolJsonConverter()
        {
            DefaultForTrue = null;
            DefaultForFalse = null;
        }

        public StringBoolJsonConverter(string defaultForTrue)
        {
            DefaultForTrue = defaultForTrue;
            DefaultForFalse = null;
        }

        public StringBoolJsonConverter(string defaultForTrue, string defaultForFalse)
        {
            DefaultForTrue = defaultForTrue;
            DefaultForFalse = defaultForFalse;
        }

        #region Overrides of JsonConverter

        /// <summary>
        /// Determines whether this instance can convert the specified object type.
        /// </summary>
        /// <param name="objectType">Type of the object.</param>
        /// <returns>
        /// <c>true</c> if this instance can convert the specified object type; otherwise, <c>false</c>.
        /// </returns>
        public override bool CanConvert(Type objectType)
        {
            // Handle only bool and string types.
            return objectType == typeof(bool) || objectType == typeof(string);
        }

        /// <summary>
        /// Reads the JSON representation of the object.
        /// </summary>
        /// <param name="reader">The <see cref="T:Newtonsoft.Json.JsonReader"/> to read from.</param>
        /// <param name="objectType">Type of the object.</param>
        /// <param name="existingValue">The existing value of object being read.</param>
        /// <param name="serializer">The calling serializer.</param>
        /// <returns>
        /// The object value.
        /// </returns>
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Boolean)
            {
                var b = serializer.Deserialize<bool>(reader);

                if (b)
                {
                    return DefaultForTrue;
                }
                else
                {
                    return DefaultForFalse;
                }
            }

            return serializer.Deserialize<string>(reader);
        }

        /// <summary>
        /// Writes the JSON representation of the object.
        /// </summary>
        /// <param name="writer">The <see cref="T:Newtonsoft.Json.JsonWriter"/> to write to.</param><param name="value">The value.</param><param name="serializer">The calling serializer.</param>
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var s = value as string;

            if (s == DefaultForTrue)
            {
                serializer.Serialize(writer, true);
            }
            else if (s == DefaultForFalse)
            {
                serializer.Serialize(writer, false);
            }
            else
            {
                serializer.Serialize(writer, s);
            }
        }

        #endregion Overrides of JsonConverter
    }
}
