namespace Bridge.Contract
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public class LoggingOptions
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public LoggerLevel? Level
        {
            get; set;
        }

        public bool? TimeStamps
        {
            get; set;
        }

        public long? MaxSize
        {
            get; set;
        }

        public string Folder
        {
            get; set;
        }

        public string FileName
        {
            get; set;
        }
    }
}
