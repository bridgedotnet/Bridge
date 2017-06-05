using System;
using Bridge.Contract.Constants;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Bridge.Contract
{
    public class HtmlConfig
    {
        public bool Disabled
        {
            get; set;
        }

        public string Name
        {
            get; set;
        }

        public string Title
        {
            get; set;
        }
    }

    public class HtmlConfigConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var config = value as HtmlConfig;

            if (config != null && string.IsNullOrEmpty(config.Name) && string.IsNullOrEmpty(config.Title))
            {
                serializer.Serialize(writer, config.Disabled);
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
                var disabled = serializer.Deserialize<bool>(reader);

                return new HtmlConfig() { Disabled = disabled };
            }
            else if (reader.TokenType == JsonToken.StartObject)
            {
                existingValue = new HtmlConfig();
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
                   "Html. It should be either bool value false/true or an object { ... }.")
               );
        }

        public override bool CanConvert(Type objectType)
        {
            return typeof(HtmlConfig).IsAssignableFrom(objectType);
        }
    }
}
