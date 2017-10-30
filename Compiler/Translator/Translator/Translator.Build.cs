using System;
using System.Diagnostics;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using System.Xml.Linq;
using System.Linq;
using System.IO;
using Bridge.Translator.Logging;
using Bridge.Contract;
using System.Collections.Generic;
using System.Collections.Immutable;
using ICSharpCode.NRefactory.Documentation;
using System.Text;
using System.Globalization;
using Mono.Cecil;

namespace Bridge.Translator
{
    public partial class Translator
    {
        public virtual void BuildAssembly()
        {
            this.Log.Info("Building assembly...");

            var compilationOptions = new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary);
            var parseOptions = new CSharpParseOptions(LanguageVersion.CSharp6, Microsoft.CodeAnalysis.DocumentationMode.Parse, SourceCodeKind.Regular, this.DefineConstants);
            var files = this.SourceFiles;
            IList<string> referencesPathes = null;
            var baseDir = Path.GetDirectoryName(this.Location);

            if (!this.FolderMode)
            {
                XNamespace msbuild = "http://schemas.microsoft.com/developer/msbuild/2003";
                XDocument projDefinition = XDocument.Load(this.Location);
                var helper = new ConfigHelper<AssemblyInfo>(this.Log);
                var tokens = this.ProjectProperties.GetValues();                

                referencesPathes = projDefinition
                    .Element(msbuild + "Project")
                    .Elements(msbuild + "ItemGroup")
                    .Elements(msbuild + "Reference")
                    .Where(el => (el.Attribute("Include")?.Value != "System") && (el.Attribute("Condition") == null || el.Attribute("Condition").Value.ToLowerInvariant() != "false"))
                    .Select(refElem => (refElem.Element(msbuild + "HintPath") == null ? (refElem.Attribute("Include") == null ? "" : refElem.Attribute("Include").Value) : refElem.Element(msbuild + "HintPath").Value))
                    .Select(path => helper.ApplyPathTokens(tokens, Path.IsPathRooted(path) ? path : Path.GetFullPath((new Uri(Path.Combine(baseDir, path))).LocalPath)))
                    .ToList();

                var projectReferences = projDefinition
                    .Element(msbuild + "Project")
                    .Elements(msbuild + "ItemGroup")
                    .Elements(msbuild + "ProjectReference")
                    .Where(el => el.Attribute("Condition") == null || el.Attribute("Condition").Value.ToLowerInvariant() != "false")
                    .Select(refElem => (refElem.Element(msbuild + "HintPath") == null ? (refElem.Attribute("Include") == null ? "" : refElem.Attribute("Include").Value) : refElem.Element(msbuild + "HintPath").Value))
                    .Select(path => helper.ApplyPathTokens(tokens, Path.IsPathRooted(path) ? path : Path.GetFullPath((new Uri(Path.Combine(baseDir, path))).LocalPath)))
                    .ToArray();

                if (projectReferences.Length > 0)
                {
                    if (this.ProjectProperties.BuildProjects == null)
                    {
                        this.ProjectProperties.BuildProjects = new List<string>();
                    }

                    foreach (var projectRef in projectReferences)
                    {
                        var isBuilt = this.ProjectProperties.BuildProjects.Contains(projectRef);

                        if(!isBuilt)
                        {
                            this.ProjectProperties.BuildProjects.Add(projectRef);
                        }

                        var processor = new TranslatorProcessor(new BridgeOptions {
                            Rebuild = this.Rebuild,
                            ProjectLocation = projectRef,
                            BridgeLocation = this.BridgeLocation,
                            ProjectProperties = new Contract.ProjectProperties {
                                BuildProjects = this.ProjectProperties.BuildProjects,
                                Configuration = this.ProjectProperties.Configuration,
                                Platform = this.ProjectProperties.Platform
                            }
                        }, new Logger(null, false, LoggerLevel.Info, true, new ConsoleLoggerWriter(), new FileLoggerWriter()));

                        var result = processor.PreProcess();

                        var projectAssembly = processor.Translator.AssemblyLocation;

                        if(!File.Exists(projectAssembly) || this.Rebuild && !isBuilt)
                        {
                            processor.Process();
                            processor.PostProcess();
                        }

                        referencesPathes.Add(projectAssembly);
                    }
                }
            }
            else
            {
                var list = new List<string>();
                referencesPathes = list;
                if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.ReferencesPath))
                {
                    var path = this.AssemblyInfo.ReferencesPath;
                    path = Path.IsPathRooted(path) ? path : Path.GetFullPath((new Uri(Path.Combine(this.Location, path))).LocalPath);

                    if (!Directory.Exists(path))
                    {
                        throw (TranslatorException)Bridge.Translator.TranslatorException.Create("ReferencesPath doesn't exist - {0}", path);
                    }

                    string[] allfiles = System.IO.Directory.GetFiles(path, "*.dll", SearchOption.TopDirectoryOnly);
                    list.AddRange(allfiles);
                }

                if (this.AssemblyInfo.References != null && this.AssemblyInfo.References.Length > 0)
                {
                    foreach (var reference in this.AssemblyInfo.References)
                    {
                        var path = Path.IsPathRooted(reference) ? reference : Path.GetFullPath((new Uri(Path.Combine(this.Location, reference))).LocalPath);
                        list.Add(path);
                    }
                }

                var packagesPath = Path.GetFullPath((new Uri(Path.Combine(this.Location, "packages"))).LocalPath);
                if (!Directory.Exists(packagesPath))
                {
                    packagesPath = Path.Combine(Directory.GetParent(this.Location).ToString(), "packages");
                }

                var packagesConfigPath = Path.Combine(this.Location, "packages.config");

                if(File.Exists(packagesConfigPath))
                {
                    var doc = new System.Xml.XmlDocument();
                    doc.LoadXml(File.ReadAllText(packagesConfigPath));
                    var nodes = doc.DocumentElement.SelectNodes($"descendant::package");

                    if (nodes.Count > 0)
                    {
                        foreach (System.Xml.XmlNode node in nodes)
                        {
                            string id = node.Attributes["id"].Value;
                            string version = node.Attributes["version"].Value;

                            string packageDir = Path.Combine(packagesPath, id + "." + version);

                            AddPackageAssembly(list, packageDir);
                        }
                    }
                }
                else if (Directory.Exists(packagesPath))
                {
                    var packagesFolders = Directory.GetDirectories(packagesPath, "*", SearchOption.TopDirectoryOnly);
                    foreach (var packageFolder in packagesFolders)
                    {
                        var packageLib = Path.Combine(packageFolder, "lib");
                        AddPackageAssembly(list, packageLib);
                    }
                }                
            }

            var arr = referencesPathes.ToArray();
            foreach (var refPath in arr)
            {
                AddNestedReferences(referencesPathes, refPath);
            }

            IList<SyntaxTree> trees = new List<SyntaxTree>(files.Count);
            foreach (var file in files)
            {
                var syntaxTree = SyntaxFactory.ParseSyntaxTree(File.ReadAllText(Path.IsPathRooted(file) ? file : Path.GetFullPath((new Uri(Path.Combine(baseDir, file))).LocalPath)), parseOptions);
                trees.Add(syntaxTree);
            }

            var references = new List<MetadataReference>();
            var outputDir = Path.GetDirectoryName(this.AssemblyLocation);
            var di = new DirectoryInfo(outputDir);
            if(!di.Exists)
            {
                di.Create();
            }

            var updateBridgeLocation = string.IsNullOrWhiteSpace(this.BridgeLocation) || !File.Exists(this.BridgeLocation);

            foreach (var path in referencesPathes)
            {
                var newPath = Path.GetFullPath(new Uri(Path.Combine(outputDir, Path.GetFileName(path))).LocalPath);
                if (string.Compare(newPath, path, true) != 0)
                {
                    File.Copy(path, newPath, true);
                }

                if (updateBridgeLocation && string.Compare(Path.GetFileName(path), "bridge.dll", true) == 0)
                {
                    this.BridgeLocation = path;
                }
                
                references.Add(MetadataReference.CreateFromFile(path, new MetadataReferenceProperties(MetadataImageKind.Assembly, ImmutableArray.Create("global"))));
            }

            var compilation = CSharpCompilation.Create(this.ProjectProperties.AssemblyName ?? new DirectoryInfo(this.Location).Name, trees, references, compilationOptions);
            Microsoft.CodeAnalysis.Emit.EmitResult emitResult;

            using (var outputStream = new FileStream(this.AssemblyLocation, FileMode.Create))
            {
                emitResult = compilation.Emit(outputStream, options: new Microsoft.CodeAnalysis.Emit.EmitOptions(false, Microsoft.CodeAnalysis.Emit.DebugInformationFormat.Embedded, runtimeMetadataVersion: "v4.0.30319", includePrivateMembers: true));
            }                

            if (!emitResult.Success)
            {
                StringBuilder sb = new StringBuilder("C# Compilation Failed");
                sb.AppendLine();
                foreach (var d in emitResult.Diagnostics.Where(d => d.Severity == DiagnosticSeverity.Error))
                {
                    var mapped = d.Location != null ? d.Location.GetMappedLineSpan() : default(FileLinePositionSpan);
                    sb.AppendLine(string.Format(CultureInfo.InvariantCulture, "\t({0},{1}): {2}: {3}", mapped.StartLinePosition.Line + 1, mapped.StartLinePosition.Character + 1, d.Id, d.GetMessage()));
                    foreach (var l in d.AdditionalLocations)
                    {
                        mapped = l.GetMappedLineSpan();
                        sb.AppendLine(string.Format(CultureInfo.InvariantCulture, "\t({0},{1}): (Related location)", mapped.StartLinePosition.Line + 1, mapped.StartLinePosition.Character + 1));
                    }
                }

                Bridge.Translator.TranslatorException.Throw(sb.ToString());
            }

            this.Log.Info("Building assembly done");
        }

        private static void AddPackageAssembly(List<string> list, string packageDir)
        {
            if (Directory.Exists(packageDir))
            {
                var packageLib = Path.Combine(packageDir, "lib");

                if (Directory.Exists(packageLib))
                {
                    var libsFolders = Directory.GetDirectories(packageLib, "net*", SearchOption.TopDirectoryOnly);
                    var libFolder = libsFolders.Length > 0 ? (libsFolders.Contains("net40") ? "net40" : libsFolders[0]) : null;

                    if (libFolder != null)
                    {
                        var assemblies = Directory.GetFiles(libFolder, "*.dll", SearchOption.TopDirectoryOnly);

                        foreach (var assembly in assemblies)
                        {
                            list.Add(assembly);
                        }
                    }
                }
            }
        }

        private void AddNestedReferences(IList<string> referencesPathes, string refPath)
        {
            var asm = Mono.Cecil.AssemblyDefinition.ReadAssembly(refPath, new ReaderParameters()
            {
                ReadingMode = ReadingMode.Deferred,
                AssemblyResolver = new CecilAssemblyResolver(this.Log, this.AssemblyLocation)
            });

            foreach (AssemblyNameReference r in asm.MainModule.AssemblyReferences)
            {
                var name = r.Name;

                if (name == SystemAssemblyName || name == "System.Core")
                {
                    continue;
                }

                var path = Path.Combine(Path.GetDirectoryName(refPath), name) + ".dll";

                if (referencesPathes.Any(rp => Path.GetFileNameWithoutExtension(rp).Equals(name, StringComparison.OrdinalIgnoreCase)))
                {
                    continue;
                }

                referencesPathes.Add(path);

                AddNestedReferences(referencesPathes, path);
            }
        }
    }
}