using Bridge.Contract;
using Microsoft.Ajax.Utilities;
using Mono.Cecil;
using Object.Net.Utilities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    public partial class Translator : ITranslator
    {
        public const string Bridge_ASSEMBLY = "Bridge";
        public const string BridgeResourcesList = "Bridge.Resources.list";
        private static readonly Encoding OutputEncoding = System.Text.Encoding.UTF8;
        private static readonly string[] MinifierCodeSettingsInternalFileNames = new string[] { "bridge.js", "bridge.min.js", "bridge.collections.js", "bridge.collections.min.js" };

        private static readonly CodeSettings MinifierCodeSettingsSafe = new CodeSettings
        {
            EvalTreatment = Microsoft.Ajax.Utilities.EvalTreatment.MakeAllSafe,
            LocalRenaming = Microsoft.Ajax.Utilities.LocalRenaming.KeepAll,
            TermSemicolons = true,
            StrictMode = true
        };

        private static readonly CodeSettings MinifierCodeSettingsInternal = new CodeSettings
        {
            TermSemicolons = true,
            StrictMode = true
        };

        private static readonly CodeSettings MinifierCodeSettingsLocales = new CodeSettings
        {
            TermSemicolons = true
        };

        public const string LocalesPrefix = "Bridge.Resources.Locales.";

        public Translator(string location, bool fromTask = false)
        {
            this.Location = location;
            this.Validator = this.CreateValidator();
            this.DefineConstants = new List<string>() { "BRIDGE" };
            this.FromTask = fromTask;
        }

        public Translator(string folder, string source, bool recursive, string lib)
        {
            this.Recursive = recursive;
            this.Source = source;
            this.FolderMode = true;
            this.Location = folder;
            this.AssemblyLocation = lib;
            this.Validator = this.CreateValidator();
            this.DefineConstants = new List<string>() { "BRIDGE" };
        }

        public Dictionary<string, string> Translate()
        {
            var logger = this.Log;
            logger.Info("Translating...");

            var config = this.ReadConfig();

            if (config.LoggerLevel.HasValue)
            {
                var l = logger as Bridge.Translator.Logging.Logger;
                if (l != null)
                {
                    l.LoggerLevel = config.LoggerLevel.Value;
                }
            }

            logger.Trace("Read config file: " + Utils.AssemblyConfigHelper.ConfigToString(config));

            if (!string.IsNullOrWhiteSpace(config.Configuration))
            {
                this.Configuration = config.Configuration;
                logger.Trace("Set configuration: " + this.Configuration);
            }

            if (config.DefineConstants != null && config.DefineConstants.Count > 0)
            {
                this.DefineConstants.AddRange(config.DefineConstants);
                this.DefineConstants = this.DefineConstants.Distinct().ToList();

                logger.Trace("Set constants: " + string.Join(",", this.DefineConstants));
            }

            if (this.FolderMode)
            {
                this.ReadFolderFiles();
                logger.Trace("Read folder files");
            }
            else
            {
                this.ReadProjectFile();
                logger.Trace("Read project file");

                if (this.Rebuild || !File.Exists(this.AssemblyLocation))
                {
                    this.BuildAssembly();
                    logger.Trace("Build assembly");
                }
            }

            var references = this.InspectReferences();
            this.References = references;

            this.Plugins = Bridge.Translator.Plugins.GetPlugins(this, config, logger);
            this.Plugins.OnConfigRead(config);

            if (!string.IsNullOrWhiteSpace(config.BeforeBuild))
            {
                try
                {
                    logger.Trace("Running BeforeBuild event");
                    this.RunEvent(config.BeforeBuild);
                }
                catch (Exception exc)
                {
                    var message = "Error: Unable to run beforeBuild event command: " + exc.Message + "\nStack trace:\n" + exc.StackTrace;

                    logger.Error("Exception occurred. Message: " + message);

                    throw new Bridge.Translator.Exception(message);
                }
            }

            logger.Trace("BuildSyntaxTree");
            this.BuildSyntaxTree();
            var resolver = new MemberResolver(this.ParsedSourceFiles, Emitter.ToAssemblyReferences(references));

            this.InspectTypes(resolver, config);

            resolver.CanFreeze = true;
            var emitter = this.CreateEmitter(resolver);
            emitter.Translator = this;
            emitter.AssemblyInfo = this.AssemblyInfo;
            emitter.References = references;
            emitter.SourceFiles = this.SourceFiles;
            emitter.Log = this.Log;
            emitter.Plugins = this.Plugins;

            this.SortReferences();
            this.Plugins.BeforeEmit(emitter, this);
            this.Outputs = emitter.Emit();
            this.Plugins.AfterEmit(emitter, this);

            logger.Info("Translating done");

            return this.Outputs;
        }

        protected virtual void SortReferences()
        {
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

        private static void NewLine(StringBuilder sb, string line)
        {
            sb.Append(line);
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
                string extension = Path.GetExtension(fileName);
                bool isJs = extension == ('.' + Bridge.Translator.AssemblyInfo.JAVASCRIPT_EXTENSION);

                // We can only have Beautified, Minified or Both, so this test has inverted logic:
                // output beautified if not minified only == (output beautified or output both)
                // Check by @vladsch: Output anyway if the class is not a JavaScript file.
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified || !isJs)
                {
                    string header = GetOutputHeader(isJs, isJs);
                    var file = CreateFileDirectory(filePath);

                    logger.Trace("Output non-minified " + file.FullName);
                    this.SaveToFile(file.FullName, string.IsNullOrWhiteSpace(header) ? code : header + code);
                    files.Add(fileName, file.FullName);
                }

                // Like above test: output minified if not beautified only == (out minified or out both)
                // Check by @vladsch: Output minified is allowed only and only if it is a JavaScript being output.
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted && isJs)
                {
                    var fileNameMin = Path.GetFileNameWithoutExtension(filePath) + ".min" + extension;

                    var file = CreateFileDirectory(Path.GetDirectoryName(filePath), fileNameMin);
                    logger.Trace("Output non-formatted " + file.FullName);

                    this.SaveToFile(file.FullName, minifier.MinifyJavaScript(code, this.GetMinifierSettings(fileNameMin)));
                }
            }

            if (this.AssemblyInfo.InjectScriptToAssembly)
            {
                logger.Trace("Injecting resources");
                this.InjectResources(files);
            }

            if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.AfterBuild))
            {
                try
                {
                    logger.Trace("Run AfterBuild event");
                    this.RunEvent(this.AssemblyInfo.AfterBuild);
                }
                catch (Exception ex)
                {
                    var message = "Error: Unable to run afterBuild event command: " + ex.Message + "\nStack trace:\n" + ex.StackTrace;

                    logger.Error(message);
                    throw new Bridge.Translator.Exception(message);
                }
            }

            logger.Trace("SaveTo path = " + path + " done");
        }

        protected virtual void InjectResources(Dictionary<string, string> files)
        {
            if (files == null || files.Count == 0)
            {
                return;
            }

            var assemblyDef = this.AssemblyDefinition;
            var resources = assemblyDef.MainModule.Resources;
            var resourcesList = new List<string>();

            foreach (var file in files)
            {
                var name = file.Key;
                name = this.NormalizePath(name);
                var newResource = new EmbeddedResource(name, ManifestResourceAttributes.Public, File.ReadAllBytes(file.Value));
                resources.Add(newResource);
                resourcesList.Add(file.Key + ":" + name);
            }

            StringBuilder sb = new StringBuilder();
            foreach (var res in resourcesList)
            {
                sb.Append(res).Append("+");
            }
            sb.Remove(sb.Length - 1, 1);

            var listResources = new EmbeddedResource(Translator.BridgeResourcesList, ManifestResourceAttributes.Public, OutputEncoding.GetBytes(sb.ToString()));
            resources.Add(listResources);

            assemblyDef.Write(this.AssemblyLocation);
        }

        private string NormalizePath(string value)
        {
            value = value.Replace(@"\", ".");
            string path = value.LeftOfRightmostOf('.').LeftOfRightmostOf('.');
            string name = value.Substring(path.Length);
            return path.Replace('-', '_') + name;
        }

        private string GetOutputHeader(bool needGlobalComment, bool needStrictModeInstruction)
        {
            if (this.NoStrictModeAndGlobal)
            {
                needGlobalComment = false;
                needStrictModeInstruction = false;
            }

            string header = needGlobalComment ? "/* global Bridge */\n\n" : string.Empty;
            header = header + (needStrictModeInstruction ? "\"use strict\";\n\n" : string.Empty);

            return header;
        }

        protected virtual Emitter CreateEmitter(IMemberResolver resolver)
        {
            return new Emitter(this.TypeDefinitions, this.BridgeTypes, this.Types, this.Validator, resolver, this.TypeInfoDefinitions);
        }

        protected virtual Validator CreateValidator()
        {
            return new Validator();
        }

        public void ExtractCore(string outputPath, bool nodebug = false)
        {
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
                                    var minifier = new Minifier();
                                    return minifier.MinifyJavaScript(content, this.GetMinifierSettings(fileName));
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
                var minifier = new Minifier();
                resourcesStrMin = minifier.MinifyJavaScript(resourcesStr, MinifierCodeSettingsLocales);
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

        private CodeSettings GetMinifierSettings(string fileName)
        {
            //Different settings depending on whether a file is an internal Bridge (like bridge.js) or user project's file
            if (MinifierCodeSettingsInternalFileNames.Contains(fileName.ToLower()))
            {
                return MinifierCodeSettingsInternal;
            }

            var settings = MinifierCodeSettingsSafe;
            if (this.NoStrictModeAndGlobal)
            {
                settings = settings.Clone();
                settings.StrictMode = false;
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
    }
}
