using Microsoft.Build.Evaluation;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml;
using System.Xml.Linq;

namespace Bridge.Translator
{
    public partial class Translator
    {


        public static class ProjectProperties
        {
            public const string OutputType = "OutputType";
            public const string AssemblyName = "AssemblyName";
            public const string DefineConstants = "DefineConstants";
            public const string RootNamespace = "RootNamespace";
            public const string OutputPath = "OutputPath";
        }

        protected virtual void ReadProjectFile()
        {
            this.Log.Info("Reading project file at " + (Location ?? "") + " ...");

            var doc = XDocument.Load(Location, LoadOptions.SetLineInfo);

            this.ValidateProject(doc);

            var projectType = (from n in doc.Descendants()
                               where n.Name.LocalName == ProjectProperties.OutputType
                               select n).ToArray();

            if (projectType.Length > 0 && projectType[0] != null && projectType[0].Value != Translator.SupportedProjectType)
            {
                Bridge.Translator.TranslatorException.Throw("Project type ({0}) is not supported, please use Library instead of {0}", projectType[0].Value);
            }

            this.DefaultNamespace = this.GetDefaultNamespace(doc);
            this.Log.Trace("#0 this.DefaultNamespace = " + this.DefaultNamespace);
            this.BuildAssemblyLocation(doc);
            this.SourceFiles = this.GetSourceFiles(doc);
            this.ParsedSourceFiles = new List<ParsedSourceFile>();

            if (!this.FromTask)
            {
                this.ReadDefineConstants(doc);
            }

            this.Log.Info("Reading project file done");
        }

        protected virtual void ReadFolderFiles()
        {
            this.Log.Info("Reading folder files...");

            this.SourceFiles = this.GetSourceFiles();
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
                                where x.Name.LocalName == ProjectProperties.RootNamespace || x.Name.LocalName == ProjectProperties.AssemblyName
                                select x;

            // Replace '\' with '/' in any occurrence of <OutputPath><path></OutputPath>
            foreach (var ope in doc.Descendants().Where(e => e.Name.LocalName == ProjectProperties.OutputPath && e.Value.Contains("\\")))
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
                    if (tag.Value == "Bridge")
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

        protected virtual void BuildAssemblyLocation(XDocument doc)
        {
            if (this.AssemblyLocation == null || this.AssemblyLocation.Length == 0)
            {
                this.Configuration = this.Configuration ?? "Debug";
                var outputPath = this.GetOutputPath(doc, this.Configuration);

                if (string.IsNullOrEmpty(outputPath))
                {
                    outputPath = this.GetOutputPath(doc, "Release");
                }

                this.AssemblyName = this.GetAssemblyName(doc);
                this.AssemblyLocation = Path.Combine(outputPath, this.AssemblyName + ".dll");

                if (!File.Exists(this.AssemblyLocation) && !this.Rebuild)
                {
                    outputPath = this.GetOutputPath(doc, "Release");
                    this.AssemblyLocation = Path.Combine(outputPath, this.AssemblyName + ".dll");
                }
            }
        }

        protected virtual string GetOutputPath(XDocument doc, string configuration)
        {
            var nodes = from n in doc.Descendants()
                        where n.Name.LocalName == ProjectProperties.OutputPath &&
                              n.Parent.Attribute("Condition").Value.Contains(configuration)
                        select n;

            if (nodes.Count() != 1)
            {
                Bridge.Translator.TranslatorException.Throw("Unable to determine output path");
            }

            var path = nodes.First().Value;

            if (!Path.IsPathRooted(path))
            {
                path = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Location), path));
            }

            return path;
        }

        public static bool IsRunningOnMono()
        {
            return System.Type.GetType("Mono.Runtime") != null;
        }

        protected virtual IList<string> GetSourceFiles(XDocument doc)
        {
            Project project;

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

            var sourceFiles = new List<string>();

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

            return sourceFiles;
        }

        protected virtual void ReadDefineConstants(XDocument doc)
        {
            this.Log.Info("Reading define constants...");

            var nodeList = doc.Descendants().Where(n =>
            {
                if (n.Name.LocalName != "PropertyGroup")
                {
                    return false;
                }

                var attr = n.Attribute("Condition");
                return attr == null || attr.Value.Contains(this.Configuration);
            });

            foreach (var node in nodeList)
            {
                var constants = from n in node.Descendants()
                                where n.Name.LocalName == ProjectProperties.DefineConstants
                                select n.Value;
                foreach (var constant in constants)
                {
                    if (!string.IsNullOrWhiteSpace(constant))
                    {
                        this.DefineConstants.AddRange(constant.Split(';').Select(s => s.Trim()).Where(s => s != ""));
                    }
                }
            }

            this.DefineConstants = this.DefineConstants.Distinct().ToList();

            this.Log.Info("Reading define constants done");
        }

        protected virtual string GetAssemblyName(XDocument doc)
        {
            var nodes = from n in doc.Descendants()
                        where n.Name.LocalName == ProjectProperties.AssemblyName
                        select n;

            if (nodes.Count() != 1)
            {
                Bridge.Translator.TranslatorException.Throw("Unable to determine assembly name");
            }

            return nodes.First().Value;
        }

        protected virtual string GetDefaultNamespace(XDocument doc)
        {
            var nodes = from n in doc.Descendants()
                        where n.Name.LocalName == ProjectProperties.RootNamespace
                        select n;

            if (nodes.Count() != 1)
            {
                return Translator.DefaultRootNamespace;
            }

            return nodes.First().Value;
        }

        protected virtual IList<string> GetSourceFiles()
        {
            var result = new List<string>();
            if (string.IsNullOrWhiteSpace(this.Source))
            {
                this.Source = "*.cs";
            }

            string[] parts = this.Source.Split(';');
            var searchOption = this.Recursive ? SearchOption.AllDirectories : SearchOption.TopDirectoryOnly;

            foreach (var part in parts)
            {
                int index = part.LastIndexOf(System.IO.Path.DirectorySeparatorChar);
                string folder = index > -1 ? Path.Combine(this.Location, part.Substring(0, index + 1)) : this.Location;
                string mask = index > -1 ? part.Substring(index + 1) : part;

                string[] allfiles = System.IO.Directory.GetFiles(folder, mask, searchOption);
                result.AddRange(allfiles);
            }

            result = result.Distinct().ToList();
            return result;
        }
    }
}