using System.Collections.Generic;

namespace Bridge.Contract
{
    /// <summary>
    /// Format options for the generated JavaScript file name and folder name paths.
    /// </summary>
    public enum OutputBy
    {
        /// <summary>
        /// The class name will be the file name. If there are classes with same names in different namespaces, the generated JavaScript will be combined into one file. For example, if the class name is "Helpers", the file name will be "Helpers.js".
        /// </summary>
        Class = 1,

        /// <summary>
        /// A folder hierarchy is created using the class name, and a folder is created for each unique word (split by '.') in the class namespace. For example, if the class "Helpers" is within the "Demo" namespace, the file path and name will be "Demo/Helpers.js".
        /// </summary>
        ClassPath = 2,

        /// <summary>
        /// The ModuleAttribute value is used as the file name if set on a class. For example, if [Module("MyModuleName")] is set, the file name will be "MyModuleName.js".
        /// </summary>
        Module = 3,

        /// <summary>
        /// The full namespace is used as the file name. For example, if "Demo.Utilities" is the namespace, the file name will be "Demo.Utilities.js".
        /// </summary>
        Namespace = 4,

        /// <summary>
        /// The class namespace is split (by '.') and a folder is created for each individual value, except the last value which becomes the file name. For example, if "Demo.Utilities" is the namespace, the file path and name will be "/Demo/Utilities.js".
        /// </summary>
        NamespacePath = 5,

        /// <summary>
        /// All generated JavaScript for the project is added to one [ProjectName].js file. For example, if the project name is "MyUtilities", the file name will be "MyUtilities.js".
        /// This can be overridden by setting the fileName option within bridge.json, or by using the [FileName] Attribute on the assembly or class levels.
        /// </summary>
        Project = 6
    }

    public enum FileNameCaseConvert
    {
        /// <summary>
        /// Group contents on first file processed by compiler: this means data for 'File.js' and 'file.js' will go all
        /// to either 'File.js' or 'file.js', whichever comes first in the compiling or file creation process.
        /// </summary>
        None = 1,

        /// <summary>
        /// (Default) Like 'None', but all 'word' names begin lowercase. A 'word' begins either in the begining of
        /// the file name or after a dot (that is not the file extension separator).
        /// </summary>
        CamelCase = 2,

        /// <summary>
        /// Convert any file names to lowercase. This is the most fail-safe solution that might work on all file systems
        /// regardles of their inherent file name case sensitiveness properties. But might break fancy file naming.
        /// </summary>
        Lowercase = 3
    }

    public enum JavaScriptOutputType
    {
        /// <summary>
        /// Output only the formatted (beautified) version of the JavaScript files. Good for debugging.
        /// </summary>
        Formatted = 1,

        /// <summary>
        /// Output only the minified (condensed) version of the JavaScript files. Good for production deploying.
        /// </summary>
        Minified = 2,

        /// <summary>
        /// Output both the beautified and minified versions of the JavaScript files. Good for choosing
        /// and interchanging between beautified and minified versions of the same code.
        /// </summary>
        Both = 3
    }

    public interface IAssemblyInfo
    {
        bool PreserveMemberCase
        {
            get; set;
        }

        System.Collections.Generic.List<IPluginDependency> Dependencies
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

    public class LoggingOptions
    {
        public LoggerLevel? Level
        {
            get; set;
        }

        public bool? TimeStamps
        {
            get; set;
        }

        public long? MaxSize
        {
            get; set;
        }

        public string Folder
        {
            get; set;
        }

        public string FileName
        {
            get; set;
        }
    }

    public class AssemblyConfig
    {
        public bool DisableInitAssembly
        {
            get; set;
        }

        public bool EnableReservedNamespaces
        {
            get; set;
        }

        public string FullName
        {
            get; set;
        }
    }

    public class ResourceConfig
    {
        public ResourceConfig()
        {
            this.Items = new ResourceConfigItem[] { };
        }

        public ResourceConfigItem[] Items
        {
            get; set;
        }

        public bool HasResources()
        {
            return this.Items != null && this.Items.Length > 0;
        }
    }

    public class ResourceConfigItem
    {
        public ResourceConfigItem()
        {
            this.Files = new string[] { };
            this.CaptionInfo = new Dictionary<string, string>();
        }

        public bool Caption
        {
            get; set;
        }

        public Dictionary<string, string> CaptionInfo
        {
            get; set;
        }

        public bool Extract
        {
            get; set;
        }

        public string Name
        {
            get; set;
        }

        public string[] Files
        {
            get; set;
        }
    }
}
