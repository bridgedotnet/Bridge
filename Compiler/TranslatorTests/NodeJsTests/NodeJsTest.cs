using Bridge.Contract;
using Bridge.Translator.Logging;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class NodeJsTest
    {
        // A code expected to return by nodejs run file (run.js file in the project Resources)
        private const int NODEJS_EXPECTED_EXIT_CODE = 777;

        // Name of the file that will be run by node.exe
        public const string NODEJS_RUN_FILE_NAME = "run.js";

        // Name of the file that will be reuired by nodejs run file
        public const string BRIDGE_JS_FILE_NAME = "bridge.js";

        public const string NODEJS_EXECUTEABLE_FILE_NAME = "node.exe";

#if UNIX

#else
        [Test]
#endif
        public void NodeJsCanRunBridge()
        {
            var currentDir = Path.GetDirectoryName(Helpers.FileHelper.GetExecutingAssemblyPath());
            Directory.SetCurrentDirectory(currentDir);

            var logger = new Logger(null, true, Contract.LoggerLevel.Info, false, new FileLoggerWriter(currentDir), new ConsoleLoggerWriter());
            logger.Info("NodeJS test...");
            logger.Info("Current dir:" + currentDir);

            string nodePath = FindNodeJs(currentDir, logger);
            logger.Info("Node path:" + nodePath);

            using (var runJsFileResource = Helpers.ResourceHelper.GetRunJsFile())
            {
                CopyBridgeandRunJsFiles(nodePath, runJsFileResource, logger);
            }

            var exitCode = RunNodeJs(nodePath, logger, NODEJS_EXPECTED_EXIT_CODE);

            logger.Info("Exited NodeJS with code:" + exitCode);

            Assert.AreEqual(NODEJS_EXPECTED_EXIT_CODE, exitCode);

            logger.Info("NodeJS test complete");
        }

        /// <summary>
        /// Copy bridge and generate the node.js file to be tested with.
        /// </summary>
        /// <remarks>This overload will just convert the run.js file contents string into a Stream and call the main method.</remarks>
        /// <param name="nodeJsExeFilePath">Path to Node.exe</param>
        /// <param name="runJsFileContents">Contents to be added to the run.js file.</param>
        /// <param name="logger">Reference to the runtime logger.</param>
        public static void CopyBridgeandRunJsFiles(string nodeJsExeFilePath, string runJsFileContents, ILogger logger)
        {
            var runJsFileResource = new MemoryStream();
            var writer = new StreamWriter(runJsFileResource);
            writer.Write(runJsFileContents);
            writer.Flush();
            runJsFileResource.Position = 0;
            
            CopyBridgeandRunJsFiles(nodeJsExeFilePath, runJsFileResource, logger);
        }

        /// <summary>
        /// Copy bridge and generate the node.js file to be tested with.
        /// </summary>
        /// <param name="nodeJsExeFilePath">Path to Node.exe</param>
        /// <param name="runJsFileResource">Stream containing the run.js file contents.</param>
        /// <param name="logger">Reference to the runtime logger.</param>
        public static void CopyBridgeandRunJsFiles(string nodeJsExeFilePath, Stream runJsFileResource, ILogger logger)
        {
            var folder = Path.GetDirectoryName(nodeJsExeFilePath);

            var bridgeJsFileName = Path.Combine(folder, BRIDGE_JS_FILE_NAME);

            // Read bridge.js from embedded Bridge.dll and write into nodejs folder
            using (var bridgeAssembly = Helpers.MonoCecilAssemblyHelper.GetBridgeJs())
            {
                Helpers.FileHelper.WriteStreamAsFile(bridgeAssembly, bridgeJsFileName);
            }

            logger.Info("Extracted:" + bridgeJsFileName);

            var runJsFileName = Path.Combine(folder, NODEJS_RUN_FILE_NAME);

            // Read run.js from embedded resources and write into nodejs folder
            Helpers.FileHelper.WriteStreamAsFile(runJsFileResource, runJsFileName);

            logger.Info("Extracted:" + runJsFileName);
        }

        public static string FindNodeJs(string currentDir, ILogger logger)
        {
            string nodePath = null;
            string message = null;

            try
            {
                nodePath = Helpers.FileHelper.FindFile(NODEJS_EXECUTEABLE_FILE_NAME);
            }
            catch (Exception ex)
            {
                message = ex.ToString();
                logger.Error(message);
            }

            if (nodePath == null)
            {
                Assert.Fail("Did not find {0} starting search from {1}. {2}", NODEJS_EXECUTEABLE_FILE_NAME, currentDir, message);
            }

            return nodePath;
        }

        private static string GetProcessPath(string path)
        {
            switch (Environment.OSVersion.Platform)
            {
                case PlatformID.Win32NT:
                    return "\"" + path + "\"";
                case PlatformID.Unix:
                case PlatformID.MacOSX:
                    return "mono";
                default:
                    return null;
            }
        }

        private static string GetProcessArguments(string path)
        {
            switch (Environment.OSVersion.Platform)
            {
                case PlatformID.Win32NT:
                    return NODEJS_RUN_FILE_NAME;
                case PlatformID.Unix:
                case PlatformID.MacOSX:
                    return string.Format("\"{0}\" {1}", path, NODEJS_RUN_FILE_NAME);
                default:
                    return null;
            }
        }

        public static int RunNodeJs(string path, ILogger logger, int expectedExitStatus = 0)
        {
            logger.Info("Running NodeJS...");

            var info = new ProcessStartInfo()
            {
                FileName = GetProcessPath(path),
                Arguments = GetProcessArguments(path),
                WorkingDirectory = Path.GetDirectoryName(path),
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                CreateNoWindow = true,
                WindowStyle = ProcessWindowStyle.Hidden
            };

            logger.Info(string.Format("FileName:{0} Arguments:{1}", info.FileName, info.Arguments));

            using (var p = Process.Start(info))
            {
                var stdout = new List<string>();
                var stderr = new List<string>();

                // Reading from the console output
                while (!p.StandardOutput.EndOfStream)
                {
                    stdout.Add(p.StandardOutput.ReadLine());
                }
                while (!p.StandardError.EndOfStream)
                {
                    stderr.Add(p.StandardError.ReadLine());
                }

                logger.Info("NodeJS console output:");
                logger.Info(String.Join(String.Empty, stdout));

                logger.Info("Waiting NodeJS process to exit...");

                p.WaitForExit();

                logger.Info("Exited with code " + p.ExitCode);

                if (p.ExitCode != expectedExitStatus)
                {
                    var stderr_report = String.Join(Environment.NewLine, stderr.Count > 25 ? stderr.GetRange(0, 25) : stderr);

                    Assert.Fail("Expected exit code " + expectedExitStatus + " but actual is " + p.ExitCode + ". Error output:" + Environment.NewLine + stderr_report);
                }

                return p.ExitCode;
            }
        }
    }
}