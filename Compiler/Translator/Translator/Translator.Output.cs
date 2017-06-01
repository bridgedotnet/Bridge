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

        protected void GenerateHtml()
        {
            this.Log.Trace("GenerateHtml...");

            if (this.AssemblyInfo.Html.Disabled)
            {
                this.Log.Trace("GenerateHtml skipped as disabled in config.");
                return;
            }

            var htmlTemplate = "";
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