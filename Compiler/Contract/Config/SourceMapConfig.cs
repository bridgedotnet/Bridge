using System;
using Bridge.Contract.Constants;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Bridge.Contract
{
    public class SourceMapConfig
    {
        public bool Enabled
        {
            get; set;
        }

        public UnicodeNewline? Eol
        {
            get; set;
        }
    }

    internal class SourceMapConfigInt : SourceMapConfig
    {
    }

    public class SourceMapConfigConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var config = value as SourceMapConfig;

            if (config != null && !config.Eol.HasValue)
            {
                serializer.Serialize(writer, config.Enabled);
            }
            else
            {
                var s = JObject.FromObject(config);
                s.WriteTo(writer);
            }
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Boolean)
            {
                var enabled = serializer.Deserialize<bool>(reader);

                return new SourceMapConfig() { Enabled = enabled };
            }
            else if (reader.TokenType == JsonToken.StartObject)
            {
                existingValue = new SourceMapConfig();
                serializer.Populate(reader, existingValue);

                return existingValue;
            }
            else if (reader.TokenType == JsonToken.Null
                || reader.TokenType == JsonToken.None)
            {
                return existingValue;
            }

            throw new JsonReaderException(
               string.Format(
                   Messages.Exceptions.ERROR_CONFIG_DESERIALIZATION_NODE,
                   "SourceMap. It should be either bool value true/false or an object { ... }.")
               );
        }

        public override bool CanConvert(Type objectType)
        {
            return typeof(SourceMapConfig).IsAssignableFrom(objectType);
        }
    }
}
