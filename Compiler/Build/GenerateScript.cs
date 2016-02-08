using Bridge.Contract;
using Bridge.Translator.Logging;

using System;
using System.IO;
using System.Linq;

using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;


namespace Bridge.Build
{
    public class GenerateScript : Task
    {
        [Required]
        public ITaskItem Assembly
        {
            get;
            set;
        }

        [Required]
        public string OutputPath
        {
            get;
            set;
        }

        [Required]
        public string ProjectPath
        {
            get;
            set;
        }

        [Required]
        public string AssembliesPath
        {
            get;
            set;
        }

        public bool NoCore
        {
            get;
            set;
        }

        public string Configuration
        {
            get;
            set;
        }

        public string DefineConstants
        {
            get;
            set;
        }

#if DEBUG

        /// <summary>
        /// Attaches the process to a debugger once a build event is triggered. If false/absent, does nothing.
        /// This option is similar to Builder.exe's '-d'
        /// </summary>
        public bool AttachDebugger
        {
            get;
            set;
        }

#endif

        public override bool Execute()
        {
            var success = true;

#if DEBUG
            if (AttachDebugger)
            {
                System.Diagnostics.Debugger.Launch();
            };
#endif

            Bridge.Translator.Translator translator = null;
            try
            {
                translator = new Bridge.Translator.Translator(this.ProjectPath, true);
                translator.Configuration = this.Configuration;

                if (this.DefineConstants != null)
                {
                    translator.DefineConstants.AddRange(this.DefineConstants.Split(';').Select(s => s.Trim()).Where(s => s != ""));
                    translator.DefineConstants = translator.DefineConstants.Distinct().ToList();
                }

                translator.BridgeLocation = Path.Combine(this.AssembliesPath, "Bridge.dll");
                translator.Rebuild = false;
                translator.Log = new Translator.Logging.Logger("Bridge.Build.Task", true, SimpleFileLoggerWriter.Instance);

                translator.Log.Info("Translator properties:");
                translator.Log.Info("\tBridgeLocation:" + translator.BridgeLocation ?? "");
                translator.Log.Info("\tBuildArguments:" + translator.BuildArguments ?? "");
                translator.Log.Info("\tConfiguration:" + translator.Configuration ?? "");
                translator.Log.Info("\tDefineConstants:" + (translator.DefineConstants != null ? string.Join(" ", translator.DefineConstants) : ""));
                translator.Log.Info("\tRebuild:" + translator.Rebuild);

                translator.Translate();

                string fileName = Path.GetFileNameWithoutExtension(this.Assembly.ItemSpec);

                string outputPath = !string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output)
                    ? Path.Combine(Path.GetDirectoryName(this.ProjectPath), translator.AssemblyInfo.Output)
                    : this.OutputPath;


                translator.CleanOutputFolderIfRequired(outputPath);

                if (!this.NoCore)
                {
                    translator.ExtractCore(outputPath);
                }

                translator.SaveTo(outputPath, fileName);
                translator.Flush(outputPath, fileName);
                translator.Plugins.AfterOutput(translator, outputPath, this.NoCore);
            }
            catch (EmitterException e)
            {
                this.Log.LogError(null, null, null, e.FileName, e.StartLine + 1, e.StartColumn + 1, e.EndLine + 1, e.EndColumn + 1, "Error: {0} {1}", e.Message, e.StackTrace);
                success = false;
            }
            catch (Exception e)
            {
                var ee = translator != null ? translator.CreateExceptionFromLastNode() : null;

                if (ee != null)
                {
                    this.Log.LogError(null, null, null, ee.FileName, ee.StartLine + 1, ee.StartColumn + 1, ee.EndLine + 1, ee.EndColumn + 1, "Error: {0} {1}", e.Message, e.StackTrace);
                }
                else
                {
                    this.Log.LogError("Error: {0} {1}", e.Message, e.StackTrace);
                }

                success = false;
            }

            translator = null;

            return success;
        }
    }
}
