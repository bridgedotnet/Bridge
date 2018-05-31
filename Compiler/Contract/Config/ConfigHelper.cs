using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace Bridge.Contract
{
    public class ConfigHelper
    {
        class PathChanger
        {
            //private Regex PathSchemaRegex = new Regex(@"(?<=(^\w+:)|^)[\\/]{2,}");
            //private Regex PathNonSchemaRegex = new Regex(@"(?<!((^\w+:)|^)[\\/]*)[\\/]+");
            private Regex PathRegex = new Regex(@"(?<schema>(?<=(^\w+:)|^)[\\/]{2,})|[\\/]+");

            public string Separator
            {
                get; private set;
            }

            public string DoubleSeparator
            {
                get; private set;
            }

            public string Path
            {
                get; private set;
            }

            public PathChanger(string path, char separator)
            {
                Path = path;
                Separator = separator.ToString();
                DoubleSeparator = new string(separator, 2);
            }

            private string ReplaceSlashEvaluator(Match m)
            {
                if (m.Groups["schema"].Success)
                {
                    return DoubleSeparator;
                }
                return Separator;
            }

            public string ConvertPath()
            {
                //path = PathSchemaRegex.Replace(path, directorySeparator.ToString());
                //path = PathNonSchemaRegex.Replace(path, directorySeparator.ToString());

                return PathRegex.Replace(Path, ReplaceSlashEvaluator);
            }
        }

        public string ConvertPath(string path, char directorySeparator = char.MinValue)
        {
            if (path == null)
            {
                return null;
            }

            if (directorySeparator == char.MinValue)
            {
                directorySeparator = Path.DirectorySeparatorChar;
            }

            path = new PathChanger(path, directorySeparator).ConvertPath();

            return path;
        }

        public string ApplyToken(string token, string tokenValue, string input)
        {
            if (string.IsNullOrEmpty(token))
            {
                throw new ArgumentException("token cannot be null or empty", "token");
            }

            if (input == null)
            {
                return null;
            }

            if (token.Contains("$"))
            {
                token = Regex.Escape(token);
            }

            if (tokenValue == null)
            {
                tokenValue = "";
            }

            return Regex.Replace(input, token, tokenValue, RegexOptions.IgnoreCase);
        }

        public string ApplyTokens(Dictionary<string, string> tokens, string input)
        {
            if (tokens == null)
            {
                throw new ArgumentNullException("tokens");
            }

            if (input == null)
            {
                return null;
            }

            foreach (var token in tokens)
            {
                input = ApplyToken(token.Key, token.Value, input);
            }

            return input;
        }

        public string ApplyPathToken(string token, string tokenValue, string input)
        {
            return ConvertPath(ApplyToken(token, tokenValue, input));
        }

        public string ApplyPathTokens(Dictionary<string, string> tokens, string input)
        {
            if (input == null)
            {
                return null;
            }

            input = ApplyTokens(tokens, input);

            return ConvertPath(input);
        }
    }

    public class ConfigHelper<T> : ConfigHelper
    {
        private ILogger Logger
        {
            get; set;
        }

        public ConfigHelper(ILogger logger)
        {
            this.Logger = logger;
        }

        public virtual T ReadConfig(string configFileName, bool folderMode, string location, string configuration)
        {
            string configPath = null;
            string mergePath = null;

            Logger.Trace("Reading configuration file " + (configFileName ?? "") + " at " + (location ?? "") + " for configuration " + (configuration ?? "") + " ...");

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
                Logger.Info("Bridge config file is not found. Returning default config");
                return default(T);
            }

            try
            {
                Logger.Trace("Reading base configuration at " + (configPath ?? "") + " ...");
                var json = File.ReadAllText(configPath);

                T config;
                if (mergePath != null)
                {
                    Logger.Trace("Reading merge configuration at " + (mergePath ?? "") + " ...");
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
                throw new InvalidOperationException("Cannot read configuration file " + configPath + ": " + e.Message, e);
            }
        }

        public string GetConfigPath(string configFileName, bool folderMode, string location)
        {
            this.Logger.Trace("Getting configuration by file path " + (configFileName ?? "") + " at " + (location ?? "") + " ...");

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
                this.Logger.Trace("Skipping " + configFileName + " (not found)");
                return null;
            }

            this.Logger.Trace("Found configuration file " + (path ?? ""));

            return path;
        }
    }
}