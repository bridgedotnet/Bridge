using Bridge.Contract;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
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

        public void ApplyTokens(IAssemblyInfo config, ProjectProperties projectProperties)
        {
            Logger.Trace("ApplyTokens ...");

            if (config == null)
            {
                throw new ArgumentNullException("config");
            }

            if (projectProperties == null)
            {
                throw new ArgumentNullException("projectProperties");
            }

            Logger.Trace("Properties:" + projectProperties.ToString());

            var tokens = projectProperties.GetValues();

            if (tokens == null || tokens.Count <= 0)
            {
                Logger.Trace("No tokens applied as no values to apply");
                return;
            }

            config.FileName = helper.ApplyPathTokens(tokens, config.FileName);
            config.Output = helper.ApplyPathTokens(tokens, config.Output);
            config.BeforeBuild = helper.ApplyPathTokens(tokens, config.BeforeBuild);
            config.AfterBuild = helper.ApplyPathTokens(tokens, config.AfterBuild);
            config.PluginsPath = helper.ApplyPathTokens(tokens, config.PluginsPath);
            config.CleanOutputFolderBeforeBuildPattern = helper.ApplyTokens(tokens, config.CleanOutputFolderBeforeBuildPattern);
            config.Locales = helper.ApplyTokens(tokens, config.Locales);
            config.LocalesOutput = helper.ApplyTokens(tokens, config.LocalesOutput);
            config.LocalesFileName = helper.ApplyPathTokens(tokens, config.LocalesFileName);

            if (config.Logging != null)
            {
                var logging = config.Logging;

                logging.FileName = helper.ApplyPathTokens(tokens, logging.FileName);
                logging.Folder = helper.ApplyPathTokens(tokens, logging.Folder);
            }

            if (config.Reflection != null)
            {
                config.Reflection.Filter = helper.ApplyTokens(tokens, config.Reflection.Filter);
                config.Reflection.Output = helper.ApplyTokens(tokens, config.Reflection.Output);
            }

            if (config.Resources != null)
            {
                foreach (var resourceItem in config.Resources.Items)
                {
                    resourceItem.Header = helper.ApplyTokens(tokens, resourceItem.Header);
                    resourceItem.Name = helper.ApplyTokens(tokens, resourceItem.Name);
                    resourceItem.Remark = helper.ApplyTokens(tokens, resourceItem.Remark);

                    var files = resourceItem.Files;

                    if (files != null)
                    {
                        for (int i = 0; i < files.Length; i++)
                        {
                            files[i] = helper.ApplyPathTokens(tokens, files[i]);
                        }
                    }
                }
            }

            if (config.Html != null)
            {
                config.Html.Name = helper.ApplyTokens(tokens, config.Html.Name);
            }

            if (config.Report != null)
            {
                config.Report.FileName = helper.ApplyPathTokens(tokens, config.Report.FileName);
                config.Report.Path = helper.ApplyPathTokens(tokens, config.Report.Path);
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

            if (assemblyInfo.Logging != null)
            {
                assemblyInfo.Logging.Folder = helper.ConvertPath(assemblyInfo.Logging.Folder);
            }

            if (assemblyInfo.Html != null)
            {
                assemblyInfo.Html.Name = helper.ConvertPath(assemblyInfo.Html.Name);
            }

            if (assemblyInfo.Report != null)
            {
                assemblyInfo.Report.Path = helper.ConvertPath(assemblyInfo.Report.Path);
            }

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