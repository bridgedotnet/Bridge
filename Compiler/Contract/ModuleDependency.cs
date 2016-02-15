namespace Bridge.Contract
{
    public class ModuleDependency : IPluginDependency
    {
        public string DependencyName
        {
            get;
            set;
        }

        public string VariableName
        {
            get;
            set;
        }
    }
}