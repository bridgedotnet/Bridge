namespace Bridge.Contract
{
    using System;
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

        public List<string> BuildProjects
        {
            get; set;
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

        public void SetValues(Dictionary<string, string> values)
        {
            if (values == null)
            {
                throw new ArgumentNullException("values");
            }

            foreach (var pair in values)
            {
                switch (pair.Key.ToLowerInvariant())
                {
                    case "assemblyname":
                        this.AssemblyName = pair.Value;
                        break;
                    case "checkforoverflowunderflow":
                        this.CheckForOverflowUnderflow = GetNullableBool(pair.Value);
                        break;
                    case "configuration":
                        this.Configuration = pair.Value;
                        break;
                    case "defineconstants":
                        this.DefineConstants = pair.Value;
                        break;
                    case "outdir":
                        this.OutDir = pair.Value;
                        break;
                    case "outputpath":
                        this.OutputPath = pair.Value;
                        break;
                    case "outputtype":
                        this.OutputType = pair.Value;
                        break;
                    case "platform":
                        this.Platform = pair.Value;
                        break;
                    case "rootnamespace":
                        this.RootNamespace = pair.Value;
                        break;
                    default:
                        break;
                }
            }
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

        protected bool? GetNullableBool(string s, bool safe = false)
        {
            if (string.IsNullOrEmpty(s))
            {
                return null;
            }

            if ((new string[] { "true", "1" }).Contains(s.ToLowerInvariant()))
            {
                return true;
            }

            if ((new string[] { "false", "0" }).Contains(s.ToLowerInvariant()))
            {
                return false;
            }

            if (!safe)
            {
                throw new ArgumentException("Could not parse value {0} into bool?", s);
            }

            return null;
        }
    }
}