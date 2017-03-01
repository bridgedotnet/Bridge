namespace Bridge.Contract
{
    using System.Collections.Generic;
    using System.Linq;

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

        public string OutDir
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
            return string.Join(", ", GetValues().Select(x => x.Key + ":" + x.Value));
        }

        public Dictionary<string, string> GetValues()
        {
            var r = new Dictionary<string, string>()
            {
               { WrapProperty("AssemblyName"), GetString(this.AssemblyName) },
               { WrapProperty("CheckForOverflowUnderflow"), GetString(this.CheckForOverflowUnderflow) },
               { WrapProperty("Configuration"), GetString(this.Configuration) },
               { WrapProperty("DefineConstants"), GetString(this.DefineConstants) },
               { WrapProperty("OutDir"), GetString(this.OutDir) },
               { WrapProperty("OutputPath"), GetString(this.OutputPath) },
               { WrapProperty("OutputType"), GetString(this.OutputType) },
               { WrapProperty("Platform"), GetString(this.Platform) },
               { WrapProperty("RootNamespace"), GetString(this.RootNamespace) },
            };

            return r;
        }

        protected string WrapProperty(string name)
        {
            return "$(" + name + ")";
        }

        protected string GetString(string s)
        {
            return s != null ? s : "";
        }

        protected string GetString(bool? b)
        {
            return b.HasValue ? GetString(b.Value) : GetString((string)null);
        }

        protected string GetString(bool b)
        {
            return b.ToString().ToLowerInvariant();
        }
    }
}