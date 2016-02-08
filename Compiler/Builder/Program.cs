using Bridge.Contract;
using Bridge.Translator.Logging;

using System;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Bridge.Builder
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var logger = new Logger(null, true, new ConsoleLoggerWriter(), SimpleFileLoggerWriter.Instance);

            string projectLocation = null;
            string outputLocation = null;
            string bridgeLocation = null;
            bool rebuild = false;
            bool extractCore = true;
            string cfg = null;
            string source = null;
            string folder = Environment.CurrentDirectory;
            bool recursive = false;
            string lib = null;
            string def = null;

            if (args.Length == 0)
            {
                logger.Info("Bridge.Builder commands:");
                logger.Info("-p or -project           Path to csproj file (required)");
                logger.Info("-o or -output            Output directory for generated script");
                logger.Info("-cfg or -configuration   Configuration name, typically Debug/Release");
                logger.Info("-r or -rebuild           Force assembly rebuilding");
                logger.Info("-nocore                  Do not extract core javascript files");
                logger.Info("-def or -define          Defines project constants. For example, \"CONSTANT1;CONSTANT2\" ");
#if DEBUG
                // This code and logic is only compiled in when building bridge.net in Debug configuration
                logger.Info("-d or -debug             Attach the builder to an visual studio debugging instance.");
                logger.Info("                         Use this to attach the process to an open Bridge.NET solution.");
                logger.Info("                         This option is equivalent to Build.dll's 'AttachDebugger'.");
#endif
                logger.Info("");
                return;
            }

            int i = 0;

            while (i < args.Length)
            {
                switch (args[i])
                {
                    case "-p":
                    case "-project":
                        projectLocation = args[++i];
                        break;

                    case "-b":
                    case "-bridge":
                        bridgeLocation = args[++i];
                        break;

                    case "-o":
                    case "-output":
                        outputLocation = args[++i];
                        break;

                    case "-cfg":
                    case "-configuration":
                        cfg = args[++i];
                        break;

                    case "-def":
                    case "-define":
                        def = args[++i];
                        break;

                    case "-rebuild":
                    case "-r":
                        rebuild = true;
                        break;

                    case "-nocore":
                        extractCore = false;
                        break;

                    case "-src":
                        source = args[++i];
                        break;

                    case "-folder":
                        folder = Path.Combine(Environment.CurrentDirectory, args[++i]);
                        break;

                    case "-recursive":
                        recursive = true;
                        break;

                    case "-lib":
                        lib = args[++i];
                        break;
#if DEBUG
                    case "-debug":
                    case "-attachdebugger":
                    case "-d":
                        System.Diagnostics.Debugger.Launch();
                        break;
#endif
                    default:
                        logger.Info("Unknown command: " + args[i]);
                        return;
                }

                i++;
            }

            if (string.IsNullOrEmpty(outputLocation))
            {
                outputLocation = !string.IsNullOrWhiteSpace(projectLocation) ? Path.GetFileNameWithoutExtension(projectLocation) : folder;
            }

            Bridge.Translator.Translator translator = null;
            try
            {
                logger.Name = "Bridge.Builder.Console";

                logger.Info("Generating script...");

                logger.Info("Command line arguments:");
                logger.Info("\t" + (string.Join(" ", args) ?? ""));

                if (!string.IsNullOrWhiteSpace(projectLocation))
                {
                    translator = new Bridge.Translator.Translator(projectLocation);
                }
                else
                {
                    if (string.IsNullOrWhiteSpace(lib))
                    {
                        throw new Exception("Please define path to assembly using -lib option");
                    }

                    lib = Path.Combine(folder, lib);
                    translator = new Bridge.Translator.Translator(folder, source, recursive, lib);
                }

                bridgeLocation = !string.IsNullOrEmpty(bridgeLocation) ? bridgeLocation : Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Bridge.dll");

                translator.BridgeLocation = bridgeLocation;
                translator.Rebuild = rebuild;
                translator.Log = logger;
                translator.Configuration = cfg;
                if (def != null)
                {
                    translator.DefineConstants.AddRange(def.Split(';').Select(s => s.Trim()).Where(s => s != ""));
                    translator.DefineConstants = translator.DefineConstants.Distinct().ToList();
                }

                translator.Log.Info("Translator properties:");
                translator.Log.Info("\tBridgeLocation:" + translator.BridgeLocation ?? "");
                translator.Log.Info("\tBuildArguments:" + translator.BuildArguments ?? "");
                translator.Log.Info("\tConfiguration:" + translator.Configuration ?? "");
                translator.Log.Info("\tDefineConstants:" + (translator.DefineConstants != null  ? string.Join(" ", translator.DefineConstants) :  ""));
                translator.Log.Info("\tRebuild:" + translator.Rebuild);

                translator.Translate();

                string path = string.IsNullOrWhiteSpace(Path.GetFileName(outputLocation)) ? outputLocation : Path.GetDirectoryName(outputLocation);
                string outputPath = null;

                if (!string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output))
                {
                    outputPath = Path.Combine(!string.IsNullOrWhiteSpace(projectLocation) ? Path.GetDirectoryName(projectLocation) : folder, translator.AssemblyInfo.Output);
                }
                else
                {
                    outputPath = Path.Combine(!string.IsNullOrWhiteSpace(projectLocation) ? Path.GetDirectoryName(projectLocation) : folder, !string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output) ? translator.AssemblyInfo.Output : path);
                }

                translator.CleanOutputFolderIfRequired(outputPath);

                if (extractCore)
                {
                    logger.Info("Extracting core scripts...");
                    translator.ExtractCore(outputPath);
                }

                logger.Info("Saving to " + outputPath);
                translator.SaveTo(outputPath, Path.GetFileName(outputLocation));
                translator.Flush(outputPath, Path.GetFileName(outputLocation));
                translator.Plugins.AfterOutput(translator, outputPath, !extractCore);

                logger.Info("Done translation console");
            }
            catch (EmitterException ex)
            {
                logger.Error(string.Format("Error: {2} ({3}, {4}) {0} {1}", ex.Message, ex.StackTrace, ex.FileName, ex.StartLine, ex.StartColumn, ex.EndLine, ex.EndColumn));
            }
            catch (Exception ex)
            {
                var ee = translator != null ? translator.CreateExceptionFromLastNode() : null;

                if (ee != null)
                {
                    logger.Error(string.Format("Error: {2} ({3}, {4}) {0} {1}", ex.Message, ex.StackTrace, ee.FileName, ee.StartLine, ee.StartColumn, ee.EndLine, ee.EndColumn));
                }
                else
                {
                    // Iteractively print inner exceptions
                    var ine = ex;
                    var elvl = 0;
                    while (ine != null)
                    {
                        logger.Error(string.Format("Error: exception level: {0} - {1}\nStack trace:\n{2}", elvl++, ine.Message, ine.StackTrace));
                        ine = ine.InnerException;
                    }
                }

                Console.ReadLine();
            }
        }
    }
}
