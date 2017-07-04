using Bridge.Contract;
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
        private class BridgeResourceInfo
        {
            public string FileName
            {
                get; set;
            }

            public string Name
            {
                get; set;
            }

            public string Path
            {
                get; set;
            }
        }

        private Dictionary<string, string> resourceHeaderInfo;
        private Dictionary<string, string> ResourceHeaderInfo
        {
            get
            {
                if (resourceHeaderInfo == null)
                {
                    resourceHeaderInfo = PrepareResourseHeaderInfo();
                }

                return resourceHeaderInfo;
            }
        }

        internal virtual string ReadEmbeddedResource(EmbeddedResource resource)
        {
            using (var resourcesStream = resource.GetResourceStream())
            {
                using (StreamReader reader = new StreamReader(resourcesStream))
                {
                    return reader.ReadToEnd();
                }
            }
        }

        public virtual void InjectResources(string outputPath, string projectPath)
        {
            this.Log.Info("Injecting resources...");

            var resourcesConfig = this.AssemblyInfo.Resources;

            if (resourcesConfig.Default != null
                && resourcesConfig.Default.Inject != true
                && !resourcesConfig.HasEmbedResources())
            {
                this.Log.Info("Resource config option to inject resources `inject` is switched off. Skipping embedding resources");
                return;
            }

            var outputs = this.Outputs;

            if (outputs.Main.Count <= 0
                && !resourcesConfig.HasEmbedResources())
            {
                this.Log.Info("No files nor resources to inject");
                return;
            }

            var resourcesToEmbed = this.PrepareAndExtractResources(outputPath, projectPath);

            this.EmbeddResources(PrepareResourcesForEmbedding(resourcesToEmbed));

            this.Log.Info("Done injecting resources");
        }

        private IEnumerable<Tuple<BridgeResourceInfo, byte[]>> PrepareAndExtractResources(string outputPath, string projectPath)
        {
            if (this.AssemblyInfo.Resources.HasEmbedResources())
            {
                // There are resources defined in the config so let's grab files
                // Find all items and put in the order
                this.Log.Trace("Preparing resources specified in config...");

                foreach (var resource in this.AssemblyInfo.Resources.EmbedItems)
                {
                    this.Log.Trace("Preparing resource " + resource.Name);

                    if (resource.Inject != true && resource.Extract != true)
                    {
                        this.Log.Trace("Skipping the resource as it has inject != true and extract != true");
                        continue;
                    }

                    using (var resourceBuffer = new MemoryStream(500 * 1024))
                    {
                        this.GenerateResourseHeader(resourceBuffer, resource, projectPath);

                        var needSourceMap = this.ReadResourseFiles(projectPath, resourceBuffer, resource);

                        if (resourceBuffer.Length > 0)
                        {
                            this.Log.Trace("Prepared file items for resource " + resource.Name);

                            var resourcePath = GetFullPathForResource(outputPath, resource);

                            var code = resourceBuffer.ToArray();

                            if (needSourceMap)
                            {
                                TranslatorOutputItemContent content = code;

                                var fullPath = Path.GetFullPath(Path.Combine(resourcePath.Item1, resourcePath.Item2));

                                content = GenerateSourceMap(fullPath, content.GetContentAsString());

                                code = content.GetContentAsBytes();
                            }

                            this.ExtractResource(resourcePath.Item1, resourcePath.Item2, resource, code);

                            var info = new BridgeResourceInfo
                            {
                                Name = resource.Name,
                                FileName = resource.Name,
                                Path = string.IsNullOrWhiteSpace(resource.Output) ? null : resource.Output
                            };

                            yield return Tuple.Create(info, code);
                        }
                        else
                        {
                            this.Log.Error("No files found for resource " + resource.Name);
                        }
                    }

                    this.Log.Trace("Done preparing resource " + resource.Name);
                }

                this.Log.Trace("Done preparing resources specified in config...");
            }
            else
            {
                // There are no resources defined in the config so let's just grab files
                this.Log.Trace("Preparing outputs for resources");

                foreach (var outputItem in this.Outputs.GetOutputs(true))
                {
                    this.Log.Trace("Getting output " + outputItem.FullPath.LocalPath);

                    var info = new BridgeResourceInfo
                    {
                        Name = outputItem.Name,
                        FileName = outputItem.Name,
                        Path = null
                    };

                    byte[] content;

                    if (!outputItem.HasGeneratedSourceMap)
                    {
                        this.Log.Trace("The output item does not have HasGeneratedSourceMap so we use it right from the Outputs");
                        content = outputItem.Content.GetContentAsBytes();
                        this.Log.Trace("The output is of content " + content.Length + " length");
                    }
                    else
                    {
                        this.Log.Trace("Reading content file as the output has HasGeneratedSourceMap");
                        content = File.ReadAllBytes(outputItem.FullPath.LocalPath);
                        this.Log.Trace("Read " + content.Length + " bytes for " + info.Name);
                    }

                    yield return Tuple.Create(info, content);
                }

                this.Log.Trace("Done preparing output files for resources");
            }
        }

        private string ReadEmbeddedResourceList(AssemblyDefinition assemblyDefinition, string listName)
        {
            this.Log.Trace("Checking if reference " + assemblyDefinition.FullName + " contains Bridge Resources List " + listName);

            var listRes = assemblyDefinition.MainModule.Resources.FirstOrDefault(x => x.Name == listName);

            if (listRes == null)
            {
                this.Log.Trace("Reference " + assemblyDefinition.FullName + " does not contain Bridge Resources List");

                return null;
            }

            string resourcesStr = null;
            using (var resourcesStream = ((EmbeddedResource)listRes).GetResourceStream())
            {
                using (StreamReader reader = new StreamReader(resourcesStream))
                {
                    this.Log.Trace("Reading Bridge Resources List");
                    resourcesStr = reader.ReadToEnd();
                    this.Log.Trace("Read Bridge Resources List: " + resourcesStr);
                }
            }

            return resourcesStr;
        }

        private BridgeResourceInfo[] GetEmbeddedResourceList(AssemblyDefinition assemblyDefinition)
        {
            // First read Json format list
            var resourcesStr = ReadEmbeddedResourceList(assemblyDefinition, Translator.BridgeResourcesJsonFormatList);

            if (resourcesStr != null)
            {
                return ParseBridgeResourceListInJsonFormat(resourcesStr);
            }

            // Then read old plus separated format list (by another file name)
            resourcesStr = ReadEmbeddedResourceList(assemblyDefinition, Translator.BridgeResourcesPlusSeparatedFormatList);

            if (resourcesStr != null)
            {
                return ParseBridgeResourceListInPlusSeparatedFormat(resourcesStr);
            }

            return new BridgeResourceInfo[0];
        }

        private static BridgeResourceInfo[] ParseBridgeResourceListInJsonFormat(string json)
        {
            var r = Newtonsoft.Json.JsonConvert.DeserializeObject<BridgeResourceInfo[]>(json);

            return r;
        }

        private static BridgeResourceInfo[] ParseBridgeResourceListInPlusSeparatedFormat(string resourcesStr)
        {
            var r = new List<BridgeResourceInfo>();

            var resources = resourcesStr.Split('+');

            foreach (var resourcePair in resources)
            {
                var parts = resourcePair.Split(':');
                var fileName = parts[0].Trim();
                var resName = parts[1].Trim();

                r.Add(new BridgeResourceInfo
                {
                    Name = resName,
                    FileName = fileName,
                    Path = null
                });
            }

            return r.ToArray();
        }

        private List<BridgeResourceInfo> PrepareResourcesForEmbedding(IEnumerable<Tuple<BridgeResourceInfo, byte[]>> resourcesToEmbed)
        {
            this.Log.Trace("PrepareResourcesForEmbedding...");

            var assemblyDef = this.AssemblyDefinition;
            var resources = assemblyDef.MainModule.Resources;
            var resourceList = new List<BridgeResourceInfo>();

            var configHelper = new ConfigHelper();

            var reportResources = new List<Tuple<string, string, string>>();

            foreach (var item in resourcesToEmbed)
            {
                var r = item.Item1;
                var name = r.Name;

                this.Log.Trace("Embedding resource " + name);

                // No resource name normalization
                //var name = this.NormalizePath(r.Name);
                //this.Log.Trace("Normalized resource name " + name);


                // Normalize resourse output path to always have '/' as a directory separator
                r.Path = configHelper.ConvertPath(r.Path, '/');

                var newResource = new EmbeddedResource(name, ManifestResourceAttributes.Private, item.Item2);

                var existingResource = resources.FirstOrDefault(x => x.Name == name);

                if (existingResource != null)
                {
                    this.Log.Trace("Removing already existed resource with the same name");
                    resources.Remove(existingResource);
                }

                resources.Add(newResource);
                resourceList.Add(r);

                var sizeInBytes = Utils.ByteSizeHelper.ToSizeInBytes(item.Item2 != null ? item.Item2.Length : 0, "0.000 KB");

                var resourceLocation = name;
                if (!string.IsNullOrEmpty(r.Path) && !string.IsNullOrEmpty(resourceLocation))
                {
                    resourceLocation = Path.Combine(
                        configHelper.ConvertPath(r.Path),
                        configHelper.ConvertPath(resourceLocation));

                    resourceLocation = configHelper.ConvertPath(resourceLocation, '/');
                }

                reportResources.Add(Tuple.Create(name, resourceLocation, sizeInBytes));

                this.Log.Trace("Added resource " + name);
            }

            BuildReportForResources(reportResources);

            this.Log.Trace("PrepareResourcesForEmbedding done");

            return resourceList;
        }

        private void BuildReportForResources(List<Tuple<string, string, string>> reportResources)
        {
            var reportBuilder = this.Outputs.Report.Content.Builder;

            if (reportBuilder == null)
            {
                return;
            }

            NewLine(reportBuilder, "Resources:");

            if (reportResources == null || !reportResources.Any())
            {
                NewLine(reportBuilder, "    No resources");
                return;
            }

            var maxResourceNameLength = reportResources.Max(x => x.Item2 != null ? x.Item2.Length : 0);
            var maxResourceSizeLength = reportResources.Max(x => x.Item3 != null ? x.Item3.Length : 0);

            foreach (var item in reportResources)
            {
                var fullPath = item.Item2;
                var length = item.Item3;

                var toAdd = Math.Abs(maxResourceNameLength + maxResourceSizeLength
                    - (fullPath != null ? fullPath.Length : 0) - (length != null ? length.Length : 0));

                var reportLine = string.Format("    {0}   {1}{2}", fullPath, new string(' ', toAdd), length);

                NewLine(reportBuilder, reportLine);
            }
        }

        private void EmbeddResources(List<BridgeResourceInfo> resourcesToEmbed)
        {
            this.Log.Trace("Embedding resources...");

            var assemblyDef = this.AssemblyDefinition;
            var resources = assemblyDef.MainModule.Resources;
            var configHelper = new ConfigHelper();

            CheckIfResourceExistsAndRemove(resources, Translator.BridgeResourcesPlusSeparatedFormatList);

            var resourceListName = Translator.BridgeResourcesJsonFormatList;
            CheckIfResourceExistsAndRemove(resources, resourceListName);

            var listArray = resourcesToEmbed.ToArray();
            var listContent = Newtonsoft.Json.JsonConvert.SerializeObject(listArray, Newtonsoft.Json.Formatting.Indented);

            var listResources = new EmbeddedResource(resourceListName, ManifestResourceAttributes.Private, Translator.OutputEncoding.GetBytes(listContent));

            resources.Add(listResources);
            this.Log.Trace("Added resource list " + resourceListName);
            this.Log.Trace(listContent);

            // Checking if mscorlib reference added and removing if added
            var mscorlib = assemblyDef.MainModule.AssemblyReferences.FirstOrDefault(r => r.Name == SystemAssemblyName);
            if (mscorlib != null)
            {
                this.Log.Trace("Removing mscorlib reference");
                assemblyDef.MainModule.AssemblyReferences.Remove(mscorlib);
            }

            var assemblyLocation = this.AssemblyLocation;

            this.Log.Trace("Writing resources into " + assemblyLocation);
            assemblyDef.Write(assemblyLocation);
            this.Log.Trace("Wrote resources into " + assemblyLocation);

            this.Log.Trace("Done embedding resources");
        }

        private void CheckIfResourceExistsAndRemove(Mono.Collections.Generic.Collection<Resource> resources, string resourceName)
        {
            var existingList = resources.FirstOrDefault(r => r.Name == resourceName);
            if (existingList != null)
            {
                this.Log.Trace("Removing already existed resource " + resourceName);
                resources.Remove(existingList);
            }
        }

        private void ExtractResource(string path, string fileName, ResourceConfigItem resource, byte[] code)
        {
            this.Log.Trace("Extracting resource " + resource.Name);

            if (!resource.Extract.HasValue || !resource.Extract.Value)
            {
                this.Log.Trace("Skipping extracting resource as no extract option enabled for this resource");
                return;
            }

            try
            {
                var fullPath = Path.GetFullPath(Path.Combine(path, fileName));

                this.Log.Trace("Writing resource " + resource.Name + " into " + fullPath);

                this.EnsureDirectoryExists(path);

                File.WriteAllBytes(fullPath, code);

                this.AddExtractedResourceOutput(resource, code);

                this.Log.Trace("Done writing resource into file");
            }
            catch (Exception ex)
            {
                this.Log.Error(ex.ToString());
                throw;
            }
        }

        private Tuple<string, string> GetFullPathForResource(string outputPath, ResourceConfigItem resource)
        {
            string resourceOutputFileName = null;
            string resourceOutputDirName = null;

            if (resource.Output != null)
            {
                this.GetResourceOutputPath(outputPath, resource, ref resourceOutputFileName, ref resourceOutputDirName);
            }

            if (resourceOutputDirName == null)
            {
                resourceOutputDirName = outputPath;
                this.Log.Trace("Using project output path " + resourceOutputDirName);
            }

            if (string.IsNullOrWhiteSpace(resourceOutputFileName))
            {
                resourceOutputFileName = resource.Name;
                this.Log.Trace("Using resource name as file name " + resourceOutputFileName);
            }

            return Tuple.Create(resourceOutputDirName, resourceOutputFileName);
        }

        private void EnsureDirectoryExists(string path)
        {
            if (!Directory.Exists(path))
            {
                this.Log.Trace("The resource path does not exist. Creating...");
                Directory.CreateDirectory(path);
                this.Log.Trace("Created directory for the resource path");
            }
        }

        public void GetResourceOutputPath(string basePath, string output, string name, bool? silent, ref string resourceOutputFileName, ref string resourceOutputDirName)
        {
            this.Log.Trace("Checking output path setting " + output);

            try
            {
                var pathParts = this.GetPathComponents(output);

                resourceOutputDirName = pathParts[0];
                this.Log.Trace("Resource output setting directory relative to base path is " + resourceOutputDirName);

                resourceOutputFileName = pathParts[1];
                this.Log.Trace("Resource output setting file name is " + resourceOutputFileName);

                if (resourceOutputDirName != null)
                {
                    this.Log.Trace("Checking resource output directory on invalid characters");
                    resourceOutputDirName = CheckInvalidCharacters(name, silent, resourceOutputDirName, this.InvalidPathChars);
                }

                if (resourceOutputDirName != null)
                {
                    this.Log.Trace("Getting absolute resource output directory");
                    resourceOutputDirName = Path.Combine(basePath, resourceOutputDirName);
                    this.Log.Trace("Resource output directory is " + resourceOutputDirName);

                    if (resourceOutputFileName != null)
                    {
                        this.Log.Trace("Checking resource output file name on invalid characters");
                        resourceOutputFileName = CheckInvalidCharacters(name, silent, resourceOutputFileName, Path.GetInvalidFileNameChars());

                        if (resourceOutputFileName == null)
                        {
                            this.Log.Trace("Setting resource output directory to null as file name part contains invalid characters");
                            resourceOutputDirName = null;
                        }
                    }
                }
                else
                {
                    this.Log.Trace("Setting resource output file name to null as directory part contains invalid characters");
                    resourceOutputFileName = null;
                }
            }
            catch (Exception ex) when (ex is ArgumentException || ex is ArgumentNullException || ex is PathTooLongException)
            {
                this.Log.Trace("Could not extract directory name from resource output setting");
                this.Log.Error(ex.ToString());

                if (silent != true)
                {
                    throw;
                }

                resourceOutputDirName = null;
                resourceOutputFileName = null;
            }
        }

        public void GetResourceOutputPath(string basePath, ResourceConfigItem resource, ref string resourceOutputFileName, ref string resourceOutputDirName)
        {
            GetResourceOutputPath(basePath, resource.Output, resource.Name, resource.Silent, ref resourceOutputFileName, ref resourceOutputDirName);
        }

        private string CheckInvalidCharacters(string name, bool? silent, string s, ICollection<char> invalidChars)
        {
            if (s == null)
            {
                return null;
            }

            if (s.Select(x => invalidChars.Contains(x)).Where(x => x).Any())
            {
                var message = "There is invalid path character contained in resource.output setting = "
                        + s
                        + " for resource "
                        + name;

                if (silent != true)
                {
                    throw new ArgumentException(message);
                }
                else
                {
                    this.Log.Trace(message);
                    s = null;
                }
            }

            return s;
        }

        private void GenerateResourseHeader(MemoryStream resourceBuffer, ResourceConfigItem resource, string basePath)
        {
            if (resource.Header == null)
            {
                this.Log.Trace("Resource header is not specified.");
                return;
            }

            this.Log.Trace("Writing header for resource config item " + resource.Name);

            var headerInfo = ResourceHeaderInfo;

            var headerContent = GetHeaderContent(resource, basePath);

            ApplyTokens(headerContent, headerInfo);

            if (headerContent.Length > 0)
            {
                var b = OutputEncoding.GetBytes(headerContent.ToString());
                resourceBuffer.Write(b, 0, b.Length);

                NewLine(resourceBuffer);

                this.Log.Trace("Wrote " + headerContent.Length + " symbols as a resource header");
            }
            else
            {
                this.Log.Trace("No header content written as it was empty");
            }

            this.Log.Trace("Done writing header for resource config item " + resource.Name);
        }

        private Dictionary<string, string> PrepareResourseHeaderInfo()
        {
            var assemblyInfo = this.GetVersionContext().Assembly;

            var nowDate = DateTime.Now;

            string version = null;
            string author = null;
            string date = nowDate.ToString("yyyy-MM-dd");
            string year = nowDate.Year.ToString();
            string copyright = null;

            if (assemblyInfo == null)
            {
                this.Log.Error("Could not get assembly version to generate resource header info");
            }
            else
            {
                version = assemblyInfo.Version;
                author = assemblyInfo.CompanyName;
                copyright = assemblyInfo.Copyright;
            }

            var headerInfo = new Dictionary<string, string>
            {
                ["version"] = version,
                ["author"] = author,
                ["date"] = date,
                ["year"] = year,
                ["copyright"] = copyright
            };

            return headerInfo;
        }

        private StringBuilder ApplyTokens(string s, Dictionary<string, string> info)
        {
            var sb = new StringBuilder(s);

            ApplyTokens(sb, info);

            return sb;
        }

        private void ApplyTokens(StringBuilder sb, Dictionary<string, string> info)
        {
            this.Log.Trace("Applying tokens...");

            if (sb == null)
            {
                throw new ArgumentNullException("sb", "Cannot apply tokens for null StringBuilder");
            }

            if (info == null)
            {
                throw new ArgumentNullException("info", "Cannot apply tokens of null data");
            }

            foreach (var item in info)
            {
                this.Log.Trace(string.Format("Applying {{{0}}}: {1}", item.Key, item.Value));
                sb.Replace("{" + item.Key + "}", item.Value);
            }

            this.Log.Trace("Applying tokens done");
        }

        private StringBuilder GetHeaderContent(ResourceConfigItem resource, string basePath)
        {
            this.Log.Trace("Getting header content...");

            var isFileName = false;
            string convertedHeaderPath = null;

            string resourceHeader = resource.Header;

            try
            {
                this.Log.Trace("Checking if resource header setting is a file path...");

                this.Log.Trace("Converting slashes in resource header setting...");
                var configHelper = new ConfigHelper();
                convertedHeaderPath = configHelper.ConvertPath(resourceHeader);

                this.Log.Trace("Checking if " + convertedHeaderPath + " contains file name...");
                var headerFileName = Path.GetFileName(convertedHeaderPath);
                isFileName = !string.IsNullOrEmpty(headerFileName);
            }
            catch (ArgumentException ex)
            {
                this.Log.Trace(ex.ToString());
            }

            if (isFileName)
            {
                this.Log.Trace("Checking if header content file exists");
                var fullHeaderPath = Path.Combine(basePath, convertedHeaderPath);

                if (File.Exists(fullHeaderPath))
                {
                    this.Log.Trace("Reading header content file at " + fullHeaderPath);

                    using (var m = new StreamReader(fullHeaderPath, Translator.OutputEncoding, true))
                    {
                        var sb = new StringBuilder(m.ReadToEnd());

                        if (m.CurrentEncoding != OutputEncoding)
                        {
                            this.Log.Info("Converting resource header file "
                                           + fullHeaderPath
                                           + " from encoding "
                                           + m.CurrentEncoding.EncodingName
                                           + " into default encoding"
                                           + Translator.OutputEncoding.EncodingName);
                        }

                        this.Log.Trace("Read " + sb.Length + " symbols from the header file " + fullHeaderPath);

                        return sb;
                    }
                }

                this.Log.Warn("Could not find header content file at " + fullHeaderPath + "for resource " + resource.Name);
            }

            this.Log.Trace("Considered resource header setting to be a header content");

            return new StringBuilder(resourceHeader);
        }

        /// <summary>
        /// Reads files for the resource item and return a value indication whether it is a resource for SourceMap generation
        /// </summary>
        /// <param name="outputPath">Project output path</param>
        /// <param name="buffer"></param>
        /// <param name="item">Resource</param>
        /// <returns>Bool value indication whether it is a resource for SourceMap generation</returns>
        private bool ReadResourseFiles(string outputPath, MemoryStream buffer, ResourceConfigItem item)
        {
            this.Log.Trace("Reading resource with " + item.Files.Length + " items");

            var needSourceMap = false;

            var useDefaultEncoding = item.Files.Length > 1;

            foreach (var fileName in item.Files)
            {
                this.Log.Trace("Reading resource item(s) in location " + fileName);

                try
                {
                    string directoryPath;

                    directoryPath = outputPath;

                    var dirPathInFileName = this.GetPathComponents(fileName)[0];

                    var filePathCleaned = fileName;
                    if (!string.IsNullOrEmpty(dirPathInFileName))
                    {
                        directoryPath = Path.Combine(directoryPath, dirPathInFileName);
                        this.Log.Trace("Cleaned folder path part: " + dirPathInFileName + " from location: " + fileName + " and added to the directory path: " + directoryPath);

                        filePathCleaned = Path.GetFileName(filePathCleaned);
                    }

                    directoryPath = Path.GetFullPath(directoryPath);

                    var fullFileName = Path.Combine(directoryPath, filePathCleaned);

                    GenerateResourceFileRemark(buffer, item, filePathCleaned, dirPathInFileName);

                    var outputItem = this.FindTranslatorOutputItem(fullFileName);

                    if (outputItem != null)
                    {
                        this.Log.Trace("Found required file for resources in Outputs " + fullFileName);

                        if (outputItem.HasGeneratedSourceMap)
                        {
                            this.Log.Trace("The output item HasGeneratedSourceMap so that the resource requires SourceMap also");
                            needSourceMap = true;
                        }

                        var content = outputItem.Content.GetContentAsBytes();

                        buffer.Write(content, 0, content.Length);
                    }
                    else
                    {
                        var directory = new DirectoryInfo(directoryPath);

                        if (!directory.Exists)
                        {
                            throw new InvalidOperationException("Could not find any folder: " + directory.FullName + " for resource " + item.Name + " and location " + fileName);
                        }

                        this.Log.Trace("Searching files for resources in folder: " + directoryPath);

                        var file = directory.GetFiles(filePathCleaned, SearchOption.TopDirectoryOnly).FirstOrDefault();

                        if (file == null)
                        {
                            throw new InvalidOperationException("Could not find any file in folder: " + directory.FullName + " for resource " + item.Name + " and location " + fileName);
                        }

                        this.Log.Trace("Reading resource item at " + file.FullName);

                        var resourceAsOneFile = item.Header == null
                                                && item.Remark == null
                                                && item.Files.Length <= 1;

                        var content = CheckResourceOnBomAndAddToBuffer(buffer, item, file, resourceAsOneFile);

                        this.Log.Trace("Read " + content.Length + " bytes");
                    }
                }
                catch (Exception ex)
                {
                    this.Log.Error(ex.ToString());
                    throw;
                }
            }

            return needSourceMap;
        }

        private byte[] CheckResourceOnBomAndAddToBuffer(MemoryStream buffer, ResourceConfigItem item, FileInfo file, bool oneFileResource)
        {
            byte[] content;

            if (oneFileResource)
            {
                this.Log.Trace("Reading resource file " + file.FullName + " as one-file-resource");
                content = File.ReadAllBytes(file.FullName);
            }
            else
            {
                this.Log.Trace("Reading resource file " + file.FullName + " via StreamReader with byte order mark detection option");

                using (var m = new StreamReader(file.FullName, Translator.OutputEncoding, true))
                {
                    content = Translator.OutputEncoding.GetBytes(m.ReadToEnd());

                    if (m.CurrentEncoding != OutputEncoding)
                    {
                        this.Log.Info("Converting resource file "
                                       + file.FullName
                                       + " from encoding "
                                       + m.CurrentEncoding.EncodingName
                                       + " into default encoding"
                                       + Translator.OutputEncoding.EncodingName);
                    }
                }
            }

            if (content.Length > 0)
            {
                var checkBom = (oneFileResource && item.RemoveBom == true)
                   || (!oneFileResource && (!item.RemoveBom.HasValue || item.RemoveBom.Value));

                var bomLength = checkBom
                    ? GetBomLength(content)
                    : 0;

                if (bomLength > 0)
                {
                    this.Log.Trace("Found BOM symbols (" + bomLength + " byte length)");
                }

                if (bomLength < content.Length)
                {
                    buffer.Write(content, bomLength, content.Length - bomLength);
                }
                else
                {
                    this.Log.Trace("Skipped resource as it contains only BOM");
                }

            }

            return content;
        }

        private int GetBomLength(byte[] buffer)
        {
            if (buffer.Length >= 2)
            {
                if (buffer[0] == 0xff && buffer[1] == 0xfe)
                {
                    // UTF-16LE
                    return 2;
                }
                if (buffer[0] == 0xfe && buffer[1] == 0xff)
                {
                    // UTF-16BE
                    return 2;
                }

                if (buffer.Length >= 3)
                {
                    if (buffer[0] == 0x2b && buffer[1] == 0x2f && buffer[2] == 0x76)
                    {
                        // UTF7;
                        return 3;
                    }

                    if (buffer[0] == 0xef && buffer[1] == 0xbb && buffer[2] == 0xbf)
                    {
                        // UTF8
                        return 3;
                    }

                }

                if (buffer.Length >= 4)
                {
                    if (buffer[0] == 0 && buffer[1] == 0 && buffer[2] == 0xfe && buffer[3] == 0xff)
                    {
                        // UTF32;
                        return 4;
                    }
                }
            }

            return 0;
        }

        private void GenerateResourceFileRemark(MemoryStream resourceBuffer, ResourceConfigItem item, string fileName, string dirPathInFileName)
        {
            if (item.Remark != null)
            {
                this.Log.Trace("Inserting resource file remark");

                var filePath = this.MakeStandardPath(Path.Combine(dirPathInFileName, fileName));

                var remarkInfo = new Dictionary<string, string>()
                {
                    ["name"] = fileName,
                    ["path"] = filePath
                };

                var remarkBuffer = ApplyTokens(item.Remark, remarkInfo);
                remarkBuffer.Replace(Emitter.CRLF, Emitter.NEW_LINE);

                var remarkLines = remarkBuffer.ToString().Split(new[] { Emitter.NEW_LINE }, StringSplitOptions.None);
                foreach (var remarkLine in remarkLines)
                {
                    var b = OutputEncoding.GetBytes(remarkLine);
                    resourceBuffer.Write(b, 0, b.Length);
                    NewLine(resourceBuffer);
                }
            }
        }

        public void PrepareResourcesConfig()
        {
            this.Log.Trace("Preparing resources config...");

            var config = this.AssemblyInfo.Resources;

            var rawResources = config.Items;

            var resources = new List<ResourceConfigItem>();
            ResourceConfigItem defaultSetting = null;

            if (rawResources != null)
            {
                Array.ForEach(rawResources, (x) =>
                {
                    if (x.Name != null)
                    {
                        var parts = x.Name.Split(new[] { '#' }, StringSplitOptions.None);

                        if (parts.Length > 1)
                        {
                            x.Assembly = parts[0];
                            x.Name = parts[1];
                        }
                    }
                });

                var defaultResources = rawResources.Where(x => x.Name == null);

                if (defaultResources.Count() > 1)
                {
                    this.Log.Error("There are more than one default resource in the configuration setting file (resources section). Will use the first occurrence as a default resource settings");
                }

                defaultSetting = defaultResources.FirstOrDefault();

                if (defaultSetting != null)
                {
                    this.Log.Trace("The resources config section has a default settings");

                    defaultSetting.SetDefaulValues();

                    var rawNonDefaultResources = rawResources.Where(x => x.Name != null);

                    this.ValidateResourceSettings(defaultSetting, rawNonDefaultResources);

                    foreach (var resource in rawNonDefaultResources)
                    {
                        ApplyDefaultResourceConfigSetting(defaultSetting, resource);

                        resources.Add(resource);
                    }
                }
                else
                {
                    Array.ForEach(rawResources, x => x.SetDefaulValues());
                    resources.AddRange(rawResources);
                }

                this.Log.Trace("The resources config section has " + resources.Count + " non-default settings");
            }

            CheckConsoleConfigSetting(resources, defaultSetting);

            var toEmbed = resources.Where(x => x.Files != null && x.Files.Count() > 0).ToArray();
            var toExtract = resources.Where(x => x.Files == null || x.Files.Count() <= 0).ToArray();

            config.Prepare(defaultSetting, toEmbed, toExtract);
            this.Log.Trace("Done preparing resources config");

            return;
        }

        private void CheckConsoleConfigSetting(List<ResourceConfigItem> resources, ResourceConfigItem @default)
        {
            this.Log.Trace("CheckConsoleConfigSetting...");

            var consoleResourceName = "bridge.console.js";
            var consoleResourceMinifiedName = FileHelper.GetMinifiedJSFileName(consoleResourceName);

            var consoleFormatted = resources.Where(x => x.Name == consoleResourceName && (x.Assembly == null || x.Assembly == Translator.Bridge_ASSEMBLY)).FirstOrDefault();
            var consoleMinified = resources.Where(x => x.Name == consoleResourceMinifiedName && (x.Assembly == null || x.Assembly == Translator.Bridge_ASSEMBLY)).FirstOrDefault();

            if (this.AssemblyInfo.Console.Enabled != true)
            {
                this.Log.Trace("Switching off Bridge Console...");

                if (consoleFormatted == null)
                {
                    consoleFormatted = new ResourceConfigItem()
                    {
                        Name = consoleResourceName
                    };

                    this.Log.Trace("Adding resource setting for " + consoleResourceName);
                    resources.Add(consoleFormatted);
                }
                else
                {
                    if (this.AssemblyInfo.Console.Enabled.HasValue)
                    {
                        this.Log.Trace("Overriding resource setting for " + consoleResourceName + " as bridge.json has console option explicitly");
                    }
                    else
                    {
                        this.Log.Trace("Not overriding resource setting for " + consoleResourceName + " as bridge.json does NOT have console option explicitly");
                        consoleFormatted = null;
                    }
                }

                if (consoleFormatted != null)
                {
                    consoleFormatted.Output = null;
                    consoleFormatted.Extract = false;
                    consoleFormatted.Inject = false;
                    consoleFormatted.Files = new string[0];
                }

                if (consoleMinified == null)
                {
                    consoleMinified = new ResourceConfigItem()
                    {
                        Name = consoleResourceMinifiedName
                    };

                    this.Log.Trace("Adding resource setting for " + consoleResourceMinifiedName);
                    resources.Add(consoleMinified);
                }
                else
                {
                    if (this.AssemblyInfo.Console.Enabled.HasValue)
                    {
                        this.Log.Trace("Overriding resource setting for " + consoleResourceMinifiedName + " as bridge.json has console option explicitly");
                    }
                    else
                    {
                        this.Log.Trace("Not overriding resource setting for " + consoleResourceMinifiedName + " as bridge.json does NOT have console option explicitly");
                        consoleMinified = null;
                    }
                }

                if (consoleMinified != null)
                {
                    consoleMinified.Output = null;
                    consoleMinified.Extract = false;
                    consoleMinified.Inject = false;
                    consoleMinified.Files = new string[0];
                }

                this.Log.Trace("Switching off Bridge Console done");
            }
            else
            {
                if (consoleFormatted != null)
                {
                    if (consoleFormatted.Extract != true)
                    {
                        consoleFormatted.Extract = true;
                        this.Log.Trace("Setting resources.extract = true for " + consoleResourceName + " as bridge.json has console option has true explicitly");
                    }
                }
                else
                {
                    if (@default != null && @default.Extract != true)
                    {
                        consoleFormatted = new ResourceConfigItem()
                        {
                            Name = consoleResourceName,
                            Extract = true,
                            Inject = false
                        };

                        this.Log.Trace("Adding resource setting for " + consoleResourceName + " as default resource has extract != true");
                        resources.Add(consoleFormatted);
                    }
                }

                if (consoleMinified != null)
                {
                    if (consoleMinified.Extract != true)
                    {
                        consoleMinified.Extract = true;
                        this.Log.Trace("Setting resources.extract = true for " + consoleResourceMinifiedName + " as bridge.json has console option has true explicitly");
                    }
                }
                else
                {
                    if (@default != null && @default.Extract != true)
                    {
                        consoleMinified = new ResourceConfigItem()
                        {
                            Name = consoleResourceMinifiedName,
                            Extract = true,
                            Inject = false
                        };

                        this.Log.Trace("Adding resource setting for " + consoleResourceMinifiedName + " as default resource has extract != true");
                        resources.Add(consoleMinified);
                    }
                }
            }
            this.Log.Trace("CheckConsoleConfigSetting done");

        }

        private void ValidateResourceSettings(ResourceConfigItem defaultSetting, IEnumerable<ResourceConfigItem> rawNonDefaultResources)
        {
            var defaultExtract = defaultSetting.Extract ?? false;
            var rawNonDefaultResourcesWithExtractAndNoOutput = rawNonDefaultResources
                .Where(x => x.Output == null && (x.Extract == true || defaultExtract));

            if (defaultSetting.Output != null && rawNonDefaultResourcesWithExtractAndNoOutput.Count() > 1)
            {
                string defaultOutputFileName = null;

                try
                {
                    defaultOutputFileName = Path.GetFileName(defaultSetting.Output);
                }
                catch (Exception)
                {
                }

                if (!string.IsNullOrEmpty(defaultOutputFileName))
                {
                    this.Log.Error("The resource config setting has a default output setting "
                        + defaultSetting.Output
                        + " containing file part "
                        + defaultOutputFileName +
                        " .However, there are several resources with no output setting defined and active extract option."
                        + " It means the resources will be overwritten by each other.");
                }
            }
        }

        private void ApplyDefaultResourceConfigSetting(ResourceConfigItem defaultSetting, ResourceConfigItem current)
        {
            if (!current.Extract.HasValue)
            {
                current.Extract = defaultSetting.Extract;
            }

            if (!current.Inject.HasValue)
            {
                current.Inject = defaultSetting.Inject;
            }

            if (current.Output == null)
            {
                current.Output = defaultSetting.Output;
            }

            if (current.Files == null && defaultSetting.Files != null)
            {
                current.Files = defaultSetting.Files.Select(x => x).ToArray();
            }

            if (current.Header == null)
            {
                current.Header = defaultSetting.Header;
            }

            if (current.Remark == null)
            {
                current.Remark = defaultSetting.Remark;
            }
        }

        /// <summary>
        /// Splits a path into directory and file name. Not fully qualified file name considered as directory path.
        /// </summary>
        /// <param name="path">The path of a file or directory.</param>
        /// <returns>Returns directory at index 0 (null if no directory part) and file name at index 1 (null if no file name path).</returns>
        private string[] GetPathComponents(string path)
        {
            var r = new string[2];

            var directory = Path.GetDirectoryName(path);
            var fileNameWithoutExtention = Path.GetFileNameWithoutExtension(path);
            var fileExtention = Path.GetExtension(path);

            if (string.IsNullOrEmpty(fileNameWithoutExtention) || string.IsNullOrEmpty(fileExtention))
            {
                r[0] = Path.Combine(directory, fileNameWithoutExtention, fileExtention);
                r[1] = null;
            }
            else
            {
                r[0] = directory;
                r[1] = fileNameWithoutExtention + fileExtention;
            }

            return r;
        }

        /// <summary>
        /// Replaces platform specific dir separators to just /
        /// </summary>
        /// <param name="path"></param>
        /// <returns>A path with replaced '\' -> '/'</returns>
        private string MakeStandardPath(string path)
        {
            if (path == null)
            {
                return path;
            }

            return path.Replace('\\', '/');
        }

        protected byte[] ReadStream(Stream stream)
        {
            if (stream.Position != 0)
            {
                stream.Seek(0, SeekOrigin.Begin);
                stream.Position = 0;
            }

            byte[] bytes = new byte[stream.Length];

            int numBytesToRead = (int)stream.Length;
            int numBytesRead = 0;

            var chunkLength = 1 * 1024 * 1024;
            if (chunkLength > numBytesToRead)
            {
                chunkLength = numBytesToRead;
            }

            do
            {
                int n = stream.Read(bytes, numBytesRead, chunkLength);

                numBytesRead += n;
                numBytesToRead -= n;
            } while (numBytesToRead > 0);

            return bytes;
        }

        //private string NormalizePath(string value)
        //{
        //    value = value.Replace(@"\", ".");
        //    string path = value.LeftOfRightmostOf('.').LeftOfRightmostOf('.');
        //    string name = value.Substring(path.Length);
        //    return path.Replace('-', '_') + name;
        //}
    }
}