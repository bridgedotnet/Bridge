using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Bridge.Contract
{
    public interface IReflectionConfig
    {
        bool? Disabled
        {
            get; set;
        }

        [JsonProperty("memberAccessibility", ItemConverterType = typeof(StringEnumConverter))]
        MemberAccessibility[] MemberAccessibility
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

        MetadataTarget Target
        {
            get; set;
        }
    }

    public enum MetadataTarget
    {
        File,
        Inline,
        Type      
    }
}