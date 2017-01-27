namespace Bridge.Contract
{
    public interface IPluginDependency
    {
        string DependencyName
        {
            get;
            set;
        }

        string VariableName
        {
            get;
            set;
        }

        ModuleType? Type
        {
            get; set;
        }
    }
}