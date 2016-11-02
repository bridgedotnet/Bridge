using Bridge.Contract;
using Newtonsoft.Json;
using System;
using System.IO;

namespace Bridge.Translator.Utils
{
    public class AssemblyConfigHelper
    {
        public const string OUTPUT_PATH_TOKEN = "$(OutputPath)";

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

        public string CreateConfig(IAssemblyInfo bridgeConfig, string folder)
        {
            var path = Path.Combine(folder, CONFIG_FILE_NAME);

            using (var textFile = File.CreateText(path))
            {
                var jss = new JsonSerializerSettings()
                {
                    Formatting = Formatting.Indented,
                    ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver()
                };

                var config = JsonConvert.SerializeObject(bridgeConfig, jss);

                textFile.Write(config);
            }

            return path;
        }

        public static string ConfigToString(IAssemblyInfo config)
        {
            return JsonConvert.SerializeObject(config);
        }

        public void ApplyTokens(IAssemblyInfo config, string outputPathValue)
        {
            Logger.Trace("ApplyTokens ...");
            Logger.Trace("outputPathValue:" + outputPathValue);

            if (config == null)
            {
                throw new ArgumentNullException("config");
            }

            if (config.Resources != null)
            {
                foreach (var resourceItem in config.Resources.Items)
                {
                    var files = resourceItem.Files;

                    if (files != null)
                    {
                        for (int i = 0; i < files.Length; i++)
                        {
                            files[i] = helper.ApplyPathToken(OUTPUT_PATH_TOKEN, outputPathValue, files[i]);
                        }
                    }
                }
            }

            Logger.Trace("ApplyTokens done");
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