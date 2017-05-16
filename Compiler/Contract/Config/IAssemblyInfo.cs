using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Bridge.Contract
{
    public interface IAssemblyInfo
    {
        List<IPluginDependency> Dependencies
        {
            get; set;
        }

        string FileName
        {
            get; set;
        }

        [JsonConverter(typeof(StringEnumConverter))]
        OutputBy OutputBy
        {
            get; set;
        }

        [JsonConverter(typeof(StringEnumConverter))]
        FileNameCaseConvert FileNameCasing
        {
            get; set;
        }

        [JsonConverter(typeof(StringEnumConverter))]
        JavaScriptOutputType OutputFormatting
        {
            get; set;
        }

        Module Module
        {
            get; set;
        }

        string Output
        {
            get; set;
        }

        int StartIndexInName
        {
            get; set;
        }

        string BeforeBuild
        {
            get; set;
        }

        string AfterBuild
        {
            get; set;
        }

        bool AutoPropertyToField
        {
            get; set;
        }

        string PluginsPath
        {
            get; set;
        }

        bool GenerateTypeScript
        {
            get; set;
        }

        [JsonConverter(typeof(StringEnumConverter))]
        DocumentationMode GenerateDocumentation
        {
            get; set;
        }

        string BuildArguments
        {
            get; set;
        }

        string Configuration
        {
            get; set;
        }

        List<string> DefineConstants
        {
            get; set;
        }

        /// <summary>
        /// Deletes files from output directory using pattern "*.js|*.d.ts" before build (before extracting scripts after translation).
        /// It is useful to replace BeforeBuild event if it just contain commands to clean the output folder.
        /// </summary>
        bool CleanOutputFolderBeforeBuild
        {
            get; set;
        }

        /// <summary>
        /// Sets search pattern for cleaning output directory.
        /// </summary>
        string CleanOutputFolderBeforeBuildPattern
        {
            get; set;
        }

        string Locales
        {
            get; set;
        }

        string LocalesOutput
        {
            get; set;
        }

        string LocalesFileName
        {
            get; set;
        }

        bool CombineLocales
        {
            get; set;
        }

        bool CombineScripts
        {
            get; set;
        }

        bool UseTypedArrays
        {
            get; set;
        }

        bool IgnoreCast
        {
            get; set;
        }

        LoggingOptions Logging
        {
            get; set;
        }

        [JsonConverter(typeof(StringEnumConverter))]
        OverflowMode? OverflowMode
        {
            get; set;
        }

        bool StrictNullChecks
        {
            get; set;
        }

        IReflectionConfig Reflection
        {
            get; set;
        }

        AssemblyConfig Assembly
        {
            get; set;
        }

        ResourceConfig Resources
        {
            get; set;
        }

        IModuleLoader Loader
        {
            get; set;
        }

        NamedFunctionMode NamedFunctions
        {
            get;
            set;
        }

        SourceMapConfig SourceMap
        {
            get; set;
        }
    }
 }
