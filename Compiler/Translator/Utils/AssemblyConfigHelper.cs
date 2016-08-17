using Bridge.Contract;
using Newtonsoft.Json;
using System.IO;

namespace Bridge.Translator.Utils
{
    public class AssemblyConfigHelper
    {
        private const string CONFIG_FILE_NAME = "bridge.json";

        private ILogger Logger { get; set; }
        private ConfigHelper<AssemblyInfo> helper { get; set; }

        public AssemblyConfigHelper(ILogger logger)
        {
            this.Logger = logger;
            this.helper = new ConfigHelper<AssemblyInfo>(logger);
        }

        public IAssemblyInfo ReadConfig(string configFileName, bool folderMode, string location, string configuration)
        {
            var config = helper.ReadConfig(configFileName, folderMode, location, configuration);

            if (config == null)
            {
                config = new AssemblyInfo();
            }

            // Convert '/' and '\\' to platform-specific path separator.
            ConvertConfigPaths(config);

            return config;
        }

        public IAssemblyInfo ReadConfig(bool folderMode, string location, string configuration)
        {
            return ReadConfig(CONFIG_FILE_NAME, folderMode, location, configuration);
        }

        public void CreateConfig(IAssemblyInfo bridgeConfig, string folder)
        {
            using (var textFile = File.CreateText(folder + Path.DirectorySeparatorChar + CONFIG_FILE_NAME))
            {
                var config = JsonConvert.SerializeObject(bridgeConfig);
                textFile.Write(config);
            }
        }

        public static string ConfigToString(IAssemblyInfo config)
        {
            return JsonConvert.SerializeObject(config);
        }

        public void ConvertConfigPaths(IAssemblyInfo assemblyInfo)
        {
            if (!string.IsNullOrWhiteSpace(assemblyInfo.AfterBuild))
            {
                assemblyInfo.AfterBuild = helper.ConvertPath(assemblyInfo.AfterBuild);
            }

            if (!string.IsNullOrWhiteSpace(assemblyInfo.BeforeBuild))
            {
                assemblyInfo.BeforeBuild = helper.ConvertPath(assemblyInfo.BeforeBuild);
            }

            if (!string.IsNullOrWhiteSpace(assemblyInfo.Output))
            {
                assemblyInfo.Output = helper.ConvertPath(assemblyInfo.Output);
            }

            if (!string.IsNullOrWhiteSpace(assemblyInfo.PluginsPath))
            {
                assemblyInfo.PluginsPath = helper.ConvertPath(assemblyInfo.PluginsPath);
            }

            if (!string.IsNullOrWhiteSpace(assemblyInfo.LocalesOutput))
            {
                assemblyInfo.LocalesOutput = helper.ConvertPath(assemblyInfo.LocalesOutput);
            }

            if (!string.IsNullOrWhiteSpace(assemblyInfo.Logging.Folder))
            {
                assemblyInfo.Logging.Folder = helper.ConvertPath(assemblyInfo.Logging.Folder);
            }

            if (assemblyInfo.Resources != null)
            {
                foreach (var resourceConfigItem in assemblyInfo.Resources.Items)
                {
                    if (resourceConfigItem.Items != null)
                    {
                        foreach (var resourceItem in resourceConfigItem.Items)
                        {
                            ConvertResourcePath(resourceItem);
                        }
                    }
                }
            }
        }

        private void ConvertResourcePath(ResourceItem resourceItem)
        {
            if (resourceItem == null)
            {
                return;
            }

            if (resourceItem.Dir != null)
            {
                resourceItem.Dir = helper.ConvertPath(resourceItem.Dir);
            }

            if (resourceItem.Locations == null)
            {
                return;
            }

            for (int i = 0; i < resourceItem.Locations.Length; i++)
            {
                var location = resourceItem.Locations[i];

                if (location != null)
                {
                    resourceItem.Locations[i] = helper.ConvertPath(location);
                }
            }
        }
    }
}