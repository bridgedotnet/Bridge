namespace Bridge.Contract
{
    public class ProjectProperties
    {
        public string AssemblyName
        {
            get; set;
        }

        public bool? CheckForOverflowUnderflow
        {
            get; set;
        }

        public string Configuration
        {
            get; set;
        }

        public string DefineConstants
        {
            get; set;
        }

        public string OutputPath
        {
            get; set;
        }

        public string OutputType
        {
            get; set;
        }

        public string Platform
        {
            get; set;
        }

        public string RootNamespace
        {
            get; set;
        }

        public override string ToString()
        {
            return
                "AssemblyName:" + this.AssemblyName
                + ", CheckForOverflowUnderflow:" + this.CheckForOverflowUnderflow
                + ", Configuration:" + this.Configuration
                + ", DefineConstants:" + this.DefineConstants
                + ", OutputPath:" + this.OutputPath
                + ", OutputType:" + this.OutputType
                + ", Platform:" + this.Platform
                + ", RootNamespace:" + this.RootNamespace;
        }
    }
}