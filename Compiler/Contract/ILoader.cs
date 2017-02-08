namespace Bridge.Contract
{
    public enum ModuleLoaderType
    {
        AMD,
        CommonJS,
        ES6,
        Global
    }

    public interface IModuleLoader
    {
        ModuleLoaderType Type
        {
            get; set;
        }

        string FunctionName
        {
            get; set;
        }

        bool ManualLoading
        {
            get; set;
        }

        string ManualLoadingMask
        {
            get; set;
        }

        bool SkipManualVariables
        {
            get; set;
        }

        bool IsManual(string name);
    }
}