using Bridge.Translator.Logging;
using NUnit.Framework;
using System.IO;

namespace Bridge.Translator.Tests.NodeJsTests.Issues
{
    [TestFixture]
    internal class N3539
    {
#if UNIX

#else
        [Test]
#endif
        public void BridgeJSCanBeRequired()
        {
            var currentDir = Path.GetDirectoryName(Helpers.FileHelper.GetExecutingAssemblyPath());
            Directory.SetCurrentDirectory(currentDir);

            var logger = new Logger(null, true, Contract.LoggerLevel.Info, false, new FileLoggerWriter(currentDir), new ConsoleLoggerWriter());
            logger.Info("NodeJS test for issue " + this.ToString());
            logger.Info("Current dir:" + currentDir);

            string nodePath = NodeJsTest.FindNodeJs(currentDir, logger);
            logger.Info("Node path:" + nodePath);

            var runFileContents = @"console.log(""Importing Bridge."");
var bridge = require(""./bridge.js"");

console.log(""Imported Bridge."");

Bridge.assembly(""Test"", function($asm, globals) { });

console.log(""Bridge loaded as a module successfully."");";

            NodeJsTest.CopyBridgeandRunJsFiles(nodePath, runFileContents, logger);

            var exitCode = NodeJsTest.RunNodeJs(nodePath, logger);

            logger.Info("Exited NodeJS with code:" + exitCode);

            Assert.AreEqual(0, exitCode);

            logger.Info("NodeJS test complete");
        }
    }
}