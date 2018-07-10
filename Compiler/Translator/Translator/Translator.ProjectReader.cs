using Microsoft.Build.Evaluation;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml;
using System.Xml.Linq;
using Bridge.Contract.Constants;
using Bridge.Translator.Utils;

namespace Bridge.Translator
{
    public partial class Translator
    {
        // ensure Microsoft.Build.Utilities.Core is copied
        private static readonly Type UtilityType = typeof(Microsoft.Build.Utilities.ToolLocationHelper);

        public static class ProjectPropertyNames
        {
            public const string OUTPUT_TYPE_PROP = "OutputType";
            public const string ASSEMBLY_NAME_PROP = "AssemblyName";
            public const string DEFINE_CONSTANTS_PROP = "DefineConstants";
            public const string ROOT_NAMESPACE_PROP = "RootNamespace";
            public const string OUTPUT_PATH_PROP = "OutputPath";
            public const string OUT_DIR_PROP = "OutDir";
            public const string CONFIGURATION_PROP = "Configuration";
            public const string PLATFORM_PROP = "Platform";
        }

        private bool ShouldReadProjectFile
        {
            get; set;
        }

        internal static Project OpenProject(string location, IDictionary<string,string> globalProperties)
        {
            return new Project(location, globalProperties, null, new ProjectCollection());
        }

        internal static void CloseProject(Project project)
        {
            project.ProjectCollection.UnloadProject(project);
        }

        internal virtual void EnsureProjectProperties()
        {
            this.Log.Trace("EnsureProjectProperties at " + (Location ?? "") + " ...");

            ShouldReadProjectFile = !this.FromTask;

            var project = Translator.OpenProject(this.Location, this.GetEvaluationConditions());

            this.ValidateProject(project);

            this.EnsureOverflowMode(project);

            this.EnsureDefaultNamespace(project);

            this.EnsureAssemblyName(project);

            this.EnsureAssemblyLocation(project);

            this.SourceFiles = this.GetSourceFiles(project);
            this.ParsedSourceFiles = new ParsedSourceFile[this.SourceFiles.Count];

            this.EnsureDefineConstants(project);

            Translator.CloseProject(project);

            this.Log.Trace("EnsureProjectProperties done");
        }

        internal virtual void ReadFolderFiles()
        {
            this.Log.Trace("Reading folder files...");

            this.SourceFiles = this.GetSourceFiles(this.Location);
            this.ParsedSourceFiles = new ParsedSourceFile[this.SourceFiles.Count];

            this.Log.Trace("Reading folder files done");
        }

        /// <summary>
        /// Validates project and namespace names against conflicts with Bridge.NET namespaces.
        /// </summary>
        /// <param name="project">XDocument reference of the .csproj file.</param>
        private void ValidateProject(Project project)
        {
            var valid = true;
            var failList = new HashSet<string>();
            var failNodeList = new List<ProjectProperty>();
            var combined_tags = from x in project.AllEvaluatedProperties
                                where x.Name == ProjectPropertyNames.ROOT_NAMESPACE_PROP || x.Name == ProjectPropertyNames.ASSEMBLY_NAME_PROP
                                select x;

            if (!this.AssemblyInfo.Assembly.EnableReservedNamespaces)
            {
                foreach (var tag in combined_tags)
                {
                    if (tag.EvaluatedValue == CS.NS.BRIDGE)
                    {
                        valid = false;
                        if (!failList.Contains(tag.EvaluatedValue))
                        {
                            failList.Add(tag.EvaluatedValue);
                            failNodeList.Add(tag);
                        }
                    }
                }
            }

            if (!valid)
            {
                var offendingSettings = "";
                foreach (var tag in failNodeList)
                {
                    offendingSettings += "Line " + tag.Xml.Location.File + " (" + tag.Xml.Location.Line + "): <" + tag.Xml.Name + ">" +
                                         tag.UnevaluatedValue + "</" + tag.Xml.Name + ">\n";
                }

                throw new Bridge.Translator.TranslatorException("'Bridge' name is reserved and may not " +
                    "be used as project names or root namespaces.\n" +
                    "Please verify your project settings and rename where it applies.\n" +
                    "Project file: " + this.Location + "\n" +
                    "Offending settings:\n" + offendingSettings
                );
            }

            var outputType = this.ProjectProperties.OutputType;

            if (outputType == null && ShouldReadProjectFile)
            {
                var projectType = (from n in project.AllEvaluatedProperties
                                   where n.Name == ProjectPropertyNames.OUTPUT_TYPE_PROP
                                   select n).LastOrDefault();

                if (projectType != null)
                {
                    outputType = projectType.EvaluatedValue;
                }
            }

            if (outputType != null && string.Compare(outputType, Translator.SupportedProjectType, true) != 0)
            {
                Bridge.Translator.TranslatorException.Throw("Project type ({0}) is not supported, please use Library instead of {0}", outputType);
            }
        }

        private void EnsureOverflowMode(Project project)
        {
            if (!this.ShouldReadProjectFile)
            {
                return;
            }

            if (this.OverflowMode.HasValue)
            {
                return;
            }

            var property = (from n in project.AllEvaluatedProperties
                        where n.Name == "CheckForOverflowUnderflow"
                        select n).LastOrDefault();

            if (property != null)
            {
                var value = property.EvaluatedValue;
                bool boolValue;
                if (bool.TryParse(value, out boolValue))
                {
                    this.OverflowMode = boolValue ? Bridge.Contract.OverflowMode.Checked : Bridge.Contract.OverflowMode.Unchecked;
                }
            }
        }

        protected virtual void EnsureAssemblyLocation(Project project)
        {
            this.Log.Trace("BuildAssemblyLocation...");

            if (string.IsNullOrEmpty(this.AssemblyLocation))
            {
                var fullOutputPath = this.GetOutputPaths(project);

                this.Log.Trace("    FullOutputPath:" + fullOutputPath);

                this.AssemblyLocation = Path.Combine(fullOutputPath, this.ProjectProperties.AssemblyName + ".dll");
            }

            this.Log.Trace("    OutDir:" + this.ProjectProperties.OutDir);
            this.Log.Trace("    OutputPath:" + this.ProjectProperties.OutputPath);
            this.Log.Trace("    AssemblyLocation:" + this.AssemblyLocation);

            this.Log.Trace("BuildAssemblyLocation done");
        }

        protected virtual string GetOutputPaths(Project project)
        {
            var configHelper = new Bridge.Contract.ConfigHelper();

            var outputPath = this.ProjectProperties.OutputPath;

            if (outputPath == null && this.ShouldReadProjectFile)
            {
                // Read OutputPath if not defined already
                // Throw exception if not found
                outputPath = ReadProperty(project, ProjectPropertyNames.OUTPUT_PATH_PROP, false, configHelper);
            }

            if (outputPath == null)
            {
                outputPath = string.Empty;
            }

            this.ProjectProperties.OutputPath = outputPath;

            var outDir = this.ProjectProperties.OutDir;

            if (outDir == null && this.ShouldReadProjectFile)
            {
                // Read OutDir if not defined already
                outDir = ReadProperty(project, ProjectPropertyNames.OUT_DIR_PROP, true, configHelper);
            }

            // If OutDir value is not found then use OutputPath value
            this.ProjectProperties.OutDir = outDir ?? outputPath;

            var fullPath = this.ProjectProperties.OutDir;

            if (!Path.IsPathRooted(fullPath))
            {
                fullPath = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Location), fullPath));
            }

            fullPath = configHelper.ConvertPath(fullPath);

            return fullPath;
        }

        private string ReadProperty(Project doc, string name, bool safe, Contract.ConfigHelper configHelper)
        {
            var node = (from n in doc.AllEvaluatedProperties
                        where string.Compare(n.Name, name, true) == 0
                        select n).LastOrDefault();

            if (node == null)
            {
                if (safe)
                {
                    return null;
                }

                Bridge.Translator.TranslatorException.Throw(
                    "Unable to determine "
                    + name
                    + " in the project file with conditions " + EvaluationConditionsAsString());
            }

            var value = node.EvaluatedValue;
            value = configHelper.ConvertPath(value);

            return value;
        }

        private Dictionary<string, string> GetEvaluationConditions()
        {
            var properties = new Dictionary<string, string>();

            if (this.ProjectProperties.Configuration != null)
            {
                properties.Add(ProjectPropertyNames.CONFIGURATION_PROP, this.ProjectProperties.Configuration);
            }

            if (this.ProjectProperties.Platform != null)
            {
                properties.Add(ProjectPropertyNames.PLATFORM_PROP, this.ProjectProperties.Platform);
            }

            return properties;
        }

        private string EvaluationConditionsAsString()
        {
            var conditions = string.Join(", ", GetEvaluationConditions().Select(x => x.Key + ": " + x.Value));

            return conditions;
        }

        public static bool IsRunningOnMono()
        {
            return System.Type.GetType("Mono.Runtime") != null;
        }

        protected virtual IList<string> GetSourceFiles(Project project)
        {
            this.Log.Trace("Getting source files by xml...");
            var configHelper = new Contract.ConfigHelper();

            IList<string> sourceFiles = new List<string>();

            if (this.Source == null)
            {
                foreach (var projectItem in project.AllEvaluatedItems.Where(i=>i.ItemType == "Compile"))
                {
                    sourceFiles.Add(configHelper.ConvertPath(projectItem.EvaluatedInclude));
                }

                if (!sourceFiles.Any())
                {
                    throw new Bridge.Translator.TranslatorException("Unable to get source file list from project file '" +
                        this.Location + "'. In order to use bridge, you have to have at least one source code file " +
                        "with the 'compile' property set (usually .cs files have it by default in C# projects).");
                };
            }
            else
            {
                sourceFiles = GetSourceFiles(Path.GetDirectoryName(this.Location));
            }

            this.Log.Trace("Getting source files by xml done");

            return sourceFiles;
        }

        protected virtual void EnsureDefineConstants(Project project)
        {
            this.Log.Trace("EnsureDefineConstants...");

            if (this.DefineConstants == null)
            {
                this.DefineConstants = new List<string>();
            }

            if (this.ProjectProperties.DefineConstants == null && this.ShouldReadProjectFile)
            {
                this.Log.Trace("Reading define constants...");

                var constantList = project.AllEvaluatedProperties
                    .Where(p => p.Name == ProjectPropertyNames.DEFINE_CONSTANTS_PROP)
                    .Select(p => p.EvaluatedValue);

                if (constantList == null || constantList.Count() < 1)
                {
                    this.ProjectProperties.DefineConstants = "";
                }
                else
                {
                    this.ProjectProperties.DefineConstants = String.Join(";", constantList);
                }
            }

            if (!string.IsNullOrWhiteSpace(this.ProjectProperties.DefineConstants))
            {
                this.DefineConstants.AddRange(
                    this.ProjectProperties.DefineConstants.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries).Select(s => s.Trim()));
            }

            this.DefineConstants = this.DefineConstants.Distinct().ToList();

            this.Log.Trace("EnsureDefineConstants done");
        }

        protected virtual void EnsureAssemblyName(Project project)
        {
            if (this.ProjectProperties.AssemblyName == null && this.ShouldReadProjectFile)
            {
                var property = (from n in project.AllEvaluatedProperties
                            where n.Name == ProjectPropertyNames.ASSEMBLY_NAME_PROP
                            select n).LastOrDefault();

                if (property != null)
                {
                    this.ProjectProperties.AssemblyName = property.EvaluatedValue;
                }
            }

            if (string.IsNullOrWhiteSpace(this.ProjectProperties.AssemblyName))
            {
                Bridge.Translator.TranslatorException.Throw("Unable to determine assembly name");
            }
        }

        protected virtual void EnsureDefaultNamespace(Project project)
        {
            if (this.ProjectProperties.RootNamespace == null && this.ShouldReadProjectFile)
            {
                var property = (from n in project.AllEvaluatedProperties
                            where n.Name == ProjectPropertyNames.ROOT_NAMESPACE_PROP
                            select n).LastOrDefault();

                if (property != null)
                {
                    this.ProjectProperties.RootNamespace = property.EvaluatedValue;
                }
            }

            this.DefaultNamespace = this.ProjectProperties.RootNamespace;

            if (string.IsNullOrWhiteSpace(this.DefaultNamespace))
            {
                this.DefaultNamespace = Translator.DefaultRootNamespace;
            }

            this.Log.Trace("DefaultNamespace:" + this.DefaultNamespace);
        }

        protected virtual IList<string> GetSourceFiles(string location)
        {
            this.Log.Trace("Getting source files by location...");

            var result = new List<string>();
            if (string.IsNullOrWhiteSpace(this.Source))
            {
                this.Log.Trace("Source is not defined, will use *.cs mask");
                this.Source = "*.cs";
            }

            string[] parts = this.Source.Split(';');
            var searchOption = this.Recursive ? SearchOption.AllDirectories : SearchOption.TopDirectoryOnly;

            foreach (var part in parts)
            {
                int index = part.LastIndexOf(System.IO.Path.DirectorySeparatorChar);
                string folder = index > -1 ? Path.Combine(location, part.Substring(0, index + 1)) : location;
                string mask = index > -1 ? part.Substring(index + 1) : part;

                string[] allfiles = System.IO.Directory.GetFiles(folder, mask, searchOption);
                result.AddRange(allfiles);
            }

            result = result.Distinct().ToList();

            this.Log.Trace("Getting source files by location done (found " + result.Count + " items)");

            return result;
        }
    }
}