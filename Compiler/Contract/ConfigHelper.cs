using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.IO;

namespace Bridge.Contract
{
    public class ConfigHelper
    {
        public string ConvertPath(string path)
        {
            if (Path.DirectorySeparatorChar != '/')
            {
                path = path.Replace('/', Path.DirectorySeparatorChar);
            }

            if (Path.DirectorySeparatorChar != '\\')
            {
                path.Replace('\\', Path.DirectorySeparatorChar);
            }

            return path;
        }
    }

    public class ConfigHelper<T> : ConfigHelper
    {
        private ILogger Logger { get; set; }

        public ConfigHelper(ILogger logger)
        {
            this.Logger = logger;
        }

        public virtual T ReadConfig(string configFileName, bool folderMode, string location, string configuration)
        {
            string configPath = null;
            string mergePath = null;

            Logger.Info("Reading configuration file " + (configFileName ?? "") + " at " + (location ?? "") + " for configuration " + (configuration ?? "") + " ...");

            if (!string.IsNullOrWhiteSpace(configuration))
            {
                configPath = GetConfigPath(configFileName.Insert(configFileName.LastIndexOf(".", StringComparison.Ordinal), "." + configuration), folderMode, location);
                mergePath = GetConfigPath(configFileName, folderMode, location);

                if (configPath == null)
                {
                    configPath = mergePath;
                    mergePath = null;
                }
            }
            else
            {
                configPath = GetConfigPath(configFileName, folderMode, location);

                if (configPath == null)
                {
                    configPath = GetConfigPath(configFileName.Insert(configFileName.LastIndexOf(".", StringComparison.Ordinal), ".debug"), folderMode, location);
                }

                if (configPath == null)
                {
                    configPath = GetConfigPath(configFileName.Insert(configFileName.LastIndexOf(".", StringComparison.Ordinal), ".release"), folderMode, location);
                }
            }

            if (configPath == null)
            {
                Logger.Info("Config path is not found. Returning default config");
                return default(T);
            }

            try
            {
                this.Logger.Info("Reading base configuration at " + (configPath ?? "") + " ...");
                var json = File.ReadAllText(configPath);

                T config;
                if (mergePath != null)
                {
                    this.Logger.Info("Reading merge configuration at " + (mergePath ?? "") + " ...");
                    var jsonMerge = File.ReadAllText(mergePath);

                    var cfgMain = JObject.Parse(json);
                    var cfgMerge = JObject.Parse(jsonMerge);

                    cfgMerge.Merge(cfgMain);
                    config = cfgMerge.ToObject<T>();
                }
                else
                {
                    config = JsonConvert.DeserializeObject<T>(json);
                }

                if (config == null)
                {
                    return default(T);
                }

                return config;
            }
            catch (Exception e)
            {
                throw new InvalidOperationException("Cannot read " + configFileName, e);
            }
        }

        public string GetConfigPath(string configFileName, bool folderMode, string location)
        {
            this.Logger.Info("Getting configuration file path " + (configFileName ?? "") + " at " + (location ?? "") + " ...");

            var folder = folderMode ? location : Path.GetDirectoryName(location);
            var path = folder + Path.DirectorySeparatorChar + "Bridge" + Path.DirectorySeparatorChar + configFileName;

            if (!File.Exists(path))
            {
                path = folder + Path.DirectorySeparatorChar + configFileName;
            }

            if (!File.Exists(path))
            {
                path = folder + Path.DirectorySeparatorChar + "Bridge.NET" + Path.DirectorySeparatorChar + configFileName;
            }

            if (!File.Exists(path))
            {
                this.Logger.Info("Path is not found. Returning null path.");
                return null;
            }

            this.Logger.Info("Getting configuration file path done - " + (path ?? ""));

            return path;
        }
    }
}