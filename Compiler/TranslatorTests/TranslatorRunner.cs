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

        private static string FindBridgeDllPathByConfiguration(string configurationName)
        {
            var bridgeProjectPath = FileHelper.GetRelativeToCurrentDirPath(@"\..\..\..\..\Bridge\Bridge.csproj");

            var outputPath = FileHelper.ReadProjectOutputFolder(configurationName, bridgeProjectPath);

            if (outputPath == null)
                return null;

            if (!Path.IsPathRooted(outputPath))
            {
                outputPath = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(bridgeProjectPath), outputPath));
            }

            var bridgeDllPath = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(outputPath), "Bridge.dll"));

            if (!File.Exists(bridgeDllPath))
                return null;

            return outputPath;
        }

        private static string FindBridgeDllPath(out string configuration)
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
            return this.BuildArguments + @" /p:Platform=AnyCPU /p:OutDir=bin\" + configuration + "\\";
        }

        public string Translate()
        {
            var outputLocation = Path.ChangeExtension(ProjectLocation, "js");

            var translator = new Bridge.Translator.Translator(ProjectLocation);

            translator.Log = this.Logger;
            translator.Rebuild = true;

            this.Logger.Info("\t\tProjectLocation: " + ProjectLocation);

            string configuration;
            translator.BridgeLocation = FindBridgeDllPath(out configuration);

            if (translator.BridgeLocation == null)
            {
                Bridge.Translator.Exception.Throw("Unable to determine Bridge project output path by configuration " + configuration);
            }

            translator.BuildArguments = WrapBuildArguments(configuration);
            translator.Configuration = configuration;

            this.Logger.Info("\t\tBuildArguments: " + translator.BuildArguments);
            this.Logger.Info("\t\tConfiguration: " + translator.Configuration);
            this.Logger.Info("\t\tBridgeLocation: " + translator.BridgeLocation);

            translator.Translate();

            string path = Path.GetDirectoryName(outputLocation);

            string outputDir = !string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output) ?
                                    Path.Combine(Path.GetDirectoryName(ProjectLocation), translator.AssemblyInfo.Output) :
                                    path;

            this.Logger.Info("\t\toutputDir: " + outputDir);
            translator.SaveTo(outputDir, Path.GetFileNameWithoutExtension(outputLocation));

            return outputDir;
        }

        public void Build()
        {
            var outputLocation = Path.ChangeExtension(ProjectLocation, "js");

            var translator = new Bridge.Translator.Translator(ProjectLocation);

            translator.Log = this.Logger;
            //translator.Rebuild = true;

            this.Logger.Info("\t\tProjectLocation: " + ProjectLocation);

            string configuration;

            translator.BridgeLocation = FindBridgeDllPath(out configuration);

            if (translator.BridgeLocation == null)
            {
                Bridge.Translator.Exception.Throw("Unable to determine Bridge project output path by configuration " + configuration);
            }

            translator.BuildArguments = WrapBuildArguments(configuration);
            translator.Configuration = configuration;

            this.Logger.Info("\t\tBuildArguments: " + translator.BuildArguments);
            this.Logger.Info("\t\tConfiguration: " + translator.Configuration);
            this.Logger.Info("\t\tBridgeLocation: " + translator.BridgeLocation);

            translator.BuildAssembly();
        }
    }
}