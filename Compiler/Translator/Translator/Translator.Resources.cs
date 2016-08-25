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

        protected virtual void InjectResources(string outputPath, Dictionary<string, string> files)
        {
            this.Log.Trace("Injecting resources...");

            this.PrepareResourcesConfig();

            var resourcesConfig = this.AssemblyInfo.Resources;

            if (resourcesConfig.Default != null
                && resourcesConfig.Default.Inject != true)
            {
                this.Log.Info("Resource config option to inject resources `inject` is switched off. Skipping embedding resources");
                return;
            }

            if ((files == null || files.Count == 0)
                && !resourcesConfig.HasResources())
            {
                this.Log.Info("No files nor resources to inject");
                return;
            }

            var resourceBasePath = Path.GetDirectoryName(this.Location);

            var resourcesToEmbed = this.PrepareResources(outputPath, resourceBasePath, files);

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
                this.Log.Trace("Removing mscorlib reference");
                assemblyDef.MainModule.AssemblyReferences.Remove(mscorlib);
            }

            assemblyDef.Write(this.AssemblyLocation);
        }

        private Dictionary<string, byte[]> PrepareResources(string outputPath, string resourcesBasePath, Dictionary<string, string> files)
        {
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

                    if (resource.Inject != true && resource.Extract != true)
                    {
                        this.Log.Trace("Skipping the resource as it has inject != true and extract != true");
                        continue;
                    }

                    var resourceBuffer = new StringBuilder();

                    this.GenerateResourseHeader(resourceBuffer, resource, resourcesBasePath);

                    this.ReadResourseFiles(resourcesBasePath, resourceBuffer, resource);

                    if (resourceBuffer.Length > 0)
                    {
                        this.Log.Trace("Prepared files for resource " + resource.Name);

                        var code = OutputEncoding.GetBytes(resourceBuffer.ToString());

                        resourcesToEmbed.Add(resource.Name, code);

                        if (resource.Extract == true)
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
            var assemblyInfo = this.GetCurrentAssemblyVersion();

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

                        GenerateResourceFileRemark(resourceBuffer, item, file);

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

        private void GenerateResourceFileRemark(StringBuilder resourceBuffer, ResourceConfigItem item, FileInfo file)
        {
            if (item.Remark != null)
            {
                this.Log.Trace("Inserting resource file remark");

                var remarkInfo = new Dictionary<string, string>()
                {
                    ["name"] = file.Name,
                    ["path"] = file.FullName
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

        private void PrepareResourcesConfig()
        {
            this.Log.Trace("Preparing resources config...");

            var config = this.AssemblyInfo.Resources;

            var rawResources = config.Items;

            var resources = new List<ResourceConfigItem>();
            ResourceConfigItem defaultSetting = null;

            if (rawResources != null)
            {
                var defaultResources = rawResources.Where(x => x.Name == null);

                if (defaultResources.Count() > 1)
                {
                    this.Log.Error("There are more than one default resource in the configuration setting file (resources section). Will use the first occurrence as a default resource settings");
                }

                defaultSetting = defaultResources.FirstOrDefault();

                if (defaultSetting != null)
                {
                    this.Log.Trace("The resources config section has a default settings");

                    foreach (var resource in rawResources.Where(x => x.Name != null))
                    {
                        ApplyDefaultResourceConfigSetting(defaultSetting, resource);

                        resources.Add(resource);
                    }
                }
                else
                {
                    resources.AddRange(rawResources);
                }

                this.Log.Trace("The resources config section has " + resources.Count + " non-default settings");
            }

            config.PrepareDefault(defaultSetting, resources.ToArray());
            this.Log.Trace("Done preparing resources config");

            return;
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

            if (current.Files == null)
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
    }
}