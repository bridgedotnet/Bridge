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

        public string Configuration
        {
            get;
            set;
        }

        public string Platform
        {
            get;
            set;
        }

        private string FindBridgeDllPathByConfiguration(string configurationName, string platform)
        {
            var bridgeProjectPath = Helpers.FileHelper.GetRelativeToCurrentDirPath(Path.Combine("..", "..", "..", "..", "Bridge", "Bridge.csproj"));

            this.Logger.Info("Searching Bridge assembly in " + bridgeProjectPath);

            var outputPath = Helpers.FileHelper.ReadProjectOutputFolder(configurationName, platform, bridgeProjectPath);

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

        private void SetPlatformAndConfiguration()
        {
            this.Platform = "AnyCPU";

            this.Configuration = "Release";
#if DEBUG
            this.Configuration = "Debug";
#endif
        }

        private string FindBridgeDllPath()
        {
            var path = FindBridgeDllPathByConfiguration(this.Configuration, this.Platform);

            return path;
        }

        private string WrapBuildArguments()
        {
            return this.BuildArguments + @" /p:Platform=" + this.Platform +" /p:OutDir=bin" + Path.DirectorySeparatorChar + this.Configuration + Path.DirectorySeparatorChar;
        }

        public void Translate(bool byBuilding = false)
        {
            var outputLocation = Path.ChangeExtension(ProjectLocation, "js");
            this.Logger.Info("\t\tProjectLocation: " + ProjectLocation);

            SetPlatformAndConfiguration();

            var bridgeLocation = FindBridgeDllPath();

            if (bridgeLocation == null)
            {
                Bridge.Translator.TranslatorException.Throw("Unable to determine Bridge project output path by configuration/platform " + this.Configuration + "/" + this.Platform);
            }

            var bridgeOptions = new Bridge.Translator.BridgeOptions()
            {
                ProjectLocation = ProjectLocation,
                OutputLocation = outputLocation,
                BridgeLocation = bridgeLocation,
                DefaultFileName = Path.GetFileName(outputLocation),
                Rebuild = true,
                ExtractCore = true,
                Sources = null,
                Folder = null,
                Recursive = false,
                Lib = null,
                Help = false,
                NoTimeStamp = null,
                FromTask = false,
                NoLoggerSetUp = true
            };

            bridgeOptions.ProjectProperties = new ProjectProperties()
            {
                Configuration = this.Configuration,
                Platform = this.Platform,
                DefineConstants = null,
            };

            var processor = new TranslatorProcessor(bridgeOptions, this.Logger as Bridge.Translator.Logging.Logger);

            var result = processor.PreProcess();

            if (result != null)
            {
                Bridge.Translator.TranslatorException.Throw("Unable to preprocess: " + result);
            }

            var translator = processor.Translator;

            translator.BuildArguments = WrapBuildArguments();
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