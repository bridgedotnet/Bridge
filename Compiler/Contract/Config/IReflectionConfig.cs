namespace Bridge.Contract
{
    public interface IReflectionConfig
    {
        bool? Enabled
        {
            get; set;
        }

        MemberAccessibility? MemberAccessibility
        {
            get; set;
        }

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