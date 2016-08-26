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
            assemblyInfo.AfterBuild = helper.ConvertPath(assemblyInfo.AfterBuild);
            assemblyInfo.BeforeBuild = helper.ConvertPath(assemblyInfo.BeforeBuild);
            assemblyInfo.Output = helper.ConvertPath(assemblyInfo.Output);
            assemblyInfo.PluginsPath = helper.ConvertPath(assemblyInfo.PluginsPath);
            assemblyInfo.LocalesOutput = helper.ConvertPath(assemblyInfo.LocalesOutput);
            assemblyInfo.Logging.Folder = helper.ConvertPath(assemblyInfo.Logging.Folder);

            if (assemblyInfo.Resources != null)
            {
                foreach (var resourceConfigItem in assemblyInfo.Resources.Items)
                {
                    var files = resourceConfigItem.Files;

                    if (files != null)
                    {
                        for (int i = 0; i < files.Length; i++)
                        {
                            var resourceItem = files[i];
                            files[i] = helper.ConvertPath(resourceItem);
                        }
                    }

                    resourceConfigItem.Output = helper.ConvertPath(resourceConfigItem.Output);
                }
            }
        }
    }
}