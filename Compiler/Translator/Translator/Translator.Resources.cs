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

        public virtual void InjectResources(string outputPath, string projectPath, Dictionary<string, string> files)
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

            if ((files == null || files.Count == 0)
                && !resourcesConfig.HasEmbedResources())
            {
                this.Log.Info("No files nor resources to inject");
                return;
            }

            var resourcesToEmbed = this.PrepareAndExtractResources(outputPath, projectPath, files);

            this.EmbeddResources(resourcesToEmbed);

            this.Log.Info("Done injecting resources");
        }

        private Dictionary<string, byte[]> PrepareAndExtractResources(string outputPath, string projectPath, Dictionary<string, string> files)
        {
            var resourcesToEmbed = new Dictionary<string, byte[]>();

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

                    var resourceBuffer = new StringBuilder();

                    this.GenerateResourseHeader(resourceBuffer, resource, projectPath);

                    this.ReadResourseFiles(projectPath, resourceBuffer, resource);

                    if (resourceBuffer.Length > 0)
                    {
                        this.Log.Trace("Prepared files for resource " + resource.Name);

                        var code = OutputEncoding.GetBytes(resourceBuffer.ToString());

                        resourcesToEmbed.Add(resource.Name, code);

                        this.ExtractResource(outputPath, projectPath, resource, code);
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

        private void EmbeddResources(Dictionary<string, byte[]> resourcesToEmbed)
        {
            this.Log.Trace("Embedding resources...");

            var assemblyDef = this.AssemblyDefinition;
            var resources = assemblyDef.MainModule.Resources;
            var resourcesList = new List<string>();

            foreach (var item in resourcesToEmbed)
            {
                var name = item.Key;
                this.Log.Trace("Embedding resource " + name);

                name = this.NormalizePath(name);
                this.Log.Trace("Normalized resource name " + name);

                var newResource = new EmbeddedResource(name, ManifestResourceAttributes.Private, item.Value);

                var existingResource = resources.FirstOrDefault(r => r.Name == name);
                if (existingResource != null)
                {
                    this.Log.Trace("Removing already existed resource with the same name");
                    resources.Remove(existingResource);
                }

                resources.Add(newResource);

                var resourceListItem = item.Key + ":" + name;
                resourcesList.Add(resourceListItem);

                this.Log.Trace("Added resource " + resourceListItem);
            }

            StringBuilder sb = new StringBuilder();
            foreach (var res in resourcesList)
            {
                sb.Append(res).Append("+");
            }
            sb.Remove(sb.Length - 1, 1);

            var resourceListName = Translator.BridgeResourcesList;
            var listResources = new EmbeddedResource(resourceListName, ManifestResourceAttributes.Private, Translator.OutputEncoding.GetBytes(sb.ToString()));

            var existingList = resources.FirstOrDefault(r => r.Name == resourceListName);
            if (existingList != null)
            {
                this.Log.Trace("Removing already existed resource list " + resourceListName);
                resources.Remove(existingList);
            }

            resources.Add(listResources);
            this.Log.Trace("Added resource list " + resourceListName);
            this.Log.Trace(sb.ToString());

            // Checking if mscorlib reference added and removing if added
            var mscorlib = assemblyDef.MainModule.AssemblyReferences.FirstOrDefault(r => r.Name == "mscorlib");
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

        private void ExtractResource(string outputPath, string projectPath, ResourceConfigItem resource, byte[] code)
        {
            if (resource.Extract == true)
            {
                this.Log.Trace("Extracting resource " + resource.Name);

                string resourceOutputFileName = null;
                string resourceOutputDirName = null;

                if (resource.Output != null)
                {
                    this.GetResourceOutputPath(projectPath, resource, ref resourceOutputFileName, ref resourceOutputDirName);
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

                try
                {
                    var path = Path.Combine(resourceOutputDirName, resourceOutputFileName);

                    this.Log.Trace("Writing resource " + resource.Name + " into " + path);

                    this.EnsureDirectoryExists(resourceOutputDirName);

                    File.WriteAllBytes(path, code);

                    this.Log.Trace("Done writing resource into file");
                }
                catch (Exception ex)
                {
                    this.Log.Error(ex.ToString());
                    throw;
                }
            }
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

        public void GetResourceOutputPath(string projectPath, ResourceConfigItem resource, ref string resourceOutputFileName, ref string resourceOutputDirName)
        {
            this.Log.Trace("Checking output path setting " + resource.Output);

            try
            {
                var pathParts = this.GetPathComponents(resource.Output);

                resourceOutputDirName = pathParts[0];
                this.Log.Trace("Resource output setting directory relative to project root is " + resourceOutputDirName);

                resourceOutputFileName = pathParts[1];
                this.Log.Trace("Resource output setting file name is " + resourceOutputFileName);

                if (resourceOutputDirName != null)
                {
                    this.Log.Trace("Checking resource output directory on invalid characters");
                    resourceOutputDirName = CheckInvalidCharacters(resource, resourceOutputDirName, this.InvalidPathChars);
                }

                if (resourceOutputDirName != null)
                {
                    this.Log.Trace("Getting absolute resource output directory");
                    resourceOutputDirName = Path.Combine(projectPath, resourceOutputDirName);
                    this.Log.Trace("Resource output directory is " + resourceOutputDirName);

                    if (resourceOutputFileName != null)
                    {
                        this.Log.Trace("Checking resource output file name on invalid characters");
                        resourceOutputFileName = CheckInvalidCharacters(resource, resourceOutputFileName, Path.GetInvalidFileNameChars());

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

                if (resource.Silent != true)
                {
                    throw;
                }

                resourceOutputDirName = null;
                resourceOutputFileName = null;
            }
        }

        private string CheckInvalidCharacters(ResourceConfigItem resource, string s, ICollection<char> invalidChars)
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
                        + resource.Name;

                if (resource.Silent != true)
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

        private void GenerateResourseHeader(StringBuilder resourceBuffer, ResourceConfigItem resource, string basePath)
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
                resourceBuffer.Append(headerContent);
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
            var assemblyInfo = this.GetAssemblyVersion();

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
                version = assemblyInfo.ProductVersion;
                author = assemblyInfo.CompanyName;
                copyright = assemblyInfo.LegalCopyright;
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

                    var sb = new StringBuilder(File.ReadAllText(fullHeaderPath, OutputEncoding));

                    this.Log.Trace("Read " + sb.Length + " symbols from the header file " + fullHeaderPath);

                    return sb;
                }

                this.Log.Warn("Could not find header content file at " + fullHeaderPath + "for resource " + resource.Name);
            }

            this.Log.Trace("Considered resource header setting to be a header content");

            return new StringBuilder(resourceHeader);
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

                    var dirPathInFileName = this.GetPathComponents(fileName)[0];

                    var filePathCleaned = fileName;
                    if (!string.IsNullOrEmpty(dirPathInFileName))
                    {
                        directoryPath = Path.Combine(directoryPath, dirPathInFileName);
                        this.Log.Trace("Cleaned folder path part: " + dirPathInFileName + " from location: " + fileName + " and added to the directory path: " + directoryPath);

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

                        GenerateResourceFileRemark(resourceBuffer, item, file, dirPathInFileName);

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

        private void GenerateResourceFileRemark(StringBuilder resourceBuffer, ResourceConfigItem item, FileInfo file, string dirPathInFileName)
        {
            if (item.Remark != null)
            {
                this.Log.Trace("Inserting resource file remark");


                var fileName = this.MakeStandardPath(file.Name);
                var filePath = this.MakeStandardPath(Path.Combine(dirPathInFileName, fileName));

                var remarkInfo = new Dictionary<string, string>()
                {
                    ["name"] = fileName,
                    ["path"] = filePath
                };

                var remarkBuffer = ApplyTokens(item.Remark, remarkInfo);
                remarkBuffer.Replace("\r\n", "\n");

                var remarkLines = remarkBuffer.ToString().Split(new[] { "\n" }, StringSplitOptions.None);
                foreach (var remarkLine in remarkLines)
                {
                    resourceBuffer.Append(remarkLine);
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

            var toEmbed = resources.Where(x => x.Files != null && x.Files.Count() > 0).ToArray();
            var toExtract = resources.Where(x => x.Files == null || x.Files.Count() <= 0).ToArray();

            config.Prepare(defaultSetting, toEmbed, toExtract);
            this.Log.Trace("Done preparing resources config");

            return;
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
    }
}