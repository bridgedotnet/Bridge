using System.Collections.Generic;

namespace Bridge.Contract
{
    public interface IAssemblyInfo
    {
        bool PreserveMemberCase
        {
            get; set;
        }

        List<IPluginDependency> Dependencies
        {
            get; set;
        }

        string FileName
        {
            get; set;
        }

        OutputBy OutputBy
        {
            get; set;
        }

        FileNameCaseConvert FileNameCasing
        {
            get; set;
        }

        JavaScriptOutputType OutputFormatting
        {
            get; set;
        }

        string Module
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

        bool InjectScriptToAssembly
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
    }
 }
