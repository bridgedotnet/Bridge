using Bridge.Contract;
using Bridge.Translator.Logging;
using Bridge.Translator.Utils;

using System;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Bridge.Translator
{
    public class TranslatorProcessor
    {
        public BridgeOptions BridgeOptions { get; private set; }

        public Logger Logger { get; private set; }

        public IAssemblyInfo TranslatorConfiguration { get; private set; }

        public Translator Translator { get; private set; }

        public TranslatorProcessor(BridgeOptions bridgeOptions, Logger logger)
        {
            this.BridgeOptions = bridgeOptions;
            this.Logger = logger;
        }

        public void PreProcess()
        {
            this.AdjustBridgeOptions();

            this.TranslatorConfiguration = this.ReadConfiguration();

            this.Translator = this.SetTranslatorProperties();

            this.SetLoggerConfigurationParameters();
        }

        private void AdjustBridgeOptions()
        {
            var pathHelper = new ConfigHelper();
            var bridgeOptions = this.BridgeOptions;

            bridgeOptions.BridgeLocation = pathHelper.ConvertPath(bridgeOptions.BridgeLocation);
            bridgeOptions.DefaultFileName = pathHelper.ConvertPath(bridgeOptions.DefaultFileName);
            bridgeOptions.Folder = pathHelper.ConvertPath(bridgeOptions.Folder);
            bridgeOptions.Lib = pathHelper.ConvertPath(bridgeOptions.Lib);
            bridgeOptions.OutputLocation = pathHelper.ConvertPath(bridgeOptions.OutputLocation);
            bridgeOptions.ProjectLocation = pathHelper.ConvertPath(bridgeOptions.ProjectLocation);
            bridgeOptions.Sources = pathHelper.ConvertPath(bridgeOptions.Sources);

            bridgeOptions.ProjectProperties.OutputPath = pathHelper.ConvertPath(bridgeOptions.ProjectProperties.OutputPath);
            bridgeOptions.ProjectProperties.OutDir = pathHelper.ConvertPath(bridgeOptions.ProjectProperties.OutDir);
        }

        public void Process()
        {
            this.Translator.Translate();
        }

        public string PostProcess()
        {
            var logger = this.Logger;
            var bridgeOptions = this.BridgeOptions;
            var translator = this.Translator;

            logger.Info("Post processing...");

            var outputPath = GetOutputFolder();

            logger.Info("outputPath is " + outputPath);

            translator.CleanOutputFolderIfRequired(outputPath);

            translator.PrepareResourcesConfig();

            var projectPath = Path.GetDirectoryName(translator.Location);
            logger.Info("projectPath is " + projectPath);

            if (bridgeOptions.ExtractCore)
            {
                translator.ExtractCore(outputPath, projectPath);
            }
            else
            {
                logger.Info("No extracting core scripts option enabled");
            }

            var fileName = GetDefaultFileName(bridgeOptions);

            translator.Minify();
            translator.Combine(fileName);
            translator.Save(outputPath, fileName);

            translator.InjectResources(outputPath, projectPath);

            translator.RunAfterBuild();

            logger.Info("Run plugins AfterOutput...");
            translator.Plugins.AfterOutput(translator, outputPath, !bridgeOptions.ExtractCore);
            logger.Info("Done plugins AfterOutput");

            this.GenerateHtml(outputPath);

            translator.Report(outputPath);

            logger.Info("Done post processing");

            return outputPath;
        }

        private void GenerateHtml(string outputPath)
        {
            var htmlTitle = Translator.AssemblyInfo.Html.Title;

            if (string.IsNullOrEmpty(htmlTitle))
            {
                htmlTitle = Translator.GetAssemblyTitle();
            }

            var htmlGenerator = new HtmlGenerator(
                Translator.Log,
                Translator.AssemblyInfo,
                Translator.Outputs,
                htmlTitle
                );

            htmlGenerator.GenerateHtml(outputPath);
        }

        private string GetDefaultFileName(BridgeOptions bridgeOptions)
        {
            var defaultFileName = this.Translator.AssemblyInfo.FileName;

            if (string.IsNullOrEmpty(defaultFileName))
            {
                defaultFileName = bridgeOptions.DefaultFileName;
            }

            if (string.IsNullOrEmpty(defaultFileName))
            {
                return AssemblyInfo.DEFAULT_FILENAME;
            }

            return Path.GetFileNameWithoutExtension(defaultFileName);
        }

        private string GetOutputFolder(bool basePathOnly = false, bool strict = false)
        {
            var bridgeOptions = this.BridgeOptions;
            string basePath = bridgeOptions.IsFolderMode ? bridgeOptions.Folder : Path.GetDirectoryName(bridgeOptions.ProjectLocation);

            if (!basePathOnly)
            {
                string assemblyOutput = string.Empty;

                if (this.Translator != null)
                {
                    assemblyOutput = this.Translator.AssemblyInfo.Output;
                }
                else if (this.TranslatorConfiguration != null)
                {
                    assemblyOutput = this.TranslatorConfiguration.Output;
                }
                else if (strict)
                {
                    throw new InvalidOperationException("Could not get output folder as assembly configuration is still null");
                }
                else
                {
                    this.Logger.Warn("Could not get assembly output folder");
                }

                basePath = string.IsNullOrWhiteSpace(assemblyOutput)
                    ? Path.Combine(basePath, Path.GetDirectoryName(bridgeOptions.OutputLocation))
                    : Path.Combine(basePath, assemblyOutput);
            }

            basePath = new ConfigHelper().ConvertPath(basePath);
            basePath = Path.GetFullPath(basePath);

            return basePath;
        }

        private IAssemblyInfo ReadConfiguration()
        {
            var bridgeOptions = this.BridgeOptions;

            var logger = this.Logger;

            var location = bridgeOptions.IsFolderMode ? bridgeOptions.Folder : bridgeOptions.ProjectLocation;

            var configReader = new AssemblyConfigHelper(logger);

            return configReader.ReadConfig(bridgeOptions.IsFolderMode, location, bridgeOptions.ProjectProperties.Configuration);
        }

        private void SetLoggerConfigurationParameters()
        {
            var logger = this.Logger;
            var bridgeOptions = this.BridgeOptions;
            var assemblyConfig = this.TranslatorConfiguration;

            if (bridgeOptions.NoLoggerSetUp)
            {
                return;
            }

            logger.Trace("Applying logger configuration parameters...");

            logger.Name = bridgeOptions.Name;

            if (!string.IsNullOrEmpty(logger.Name))
            {
                logger.Trace("Logger name: " + logger.Name);
            }

            var loggerLevel = assemblyConfig.Logging.Level ?? LoggerLevel.None;

            logger.Trace("Logger level: " + loggerLevel);

            if (loggerLevel <= LoggerLevel.None)
            {
                logger.Info("    To enable detailed logging, configure \"logging\" in bridge.json.");
                logger.Info("    https://github.com/bridgedotnet/Bridge/wiki/global-configuration#logging");
            }

            logger.LoggerLevel = loggerLevel;

            logger.Trace("Read config file: " + AssemblyConfigHelper.ConfigToString(assemblyConfig));

            logger.BufferedMode = false;

            if (bridgeOptions.NoTimeStamp.HasValue)
            {
                logger.UseTimeStamp = !bridgeOptions.NoTimeStamp.Value;
            }
            else if (assemblyConfig.Logging.TimeStamps.HasValue)
            {
                logger.UseTimeStamp = assemblyConfig.Logging.TimeStamps.Value;
            }
            else
            {
                logger.UseTimeStamp = true;
            }

            var fileLoggerWriter = logger.GetFileLogger();

            if (fileLoggerWriter != null)
            {
                string logFileFolder = GetLoggerFolder(assemblyConfig);

                fileLoggerWriter.SetParameters(logFileFolder, assemblyConfig.Logging.FileName, assemblyConfig.Logging.MaxSize);
            }

            logger.Flush();

            logger.Trace("Setting logger configuration parameters done");
        }

        private string GetLoggerFolder(IAssemblyInfo assemblyConfig)
        {
            var logFileFolder = assemblyConfig.Logging.Folder;

            if (string.IsNullOrWhiteSpace(logFileFolder))
            {
                logFileFolder = this.GetOutputFolder(false, false);
            }
            else if (!Path.IsPathRooted(logFileFolder))
            {
                logFileFolder = Path.Combine(this.GetOutputFolder(true, false), logFileFolder);
            }

            return logFileFolder;
        }

        private Translator SetTranslatorProperties()
        {
            var logger = this.Logger;
            var bridgeOptions = this.BridgeOptions;
            var assemblyConfig = this.TranslatorConfiguration;

            logger.Trace("Setting translator properties...");

            Bridge.Translator.Translator translator = null;

            // FIXME: detect by extension whether first argument is a project or DLL
            if (!bridgeOptions.IsFolderMode)
            {
                translator = new Bridge.Translator.Translator(bridgeOptions.ProjectLocation, bridgeOptions.Sources, bridgeOptions.FromTask);
            }
            else
            {
                if (string.IsNullOrWhiteSpace(bridgeOptions.Lib))
                {
                    throw new InvalidOperationException("Please define path to assembly using -lib option");
                }

                bridgeOptions.Lib = Path.Combine(bridgeOptions.Folder, bridgeOptions.Lib);
                translator = new Bridge.Translator.Translator(bridgeOptions.Folder, bridgeOptions.Sources, bridgeOptions.Recursive, bridgeOptions.Lib);
            }

            translator.ProjectProperties = bridgeOptions.ProjectProperties;

            translator.AssemblyInfo = assemblyConfig;

            if (this.BridgeOptions.ReferencesPath != null)
            {
                translator.AssemblyInfo.ReferencesPath = this.BridgeOptions.ReferencesPath;
            }

            translator.OverflowMode = bridgeOptions.ProjectProperties.CheckForOverflowUnderflow.HasValue ?
                (bridgeOptions.ProjectProperties.CheckForOverflowUnderflow.Value ? OverflowMode.Checked : OverflowMode.Unchecked) : (OverflowMode?)null;

            if (string.IsNullOrEmpty(bridgeOptions.BridgeLocation))
            {
                bridgeOptions.BridgeLocation = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Bridge.dll");
            }

            translator.BridgeLocation = bridgeOptions.BridgeLocation;
            translator.Rebuild = bridgeOptions.Rebuild;
            translator.Log = logger;

            if (bridgeOptions.ProjectProperties.DefineConstants != null)
            {
                translator.DefineConstants.AddRange(bridgeOptions.ProjectProperties.DefineConstants.Split(';').Select(s => s.Trim()).Where(s => s != ""));
                translator.DefineConstants = translator.DefineConstants.Distinct().ToList();
            }

            translator.Log.Trace("Translator properties:");
            translator.Log.Trace("\tBridgeLocation:" + translator.BridgeLocation);
            translator.Log.Trace("\tBuildArguments:" + translator.BuildArguments);
            translator.Log.Trace("\tDefineConstants:" + (translator.DefineConstants != null ? string.Join(" ", translator.DefineConstants) : ""));
            translator.Log.Trace("\tRebuild:" + translator.Rebuild);
            translator.Log.Trace("\tProjectProperties:" + translator.ProjectProperties);

            if (translator.FolderMode)
            {
                translator.ReadFolderFiles();

                if (!string.IsNullOrEmpty(assemblyConfig.FileName))
                {
                    translator.DefaultNamespace = Path.GetFileNameWithoutExtension(assemblyConfig.FileName);
                }
                else
                {
                    translator.DefaultNamespace = bridgeOptions.DefaultFileName;
                }
            }
            else
            {
                translator.EnsureProjectProperties();
            }

            translator.ApplyProjectPropertiesToConfig();

            logger.Trace("Setting translator properties done");

            return translator;
        }
    }
}