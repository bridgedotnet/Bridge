using Bridge.Contract;
using Bridge.Translator;
using Bridge.Translator.Logging;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;
using System;
using System.IO;

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

        public string Platform
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
            var logger = new Translator.Logging.Logger(null, false, LoggerLevel.Info, true, new VSLoggerWriter(this.Log), new FileLoggerWriter());

            logger.Info("Executing Bridge.Build.Task...");

            var bridgeOptions = this.GetBridgeOptions();

            var processor = new TranslatorProcessor(bridgeOptions, logger);

            var result = processor.PreProcess();

            if (result != null)
            {
                processor = null;
                return false;
            }

            try
            {
                processor.Process();

                processor.PostProcess();
            }
            catch (EmitterException e)
            {
                this.Log.LogError(null, null, null, e.FileName, e.StartLine + 1, e.StartColumn + 1, e.EndLine + 1, e.EndColumn + 1, "Error: {0} {1}", e.Message, e.StackTrace);
                success = false;
            }
            catch (Exception e)
            {
                var ee = processor.Translator != null ? processor.Translator.CreateExceptionFromLastNode() : null;

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

            processor = null;

            return success;
        }

        private Bridge.Translator.BridgeOptions GetBridgeOptions()
        {
            var bridgeOptions = new Bridge.Translator.BridgeOptions()
            {
                ProjectLocation = this.ProjectPath,
                OutputLocation = this.OutputPath,
                DefaultFileName = Path.GetFileName(this.Assembly.ItemSpec),
                BridgeLocation = Path.Combine(this.AssembliesPath, "Bridge.dll"),
                Rebuild = false,
                ExtractCore = !NoCore,
                Configuration = this.Configuration,
                Platform = this.Platform,
                Source = null,
                Folder = null,
                Recursive = false,
                Lib = null,
                DefinitionConstants = this.DefineConstants,
                Help = false,
                NoTimeStamp = null,
                FromTask = true,
                Name = ""
            };

            return bridgeOptions;
        }
    }
}