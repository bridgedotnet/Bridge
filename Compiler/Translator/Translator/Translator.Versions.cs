using Bridge.Contract;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    public partial class Translator
    {
        private string GetProductVersionFromVersionInfo(System.Diagnostics.FileVersionInfo versionInfo)
        {
            string version = null;

            if (versionInfo != null && versionInfo.ProductVersion != null)
            {
                version = versionInfo.ProductVersion.Trim();
            }

            // If version contains only 0 and dots like 0.0.0.0 then set it to default string.Empty
            // This helps get compatibility with Mono when it returns empty (whitespace) when AssemblyVersion is not set
            if (version == null || version.All(x => x == '0' || x == '.'))
            {
                version = Contract.Constants.JS.Types.System.Reflection.Assembly.Config.DEFAULT_VERSION;
            }

            return version;
        }

        System.Diagnostics.FileVersionInfo compilerVersionInfo;
        private System.Diagnostics.FileVersionInfo GetCompilerVersion()
        {
            if (compilerVersionInfo == null)
            {
                try
                {
                    var compilerAssembly = System.Reflection.Assembly.GetExecutingAssembly();
                    compilerVersionInfo = System.Diagnostics.FileVersionInfo.GetVersionInfo(compilerAssembly.Location);
                }
                catch (System.Exception ex)
                {
                    this.Log.Error("Could not load executing assembly to get assembly info");
                    this.Log.Error(ex.ToString());
                }
            }

            return compilerVersionInfo;
        }

        System.Diagnostics.FileVersionInfo assemblyVersionInfo;
        private System.Diagnostics.FileVersionInfo GetAssemblyVersion()
        {
            if (assemblyVersionInfo == null)
            {
                assemblyVersionInfo = GetAssemblyVersionByPath(this.AssemblyLocation);
            }

            return assemblyVersionInfo;
        }

        System.Diagnostics.FileVersionInfo bridgeVersionInfo;
        private System.Diagnostics.FileVersionInfo GetBridgeAssemblyVersion()
        {
            if (bridgeVersionInfo == null)
            {
                bridgeVersionInfo = GetAssemblyVersionByPath(this.BridgeLocation);
            }

            return bridgeVersionInfo;
        }

        private System.Diagnostics.FileVersionInfo GetAssemblyVersionByPath(string path)
        {
            System.Diagnostics.FileVersionInfo fileVerionInfo = null;
            try
            {
                fileVerionInfo = System.Diagnostics.FileVersionInfo.GetVersionInfo(path);
            }
            catch (System.Exception ex)
            {
                this.Log.Error("Could not load " + path + " to get the assembly info");
                this.Log.Error(ex.ToString());
            }

            return fileVerionInfo;
        }

        private VersionContext versionContext;

        public VersionContext GetVersionContext()
        {
            if (versionContext == null)
            {
                versionContext = new VersionContext();

                versionContext.Assembly = GetVersionFromFileVersionInfo(GetAssemblyVersion());
                versionContext.Assembly.Description = GetAssemblyDescription();

                versionContext.Bridge = GetVersionFromFileVersionInfo(GetBridgeAssemblyVersion());

                versionContext.Compiler = GetVersionFromFileVersionInfo(GetCompilerVersion());
            }

            return versionContext;
        }

        private VersionContext.AssemblyVersion GetVersionFromFileVersionInfo(System.Diagnostics.FileVersionInfo versionInfo)
        {
            return versionInfo == null
                    ? new VersionContext.AssemblyVersion()
                    : new VersionContext.AssemblyVersion()
                    {
                        CompanyName = versionInfo.CompanyName != null ? versionInfo.CompanyName.Trim() : null,
                        Copyright = versionInfo.LegalCopyright != null ? versionInfo.LegalCopyright.Trim() : null,
                        Version = GetProductVersionFromVersionInfo(versionInfo),
                        Name = versionInfo.ProductName != null ? versionInfo.ProductName.Trim() : null
                    };
        }

        private string GetAssemblyDescription()
        {
            string assemblyDescription = null;

            var assemblyDescriptionAttribute = this.AssemblyDefinition.CustomAttributes.FirstOrDefault(x => x.AttributeType.FullName == "System.Reflection.AssemblyDescriptionAttribute");

            if (assemblyDescriptionAttribute != null
                && assemblyDescriptionAttribute.HasConstructorArguments)
            {
                assemblyDescription = assemblyDescriptionAttribute.ConstructorArguments[0].Value as string;
            }

            if (assemblyDescription != null)
            {
                assemblyDescription = assemblyDescription.Trim();
            }

            return assemblyDescription;
        }

        internal string GetAssemblyTitle()
        {
            string assemblyTitle = null;

            var assemblyTitleAttribute = this.AssemblyDefinition.CustomAttributes.FirstOrDefault(x => x.AttributeType.FullName == "System.Reflection.AssemblyTitleAttribute");

            if (assemblyTitleAttribute != null
                && assemblyTitleAttribute.HasConstructorArguments)
            {
                assemblyTitle = assemblyTitleAttribute.ConstructorArguments[0].Value as string;
            }

            if (assemblyTitle != null)
            {
                assemblyTitle = assemblyTitle.Trim();
            }

            return assemblyTitle;
        }

        private void LogProductInfo()
        {
            var compilerInfo = this.GetCompilerVersion();

            var bridgeInfo = this.GetBridgeAssemblyVersion();

            this.Log.Info("Product info:");
            if (compilerInfo != null)
            {
                this.Log.Info(string.Format("\t{0} version {1}", compilerInfo.ProductName, compilerInfo.ProductVersion));
            }
            else
            {
                this.Log.Info("Not found");
            }

            if (bridgeInfo != null)
            {
                this.Log.Info(string.Format("\t[{0} Framework, version {1}]", bridgeInfo.ProductName, bridgeInfo.ProductVersion));
            }

            if (compilerInfo != null)
            {
                this.Log.Info("\t" + compilerInfo.LegalCopyright);
            }
        }
    }
}