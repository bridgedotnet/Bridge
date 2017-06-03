using Bridge.Contract;
using Bridge.Contract.Constants;
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

            Emitter.AddOutputItem(this.Outputs.Locales, fileName, new StringBuilder(content), outputPath);
        }

        protected virtual void AddLocaleOutputs(IEnumerable<EmbeddedResource> resources, string outputPath)
        {
            foreach (var resource in resources)
            {
                AddLocaleOutput(resource, outputPath);
            }
        }

        protected virtual void AddResourceOutput(string outputPath, AssemblyDefinition assembly, string resourceName, string fileName, Func<string, string> preHandler = null)
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
                        Emitter.AddOutputItem(this.Outputs.References, fileName, content, outputPath);
                    }
                }
                else
                {
                    var binary = ReadStream(resourcesStream);
                    Emitter.AddOutputItem(this.Outputs.References, fileName, binary, outputPath);
                }
            }
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

                    if (!isTs || this.AssemblyInfo.GenerateTypeScript)
                    {
                        this.AddResourceOutput(resourceOutputDirName, reference, resName, resourceOutputFileName);
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

            var bridgeAssembly = this.References.FirstOrDefault(r => r.Name.Name == CS.NS.ROOT);
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

            var fileName = this.AssemblyInfo.LocalesFileName ?? "Bridge.Locales.js";

            this.Outputs.CombinedLocales = Combine(null, this.Outputs.Locales, fileName, "locales");

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

            var combinedOutput = Combine(null, this.Outputs.References, fileName, "project references", TranslatorOutputTypes.JavaScript);

            if (this.Outputs.CombinedLocales != null)
            {
                this.Log.Trace("Added combined locales.");

                NewLine(combinedOutput.Content.Builder);
                combinedOutput.Content.Builder.Append(this.Outputs.CombinedLocales.Content.GetContent(true));

                this.Outputs.CombinedLocales = null;
            }

            Combine(combinedOutput, this.Outputs.Main, fileName, "project main output", TranslatorOutputTypes.JavaScript);

            this.Log.Trace("Combining project outputs done");
        }

        private TranslatorOutputItem Combine(TranslatorOutputItem target, List<TranslatorOutputItem> outputs, string fileName, string message, params TranslatorOutputTypes[] filter)
        {
            this.Log.Trace("There are " + outputs.Count + " " + message);

            if (outputs.Count <= 0)
            {
                this.Log.Trace("Skipping combining " + message + " as empty.");
                return null;
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

                if (output.MinifiedVersion != null)
                {
                    minifiedContent = output.MinifiedVersion.Content.GetContentAsString();
                }

                if (formattedContent == null && minifiedContent == null)
                {
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
                    output.IsEmpty = true;
                }
            }

            if (target != null)
            {
                return target;
            }

            fileName = fileName.Replace(":", "_");
            var fileNameLenth = fileName.Length;

            while (Path.IsPathRooted(fileName))
            {
                fileName = fileName.TrimStart(Path.DirectorySeparatorChar, '/', '\\');

                if (fileName.Length == fileNameLenth)
                {
                    break;
                }

                fileNameLenth = fileName.Length;
            }

            this.Log.Trace("Adjusted fileName: " + fileName);

            var r = new TranslatorOutputItem
            {
                Content = buffer,
                OutputType = TranslatorOutputTypes.JavaScript,
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
            if (output.OutputType != TranslatorOutputTypes.JavaScript)
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

        protected void GenerateHtml()
        {
            this.Log.Trace("GenerateHtml...");

            if (this.AssemblyInfo.Html.Disabled)
            {
                this.Log.Trace("GenerateHtml skipped as disabled in config.");
                return;
            }

            //var htmlTemplate = "";
            this.Log.Trace("Applying default html template");

            var output = this.Outputs;
            this.Log.Trace("Include " + output.References + " referenced items");
            this.Log.Trace("Include " + output.Locales + " locales");
            this.Log.Trace("Include " + output.Main + " project items");


            Func<TranslatorOutputItem, string> getOutputName = (item) =>
            {
                if (item.IsEmpty)
                {
                    return null;
                }

                if (string.IsNullOrEmpty(item.Location))
                {
                    return item.Name;
                }

                return Path.Combine(item.Location, item.Name);
            };

            //this.Log.Trace("CSS items:");
            //foreach (var outputItem in output.GetItems(TranslatorOutputTypes.StyleSheets))
            //{
            //    this.Log.Trace("CSS items:");
            //}
        }
    }
}