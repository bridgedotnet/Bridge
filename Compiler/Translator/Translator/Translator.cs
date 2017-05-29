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
        public const string SupportedProjectType = "Library";
        public const string DefaultRootNamespace = "ClassLibrary";

        private static readonly Encoding OutputEncoding = new UTF8Encoding(false);
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

        private StringBuilder jsbuffer;
        private StringBuilder jsminbuffer;
        private List<string> removeList;
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
        }

        public Dictionary<string, string> Translate()
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

            this.Outputs = emitter.Emit();
            this.EmitterOutputs = emitter.Outputs;

            logger.Info("After emitting...");
            this.Plugins.AfterEmit(emitter, this);
            logger.Info("After emitting done");

            logger.Info("Translating done");

            return this.Outputs;
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
                    foreach (var processes in sorted)
                    {
                        foreach (var process in processes)
                        {
                            asmDef = this.References.First(r => r.FullName == process.Name);
                            if (list.All(r => r.FullName != asmDef.FullName))
                            {
                                list.Add(asmDef);
                            }
                        }
                    }

                    this.References = list;
                }
                catch (System.Exception ex)
                {
                    this.Log.Warn(string.Format("Topological sort failed {0} with error {1}", asmDef != null ? "at reference " + asmDef.FullName : string.Empty, ex));
                }
            }

            activeAssemblies = null;
        }

        public virtual string GetCode()
        {
            StringBuilder builder = new StringBuilder();

            foreach (var item in this.Outputs)
            {
                NewLine(builder, item.Value);
            }

            return builder.ToString();
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

        public virtual Dictionary<string, string> SaveTo(string path, string defaultFileName)
        {
            var logger = this.Log;
            logger.Info("Starts SaveTo path = " + path);

            var minifier = new Minifier();
            var files = new Dictionary<string, string>();
            foreach (var item in this.Outputs)
            {
                string fileName = item.Key;
                logger.Trace("Output " + item.Key);

                string code = item.Value;

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

                logger.Trace("Output file name changed to " + fileName);

                // If 'fileName' is an absolute path, Path.Combine will ignore the 'path' prefix.
                string filePath = Path.Combine(path, fileName);
                logger.Trace("Output file path changed to " + filePath);

                bool isJs = FileHelper.IsJS(fileName);

                // We can only have Beautified, Minified or Both, so this test has inverted logic:
                // output beautified if not minified only == (output beautified or output both)
                // Output anyway if the class is not a JavaScript file.
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified || !isJs)
                {
                    var file = CreateFileDirectory(filePath);
                    logger.Trace("Output non-minified " + file.FullName);

                    if (!this.AssemblyInfo.CombineScripts && isJs)
                    {
                        code = this.GenerateSourceMap(file.FullName, code);
                    }

                    this.SaveToFile(file.FullName, code);
                    files.Add(fileName, file.FullName);
                }

                // Like above test: output minified if not beautified only == (out minified or out both)
                // Output minified is allowed only and only if it is a JavaScript being output.
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted && isJs)
                {
                    var fileNameMin = FileHelper.GetMinifiedJSFileName(Path.GetFileName(filePath));

                    var file = CreateFileDirectory(Path.GetDirectoryName(filePath), fileNameMin);
                    logger.Trace("Output non-formatted " + file.FullName);

                    var contentMinified = this.Minify(minifier, code, this.GetMinifierSettings(fileNameMin));

                    if (!this.AssemblyInfo.CombineScripts)
                    {
                        contentMinified = this.GenerateSourceMap(file.FullName, contentMinified);
                    }

                    this.SaveToFile(file.FullName, contentMinified);
                }
            }

            logger.Info("Done SaveTo path = " + path);

            return files;
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
                    new string[0], this.SourceFiles, this.AssemblyInfo.SourceMap.Eol, this.Log);
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

        public void ExtractCore(string outputPath, string projectPath, bool nodebug = false)
        {
            this.Log.Info("Extracting core scripts...");

            ExtractResources(outputPath, projectPath, nodebug);

            ExtractLocales(outputPath, nodebug);

            this.Log.Info("Done extracting core scripts");
        }

        private void ExtractResources(string outputPath, string projectPath, bool nodebug)
        {
            this.Log.Info("Extracting resources...");

            var minifier = new Minifier();

            foreach (var reference in this.References)
            {
                var resources = GetEmbeddedResourceList(reference);

                if (!resources.Any())
                {
                    continue;
                }

                var resourceOption = this.AssemblyInfo.Resources;

                var noExtract = !resourceOption.HasEmbedResources()
                    && !resourceOption.HasExtractResources()
                    && resourceOption.Default != null
                    && resourceOption.Default.Extract != true;

                if (noExtract)
                {
                    this.Log.Info("No extract option enabled (resources config option contains only default setting with extract disabled)");
                    this.Log.Info("Skipping extracting all resources");

                    continue;
                }

                foreach (var resource in resources)
                {
                    this.Log.Trace("Extracting item " + resource.Name);

                    var fileName = resource.FileName;
                    var resName = resource.Name;

                    this.Log.Trace("Resource name " + resName + " and file name: " + fileName);

                    string resourceOutputDirName = null;
                    string resourceOutputFileName = null;

                    var resourceExtractItems = resourceOption.ExtractItems
                        .Where(
                            x => string.Compare(x.Name, resName, StringComparison.InvariantCultureIgnoreCase) == 0
                            && (x.Assembly == null
                                || string.Compare(x.Assembly, reference.Name.Name, StringComparison.InvariantCultureIgnoreCase) == 0))
                        .FirstOrDefault();

                    if (resourceExtractItems != null)
                    {
                        this.Log.Trace("Found resource option for resource name " + resourceExtractItems.Name + " and reference " + resourceExtractItems.Assembly);

                        if (resourceExtractItems.Extract != true)
                        {
                            this.Log.Info("Skipping resource " + resourceExtractItems.Name + " as it has setting resources.extract != true");
                            continue;
                        }

                        if (resourceExtractItems.Output != null)
                        {
                            this.Log.Trace("resources.output option " + resourceExtractItems.Output);

                            this.GetResourceOutputPath(outputPath, resourceExtractItems, ref resourceOutputFileName, ref resourceOutputDirName);

                            if (resourceOutputDirName != null)
                            {
                                this.Log.Trace("Changing output path according to output resource setting to " + resourceOutputDirName);
                            }

                            if (resourceOutputFileName != null)
                            {
                                this.Log.Trace("Changing output file name according to output resource setting to " + resourceOutputFileName);
                            }
                        }
                        else
                        {
                            this.Log.Trace("No extract resource option affecting extraction for resource name " + resourceExtractItems.Name);
                        }
                    }
                    else
                    {
                        this.Log.Trace("Did not find extract resource option for resource name " + resName + ". Will use default embed behavior");

                        if (resource.Path != null)
                        {
                            this.Log.Trace("resource.Path option " + resource.Path);

                            this.GetResourceOutputPath(outputPath, resource.Path, resource.Name, true, ref resourceOutputFileName, ref resourceOutputDirName);

                            if (resourceOutputDirName != null)
                            {
                                this.Log.Trace("Changing output path according to embedded resource Path setting to " + resourceOutputDirName);
                            }

                            if (resourceOutputFileName != null)
                            {
                                this.Log.Trace("Changing output file name according to embedded resource Path setting to " + resourceOutputFileName);
                            }
                        }
                    }

                    if (resourceOutputDirName == null)
                    {
                        resourceOutputDirName = outputPath;
                    }

                    if (resourceOutputFileName == null)
                    {
                        resourceOutputFileName = fileName;
                    }

                    bool isTs = FileHelper.IsDTS(resName);
                    bool isJs = FileHelper.IsJS(resName);

                    if (isTs)
                    {
                        if (this.AssemblyInfo.GenerateTypeScript)
                        {
                            this.ExtractResourceAndWriteToFile(resourceOutputDirName, reference, resName, resourceOutputFileName);
                        }
                    }
                    else if (isJs)
                    {
                        if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified)
                        {
                            this.ExtractResourceAndWriteToFile(resourceOutputDirName, reference, resName, resourceOutputFileName);
                        }

                        if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted)
                        {
                            if (!nodebug)
                            {
                                this.ExtractResourceAndWriteToFile(resourceOutputDirName, reference, resName, FileHelper.GetMinifiedJSFileName(resourceOutputFileName), (content) =>
                                {
                                    return this.Minify(minifier, content, this.GetMinifierSettings(resourceOutputFileName));
                                });
                            }
                        }
                    }
                    else
                    {
                        this.ExtractResourceAndWriteToFile(resourceOutputDirName, reference, resName, resourceOutputFileName);
                    }
                }
            }

            this.Log.Info("Done extracting resources");
        }

        private void ExtractLocales(string outputPath, bool nodebug)
        {
            if (string.IsNullOrWhiteSpace(this.AssemblyInfo.Locales))
            {
                this.Log.Info("Skipping extracting Locales");
                return;
            }

            this.Log.Info("Extracting Locales...");

            StringBuilder bufferjs = null;
            StringBuilder bufferjsmin = null;
            if (this.AssemblyInfo.CombineLocales && !this.AssemblyInfo.CombineScripts)
            {
                bufferjs = new StringBuilder();
                bufferjsmin = new StringBuilder();
            }

            var bridgeAssembly = this.References.FirstOrDefault(r => r.Name.Name == CS.NS.ROOT);
            var localesRes = bridgeAssembly.MainModule.Resources.Where(r => r.Name.StartsWith(Translator.LocalesPrefix)).Cast<EmbeddedResource>();
            var locales = this.AssemblyInfo.Locales.Split(';');
            foreach (var locale in locales)
            {
                if (locale == "all")
                {
                    this.ExtractLocale(localesRes, outputPath, nodebug, bufferjs, bufferjsmin);
                    break;
                }
                else if (locale.Contains("*"))
                {
                    var name = Translator.LocalesPrefix + locale.SubstringUpToFirst('*');
                    this.ExtractLocale(localesRes.Where(r => r.Name.StartsWith(name)), outputPath, nodebug, bufferjs, bufferjsmin);
                }
                else
                {
                    var name = Translator.LocalesPrefix + locale + Files.Extensions.JS;
                    this.ExtractLocale(localesRes.First(r => r.Name == name), outputPath, nodebug, bufferjs, bufferjsmin);
                }
            }

            if ((bufferjs != null && bufferjs.Length > 0) || (bufferjsmin != null && bufferjsmin.Length > 0))
            {
                if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.LocalesOutput))
                {
                    outputPath = Path.Combine(outputPath, this.AssemblyInfo.LocalesOutput);
                }

                var defaultFileName = this.AssemblyInfo.LocalesFileName ?? "Bridge.Locales.js";
                var fileName = defaultFileName.Replace(":", "_");
                var oldFNlen = fileName.Length;
                while (Path.IsPathRooted(fileName))
                {
                    fileName = fileName.TrimStart(Path.DirectorySeparatorChar, '/', '\\');
                    if (fileName.Length == oldFNlen)
                    {
                        break;
                    }
                    oldFNlen = fileName.Length;
                }

                var file = CreateFileDirectory(outputPath, fileName);

                if (bufferjs != null && bufferjs.Length > 0)
                {
                    File.WriteAllText(file.FullName, bufferjs.ToString(), OutputEncoding);
                }

                if (bufferjsmin != null && bufferjsmin.Length > 0)
                {
                    File.WriteAllText(FileHelper.GetMinifiedJSFileName(file.FullName), bufferjsmin.ToString(), OutputEncoding);
                }
            }

            this.Log.Info("Done extracting Locales");
        }

        protected virtual void ExtractLocale(IEnumerable<EmbeddedResource> res, string outputPath, bool nodebug, StringBuilder bufferjs, StringBuilder bufferjsmin)
        {
            foreach (var r in res)
            {
                this.ExtractLocale(r, outputPath, nodebug, bufferjs, bufferjsmin);
            }
        }

        protected virtual void ExtractLocale(EmbeddedResource res, string outputPath, bool nodebug, StringBuilder bufferjs, StringBuilder bufferjsmin)
        {
            var fileName = res.Name.Substring(Translator.LocalesPrefix.Length);
            if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.LocalesOutput))
            {
                outputPath = Path.Combine(outputPath, this.AssemblyInfo.LocalesOutput);
            }

            var file = CreateFileDirectory(outputPath, fileName);

            string resourcesStr = null;
            string resourcesStrMin = null;
            using (var resourcesStream = ((EmbeddedResource)res).GetResourceStream())
            {
                using (StreamReader reader = new StreamReader(resourcesStream))
                {
                    resourcesStr = reader.ReadToEnd();
                }
            }

            if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted && !nodebug)
            {
                resourcesStrMin = this.Minify(new Minifier(), resourcesStr, Translator.MinifierCodeSettingsLocales);
            }

            if (this.AssemblyInfo.CombineLocales)
            {
                if (this.AssemblyInfo.CombineScripts)
                {
                    if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified)
                    {
                        this.SaveToFile(file.FullName, resourcesStr);
                    }
                    if (resourcesStrMin != null)
                    {
                        this.SaveToFile(FileHelper.GetMinifiedJSFileName(file.FullName), resourcesStrMin);
                    }
                }
                else
                {
                    if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified)
                    {
                        NewLine(bufferjs, resourcesStr);
                    }
                    if (resourcesStrMin != null)
                    {
                        bufferjsmin.Append(resourcesStrMin);
                    }
                }
            }
            else
            {
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified)
                {
                    File.WriteAllText(file.FullName, resourcesStr, OutputEncoding);
                }
                if (resourcesStrMin != null)
                {
                    File.WriteAllText(FileHelper.GetMinifiedJSFileName(file.FullName), resourcesStrMin, OutputEncoding);
                }
            }
        }

        protected virtual void ExtractResourceAndWriteToFile(string outputPath, AssemblyDefinition assembly, string resourceName, string fileName, Func<string, string> preHandler = null)
        {
            var res = assembly.MainModule.Resources.FirstOrDefault(r => r.Name == resourceName);

            if (res == null)
            {
                throw new InvalidOperationException("Could not read resource " + resourceName + " in " + assembly.FullName);
            }

            var file = CreateFileDirectory(outputPath, fileName);

            string content = null;
            byte[] binary = null;

            using (var resourcesStream = ((EmbeddedResource)res).GetResourceStream())
            {
                if (FileHelper.IsJS(file.FullName) || preHandler != null)
                {
                    using (var reader = new StreamReader(resourcesStream))
                    {
                        content = reader.ReadToEnd();
                    }
                }
                else
                {
                    binary = ReadStream(resourcesStream);
                }
            }

            if (preHandler != null)
            {
                content = preHandler(content);
            }

            this.SaveToFile(file.FullName, content, binary);
        }

        private string Minify(Minifier minifier, string source, CodeSettings settings)
        {
            this.Log.Trace("Minification...");

            if (string.IsNullOrEmpty(source))
            {
                this.Log.Trace("Skip minification as input script is empty");
                return source;
            }

            this.Log.Trace("Input script length is " + source.Length + " symbols...");

            var contentMinified = minifier.MinifyJavaScript(source, settings);

            this.Log.Trace("Output script length is " + contentMinified.Length + " symbols. Done.");

            return contentMinified;
        }

        private CodeSettings GetMinifierSettings(string fileName)
        {
            //Different settings depending on whether a file is an internal Bridge (like bridge.js) or user project's file
            if (MinifierCodeSettingsInternalFileNames.Contains(fileName.ToLower()))
            {
                this.Log.Trace("Will use MinifierCodeSettingsInternal for " + fileName);
                return MinifierCodeSettingsInternal;
            }

            var settings = MinifierCodeSettingsSafe;
            if (this.NoStrictMode)
            {
                settings = settings.Clone();
                settings.StrictMode = false;

                this.Log.Trace("Will use MinifierCodeSettingsSafe with no StrictMode");
            }
            else
            {
                this.Log.Trace("Will use MinifierCodeSettingsSafe");
            }

            return settings;
        }

        private static FileInfo CreateFileDirectory(string outputPath, string fileName)
        {
            return CreateFileDirectory(Path.Combine(outputPath, fileName));
        }

        private static FileInfo CreateFileDirectory(string path)
        {
            var file = new System.IO.FileInfo(path);

            if (!file.Directory.Exists)
            {
                file.Directory.Create();
            }

            return file;
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

            bool isJs = FileHelper.IsJS(fileName);

            if (this.AssemblyInfo.CombineScripts && isJs)
            {
                this.Log.Trace("Combining scripts...");

                if (content == null)
                {
                    throw new InvalidOperationException("Content should not be null for JavaScript output with CombineScripts option (" + fileName + ").");
                }

                bool isMinJs = FileHelper.IsMinJS(fileName);
                StringBuilder buffer;

                bool append = false;
                if (isMinJs)
                {
                    if (this.jsminbuffer == null)
                    {
                        this.jsminbuffer = new StringBuilder();
                    }
                    buffer = this.jsminbuffer;
                    append = true;
                }
                else
                {
                    if (this.jsbuffer == null)
                    {
                        this.jsbuffer = new StringBuilder();
                    }
                    buffer = this.jsbuffer;
                }

                if (append)
                {
                    buffer.Append(content);
                }
                else
                {
                    NewLine(buffer, content);
                }

                if (this.removeList == null)
                {
                    this.removeList = new List<string>();
                }
                this.removeList.Add(fileName);

                this.Log.Trace("Combining scripts done");
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

        public void Flush(string path, string defaultFileName)
        {
            this.Log.Info("Running Flush...");

            if (this.removeList != null)
            {
                foreach (var f in this.removeList)
                {
                    File.Delete(f);
                }
            }

            if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.FileName))
            {
                defaultFileName = this.AssemblyInfo.FileName;
            }

            if (!defaultFileName.EndsWith(Files.Extensions.JS))
            {
                defaultFileName = defaultFileName + Files.Extensions.JS;
            }

            var fileName = defaultFileName.Replace(":", "_");
            var oldFNlen = fileName.Length;
            while (Path.IsPathRooted(fileName))
            {
                fileName = fileName.TrimStart(Path.DirectorySeparatorChar, '/', '\\');
                if (fileName.Length == oldFNlen)
                {
                    break;
                }
                oldFNlen = fileName.Length;
            }

            string filePath = Path.Combine(path, fileName);

            if (this.jsbuffer != null && this.jsbuffer.Length > 0)
            {
                var code = this.GenerateSourceMap(filePath, this.jsbuffer.ToString());
                File.WriteAllText(filePath, code, OutputEncoding);
            }

            if (this.jsminbuffer != null && this.jsminbuffer.Length > 0)
            {
                var filePathMin = FileHelper.GetMinifiedJSFileName(filePath);
                var code = this.GenerateSourceMap(filePathMin, this.jsminbuffer.ToString());
                File.WriteAllText(filePathMin, code, OutputEncoding);
            }

            this.Log.Info("Done running Flush");
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