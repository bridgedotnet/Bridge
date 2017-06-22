using Bridge.Contract;
using Bridge.Translator;
using Bridge.Translator.Logging;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Bridge.Builder
{
    public class Program
    {
        private static int Main(string[] args)
        {
            var logger = new Logger(null, false, LoggerLevel.Info, true, new ConsoleLoggerWriter(), new FileLoggerWriter());

            logger.Info("Executing Bridge.Builder.Console...");

            var bridgeOptions = GetBridgeOptionsFromCommandLine(args, logger);

            if (bridgeOptions == null)
            {
                ShowHelp(logger);
                return 1;
            }

            if (bridgeOptions.Help)
            {
                return 0;
            }

            logger.Info("Command line arguments:");
            logger.Info("\t" + (string.Join(" ", args) ?? ""));

            var processor = new TranslatorProcessor(bridgeOptions, logger);

            var result = processor.PreProcess();

            if (result != null)
            {
                return 1;
            }

            try
            {
                processor.Process();

                processor.PostProcess();
            }
            catch (EmitterException ex)
            {
                logger.Error(string.Format("Bridge.NET Compiler error: {2} ({3}, {4}) {0} {1}", ex.Message, ex.StackTrace, ex.FileName, ex.StartLine, ex.StartColumn, ex.EndLine, ex.EndColumn));
                return 1;
            }
            catch (Exception ex)
            {
                var ee = processor.Translator != null ? processor.Translator.CreateExceptionFromLastNode() : null;

                if (ee != null)
                {
                    logger.Error(string.Format("Bridge.NET Compiler error: {2} ({3}, {4}) {0} {1}", ex.Message, ex.StackTrace, ee.FileName, ee.StartLine, ee.StartColumn, ee.EndLine, ee.EndColumn));
                }
                else
                {
                    // Iteractively print inner exceptions
                    var ine = ex;
                    var elvl = 0;
                    while (ine != null)
                    {
                        logger.Error(string.Format("Bridge.NET Compiler error: exception level: {0} - {1}\nStack trace:\n{2}", elvl++, ine.Message, ine.StackTrace));
                        ine = ine.InnerException;
                    }
                }
                return 1;
            }

            return 0;
        }

        /// <summary>
        /// Commandline arguments based on http://docopt.org/
        /// </summary>
        private static void ShowHelp(ILogger logger)
        {
            string codeBase = Assembly.GetExecutingAssembly().CodeBase;
            string programName = Path.GetFileName(codeBase);

            logger.Warn(@"Usage: " + programName + @" [options] (<project-file>|<assembly-file>)
       " + programName + @" [-h|--help]

-h --help                  This help message.
-c --configuration <name>  Configuration name (Debug/Release etc)
                           [default: none].
-P --platform <name>       Platform name (AnyCPU etc) [default: none].
-S --settings <name:value> Comma-delimited list of project settings
                           I.e -S name1:value1,name2:value2)
                           List of allowed settings:
                             AssemblyName, CheckForOverflowUnderflow,
                             Configuration, DefineConstants,
                             OutputPath, OutDir, OutputType,
                             Platform, RootNamespace
                           options -c, -P and -D have priority over -S
-r --rebuild               Force assembly rebuilding.
--nocore                   Do not extract core javascript files.
-D --define <const-list>   Semicolon-delimited list of project constants.
-b --bridge <file>         Bridge.dll file location (currently unused).
-s --source <file>         Source files name/pattern [default: *.cs].
-f --folder <path>         Builder working directory relative to current WD
                           [default: current wd].
-R --recursive             Recursively search for .cs source files inside
                           current workind directory.
-notimestamp --notimestamp Do not show timestamp in log messages
                           [default: shows timestamp]");

#if DEBUG
            // This code and logic is only compiled in when building bridge.net in Debug configuration
            logger.Warn(@"-d --debug                 Attach the builder to a visual studio debugging
                           session. Use this to attach the process to an
                           open Bridge.NET solution. This option is equivalent
                           to Build.dll's 'AttachDebugger'.");
#endif
        }

        private static bool BindCmdArgumentToOption(string arg, BridgeOptions bridgeOptions, ILogger logger)
        {
            if (bridgeOptions.ProjectLocation == null && bridgeOptions.Lib == null)
            {
                if (arg.ToLower().EndsWith(".csproj"))
                {
                    bridgeOptions.ProjectLocation = arg;
                    return true;
                }
                else if (arg.ToLower().EndsWith(".dll"))
                {
                    bridgeOptions.Lib = arg;
                    return true;
                }
            }
            return false; // didn't bind anywhere
        }

        public static BridgeOptions GetBridgeOptionsFromCommandLine(string[] args, ILogger logger)
        {
            var bridgeOptions = new BridgeOptions();

            bridgeOptions.Name = "";
            bridgeOptions.ProjectProperties = new ProjectProperties();

            // options -c, -P and -D have priority over -S
            string configuration = null;
            var hasPriorityConfiguration = false;
            string platform = null;
            var hasPriorityPlatform = false;
            string defineConstants = null;
            var hasPriorityDefineConstants = false;

            int i = 0;

            while (i < args.Length)
            {
                switch (args[i])
                {
                    // backwards compatibility -- now is non-switch argument to builder
                    case "-p":
                    case "-project":
                    case "--project":
                        if (bridgeOptions.Lib != null)
                        {
                            logger.Error("Error: Project and assembly file specification is mutually exclusive.");
                            return null;
                        };
                        bridgeOptions.ProjectLocation = args[++i];
                        break;

                    case "-b":
                    case "-bridge": // backwards compatibility
                    case "--bridge":
                        bridgeOptions.BridgeLocation = args[++i];
                        break;

                    case "-o":
                    case "-output": // backwards compatibility
                    case "--output":
                        bridgeOptions.OutputLocation = args[++i];
                        break;

                    case "-c":
                    case "-cfg": // backwards compatibility
                    case "-configuration": // backwards compatibility
                    case "--configuration":
                        configuration = args[++i];
                        hasPriorityConfiguration = true;
                        break;

                    case "-P":
                    case "--platform":
                        platform = args[++i];
                        hasPriorityPlatform = true;
                        break;

                    case "-def": // backwards compatibility
                    case "-D":
                    case "-define": // backwards compatibility
                    case "--define":
                        defineConstants = args[++i];
                        hasPriorityDefineConstants = true;
                        break;

                    case "-rebuild": // backwards compatibility
                    case "--rebuild":
                    case "-r":
                        bridgeOptions.Rebuild = true;
                        break;

                    case "-nocore": // backwards compatibility
                    case "--nocore":
                        bridgeOptions.ExtractCore = false;
                        break;

                    case "-s":
                    case "-src": // backwards compatibility
                    case "--source":
                        bridgeOptions.Sources = args[++i];
                        break;

                    case "-S":
                    case "--settings":
                        var error = ParseProjectProperties(bridgeOptions, args[++i], logger);

                        if (error != null)
                        {
                            logger.Error("Invalid argument --setting(-S): " + args[i]);
                            logger.Error(error);
                            return null;
                        }

                        break;

                    case "-f":
                    case "-folder": // backwards compatibility
                    case "--folder":
                        bridgeOptions.Folder = Path.Combine(Environment.CurrentDirectory, args[++i]);
                        break;

                    case "-R":
                    case "-recursive": // backwards compatibility
                    case "--recursive":
                        bridgeOptions.Recursive = true;
                        break;

                    case "-lib": // backwards compatibility -- now is non-switch argument to builder
                        if (bridgeOptions.ProjectLocation != null)
                        {
                            logger.Error("Error: Project and assembly file specification is mutually exclusive.");
                            return null;
                        }
                        bridgeOptions.Lib = args[++i];
                        break;

                    case "-h":
                    case "--help":
                        ShowHelp(logger);
                        bridgeOptions.Help = true;
                        return bridgeOptions; // success. Asked for help. Help provided.

                    case "-notimestamp":
                    case "--notimestamp":
                        bridgeOptions.NoTimeStamp = true;
                        break;

#if DEBUG
                    case "-debug":
                    case "--debug":
                    case "-attachdebugger":
                    case "--attachdebugger":
                    case "-d":
                        System.Diagnostics.Debugger.Launch();
                        break;
#endif
                    case "--": // stop reading commandline arguments
                        // Only non-hyphen commandline argument accepted is the file name of the project or
                        // assembly file, so if not provided already, when this option is specified, check if
                        // it is still needed and bind the file to the correct location
                        if (i < (args.Length - 1))
                        {
                            // don't care about success. If not set already, then try next cmdline argument
                            // as the file parameter and ignore following arguments, if any.
                            BindCmdArgumentToOption(args[i + 1], bridgeOptions, logger);
                        }
                        i = args.Length; // move to the end of arguments list
                        break;

                    default:

                        // If this argument does not look like a cmdline switch and
                        // neither backwards -project nor -lib were specified
                        if (!BindCmdArgumentToOption(args[i], bridgeOptions, logger))
                        {
                            logger.Error("Invalid argument: " + args[i]);
                            return null;
                        }
                        break;
                }

                i++;
            }

            if (hasPriorityConfiguration)
            {
                bridgeOptions.ProjectProperties.Configuration = configuration;
            }

            if (hasPriorityPlatform)
            {
                bridgeOptions.ProjectProperties.Platform = platform;
            }

            if (hasPriorityDefineConstants)
            {
                bridgeOptions.ProjectProperties.DefineConstants = defineConstants;
            }

            if (bridgeOptions.ProjectLocation == null && bridgeOptions.Lib == null)
            {
                var folder = bridgeOptions.Folder ?? Environment.CurrentDirectory;

                var csprojs = new string[] { };

                try
                {
                    csprojs = Directory.GetFiles(folder, "*.csproj", SearchOption.TopDirectoryOnly);
                }
                catch (Exception ex)
                {
                    logger.Error(ex.ToString());
                }

                if (csprojs.Length > 1)
                {
                    logger.Error("Could not default to a csproj because multiple were found:");
                    logger.Info(string.Join(", ", csprojs.Select(path => Path.GetFileName(path))));
                    return null; // error: arguments not provided, so can't guess what to do
                }

                if (csprojs.Length == 0)
                {
                    logger.Warn("Could not default to a csproj because none were found.");
                    logger.Error("Error: Project or assembly file name must be specified.");
                    return null;
                }

                var csproj = csprojs[0];
                bridgeOptions.ProjectLocation = csproj;
                logger.Info("Defaulting Project Location to " + csproj);
            }

            if (string.IsNullOrEmpty(bridgeOptions.OutputLocation))
            {
                bridgeOptions.OutputLocation = !string.IsNullOrWhiteSpace(bridgeOptions.ProjectLocation)
                    ? Path.GetFileNameWithoutExtension(bridgeOptions.ProjectLocation) : bridgeOptions.Folder;
            }

            if (bridgeOptions.IsFolderMode)
            {
                bridgeOptions.DefaultFileName = Path.GetFileNameWithoutExtension(bridgeOptions.Lib);
                bridgeOptions.ProjectProperties.AssemblyName = bridgeOptions.DefaultFileName;
            }
            else
            {
                bridgeOptions.DefaultFileName = Path.GetFileName(bridgeOptions.OutputLocation);
            }

            if (string.IsNullOrWhiteSpace(bridgeOptions.DefaultFileName))
            {
                bridgeOptions.DefaultFileName = Path.GetFileName(bridgeOptions.OutputLocation);
            }

            return bridgeOptions;
        }

        private static string ParseProjectProperties(BridgeOptions bridgeOptions, string parameters, ILogger logger)
        {
            var properties = new ProjectProperties();
            bridgeOptions.ProjectProperties = properties;

            if (string.IsNullOrWhiteSpace(parameters))
            {
                return null;
            }

            if (parameters != null && parameters.Length > 1 && parameters[0] == '"' && parameters.Last() == '"')
            {
                parameters = parameters.Trim('"');
            }

            var settings = new Dictionary<string, string>();

            var splitParameters = parameters.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);

            foreach (var pair in splitParameters)
            {
                if (pair == null)
                {
                    continue;
                }

                var parts = pair.Split(new char[] { ':' }, 2);
                if (parts.Length < 2)
                {
                    logger.Warn("Skipped " + pair + " when parsing --settings as it is not well-formed like name:value");
                    continue;
                }

                var name = parts[0].Trim();

                if (string.IsNullOrWhiteSpace(name))
                {
                    logger.Warn("Skipped " + pair + " when parsing --settings as name is empty in name:value");
                    continue;
                }

                string value;

                if (settings.ContainsKey(name))
                {
                    value = settings[name];
                    logger.Warn("Skipped " + pair + " when parsing --settings as it already found in " + name + ":" + value);
                    continue;
                }

                value = parts[1];

                if (value != null && value.Length > 1 && value[0] == '"' && value.Last() == '"')
                {
                    value = value.Trim('"');
                }

                settings.Add(name, value);
            }

            try
            {
                properties.SetValues(settings);
            }
            catch (ArgumentException ex)
            {
                return ex.Message;
            }

            return null;
        }
    }
}