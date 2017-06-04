using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using Microsoft.Ajax.Utilities;
using Mono.Cecil;
using Object.Net.Utilities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using ICSharpCode.NRefactory.Utils;
using TopologicalSorting;
using AssemblyDefinition = Mono.Cecil.AssemblyDefinition;

namespace Bridge.Translator
{
    public partial class Translator : ITranslator
    {
        public const string Bridge_ASSEMBLY = CS.NS.ROOT;
        public const string Bridge_ASSEMBLY_DOT = Bridge_ASSEMBLY + ".";
        public const string BridgeResourcesPlusSeparatedFormatList = "Bridge.Resources.list";
        public const string BridgeResourcesJsonFormatList = "Bridge.Resources.json";
        public const string LocalesPrefix = "Bridge.Resources.Locales.";
        public const string DefaultLocalesOutputName = "Bridge.Locales.js";
        public const string SupportedProjectType = "Library";
        public const string DefaultRootNamespace = "ClassLibrary";
        public const string SystemAssemblyName = "mscorlib";

        public static readonly Encoding OutputEncoding = new UTF8Encoding(false);
        private static readonly string[] MinifierCodeSettingsInternalFileNames = new string[] { "bridge.js", "bridge.min.js", "bridge.collections.js", "bridge.collections.min.js" };

        private char[] invalidPathChars;
        public char[] InvalidPathChars
        {
            get
            {
                if (invalidPathChars == null)
                {
                    var l = new List<char>(Path.GetInvalidPathChars());
                    l.AddRange(new char[] { '<', '>', ':', '"', '|', '?', '*' });
                    invalidPathChars = l.Distinct().ToArray();
                }

                return invalidPathChars;
            }
        }

        public FileHelper FileHelper
        {
            get; private set;
        }

        private static readonly CodeSettings MinifierCodeSettingsSafe = new CodeSettings
        {
            EvalTreatment = Microsoft.Ajax.Utilities.EvalTreatment.MakeAllSafe,
            LocalRenaming = Microsoft.Ajax.Utilities.LocalRenaming.KeepAll,
            TermSemicolons = true,
            StrictMode = false
        };

        private static readonly CodeSettings MinifierCodeSettingsInternal = new CodeSettings
        {
            TermSemicolons = true,
            StrictMode = false
        };

        private static readonly CodeSettings MinifierCodeSettingsLocales = new CodeSettings
        {
            TermSemicolons = true
        };

        protected Translator(string location)
        {
            this.Location = location;
            this.Validator = this.CreateValidator();
            this.DefineConstants = new List<string>() { "BRIDGE" };
            this.ProjectProperties = new ProjectProperties();
            this.FileHelper = new FileHelper();
            this.Outputs = new TranslatorOutput();
        }

        public Translator(string location, string source, bool fromTask = false) : this(location)
        {
            this.FromTask = fromTask;
            this.Source = source;
        }

        public Translator(string location, string source, bool recursive, string lib) : this(location, source, false)
        {
            this.Recursive = recursive;
            this.AssemblyLocation = lib;
            this.FolderMode = true;
            this.Outputs = new TranslatorOutput();
        }

        public void Translate()
        {
            var logger = this.Log;
            logger.Info("Translating...");

            this.LogProductInfo();

            var config = this.AssemblyInfo;

            if (!this.FolderMode)
            {
                if (this.Rebuild)
                {
                    logger.Info("Building assembly as Rebuild option is enabled");
                    this.BuildAssembly();
                }
                else if (!File.Exists(this.AssemblyLocation))
                {
                    logger.Info("Building assembly as it is not found at " + this.AssemblyLocation);
                    this.BuildAssembly();
                }
            }

            var references = this.InspectReferences();
            this.References = references;

            this.Plugins = Bridge.Translator.Plugins.GetPlugins(this, config, logger);

            logger.Info("Reading plugin configs...");
            this.Plugins.OnConfigRead(config);
            logger.Info("Reading plugin configs done");

            if (!string.IsNullOrWhiteSpace(config.BeforeBuild))
            {
                try
                {
                    logger.Info("Running BeforeBuild event " + config.BeforeBuild + " ...");
                    this.RunEvent(config.BeforeBuild);
                    logger.Info("Running BeforeBuild event done");
                }
                catch (System.Exception exc)
                {
                    var message = "Error: Unable to run beforeBuild event command: " + exc.Message + "\nStack trace:\n" + exc.StackTrace;

                    logger.Error("Exception occurred. Message: " + message);

                    throw new Bridge.Translator.TranslatorException(message);
                }
            }

            this.BuildSyntaxTree();


            var resolver = new MemberResolver(this.ParsedSourceFiles, Emitter.ToAssemblyReferences(references, logger), this.AssemblyDefinition);
            resolver = this.Preconvert(resolver);

            this.InspectTypes(resolver, config);

            resolver.CanFreeze = true;
            var emitter = this.CreateEmitter(resolver);

            if (!this.AssemblyInfo.OverflowMode.HasValue)
            {
                this.AssemblyInfo.OverflowMode = this.OverflowMode;
            }

            emitter.Translator = this;
            emitter.AssemblyInfo = this.AssemblyInfo;
            emitter.References = references;
            emitter.SourceFiles = this.SourceFiles;
            emitter.Log = this.Log;
            emitter.Plugins = this.Plugins;
            emitter.InitialLevel = 1;

            this.SortReferences();

            logger.Info("Before emitting...");
            this.Plugins.BeforeEmit(emitter, this);
            logger.Info("Before emitting done");

            this.AddMainOutputs(emitter.Emit());
            this.EmitterOutputs = emitter.Outputs;

            logger.Info("After emitting...");
            this.Plugins.AfterEmit(emitter, this);
            logger.Info("After emitting done");

            logger.Info("Translating done");
        }

        protected virtual MemberResolver Preconvert(MemberResolver resolver)
        {
            bool needRecompile = false;
            foreach (var sourceFile in this.ParsedSourceFiles)
            {
                var syntaxTree = sourceFile.SyntaxTree;

                var detecter = new PreconverterDetecter(resolver);
                syntaxTree.AcceptVisitor(detecter);

                if (detecter.Found)
                {
                    var fixer = new PreconverterFixer(resolver);
                    var astNode = syntaxTree.AcceptVisitor(fixer);
                    syntaxTree = astNode != null ? (SyntaxTree)astNode : syntaxTree;
                    sourceFile.SyntaxTree = syntaxTree;
                    needRecompile = true;
                }
            }

            if (needRecompile)
            {
                return new MemberResolver(this.ParsedSourceFiles, resolver.Assemblies, this.AssemblyDefinition);
            }

            return resolver;
        }

        private Stack<AssemblyDefinition> activeAssemblies;
        private IList<AssemblyDefinition> GetParentAssemblies(AssemblyDefinition asm, List<AssemblyDefinition> list = null)
        {
            bool endPoint = list == null;

            if (endPoint)
            {
                activeAssemblies = new Stack<AssemblyDefinition>();
                list = new List<AssemblyDefinition>();
            }

            if (activeAssemblies.Any(r => r.FullName == asm.FullName))
            {
                return list;
            }

            activeAssemblies.Push(asm);

            foreach (var assemblyReferenceName in asm.MainModule.AssemblyReferences)
            {
                if (assemblyReferenceName.Name.Contains(SystemAssemblyName))
                {
                    continue;
                }

                var assemblyReference = asm.MainModule.AssemblyResolver.Resolve(assemblyReferenceName);

                if (list.All(r => r.FullName != assemblyReference.FullName))
                {
                    list.Add(assemblyReference);
                }

                GetParentAssemblies(assemblyReference, list);
            }

            activeAssemblies.Pop();

            return list;
        }

        protected virtual void SortReferences()
        {
            var graph = new TopologicalSorting.DependencyGraph();

            foreach (var t in this.References)
            {
                var parents = this.GetParentAssemblies(t);
                var tProcess = graph.Processes.FirstOrDefault(p => p.Name == t.FullName);

                if (tProcess == null)
                {
                    tProcess = new TopologicalSorting.OrderedProcess(graph, t.FullName);
                }

                for (int i = parents.Count - 1; i > -1; i--)
                {
                    var x = parents[i];

                    if (tProcess.Predecessors.All(p => p.Name != x.FullName))
                    {
                        var dProcess = graph.Processes.FirstOrDefault(p => p.Name == x.FullName);

                        if (dProcess == null)
                        {
                            dProcess = new TopologicalSorting.OrderedProcess(graph, x.FullName);
                        }

                        if (tProcess != dProcess && dProcess.Predecessors.All(p => p.Name != tProcess.Name))
                        {
                            tProcess.After(dProcess);
                        }
                    }
                }
            }

            if (graph.ProcessCount > 0)
            {
                AssemblyDefinition asmDef = null;

                try
                {
                    IEnumerable<IEnumerable<OrderedProcess>> sorted = graph.CalculateSort();

                    var list = new List<AssemblyDefinition>(this.References.Count());

                    this.Log.Trace("Sorting references...");

                    foreach (var processes in sorted)
                    {
                        foreach (var process in processes)
                        {
                            this.Log.Trace("\tHandling " + process.Name);

                            asmDef = this.References.First(r => r.FullName == process.Name);

                            if (list.All(r => r.FullName != asmDef.FullName))
                            {
                                list.Add(asmDef);
                            }
                        }
                    }

                    this.References = list;

                    this.Log.Trace("Sorting references done:");

                    for (int i = 0; i < list.Count; i++)
                    {
                        this.Log.Trace("\t" + list[i].Name);
                    }
                }
                catch (System.Exception ex)
                {
                    this.Log.Warn(string.Format("Topological sort failed {0} with error {1}", asmDef != null ? "at reference " + asmDef.FullName : string.Empty, ex));
                }
            }

            activeAssemblies = null;
        }

        private static void NewLine(StringBuilder sb, string line = null)
        {
            if (line != null)
            {
                sb.Append(line);
            }

            sb.Append(Emitter.NEW_LINE);
        }

        private static void NewLine(MemoryStream sb, string line = null)
        {
            if (line != null)
            {
                var b = OutputEncoding.GetBytes(line);
                sb.Write(b, 0, b.Length);
            }

            var nl = OutputEncoding.GetBytes(Emitter.NEW_LINE);
            sb.Write(nl, 0, nl.Length);
        }

        public virtual void Save(string projectOutputPath, string defaultFileName)
        {
            var logger = this.Log;
            logger.Info("Starts Save with projectOutputPath = " + projectOutputPath);

            foreach (var item in this.Outputs.GetAllOutputs())
            {
                string fileName = item.Name;
                logger.Trace("Output " + fileName);

                if (fileName.Contains(Bridge.Translator.AssemblyInfo.DEFAULT_FILENAME))
                {
                    fileName = fileName.Replace(Bridge.Translator.AssemblyInfo.DEFAULT_FILENAME, defaultFileName);
                }

                // Ensure filename contains no ":". It could be used like "c:/absolute/path"
                fileName = fileName.Replace(":", "_");

                // Trim heading slash/backslash off file names until it does not start with slash.
                var oldFNlen = fileName.Length;
                while (Path.IsPathRooted(fileName))
                {
                    fileName = fileName.TrimStart(Path.DirectorySeparatorChar, '/', '\\');

                    // Trimming didn't change the path. This way, it will just loop indefinitely.
                    // Also, this means the absolute path specifies a fully-qualified DOS PathName with drive letter.
                    if (fileName.Length == oldFNlen)
                    {
                        break;
                    }
                    oldFNlen = fileName.Length;
                }

                if (fileName != item.Name)
                {
                    logger.Trace("Output file name changed to " + fileName);
                    item.Name = fileName;
                }

                // If 'fileName' is an absolute path, Path.Combine will ignore the 'path' prefix.
                string filePath = fileName;

                if (item.Location != null)
                {
                    filePath = Path.Combine(item.Location, fileName);

                    if (fileName != filePath)
                    {
                        logger.Trace("Output file name changed to " + filePath);
                    }
                }

                var filePath1 = Path.Combine(projectOutputPath, filePath);

                if (filePath1 != filePath)
                {
                    filePath = filePath1;
                    logger.Trace("Output file name changed to " + filePath1);
                }

                var file = FileHelper.CreateFileDirectory(filePath);
                logger.Trace("Output full name " + file.FullName);

                byte[] buffer = null;
                string content = null;

                if (item.OutputType == TranslatorOutputTypes.JavaScript)
                {
                    content = item.Content.GetContentAsString();
                    content = this.GenerateSourceMap(file.FullName, content);

                    this.SaveToFile(file.FullName, content);
                }
                else
                {
                    buffer = item.Content.Buffer;

                    if (buffer != null)
                    {
                        this.SaveToFile(file.FullName, null, buffer);
                    }
                    else
                    {
                        content = item.Content.GetContentAsString();
                        this.SaveToFile(file.FullName, content);
                    }
                }
            }

            logger.Info("Done Save path = " + projectOutputPath);
        }

        public string GenerateSourceMap(string fileName, string content, Action<SourceMapBuilder> before = null)
        {
            if (this.AssemblyInfo.SourceMap.Enabled)
            {
                var projectPath = Path.GetDirectoryName(this.Location);

                SourceMapGenerator.Generate(fileName, projectPath, ref content,
                    before,
                    (sourceRelativePath) =>
                    {
                        string path = null;
                        ParsedSourceFile sourceFile = null;

                        try
                        {
                            path = Path.Combine(projectPath, sourceRelativePath);
                            sourceFile = this.ParsedSourceFiles.First(pf => pf.ParsedFile.FileName == path);

                            return sourceFile.SyntaxTree.TextSource ?? sourceFile.SyntaxTree.ToString(Translator.GetFormatter());
                        }
                        catch (Exception ex)
                        {
                            throw (TranslatorException)TranslatorException.Create(
                                "Could not get ParsedSourceFile for SourceMap. Exception: {0}; projectPath: {1}; sourceRelativePath: {2}; path: {3}.",
                                ex.ToString(), projectPath, sourceRelativePath, path);
                        }

                    },
                    new string[0], this.SourceFiles, this.AssemblyInfo.SourceMap.Eol, this.Log
                );
            }

            return content;
        }

        private static CSharpFormattingOptions GetFormatter()
        {
            var formatter = FormattingOptionsFactory.CreateSharpDevelop();
            formatter.AnonymousMethodBraceStyle = BraceStyle.NextLine;
            formatter.MethodBraceStyle = BraceStyle.NextLine;
            formatter.StatementBraceStyle = BraceStyle.NextLine;
            formatter.PropertyBraceStyle = BraceStyle.NextLine;
            formatter.ConstructorBraceStyle = BraceStyle.NextLine;
            formatter.NewLineAfterConstructorInitializerColon = NewLinePlacement.NewLine;
            formatter.NewLineAferMethodCallOpenParentheses = NewLinePlacement.NewLine;
            formatter.ClassBraceStyle = BraceStyle.NextLine;
            formatter.ArrayInitializerBraceStyle = BraceStyle.NextLine;
            formatter.IndentPreprocessorDirectives = false;

            return formatter;
        }

        public void RunAfterBuild()
        {
            this.Log.Info("Checking AfterBuild event...");

            if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.AfterBuild))
            {
                try
                {
                    this.Log.Trace("Run AfterBuild event");
                    this.RunEvent(this.AssemblyInfo.AfterBuild);
                }
                catch (System.Exception ex)
                {
                    var message = "Error: Unable to run afterBuild event command: " + ex.ToString();

                    this.Log.Error(message);
                    throw new Bridge.Translator.TranslatorException(message);
                }
            }
            else
            {
                this.Log.Trace("No AfterBuild event specified");
            }

            this.Log.Info("Done checking AfterBuild event...");
        }

        protected virtual Emitter CreateEmitter(IMemberResolver resolver)
        {
            this.Log.Info("Creating emitter...");

            var emitter = new Emitter(this.TypeDefinitions, this.BridgeTypes, this.Types, this.Validator, resolver, this.TypeInfoDefinitions, this.Log);

            this.Log.Info("Creating emitter done");

            return emitter;
        }

        protected virtual Validator CreateValidator()
        {
            return new Validator();
        }

        public EmitterException CreateExceptionFromLastNode()
        {
            return this.EmitNode != null ? new EmitterException(this.EmitNode) : null;
        }

        protected virtual void SaveToFile(string fileName, string content, byte[] binary = null)
        {
            if (content != null && binary != null)
            {
                this.Log.Error("Both content and binary are not null for " + fileName + ". Will use content.");
            }

            if (content != null)
            {
                File.WriteAllText(fileName, content, OutputEncoding);
                this.Log.Trace("Saving content (string) into " + fileName + " ...");
            }
            else
            {
                File.WriteAllBytes(fileName, binary);
                this.Log.Trace("Saving binary into " + fileName + " ...");
            }

            this.Log.Trace("Saved file " + fileName);
        }

        public void CleanOutputFolderIfRequired(string outputPath)
        {
            if (this.AssemblyInfo != null
                && (this.AssemblyInfo.CleanOutputFolderBeforeBuild || !string.IsNullOrEmpty(this.AssemblyInfo.CleanOutputFolderBeforeBuildPattern)))
            {
                var searchPattern = string.IsNullOrEmpty(this.AssemblyInfo.CleanOutputFolderBeforeBuildPattern)
                    ? "*" + Files.Extensions.JS + "|*" + Files.Extensions.DTS
                    : this.AssemblyInfo.CleanOutputFolderBeforeBuildPattern;

                CleanDirectory(outputPath, searchPattern);
            }
        }

        private void CleanDirectory(string outputPath, string searchPattern)
        {
            this.Log.Info("Cleaning output folder " + (outputPath ?? string.Empty) + " with search pattern (" + (searchPattern ?? string.Empty) + ") ...");

            if (string.IsNullOrWhiteSpace(outputPath))
            {
                this.Log.Warn("Output directory is not specified. No files deleted.");
                return;
            }

            try
            {
                var outputDirectory = new DirectoryInfo(outputPath);
                if (!outputDirectory.Exists)
                {
                    this.Log.Warn("Output directory does not exist " + outputPath + ". No files deleted.");
                    return;
                }

                var patterns = searchPattern.Split(new[] { '|' }, StringSplitOptions.RemoveEmptyEntries);

                if (patterns.Length == 0)
                {
                    this.Log.Warn("Incorrect search pattern - empty. No files deleted.");
                    return;
                }

                var filesToDelete = new List<FileInfo>();
                foreach (var pattern in patterns)
                {
                    filesToDelete.AddRange(outputDirectory.GetFiles(pattern, SearchOption.AllDirectories));
                }

                foreach (var file in filesToDelete)
                {
                    this.Log.Trace("cleaning " + file.FullName);
                    file.Delete();
                }

                this.Log.Info("Cleaning output folder done");
            }
            catch (System.Exception ex)
            {
                this.Log.Error(ex.ToString());
            }
        }
    }
}