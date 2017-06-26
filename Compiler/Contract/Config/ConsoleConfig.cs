using System;
using Bridge.Contract.Constants;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Bridge.Contract
{
    public class ConsoleConfig
    {
        public bool Disabled
        {
            get; set;
        }
    }

    public class ConsoleConfigConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var config = value as ConsoleConfig;

            if (config != null)
            {
                serializer.Serialize(writer, !config.Disabled);
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
                var disabled = !serializer.Deserialize<bool>(reader);

                return new ConsoleConfig() { Disabled = disabled };
            }
            else if (reader.TokenType == JsonToken.StartObject)
            {
                existingValue = new ConsoleConfig();
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
                   "Console. It should be either bool value true/false or an object { ... }.")
               );
        }

        public override bool CanConvert(Type objectType)
        {
            return typeof(ConsoleConfig).IsAssignableFrom(objectType);
        }
    }
}
