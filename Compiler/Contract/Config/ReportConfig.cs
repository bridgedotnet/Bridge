using System;
using System.IO;
using Bridge.Contract.Constants;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Bridge.Contract
{
    public class ReportConfig
    {
        public bool Enabled
        {
            get; set;
        }

        public string FileName
        {
            get; set;
        }

        public string Path
        {
            get; set;
        }
    }

    public class ReportConfigConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var config = value as ReportConfig;

            if (config == null)
            {
                return;
            }
            else if (string.IsNullOrEmpty(config.FileName) && string.IsNullOrEmpty(config.Path))
            {
                serializer.Serialize(writer, config.Enabled);
            }
            else if (config.Enabled)
            {
                var configHelper = new ConfigHelper();

                var location = configHelper.ConvertPath(config.FileName);

                if (!string.IsNullOrEmpty(config.Path))
                {
                    if (string.IsNullOrEmpty(location))
                    {
                        // No FileName path
                        location = configHelper.ConvertPath(config.Path);

                        if (location[location.Length - 1] != Path.DirectorySeparatorChar)
                        {
                            location = location + Path.DirectorySeparatorChar;
                        }
                    }
                    else
                    {
                        // FileName path as well
                        location = Path.Combine(configHelper.ConvertPath(config.Path), location);
                    }
                }

                // Normalize to have '/' as DirectorySeparatorChar in config
                location = configHelper.ConvertPath(location, '/');

                serializer.Serialize(writer, location);
            }
            else
            {
                var configHelper = new ConfigHelper();

                // Normalize to have '/' as DirectorySeparatorChar in config
                config.FileName = configHelper.ConvertPath(config.FileName, '/');
                config.Path = configHelper.ConvertPath(config.Path, '/');

                var s = JObject.FromObject(config);
                s.WriteTo(writer);
            }
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            if (reader.TokenType == JsonToken.Boolean)
            {
                var enabled = serializer.Deserialize<bool>(reader);

                return new ReportConfig() { Enabled = enabled };
            }
            else if (reader.TokenType == JsonToken.String)
            {
                var config = new ReportConfig();

                var location = serializer.Deserialize<string>(reader);

                if (string.IsNullOrEmpty(location))
                {
                    config.Enabled = false;
                    return config;
                }

                config.Enabled = true;

                location = location.Trim();

                if (string.IsNullOrEmpty(location))
                {
                    return config;
                }

                var configHelper = new ConfigHelper();

                location = configHelper.ConvertPath(location);

                if (location[location.Length - 1] == Path.DirectorySeparatorChar)
                {
                    config.Path = configHelper.ConvertPath(location, '/');
                    return config;
                }

                config.Path = configHelper.ConvertPath(Path.GetDirectoryName(location), '/');
                config.FileName = configHelper.ConvertPath(Path.GetFileName(location), '/');

                return config;
            }
            else if (reader.TokenType == JsonToken.StartObject)
            {
                var configHelper = new ConfigHelper();
                var config = new ReportConfig();

                serializer.Populate(reader, config);

                config.Path = configHelper.ConvertPath(config.Path, '/');
                config.FileName = configHelper.ConvertPath(config.FileName, '/');

                existingValue = config;
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
                   "ReportConfig. It should be either bool value, string or an object { ... }.")
               );
        }

        public override bool CanConvert(Type objectType)
        {
            return typeof(ReportConfig).IsAssignableFrom(objectType);
        }
    }
}
