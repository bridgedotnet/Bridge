using Bridge.Contract;
using Bridge.Contract.Constants;
using Bridge.Translator.Logging;
using Microsoft.Ajax.Utilities;
using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    public partial class Translator
    {
        public virtual void Save(string projectOutputPath, string defaultFileName)
        {
            var logger = this.Log;
            logger.Info("Starts Save with projectOutputPath = " + projectOutputPath);

            foreach (var item in this.Outputs.GetOutputs())
            {
                logger.Trace("Output " + item.Name);

                string filePath = DefineOutputItemFullPath(item, projectOutputPath, defaultFileName);

                if (item.IsEmpty && (item.MinifiedVersion == null || item.MinifiedVersion.IsEmpty))
                {
                    logger.Trace("Output " + filePath + " is empty");
                    continue;
                }

                var file = FileHelper.CreateFileDirectory(filePath);
                logger.Trace("Output full name " + file.FullName);

                byte[] buffer = null;
                string content = null;

                if (CheckIfRequiresSourceMap(item))
                {
                    content = item.Content.GetContentAsString();
                    content = this.GenerateSourceMap(file.FullName, content);

                    item.HasGeneratedSourceMap = true;

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

        public void Report(string projectOutputPath)
        {
            var logger = this.Log;

            logger.Trace("Report...");

            var config = this.AssemblyInfo;

            if (!config.Report.Enabled)
            {
                logger.Trace("Report skipped as disabled in config.");
                return;
            }

            var reportContent = this.Outputs.Report.Content.Builder;

            string filePath = DefineOutputItemFullPath(this.Outputs.Report, projectOutputPath, null);

            var file = FileHelper.CreateFileDirectory(filePath);
            logger.Trace("Report file full name: " + file.FullName);

            this.SaveToFile(file.FullName, reportContent.ToString());

            logger.Trace("Report done");

        }

        private string DefineOutputItemFullPath(TranslatorOutputItem item, string projectOutputPath, string defaultFileName)
        {
            var fileName = item.Name;
            var logger = this.Log;

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

            filePath = Path.GetFullPath(filePath);

            item.FullPath = new Uri(filePath, UriKind.RelativeOrAbsolute);

            return filePath;
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

                string logFileFullPath = null;
                var l = this.Log as Logger;

                if (l != null)
                {
                    var fileWriter = l.GetFileLogger();

                    if (fileWriter != null)
                    {
                        logFileFullPath = fileWriter.FullName;
                    }
                }

                CleanDirectory(outputPath, searchPattern, logFileFullPath);
            }
        }

        protected virtual void AddMainOutputs(List<TranslatorOutputItem> outputs)
        {
            this.Outputs.Main.AddRange(outputs);
        }

        protected virtual void AddLocaleOutput(EmbeddedResource resource, string outputPath)
        {
            var fileName = resource.Name.Substring(Translator.LocalesPrefix.Length);

            if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.LocalesOutput))
            {
                outputPath = Path.Combine(outputPath, this.AssemblyInfo.LocalesOutput);
            }

            var content = this.ReadEmbeddedResource(resource);

            Emitter.AddOutputItem(this.Outputs.Locales, fileName, new StringBuilder(content), TranslatorOutputKind.Locale, outputPath);
        }

        protected virtual void AddLocaleOutputs(IEnumerable<EmbeddedResource> resources, string outputPath)
        {
            foreach (var resource in resources)
            {
                AddLocaleOutput(resource, outputPath);
            }
        }

        protected virtual void AddReferencedOutput(string outputPath, AssemblyDefinition assembly, string resourceName, string fileName, Func<string, string> preHandler = null)
        {
            var res = assembly.MainModule.Resources.FirstOrDefault(r => r.Name == resourceName);

            if (res == null)
            {
                throw new InvalidOperationException("Could not read resource " + resourceName + " in " + assembly.FullName);
            }

            using (var resourcesStream = ((EmbeddedResource)res).GetResourceStream())
            {
                if (FileHelper.IsJS(fileName) || preHandler != null)
                {
                    using (var reader = new StreamReader(resourcesStream))
                    {
                        var content = reader.ReadToEnd();
                        Emitter.AddOutputItem(this.Outputs.References, fileName, content, TranslatorOutputKind.Reference, outputPath);
                    }
                }
                else
                {
                    var binary = ReadStream(resourcesStream);
                    Emitter.AddOutputItem(this.Outputs.References, fileName, binary, TranslatorOutputKind.Reference, outputPath);
                }
            }
        }

        protected virtual void AddExtractedResourceOutput(ResourceConfigItem resource, byte[] code)
        {
            Emitter.AddOutputItem(this.Outputs.Resources, resource.Name, code, TranslatorOutputKind.Resource, resource.Output);
        }

        public void ExtractCore(string outputPath, string projectPath)
        {
            this.Log.Info("Extracting core scripts...");

            ExtractResources(outputPath, projectPath);

            ExtractLocales(outputPath);

            this.Log.Info("Done extracting core scripts");
        }

        private void ExtractResources(string outputPath, string projectPath)
        {
            this.Log.Info("Extracting resources...");

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
                        this.Log.Trace("Found resource option for resource name " + resName + " and reference " + resourceExtractItems.Assembly);

                        if (resourceExtractItems.Extract != true)
                        {
                            this.Log.Info("Skipping resource " + resName + " as it has setting resources.extract != true");
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
                        if (resourceOption.Default != null && resourceOption.Default.Extract != true)
                        {
                            this.Log.Info("Skipping resource " + resName + " as it has no setting resources.extract = true and default setting is resources.extract != true");
                            continue;
                        }

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

                    if (!isTs || this.AssemblyInfo.GenerateTypeScript)
                    {
                        this.AddReferencedOutput(resourceOutputDirName, reference, resName, resourceOutputFileName);
                    }
                }
            }

            this.Log.Info("Done extracting resources");
        }

        private void ExtractLocales(string outputPath)
        {
            if (string.IsNullOrWhiteSpace(this.AssemblyInfo.Locales))
            {
                this.Log.Info("Skipping extracting Locales");
                return;
            }

            this.Log.Info("Extracting Locales...");

            var bridgeAssembly = this.References.FirstOrDefault(r => r.Name.Name == CS.NS.BRIDGE);
            var localesResources = bridgeAssembly.MainModule.Resources.Where(r => r.Name.StartsWith(Translator.LocalesPrefix)).Cast<EmbeddedResource>();
            var locales = this.AssemblyInfo.Locales.Split(';');

            if (locales.Any(x => x == "all"))
            {
                this.AddLocaleOutputs(localesResources, outputPath);
            }
            else
            {
                foreach (var locale in locales)
                {
                    if (locale.Contains("*"))
                    {
                        var name = Translator.LocalesPrefix + locale.SubstringUpToFirst('*');
                        var maskedResources = localesResources.Where(r => r.Name.StartsWith(name));

                        this.AddLocaleOutputs(maskedResources, outputPath);
                    }
                    else
                    {
                        var name = Translator.LocalesPrefix + locale + Files.Extensions.JS;
                        var maskedResource = localesResources.First(r => r.Name == name);

                        this.AddLocaleOutput(maskedResource, outputPath);
                    }
                }
            }

            //if ((bufferjs != null && bufferjs.Length > 0) || (bufferjsmin != null && bufferjsmin.Length > 0))
            //{
            //    if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.LocalesOutput))
            //    {
            //        outputPath = Path.Combine(outputPath, this.AssemblyInfo.LocalesOutput);
            //    }

            //    var defaultFileName = this.AssemblyInfo.LocalesFileName ?? "Bridge.Locales.js";
            //    var fileName = defaultFileName.Replace(":", "_");
            //    var oldFNlen = fileName.Length;
            //    while (Path.IsPathRooted(fileName))
            //    {
            //        fileName = fileName.TrimStart(Path.DirectorySeparatorChar, '/', '\\');
            //        if (fileName.Length == oldFNlen)
            //        {
            //            break;
            //        }
            //        oldFNlen = fileName.Length;
            //    }

            //    var file = CreateFileDirectory(outputPath, fileName);

            //    if (bufferjs != null && bufferjs.Length > 0)
            //    {
            //        File.WriteAllText(file.FullName, bufferjs.ToString(), OutputEncoding);
            //        this.AddOutputItem(this.OutputItems.Locales, file.Name, Path.GetDirectoryName(file.FullName));
            //    }

            //    if (bufferjsmin != null && bufferjsmin.Length > 0)
            //    {
            //        var minifiedName = FileHelper.GetMinifiedJSFileName(file.FullName);
            //        File.WriteAllText(minifiedName, bufferjsmin.ToString(), OutputEncoding);
            //        this.AddOutputItem(this.OutputItems.Locales, minifiedName, Path.GetDirectoryName(file.FullName));
            //    }
            //}

            this.Log.Info("Done extracting Locales");
        }

        internal void Combine(string fileName)
        {
            CombineLocales();
            CombineProjectOutput(fileName);
        }

        private void CombineLocales()
        {
            this.Log.Trace("Combining locales...");

            if (!this.AssemblyInfo.CombineLocales && !this.AssemblyInfo.CombineScripts)
            {
                this.Log.Trace("Skipping combining locales as CombineLocales and CombineScripts config oiptions are both switched off.");
                return;
            }

            var fileName = this.AssemblyInfo.LocalesFileName ?? Translator.DefaultLocalesOutputName;

            var combinedLocales = Combine(null, this.Outputs.Locales, fileName, "locales", TranslatorOutputKind.Locale);

            if (combinedLocales != null && !string.IsNullOrWhiteSpace(this.AssemblyInfo.LocalesOutput))
            {
                combinedLocales.Location = this.AssemblyInfo.LocalesOutput;
            }

            this.Outputs.CombinedLocales = combinedLocales;

            this.Outputs.Locales.Clear();

            this.Log.Trace("Combining locales done");
        }

        private void CombineProjectOutput(string fileName)
        {
            this.Log.Trace("Combining project outputs...");

            if (!this.AssemblyInfo.CombineScripts)
            {
                this.Log.Trace("Skipping project outputs as CombineScripts config option switched off.");
                return;
            }

            var needNewLine = false;
            StringBuilder buffer = null;
            int bufferLength = 0;

            var combinedOutput = Combine(null, this.Outputs.References, fileName, "project references", TranslatorOutputKind.ProjectOutput);

            if (combinedOutput != null)
            {
                buffer = combinedOutput.Content.Builder;

                bufferLength = buffer.Length;

                if (bufferLength > 0)
                {
                    needNewLine = true;
                }
            }

            if (this.Outputs.CombinedLocales != null)
            {
                if (needNewLine)
                {
                    NewLine(buffer);
                    needNewLine = false;
                }

                combinedOutput = Combine(combinedOutput, new List<TranslatorOutputItem> { this.Outputs.CombinedLocales }, fileName, "combined locales output", TranslatorOutputKind.ProjectOutput);

                this.Outputs.CombinedLocales = null;

                if (combinedOutput != null)
                {
                    buffer = combinedOutput.Content.Builder;

                    if (buffer.Length > bufferLength)
                    {
                        needNewLine = true;
                    }

                    bufferLength = buffer.Length;
                }
            }

            if (needNewLine)
            {
                NewLine(buffer);
                needNewLine = false;
            }

            combinedOutput = Combine(combinedOutput, this.Outputs.Main, fileName, "project main output", TranslatorOutputKind.ProjectOutput);

            this.Outputs.Combined = combinedOutput;

            this.Log.Trace("Combining project outputs done");
        }

        private TranslatorOutputItem Combine(TranslatorOutputItem target, List<TranslatorOutputItem> outputs, string fileName, string message, TranslatorOutputKind outputKind, TranslatorOutputType[] filter = null)
        {
            this.Log.Trace("There are " + outputs.Count + " " + message);

            if (outputs.Count <= 0)
            {
                this.Log.Trace("Skipping combining " + message + " as empty.");
                return null;
            }

            if (filter == null)
            {
                filter = new[] { TranslatorOutputType.JavaScript };
            }

            if (target != null)
            {
                this.Log.Trace("Using exisiting target " + target.Name);
            }
            else
            {
                this.Log.Trace("Using " + fileName + " as a fileName for combined " + message);
            }

            StringBuilder buffer = null;
            StringBuilder minifiedBuffer = null;

            if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified)
            {
                buffer = target != null
                            ? target.Content.Builder
                            : new StringBuilder();
            }

            if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted)
            {
                minifiedBuffer = (target != null && target.MinifiedVersion != null)
                                    ? target.MinifiedVersion.Content.Builder
                                    : new StringBuilder();
            }

            bool firstLine = true;

            foreach (var output in outputs)
            {
                if (filter != null && !filter.Contains(output.OutputType))
                {
                    continue;
                }

                string formattedContent = null;
                string minifiedContent = null;

                if (!output.IsEmpty)
                {
                    formattedContent = output.Content.GetContentAsString();
                }

                if (output.MinifiedVersion != null && !output.MinifiedVersion.IsEmpty)
                {
                    minifiedContent = output.MinifiedVersion.Content.GetContentAsString();
                }

                if (formattedContent == null && minifiedContent == null)
                {
                    output.IsEmpty = true;
                    if (output.MinifiedVersion != null)
                    {
                        output.MinifiedVersion.IsEmpty = true;
                    }

                    this.Log.Trace("Skipping " + output.Name + " as it does not have formatted content nor minified.");
                    continue;
                }

                if (buffer != null)
                {
                    if (!firstLine)
                    {
                        firstLine = false;
                        NewLine(buffer);
                    }

                    firstLine = false;

                    if (formattedContent != null)
                    {
                        buffer.Append(formattedContent);
                    }
                    else if (minifiedContent != null)
                    {
                        buffer.Append(minifiedContent);
                    }
                }

                if (minifiedBuffer != null)
                {
                    if (minifiedContent != null)
                    {
                        minifiedBuffer.Append(minifiedContent);
                    }
                    else
                    {
                        this.Log.Warn("Output " + output.Name + " does not contain minified version");
                    }
                }

                output.IsEmpty = true;

                if (output.MinifiedVersion != null)
                {
                    output.MinifiedVersion.IsEmpty = true;
                }
            }

            if (target != null)
            {
                return target;
            }

            var adjustedFileName = fileName.Replace(":", "_");
            var fileNameLenth = fileName.Length;

            while (Path.IsPathRooted(adjustedFileName))
            {
                adjustedFileName = adjustedFileName.TrimStart(Path.DirectorySeparatorChar, '/', '\\');

                if (adjustedFileName.Length == fileNameLenth)
                {
                    break;
                }

                fileNameLenth = adjustedFileName.Length;
            }

            if (adjustedFileName != fileName)
            {
                fileName = adjustedFileName;
                this.Log.Trace("Adjusted fileName: " + fileName);
            }

            var checkExtentionFileName = FileHelper.CheckFileNameAndOutputType(fileName, TranslatorOutputType.JavaScript);

            if (checkExtentionFileName != null)
            {
                fileName = checkExtentionFileName;
                this.Log.Trace("Extention checked fileName: " + fileName);
            }

            var r = new TranslatorOutputItem
            {
                Content = buffer,
                OutputType = TranslatorOutputType.JavaScript,
                OutputKind = outputKind | TranslatorOutputKind.Combined,
                Name = fileName
            };

            if (minifiedBuffer != null)
            {
                var minifiedName = FileHelper.GetMinifiedJSFileName(r.Name);

                r.MinifiedVersion = new TranslatorOutputItem
                {
                    IsMinified = true,
                    Name = minifiedName,
                    OutputType = r.OutputType,
                    OutputKind = r.OutputKind | TranslatorOutputKind.Minified,
                    Location = r.Location,
                    Content = minifiedBuffer
                };
            }

            return r;
        }

        internal void Minify()
        {
            this.Log.Trace("Minification...");

            if (this.AssemblyInfo.OutputFormatting == JavaScriptOutputType.Formatted)
            {
                this.Log.Trace("No minification required as OutputFormatting = Formatted");
                return;
            }

            Minify(this.Outputs.References, GetMinifierSettings);
            Minify(this.Outputs.Locales, (s) => MinifierCodeSettingsLocales);
            Minify(this.Outputs.Main, GetMinifierSettings);

            this.Log.Trace("Minification done");
        }

        private void Minify(IEnumerable<TranslatorOutputItem> outputs, Func<string, CodeSettings> minifierSettingsResolver = null)
        {
            if (outputs == null)
            {
                return;
            }

            foreach (var output in outputs)
            {
                CodeSettings settings;

                if (minifierSettingsResolver != null)
                {
                    settings = minifierSettingsResolver(output.Name);
                }
                else
                {
                    settings = Translator.MinifierCodeSettingsSafe;
                }

                Minify(output, settings);
            }
        }

        private void Minify(TranslatorOutputItem output, CodeSettings minifierSettings)
        {
            if (output.OutputType != TranslatorOutputType.JavaScript)
            {
                return;
            }

            if (output.MinifiedVersion != null)
            {
                this.Log.Trace(output.Name + " has already a minified version " + output.MinifiedVersion.Name);
                return;
            }

            var formatted = output.IsEmpty ? null : output.Content.GetContentAsString();

            if (formatted == null)
            {
                this.Log.Trace("Content of " + output.Name + " is empty - skipping it a nothing to minifiy");
                return;
            }

            var minifiedName = FileHelper.GetMinifiedJSFileName(output.Name);

            var minifiedContent = this.Minify(new Minifier(), formatted, minifierSettings);

            output.MinifiedVersion = new TranslatorOutputItem
            {
                IsMinified = true,
                Name = minifiedName,
                OutputType = output.OutputType,
                OutputKind = output.OutputKind | TranslatorOutputKind.Minified,
                Location = output.Location,
                Content = minifiedContent
            };

            if (this.AssemblyInfo.OutputFormatting == JavaScriptOutputType.Minified)
            {
                output.IsEmpty = true;
            }
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

        private void CleanDirectory(string outputPath, string searchPattern, params string[] systemFilesToIgnore)
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
                var filesToSkip = new List<Tuple<string, FileInfo>>();
                foreach (var pattern in patterns)
                {
                    if (string.IsNullOrEmpty(pattern))
                    {
                        continue;
                    }

                    if (pattern.StartsWith("!"))
                    {
                        if (pattern.Length > 1)
                        {
                            filesToSkip.AddRange(outputDirectory.GetFiles(pattern.Substring(1), SearchOption.AllDirectories).Select(x => Tuple.Create(pattern, x)));
                        }
                    }
                    else
                    {
                        filesToDelete.AddRange(outputDirectory.GetFiles(pattern, SearchOption.AllDirectories));
                    }
                }

                if (systemFilesToIgnore != null && systemFilesToIgnore.All(x => string.IsNullOrEmpty(x)))
                {
                    systemFilesToIgnore = null;
                }

                foreach (var file in filesToDelete)
                {
                    if (systemFilesToIgnore != null && systemFilesToIgnore.Any(x => x == file.FullName))
                    {
                        this.Log.Trace("skip cleaning " + file.FullName + " as it is a system file");
                        continue;
                    }

                    var skipPattern = filesToSkip.FirstOrDefault(x => x.Item2.FullName == file.FullName);

                    if (skipPattern != null)
                    {
                        this.Log.Trace("skip cleaning " + file.FullName + " as it has skip pattern " + skipPattern.Item1);
                        continue;
                    }

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