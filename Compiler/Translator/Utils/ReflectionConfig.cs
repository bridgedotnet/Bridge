using Bridge.Contract;

namespace Bridge.Translator
{
    public class ReflectionConfig : IReflectionConfig
    {
        public bool? Disabled
        {
            get; set;
        }

        public MemberAccessibility[] MemberAccessibility
        {
            get; set;
        }

        public TypeAccessibility? TypeAccessibility
        {
            get; set;
        }

        public string Filter
        {
            get; set;
        }

        public string Output
        {
            get; set;
        }

        public MetadataTarget Target
        {
            get; set;
        }
    }
}