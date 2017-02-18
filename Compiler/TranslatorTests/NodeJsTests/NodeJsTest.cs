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
        private const string NODEJS_RUN_FILE_NAME = "run.js";

        // Name of the file that will be reuired by nodejs run file
        private const string BRIDGE_JS_FILE_NAME = "bridge.js";

        private const string NODEJS_EXECUTEABLE_FILE_NAME = "node.exe";

        private const int NODEJS_MAX_CONSOLE_OUTPUT_LENGTH = 500;

        [Test]
        public void NodeJsCanRunBridge()
        {
            var currentDir = Path.GetDirectoryName(Helpers.FileHelper.GetExecutingAssemblyPath());
            Directory.SetCurrentDirectory(currentDir);

            var logger = new Logger(null, true, Contract.LoggerLevel.Warning, false, new FileLoggerWriter(currentDir), new ConsoleLoggerWriter());
            logger.Warn("NodeJs test");
            logger.Warn("Current dir:" + currentDir);

            string nodePath = FindNodeJs(currentDir, logger);
            logger.Warn("Node path:" + nodePath);

            CopyBridgeandRunJsFiles(nodePath, logger);

            var exitCode = RunNodeJs(nodePath, logger);

            logger.Warn("Exited NodeJS with code:" + exitCode);

            Assert.AreEqual(NODEJS_EXPECTED_EXIT_CODE, exitCode);
        }

        private void CopyBridgeandRunJsFiles(string nodeJsExeFilePath, ILogger logger)
        {
            var folder = Path.GetDirectoryName(nodeJsExeFilePath);

            var bridgeJsFileName = Path.Combine(folder, BRIDGE_JS_FILE_NAME);

            // Read bridge.js from embedded Bridge.dll and write into nodejs folder
            using (var bridgeAssembly = Helpers.MonoCecilAssemblyHelper.GetBridgeJs())
            {
                Helpers.FileHelper.WriteStreamAsFile(bridgeAssembly, bridgeJsFileName);
            }

            logger.Warn("Wrote:" + bridgeJsFileName);

            var runJsFileName = Path.Combine(folder, NODEJS_RUN_FILE_NAME);

            // Read run.js from embedded resources and write into nodejs folder
            using (var runJsFileResource = Helpers.ResourceHelper.GetRunJsFile())
            {
                Helpers.FileHelper.WriteStreamAsFile(runJsFileResource, runJsFileName);
            }

            logger.Warn("Wrote:" + runJsFileName);
        }

        private string FindNodeJs(string currentDir, ILogger logger)
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

        private int RunNodeJs(string path, ILogger logger)
        {
            logger.Warn("Running NodeJS");

            var info = new ProcessStartInfo()
            {
                FileName = path,
                Arguments = NODEJS_RUN_FILE_NAME,
                WorkingDirectory = Path.GetDirectoryName(path),
                UseShellExecute = false,
                RedirectStandardOutput = true,
                CreateNoWindow = true,
                WindowStyle = ProcessWindowStyle.Hidden
            };

            using (var p = Process.Start(info))
            {
                var output = new StringBuilder();

                // Reading from the console output
                while (!p.StandardOutput.EndOfStream)
                {
                    output.AppendLine(p.StandardOutput.ReadLine());
                }

                logger.Warn("Read NodeJS console output:");
                logger.Warn(output.ToString());

                logger.Warn("Waiting for exiting NodeJS");

                p.WaitForExit();

                if (p.ExitCode != NODEJS_EXPECTED_EXIT_CODE)
                {
                    if (output.Length > NODEJS_MAX_CONSOLE_OUTPUT_LENGTH)
                    {
                        output.Remove(NODEJS_MAX_CONSOLE_OUTPUT_LENGTH, output.Length - NODEJS_MAX_CONSOLE_OUTPUT_LENGTH);
                    }

                    Assert.Fail("Expected exit code {0} but actual is {1}. Console output: {2}",
                        NODEJS_EXPECTED_EXIT_CODE,
                        p.ExitCode,
                        output);
                }

                return p.ExitCode;
            }
        }
    }
}