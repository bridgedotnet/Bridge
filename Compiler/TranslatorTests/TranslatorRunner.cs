using Bridge.Contract;

using System.IO;

namespace Bridge.Translator.Tests
{
    internal class TranslatorRunner
    {
        public ILogger Logger { get; set; }

        public string ProjectLocation
        {
            get;
            set;
        }

        public string BuildArguments
        {
            get;
            set;
        }

        private string FindBridgeDllPathByConfiguration(string configurationName)
        {
            var bridgeProjectPath = FileHelper.GetRelativeToCurrentDirPath(Path.Combine("..", "..", "..", "..", "Bridge", "Bridge.csproj"));

            this.Logger.Info("Searching Bridge assembly in " + bridgeProjectPath);

            var outputPath = FileHelper.ReadProjectOutputFolder(configurationName, bridgeProjectPath);

            this.Logger.Info("Output path " + outputPath + " in project " + bridgeProjectPath + " for configuration " + configurationName);

            if (outputPath == null)
            {
                return null;
            }

            if (!Path.IsPathRooted(outputPath))
            {
                outputPath = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(bridgeProjectPath), outputPath));
            }

            outputPath = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(outputPath), "Bridge.dll"));

            this.Logger.Info("Full Output path " + outputPath);

            if (!File.Exists(outputPath))
            {
                this.Logger.Info("The full Output path does not exists");
                return null;
            }

            return outputPath;
        }

        private string FindBridgeDllPath(out string configuration)
        {
            configuration = "Release";
#if DEBUG
            configuration = "Debug";
#endif
            var path = FindBridgeDllPathByConfiguration(configuration);

            //if (path == null)
            //{
            //    configuration = "Debug";
            //    path = FindBridgeDllPathByConfiguration(configuration);
            //}

            return path;
        }

        private string WrapBuildArguments(string configuration)
        {
            return this.BuildArguments + @" /p:Platform=AnyCPU /p:OutDir=bin" + Path.DirectorySeparatorChar + configuration + Path.DirectorySeparatorChar;
        }

        public void Translate(bool byBuilding = false)
        {
            var outputLocation = Path.ChangeExtension(ProjectLocation, "js");
            this.Logger.Info("\t\tProjectLocation: " + ProjectLocation);

            string configuration;
            var bridgeLocation = FindBridgeDllPath(out configuration);

            if (bridgeLocation == null)
            {
                Bridge.Translator.TranslatorException.Throw("Unable to determine Bridge project output path by configuration " + configuration);
            }

            var bridgeOptions = new Bridge.Translator.BridgeOptions()
            {
                ProjectLocation = ProjectLocation,
                OutputLocation = outputLocation,
                BridgeLocation = bridgeLocation,
                DefaultFileName = Path.GetFileName(outputLocation),
                Rebuild = true,
                ExtractCore = true,
                Configuration = configuration,
                Source = null,
                Folder = null,
                Recursive = false,
                Lib = null,
                DefinitionConstants = null,
                Help = false,
                NoTimeStamp = null,
                FromTask = false,
                NoLoggerSetUp = true
            };

            var processor = new TranslatorProcessor(bridgeOptions, this.Logger as Bridge.Translator.Logging.Logger);

            var result = processor.PreProcess();

            if (result != null)
            {
                Bridge.Translator.TranslatorException.Throw("Unable to preprocess");
            }

            var translator = processor.Translator;

            translator.BuildArguments = WrapBuildArguments(configuration);
            translator.Log.Info("\t Adjusted BuildArguments:" + translator.BuildArguments ?? "");

            if (byBuilding)
            {
                translator.BuildAssembly();
            }
            else
            {
                processor.Process();

                //string path = Path.GetDirectoryName(outputLocation);

                //string outputDir = !string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output) ?
                //                        Path.Combine(Path.GetDirectoryName(ProjectLocation), translator.AssemblyInfo.Output) :
                //                        path;

                //this.Logger.Info("\t\toutputDir: " + outputDir);
                //translator.SaveTo(outputDir, Path.GetFileNameWithoutExtension(outputLocation));

                processor.PostProcess();
            }
        }
    }
}