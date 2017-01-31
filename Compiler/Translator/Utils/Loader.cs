using System;
using Bridge.Contract;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class ModuleLoader : IModuleLoader
    {
        public ModuleLoaderType Type
        {
            get; set;
        }

        public string FunctionName
        {
            get; set;
        }

        public bool ManualLoading
        {
            get; set;
        }

        public string ManualLoadingMask
        {
            get; set;
        }

        public bool SkipManualVariables
        {
            get; set;
        }

        public bool IsManual(string name)
        {
            if (this.ManualLoading)
            {
                return true;
            }

            if (!string.IsNullOrWhiteSpace(this.ManualLoadingMask))
            {
                var parts = this.ManualLoadingMask.Split(new char[] { ';' }, StringSplitOptions.RemoveEmptyEntries);

                foreach (var part in parts)
                {
                    string pattern;
                    bool exclude = part.StartsWith("!");

                    if (part.StartsWith("regex:"))
                    {
                        pattern = part.Substring(6);
                    }
                    else
                    {
                        pattern = "^" + Regex.Escape(part).Replace("\\*", ".*").Replace("\\?", ".") + "$";
                    }

                    if (Regex.IsMatch(name, pattern))
                    {
                        return !exclude;
                    }
                }
            }

            return false;
        }
    }
}