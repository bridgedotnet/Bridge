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

        internal virtual void EnsureProjectProperties()
        {
            this.Log.Info("EnsureProjectProperties at " + (Location ?? "") + " ...");

            ShouldReadProjectFile = !this.FromTask;

            var doc = XDocument.Load(Location, LoadOptions.SetLineInfo);

            this.ValidateProject(doc);

            this.EnsureOverflowMode(doc);

            this.EnsureDefaultNamespace(doc);

            this.EnsureAssemblyName(doc);

            this.EnsureAssemblyLocation(doc);

            this.SourceFiles = this.GetSourceFiles(doc);
            this.ParsedSourceFiles = new List<ParsedSourceFile>();

            this.EnsureDefineConstants(doc);

            this.Log.Info("EnsureProjectProperties done");
        }

        internal virtual void ReadFolderFiles()
        {
            this.Log.Info("Reading folder files...");

            this.SourceFiles = this.GetSourceFiles(this.Location);
            this.ParsedSourceFiles = new List<ParsedSourceFile>();

            this.Log.Info("Reading folder files done");
        }

        /// <summary>
        /// Validates project and namespace names against conflicts with Bridge.NET namespaces.
        /// </summary>
        /// <param name="doc">XDocument reference of the .csproj file.</param>
        private void ValidateProject(XDocument doc)
        {
            var valid = true;
            var failList = new HashSet<string>();
            var failNodeList = new List<XElement>();
            var combined_tags = from x in doc.Descendants()
                                where x.Name.LocalName == ProjectPropertyNames.ROOT_NAMESPACE_PROP || x.Name.LocalName == ProjectPropertyNames.ASSEMBLY_NAME_PROP
                                select x;

            // Replace '\' with '/' in any occurrence of <OutputPath><path></OutputPath>
            foreach (var ope in doc.Descendants().Where(e => e.Name.LocalName == ProjectPropertyNames.OUTPUT_PATH_PROP && e.Value.Contains("\\")))
            {
                ope.SetValue(ope.Value.Replace("\\", "/"));
            }

            // Replace '\' with '/' in any occurrence of <OutDir><path></OutDir>
            foreach (var ope in doc.Descendants().Where(e => e.Name.LocalName == ProjectPropertyNames.OUT_DIR_PROP && e.Value.Contains("\\")))
            {
                ope.SetValue(ope.Value.Replace("\\", "/"));
            }

            // Replace now for <Compile Include="<path>" />
            foreach (var ope in doc.Descendants().Where(e =>
                e.Name.LocalName == "Compile" &&
                e.Attributes().Any(a => a.Name.LocalName == "Include") &&
                e.Attribute("Include").Value.Contains("\\")))
            {
                var incAtt = ope.Attribute("Include");
                incAtt.SetValue(incAtt.Value.Replace("\\", "/"));
            }

            if (!this.AssemblyInfo.Assembly.EnableReservedNamespaces)
            {
                foreach (var tag in combined_tags)
                {
                    if (tag.Value == CS.NS.BRIDGE)
                    {
                        valid = false;
                        if (!failList.Contains(tag.Value))
                        {
                            failList.Add(tag.Value);
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
                    offendingSettings += "Line " + ((IXmlLineInfo)tag).LineNumber + ": <" + tag.Name.LocalName + ">" +
                        tag.Value + "</" + tag.Name.LocalName + ">\n";
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
                var projectType = (from n in doc.Descendants()
                                   where n.Name.LocalName == ProjectPropertyNames.OUTPUT_TYPE_PROP
                                   select n).ToArray();

                if (projectType.Length > 0)
                {
                    outputType = projectType[0].Value;
                }
            }

            if (outputType != null && string.Compare(outputType, Translator.SupportedProjectType, true) != 0)
            {
                Bridge.Translator.TranslatorException.Throw("Project type ({0}) is not supported, please use Library instead of {0}", outputType);
            }
        }

        private void EnsureOverflowMode(XDocument doc)
        {
            if (!this.ShouldReadProjectFile)
            {
                return;
            }

            if (this.OverflowMode.HasValue)
            {
                return;
            }

            var nodes = from n in doc.Descendants()
                        where n.Name.LocalName == "CheckForOverflowUnderflow"
                        select n;

            if (nodes.Any())
            {
                var value = nodes.Last().Value;
                bool boolValue;
                if (bool.TryParse(value, out boolValue))
                {
                    this.OverflowMode = boolValue ? Bridge.Contract.OverflowMode.Checked : Bridge.Contract.OverflowMode.Unchecked;
                }
            }
        }

        protected virtual void EnsureAssemblyLocation(XDocument doc)
        {
            this.Log.Trace("BuildAssemblyLocation...");

            if (string.IsNullOrEmpty(this.AssemblyLocation))
            {
                var fullOutputPath = this.GetOutputPaths(doc);

                this.Log.Info("    FullOutputPath:" + fullOutputPath);

                this.AssemblyLocation = Path.Combine(fullOutputPath, this.ProjectProperties.AssemblyName + ".dll");
            }

            this.Log.Info("    OutDir:" + this.ProjectProperties.OutDir);
            this.Log.Info("    OutputPath:" + this.ProjectProperties.OutputPath);
            this.Log.Info("    AssemblyLocation:" + this.AssemblyLocation);

            this.Log.Trace("BuildAssemblyLocation done");
        }

        protected virtual string GetOutputPaths(XDocument doc)
        {
            var configHelper = new Bridge.Contract.ConfigHelper();

            var outputPath = this.ProjectProperties.OutputPath;

            if (outputPath == null && this.ShouldReadProjectFile)
            {
                // Read OutputPath if not defined already
                // Throw exception if not found
                outputPath = ReadProperty(doc, ProjectPropertyNames.OUTPUT_PATH_PROP, false, configHelper);
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
                outDir = ReadProperty(doc, ProjectPropertyNames.OUT_DIR_PROP, true, configHelper);
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

        private string ReadProperty(XDocument doc, string name, bool safe, Contract.ConfigHelper configHelper)
        {
            var nodes = from n in doc.Descendants()
                        where string.Compare(n.Name.LocalName, name, true) == 0 &&
                              EvaluateCondition(n.Parent.Attribute("Condition").Value)
                        select n;

            if (nodes.Count() != 1)
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

            var value = nodes.First().Value;
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

        private bool EvaluateCondition(string condition)
        {
            var properties = GetEvaluationConditions();

            return MsBuildConditionEvaluator.EvaluateCondition(condition, properties);
        }

        public static bool IsRunningOnMono()
        {
            return System.Type.GetType("Mono.Runtime") != null;
        }

        protected virtual IList<string> GetSourceFiles(XDocument doc)
        {
            this.Log.Trace("Getting source files by xml...");

            Project project;
            IList<string> sourceFiles = new List<string>();

            if (this.Source == null)
            {
                var isOnMono = Translator.IsRunningOnMono();
                if (isOnMono)
                {
                    // Using XmlReader here addresses a Mono issue logged as #38224 at Mono's official BugZilla.
                    // Bridge issue #860
                    // This constructor below works on Linux and DOES break #531
                    project = new Project(XmlReader.Create(this.Location), null, null, new ProjectCollection());
                }
                else
                {
                    // Using XmlReader above breaks feature #531 - referencing linked files in csproj (Compiler test 18 fails)
                    // To avoid it at least on Windows, use different Project constructors
                    // This constructor below works on Windows and does NOT break #531
                    project = new Project(this.Location, null, null, new ProjectCollection());
                }

                foreach (var projectItem in project.GetItems("Compile"))
                {
                    sourceFiles.Add(projectItem.EvaluatedInclude);
                }

                if (isOnMono)
                {
                    // This UnloadProject overload should be used if the project created by new Project(XmlReader.Create(this.Location)...)
                    // Otherwise it does NOT work either on Windows or Linux
                    project.ProjectCollection.UnloadProject(project.Xml);
                }
                else
                {
                    // This UnloadProject overload should be used if the project created by new Project(this.Location...)
                    // Otherwise it does NOT work either on Windows or Linux
                    project.ProjectCollection.UnloadProject(project);
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

        protected virtual void EnsureDefineConstants(XDocument doc)
        {
            this.Log.Info("EnsureDefineConstants...");

            if (this.DefineConstants == null)
            {
                this.DefineConstants = new List<string>();
            }

            if (this.ProjectProperties.DefineConstants == null && this.ShouldReadProjectFile)
            {
                this.Log.Info("Reading define constants...");

                var nodeList = doc.Descendants().Where(n =>
                {
                    if (n.Name.LocalName != "PropertyGroup")
                    {
                        return false;
                    }

                    var attr = n.Attribute("Condition");
                    return attr == null || EvaluateCondition(attr.Value);
                });

                this.ProjectProperties.DefineConstants = "";

                foreach (var node in nodeList)
                {
                    var constants = from n in node.Descendants()
                                    where n.Name.LocalName == ProjectPropertyNames.DEFINE_CONSTANTS_PROP
                                    select n.Value;

                    if (constants.Count() > 0)
                    {
                        if (this.ProjectProperties.DefineConstants.Length > 0)
                        {
                            this.ProjectProperties.DefineConstants += ";";
                        }

                        this.ProjectProperties.DefineConstants += string.Join(";", constants);
                    }
                }
            }

            if (!string.IsNullOrWhiteSpace(this.ProjectProperties.DefineConstants))
            {
                this.DefineConstants.AddRange(
                    this.ProjectProperties.DefineConstants.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries).Select(s => s.Trim()));
            }

            this.DefineConstants = this.DefineConstants.Distinct().ToList();

            this.Log.Info("EnsureDefineConstants done");
        }

        protected virtual void EnsureAssemblyName(XDocument doc)
        {
            if (this.ProjectProperties.AssemblyName == null && this.ShouldReadProjectFile)
            {
                var nodes = from n in doc.Descendants()
                            where n.Name.LocalName == ProjectPropertyNames.ASSEMBLY_NAME_PROP
                            select n;

                if (nodes.Count() == 1)
                {
                    this.ProjectProperties.AssemblyName = nodes.First().Value;
                }
            }

            if (string.IsNullOrWhiteSpace(this.ProjectProperties.AssemblyName))
            {
                Bridge.Translator.TranslatorException.Throw("Unable to determine assembly name");
            }
        }

        protected virtual void EnsureDefaultNamespace(XDocument doc)
        {
            if (this.ProjectProperties.RootNamespace == null && this.ShouldReadProjectFile)
            {
                var nodes = from n in doc.Descendants()
                            where n.Name.LocalName == ProjectPropertyNames.ROOT_NAMESPACE_PROP
                            select n;

                if (nodes.Count() == 1)
                {
                    this.ProjectProperties.RootNamespace = nodes.First().Value;
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