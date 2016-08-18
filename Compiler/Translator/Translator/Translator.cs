using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using Microsoft.Ajax.Utilities;
using Mono.Cecil;
using Object.Net.Utilities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using AssemblyDefinition = Mono.Cecil.AssemblyDefinition;

namespace Bridge.Translator
{
    public partial class Translator : ITranslator
    {
        public const string Bridge_ASSEMBLY = "Bridge";
        public const string BridgeResourcesList = "Bridge.Resources.list";
        public const string SupportedProjectType = "Library";
        private static readonly Encoding OutputEncoding = System.Text.Encoding.UTF8;
        private static readonly string[] MinifierCodeSettingsInternalFileNames = new string[] { "bridge.js", "bridge.min.js", "bridge.collections.js", "bridge.collections.min.js" };

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

        public const string LocalesPrefix = "Bridge.Resources.Locales.";

        protected Translator(string location)
        {
            this.Location = location;
            this.Validator = this.CreateValidator();
            this.DefineConstants = new List<string>() { "BRIDGE" };
        }

        public Translator(string location, bool fromTask = false) : this(location)
        {
            this.FromTask = fromTask;
        }

        public Translator(string location, string source, bool recursive, string lib) : this(location, true)
        {
            this.Recursive = recursive;
            this.Source = source;
            this.AssemblyLocation = lib;
            this.FolderMode = true;
        }

        public Dictionary<string, string> Translate()
        {
            var logger = this.Log;
            logger.Info("Translating...");

            this.LogProductInfo();

            var config = this.AssemblyInfo;

            if (this.FolderMode)
            {
                this.ReadFolderFiles();
            }
            else
            {
                this.ReadProjectFile();

                if (this.Rebuild || !File.Exists(this.AssemblyLocation))
                {
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

            var resolver = new MemberResolver(this.ParsedSourceFiles, Emitter.ToAssemblyReferences(references, logger));
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

            this.SortReferences();

            logger.Info("Before emitting...");
            this.Plugins.BeforeEmit(emitter, this);
            logger.Info("Before emitting done");

            this.Outputs = emitter.Emit();

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
                return new MemberResolver(this.ParsedSourceFiles, resolver.Assemblies);
            }

            return resolver;
        }

        protected virtual void SortReferences()
        {
            this.Log.Info("Sorting " + (this.References != null ? this.References.Count().ToString() : "no") + " reference(s)...");

            var list = this.References.ToList();
            list.Sort((r1, r2) =>
            {
                if (r1.Name.Name == "Bridge")
                {
                    return -1;
                }

                if (r2.Name.Name == "Bridge")
                {
                    return 1;
                }

                var references1 = r1.MainModule.AssemblyReferences;
                var references2 = r2.MainModule.AssemblyReferences;

                if (references1.Any(r => r.FullName == r2.FullName))
                {
                    return 1;
                }

                if (references2.Any(r => r.FullName == r1.FullName))
                {
                    return -1;
                }
                return 0;
            });

            this.References = list;

            this.Log.Info("Sorting references done");
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

            sb.Append("\n");
        }

        public virtual void SaveTo(string path, string defaultFileName)
        {
            var logger = this.Log;
            logger.Trace("Starts SaveTo path = " + path);

            var minifier = new Minifier();
            var files = new Dictionary<string, string>();
            foreach (var item in this.Outputs)
            {
                string fileName = item.Key;
                logger.Trace("Output " + item.Key);

                string code = item.Value;

                if (fileName.Contains(Bridge.Translator.AssemblyInfo.DEFAULT_FILENAME))
                {
                    fileName = fileName.Replace(Bridge.Translator.AssemblyInfo.DEFAULT_FILENAME, Path.GetFileNameWithoutExtension(defaultFileName));
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
                string extension = Path.GetExtension(fileName);
                bool isJs = extension == ('.' + Bridge.Translator.AssemblyInfo.JAVASCRIPT_EXTENSION);

                // We can only have Beautified, Minified or Both, so this test has inverted logic:
                // output beautified if not minified only == (output beautified or output both)
                // Check by @vladsch: Output anyway if the class is not a JavaScript file.
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified || !isJs)
                {
                    var file = CreateFileDirectory(filePath);
                    logger.Trace("Output non-minified " + file.FullName);
                    this.SaveToFile(file.FullName, code);
                    files.Add(fileName, file.FullName);
                }

                // Like above test: output minified if not beautified only == (out minified or out both)
                // Check by @vladsch: Output minified is allowed only and only if it is a JavaScript being output.
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted && isJs)
                {
                    var fileNameMin = Path.GetFileNameWithoutExtension(filePath) + ".min" + extension;

                    var file = CreateFileDirectory(Path.GetDirectoryName(filePath), fileNameMin);
                    logger.Trace("Output non-formatted " + file.FullName);

                    var contentMinified = this.Minify(minifier, code, this.GetMinifierSettings(fileNameMin));

                    this.SaveToFile(file.FullName, contentMinified);
                }
            }

            if (this.AssemblyInfo.InjectScriptToAssembly)
            {
                logger.Trace("Injecting resources");
                this.InjectResources(path, files);
            }

            if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.AfterBuild))
            {
                try
                {
                    logger.Trace("Run AfterBuild event");
                    this.RunEvent(this.AssemblyInfo.AfterBuild);
                }
                catch (System.Exception ex)
                {
                    var message = "Error: Unable to run afterBuild event command: " + ex.ToString();

                    logger.Error(message);
                    throw new Bridge.Translator.TranslatorException(message);
                }
            }

            logger.Trace("SaveTo path = " + path + " done");
        }

        protected virtual void InjectResources(string outputPath, Dictionary<string, string> files)
        {
            if ((files == null || files.Count == 0) && !this.AssemblyInfo.Resources.HasResources())
            {
                this.Log.Trace("No files nor resources to inject");
                return;
            }

            var resourceBasePath = Path.GetDirectoryName(this.Location);
            var resourcesToEmbed = PrepareResources(outputPath, resourceBasePath, files);

            var assemblyDef = this.AssemblyDefinition;
            var resources = assemblyDef.MainModule.Resources;
            var resourcesList = new List<string>();

            foreach (var item in resourcesToEmbed)
            {
                var name = item.Key;
                name = this.NormalizePath(name);
                var newResource = new EmbeddedResource(name, ManifestResourceAttributes.Private, item.Value);

                var existingResource = resources.FirstOrDefault(r => r.Name == name);
                if (existingResource != null)
                {
                    resources.Remove(existingResource);
                }

                resources.Add(newResource);
                resourcesList.Add(item.Key + ":" + name);
            }

            StringBuilder sb = new StringBuilder();
            foreach (var res in resourcesList)
            {
                sb.Append(res).Append("+");
            }
            sb.Remove(sb.Length - 1, 1);

            var listResources = new EmbeddedResource(Translator.BridgeResourcesList, ManifestResourceAttributes.Private, Translator.OutputEncoding.GetBytes(sb.ToString()));

            var existingList = resources.FirstOrDefault(r => r.Name == Translator.BridgeResourcesList);
            if (existingList != null)
            {
                resources.Remove(existingList);
            }

            resources.Add(listResources);

            // Checking if mscorlib reference added and removing if added
            var mscorlib = assemblyDef.MainModule.AssemblyReferences.FirstOrDefault(r => r.Name == "mscorlib");
            if (mscorlib != null)
            {
                this.Log.Info("Removing mscorlib reference");
                assemblyDef.MainModule.AssemblyReferences.Remove(mscorlib);
            }

            assemblyDef.Write(this.AssemblyLocation);
        }

        private Dictionary<string, byte[]> PrepareResources(string outputPath, string resourcesBasePath, Dictionary<string, string> files)
        {
            System.Diagnostics.Debugger.Launch();
            var resourcesToEmbed = new Dictionary<string, byte[]>();

            if (this.AssemblyInfo.Resources.HasResources())
            {
                // There are resources defined in the config so let's grab files
                // Find all items and put in the order
                this.Log.Trace("Preparing resources specified in config...");

                var resourceItems = new Dictionary<string, string>();

                foreach (var resource in this.AssemblyInfo.Resources.Items)
                {
                    this.Log.Trace("Preparing resource " + resource.Name);

                    var resourceBuffer = new StringBuilder();

                    if (resource.Caption || resource.CaptionInfo.Any())
                    {
                        this.GenerateResourseCaption(resourceBuffer, resource);
                    }

                    this.ReadResourseFiles(resourcesBasePath, resourceBuffer, resource);

                    if (resourceBuffer.Length > 0)
                    {
                        this.Log.Trace("Prepared files for resource " + resource.Name);

                        var code = OutputEncoding.GetBytes(resourceBuffer.ToString());

                        resourcesToEmbed.Add(resource.Name, code);

                        if (resource.Extract)
                        {
                            try
                            {
                                this.Log.Trace("Extracting resource " + resource.Name);

                                var path = Path.Combine(outputPath, resource.Name);
                                this.Log.Trace("Extracting resource into " + path);

                                File.WriteAllBytes(path, code);
                                this.Log.Trace("Done");
                            }
                            catch (Exception ex)
                            {
                                this.Log.Error(ex.ToString());
                                throw;
                            }
                        }
                    }
                    else
                    {
                        this.Log.Error("No files found for resource " + resource.Name);
                    }

                    this.Log.Trace("Done preparing resource " + resource.Name);
                }

                this.Log.Trace("Done preparing resources specified in config...");
            }
            else
            {
                // There are no resources defined in the config so let's just grab files
                this.Log.Trace("Preparing output files for resources");

                foreach (var file in files)
                {
                    try
                    {
                        this.Log.Trace("Reading output file " + file.Value);
                        var content = File.ReadAllBytes(file.Value);

                        resourcesToEmbed.Add(file.Key, content);
                        this.Log.Trace("Read " + content.Length + " bytes");
                    }
                    catch (Exception ex)
                    {
                        this.Log.Error(ex.ToString());
                        throw;
                    }
                }

                this.Log.Trace("Done preparing output files for resources");
            }

            return resourcesToEmbed;
        }

        private void GenerateResourseCaption(StringBuilder resourceBuffer, ResourceConfigItem resource)
        {
            this.Log.Trace("Writing caption for resource config item " + resource.Name);

            var captionInfo = PrepareResourseCaptionInfo(resource);

            NewLine(resourceBuffer, "/*");

            WriteResourceCaptionLine(resourceBuffer, captionInfo, " * @");

            NewLine(resourceBuffer, "*/");

            this.Log.Trace("Done writing caption for resource config item " + resource.Name);
        }

        private Dictionary<string, string> PrepareResourseCaptionInfo(ResourceConfigItem resource)
        {
            var assemblyInfo = this.GetExecutingAssemblyVersion();

            string version = null;
            string author = null;
            string date = DateTime.Now.ToString("yyyy-MM-dd");
            string copyright = null;

            if (assemblyInfo == null)
            {
                this.Log.Error("Could not get assembly version to generate caption for resourse " + resource.Name);
            }
            else
            {
                version = assemblyInfo.ProductVersion;
                author = assemblyInfo.CompanyName;
                copyright = assemblyInfo.LegalCopyright;
            }

            var captionInfo = new Dictionary<string, string>
            {
                ["version"] = version,
                ["author"] = author,
                ["date"] = date,
                ["copyright"] = copyright
            };

            var caption = resource.CaptionInfo;
            if (caption != null && caption.Any())
            {
                var keys = new List<string>(caption.Keys);
                foreach (var key in keys)
                {
                    string v;
                    if (captionInfo.TryGetValue(key, out v))
                    {
                        var s = caption[key];
                        caption[key] = string.Format(s, v);
                    }
                }
            }
            else
            {
                caption = captionInfo;
            }

            return caption;
        }

        private static void WriteResourceCaptionLine(StringBuilder sb, Dictionary<string, string> info, string linePrefix, int? firstColumnSize = null)
        {
            var prefixLength = linePrefix.Length;

            if (!firstColumnSize.HasValue)
            {
                firstColumnSize = info.Keys.Max(x => x.Length) + prefixLength + 1;
            }

            foreach (var d in info)
            {
                sb.Append(linePrefix + d.Key);

                var cpl = firstColumnSize.Value - prefixLength - d.Key.Length;
                if ( cpl > 0 )
                {
                    sb.Append(new string(' ', cpl));
                }

                sb.Append(": ");

                NewLine(sb, d.Value);
            }
        }

        private void ReadResourseFiles(string outputPath, StringBuilder resourceBuffer, ResourceConfigItem item)
        {
            this.Log.Trace("Reading resource with " + item.Files.Length + " items");

            foreach (var fileName in item.Files)
            {
                this.Log.Trace("Reading resource item(s) in location " + fileName);

                try
                {
                    string directoryPath;

                    directoryPath = outputPath;

                    var dirPathInFileName = Path.GetDirectoryName(fileName);
                    var filePathCleaned = fileName;
                    if (!string.IsNullOrEmpty(dirPathInFileName))
                    {
                        directoryPath = Path.Combine(directoryPath, dirPathInFileName);
                        this.Log.Trace("Cleaned folder path part: " + dirPathInFileName + " from location: " + fileName + "and added to the directory path: " + directoryPath);

                        filePathCleaned = Path.GetFileName(filePathCleaned);
                    }

                    var directory = new DirectoryInfo(directoryPath);

                    if (!directory.Exists)
                    {
                        throw new InvalidOperationException("Could not find any folder: " + directory.FullName + " for resource " + item.Name + " and location " + fileName);
                    }

                    this.Log.Trace("Searching files for resources in folder: " + directoryPath);

                    var files = directory.GetFiles(filePathCleaned, SearchOption.TopDirectoryOnly);

                    if (!files.Any())
                    {
                        throw new InvalidOperationException("Could not find any file in folder: " + directory.FullName + " for resource " + item.Name + " and location " + fileName);
                    }

                    foreach (var file in files)
                    {
                        NewLine(resourceBuffer);

                        this.Log.Trace("Reading resource item at " + file.FullName);

                        var content = File.ReadAllText(file.FullName);
                        resourceBuffer.Append(content);

                        this.Log.Trace("Read " + content.Length + " bytes");
                    }
                }
                catch (Exception ex)
                {
                    this.Log.Error(ex.ToString());
                    throw;
                }
            }
        }

        private string NormalizePath(string value)
        {
            value = value.Replace(@"\", ".");
            string path = value.LeftOfRightmostOf('.').LeftOfRightmostOf('.');
            string name = value.Substring(path.Length);
            return path.Replace('-', '_') + name;
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

        public void ExtractCore(string outputPath, bool nodebug = false)
        {
            var minifier = new Minifier();

            foreach (var reference in this.References)
            {
                var listRes = reference.MainModule.Resources.FirstOrDefault(r => r.Name == Translator.BridgeResourcesList);

                if (listRes != null)
                {
                    string resourcesStr = null;
                    using (var resourcesStream = ((EmbeddedResource)listRes).GetResourceStream())
                    {
                        using (StreamReader reader = new StreamReader(resourcesStream))
                        {
                            resourcesStr = reader.ReadToEnd();
                        }
                    }

                    var resources = resourcesStr.Split('+');

                    foreach (var res in resources)
                    {
                        var parts = res.Split(':');
                        var fileName = parts[0].Trim();
                        var resName = parts[1].Trim();
                        bool isTs = resName.EndsWith(".d.ts");
                        bool isJs = resName.EndsWith(".js");

                        if (!isTs && this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified)
                        {
                            this.ExtractResourceAndWriteToFile(outputPath, reference, resName, fileName);
                        }

                        if (isTs && this.AssemblyInfo.GenerateTypeScript)
                        {
                            this.ExtractResourceAndWriteToFile(outputPath, reference, resName, fileName);
                        }

                        if (isJs && this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted)
                        {
                            if (!nodebug)
                            {
                                this.ExtractResourceAndWriteToFile(outputPath, reference, resName, fileName.ReplaceLastInstanceOf(".js", ".min.js"), (content) =>
                                {
                                    return this.Minify(minifier, content, this.GetMinifierSettings(fileName));
                                });
                            }
                        }
                    }
                }
            }

            if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.Locales))
            {
                StringBuilder bufferjs = null;
                StringBuilder bufferjsmin = null;
                if (this.AssemblyInfo.CombineLocales && !this.AssemblyInfo.CombineScripts)
                {
                    bufferjs = new StringBuilder();
                    bufferjsmin = new StringBuilder();
                }

                var bridgeAssembly = this.References.FirstOrDefault(r => r.Name.Name == "Bridge");
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
                        var name = Translator.LocalesPrefix + locale + ".js";
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
                        File.WriteAllText(file.FullName.ReplaceLastInstanceOf(".js", ".min.js"), bufferjsmin.ToString(), OutputEncoding);
                    }
                }
            }
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
                        this.SaveToFile(file.FullName.ReplaceLastInstanceOf(".js", ".min.js"), resourcesStrMin);
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
                    File.WriteAllText(file.FullName.ReplaceLastInstanceOf(".js", ".min.js"), resourcesStrMin, OutputEncoding);
                }
            }
        }

        protected virtual void ExtractResourceAndWriteToFile(string outputPath, AssemblyDefinition assembly, string resourceName, string fileName, Func<string, string> preHandler = null)
        {
            var res = assembly.MainModule.Resources.FirstOrDefault(r => r.Name == resourceName);

            var file = CreateFileDirectory(outputPath, fileName);

            string resourcesStr = null;
            using (var resourcesStream = ((EmbeddedResource)res).GetResourceStream())
            {
                using (StreamReader reader = new StreamReader(resourcesStream))
                {
                    resourcesStr = reader.ReadToEnd();
                }
            }
            var content = preHandler != null ? preHandler(resourcesStr) : resourcesStr;
            this.SaveToFile(file.FullName, content);
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

        private StringBuilder jsbuffer;
        private StringBuilder jsminbuffer;
        private List<string> removeList;

        protected virtual void SaveToFile(string fileName, string content)
        {
            bool isTs = fileName.EndsWith(".d.ts");

            if (this.AssemblyInfo.CombineScripts && !isTs)
            {
                this.Log.Trace("Combining scripts...");

                bool isJs = fileName.EndsWith(".js");
                bool isMinJs = isJs && fileName.EndsWith(".min.js");
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

            File.WriteAllText(fileName, content, OutputEncoding);

            this.Log.Trace("Save file " + fileName);
        }

        public void Flush(string path, string defaultFileName)
        {
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

            if (!defaultFileName.EndsWith(".js"))
            {
                defaultFileName = defaultFileName + ".js";
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
                File.WriteAllText(filePath, this.jsbuffer.ToString(), OutputEncoding);
            }

            if (this.jsminbuffer != null && this.jsminbuffer.Length > 0)
            {
                File.WriteAllText(filePath.ReplaceLastInstanceOf(".js", ".min.js"), this.jsminbuffer.ToString(), OutputEncoding);
            }
        }

        public void CleanOutputFolderIfRequired(string outputPath)
        {
            if (this.AssemblyInfo != null
                && (this.AssemblyInfo.CleanOutputFolderBeforeBuild || !string.IsNullOrEmpty(this.AssemblyInfo.CleanOutputFolderBeforeBuildPattern)))
            {
                var searchPattern = string.IsNullOrEmpty(this.AssemblyInfo.CleanOutputFolderBeforeBuildPattern)
                    ? "*.js|*.d.ts"
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

        public System.Diagnostics.FileVersionInfo GetExecutingAssemblyVersion()
        {
            System.Diagnostics.FileVersionInfo compilerInfo = null;
            try
            {
                var compilerAssembly = System.Reflection.Assembly.GetExecutingAssembly();
                compilerInfo = System.Diagnostics.FileVersionInfo.GetVersionInfo(compilerAssembly.Location);
            }
            catch (System.Exception ex)
            {
                this.Log.Error("Could not load executing assembly to get assembly info");
                this.Log.Error(ex.ToString());
            }

            return compilerInfo;
        }

        public System.Diagnostics.FileVersionInfo GetBridgeAssemblyVersion()
        {
            System.Diagnostics.FileVersionInfo bridgeInfo = null;
            try
            {
                bridgeInfo = System.Diagnostics.FileVersionInfo.GetVersionInfo(this.BridgeLocation);
            }
            catch (System.Exception ex)
            {
                this.Log.Error("Could not load Bridge.dll to get assembly info");
                this.Log.Error(ex.ToString());
            }

            return bridgeInfo;
        }

        private void LogProductInfo()
        {
            var compilerInfo = this.GetExecutingAssemblyVersion();

            var bridgeInfo = this.GetBridgeAssemblyVersion();

            this.Log.Info("Product info:");
            if (compilerInfo != null)
            {
                this.Log.Info(string.Format("\t{0} version {1}", compilerInfo.ProductName, compilerInfo.ProductVersion));
            }
            else
            {
                this.Log.Info("Not found");
            }

            if (bridgeInfo != null)
            {
                this.Log.Info(string.Format("\t[{0} Framework, version {1}]", bridgeInfo.ProductName, bridgeInfo.ProductVersion));
            }

            if (compilerInfo != null)
            {
                this.Log.Info("\t" + compilerInfo.LegalCopyright);
            }
        }
    }
}