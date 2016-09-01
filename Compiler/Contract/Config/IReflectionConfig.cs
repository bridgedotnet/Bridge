namespace Bridge.Contract
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public interface IReflectionConfig
    {
        bool? Enabled
        {
            get; set;
        }

        [JsonConverter(typeof(StringEnumConverter))]
        MemberAccessibility? MemberAccessibility
        {
            get; set;
        }

        [JsonConverter(typeof(StringEnumConverter))]
        TypeAccessibility? TypeAccessibility
        {
            get; set;
        }

        string Filter
        {
            get; set;
        }

        string Output
        {
            get; set;
        }
    }
}