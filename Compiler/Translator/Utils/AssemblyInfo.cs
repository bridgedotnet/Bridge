using Bridge.Contract;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public class AssemblyInfo : IAssemblyInfo
    {
        public const string DEFAULT_FILENAME = "---";
        public const string DEFAULT_OUTPUT = "$(OutDir)/bridge/";

        public AssemblyInfo()
        {
            this.Dependencies = new List<IPluginDependency>();
            this.DefineConstants = new List<string>();
            this.Logging = new LoggingOptions();
            this.Reflection = new ReflectionConfig();
            this.ReflectionInternal = new ReflectionConfig();
            this.Assembly = new AssemblyConfig();
            this.Resources = new ResourceConfig();
            this.Loader = new ModuleLoader();
            this.Output = DEFAULT_OUTPUT;
            this.SourceMap = new SourceMapConfig();
        }

        /// <summary>
        /// A file name where JavaScript is generated to. If omitted, it is [Namespace_Name].js by default.
        /// Example: "MyBridgeNetLibrary.js"
        /// Tip. You can decorate a class with a [FileName('MyClass.js')] attribute. A class script will be generated to the defined file. It supersedes a global bridge.json fileName.
        /// </summary>
        public string FileName
        {
            get; set;
        }

        /// <summary>
        /// The output folder path for generated JavaScript. A non-absolute path is concatenated with a project's root.
        /// Examples: "Bridge\\output\\", "..\\Bridge\\output\\", "c:\\Bridge\\output\\"
        /// </summary>
        public string Output
        {
            get; set;
        }

        private OutputBy outputBy = OutputBy.Project;

        /// <summary>
        /// The option to manage JavaScript output folders and files.
        /// See the OutputBy enum for more details.
        /// </summary>
        public OutputBy OutputBy
        {
            get
            {
                if (this.CombineScripts || !string.IsNullOrEmpty(this.FileName))
                {
                    return OutputBy.Project;
                }

                return this.outputBy;
            }
            set
            {
                this.outputBy = value;
            }
        }

        private FileNameCaseConvert jsFileCasing = FileNameCaseConvert.CamelCase;

        /// <summary>
        /// The option to manage JavaScript file name case converting for class grouping.
        /// See the FileNameCaseConvert enum for more details.
        /// </summary>
        public FileNameCaseConvert FileNameCasing
        {
            get
            {
                return this.jsFileCasing;
            }
            set
            {
                this.jsFileCasing = value;
            }
        }

        private JavaScriptOutputType jsOutType = JavaScriptOutputType.Both;

        /// <summary>
        /// The option to select JavaScript file output for only beautified, only minified or both versions.
        /// See the JavaScriptOutputType enum for more details.
        /// </summary>
        public JavaScriptOutputType OutputFormatting
        {
            get
            {
                return this.jsOutType;
            }
            set
            {
                this.jsOutType = value;
            }
        }

        /// <summary>
        /// Substrings the file name starting with the defined index.
        /// For example, it might be useful to get rid of the first namespace in the chain if use ByFullName or ByNamespace FilesHierarchy.
        /// </summary>
        public int StartIndexInName
        {
            get; set;
        }

        /// <summary>
        /// The global Module setting. The entire project is considered as one Module.
        /// Though, you are still able to define a Module attribute on the class level.
        /// </summary>
        public Module Module
        {
            get; set;
        }

        /// <summary>
        /// The list of module dependencies.
        /// </summary>
        public List<IPluginDependency> Dependencies
        {
            get; set;
        }

        /// <summary>
        /// The executable file to be launched before building. The path will be concatenated with the project's root.
        /// For example, it might be used for cleaning up the output directory - "Bridge\\builder\\clean.bat".
        /// </summary>
        public string BeforeBuild
        {
            get; set;
        }

        /// <summary>
        /// The executable file to be launched after building. The path will be concatenated with the project's root.
        /// For example, it might be used for copying the generated JavaScript files to a Web application - "Bridge\\builder\\copy.bat"
        /// </summary>
        public string AfterBuild
        {
            get; set;
        }

        public bool AutoPropertyToField
        {
            get; set;
        }

        public string PluginsPath
        {
            get; set;
        }

        public bool GenerateTypeScript
        {
            get; set;
        }

        private Bridge.Contract.DocumentationMode generateDocumentation = Bridge.Contract.DocumentationMode.Basic;

        public Bridge.Contract.DocumentationMode GenerateDocumentation
        {
            get
            {
                return this.generateDocumentation;
            }
            set
            {
                this.generateDocumentation = value;
            }
        }

        /// <summary>
        /// The BuildArguments will be added to the command line that build project files. It is useful for debugging, logging etc.
        /// For example, "/fileLogger /fileLoggerParameters:Append;"
        /// </summary>
        public string BuildArguments
        {
            get; set;
        }

        /// <summary>
        /// Deletes files from output directory using pattern "*.js|*.d.ts" before build (before extracting scripts after translation).
        /// It is useful to replace BeforeBuild event if it just contain commands to clean the output folder.
        /// </summary>
        public bool CleanOutputFolderBeforeBuild
        {
            get; set;
        }

        /// <summary>
        /// Sets pattern for cleaning output directory.
        /// </summary>
        public string CleanOutputFolderBeforeBuildPattern
        {
            get; set;
        }

        public string Configuration
        {
            get; set;
        }

        public List<string> DefineConstants
        {
            get; set;
        }

        public string Locales
        {
            get; set;
        }

        public string LocalesOutput
        {
            get; set;
        }

        public string LocalesFileName
        {
            get; set;
        }

        public bool CombineLocales
        {
            get; set;
        }

        public bool CombineScripts
        {
            get; set;
        }

        public bool UseTypedArrays
        {
            get; set;
        }

        public bool IgnoreCast
        {
            get; set;
        }

        public LoggingOptions Logging
        {
            get; set;
        }

        public OverflowMode? OverflowMode
        {
            get; set;
        }

        public bool? NoLoggerTimeStamps
        {
            get; set;
        }

        public bool StrictNullChecks
        {
            get; set;
        }

        public IReflectionConfig Reflection
        {
            get; set;
        }

        internal IReflectionConfig ReflectionInternal
        {
            get; set;
        }

        public AssemblyConfig Assembly
        {
            get; set;
        }

        public ResourceConfig Resources
        {
            get; set;
        }

        public IModuleLoader Loader
        {
            get; set;
        }

        public NamedFunctionMode NamedFunctions
        {
            get;
            set;
        }

        [Newtonsoft.Json.JsonConverter(typeof(SourceMapConfigConverter))]
        public SourceMapConfig SourceMap
        {
            get; set;
        }
    }
}