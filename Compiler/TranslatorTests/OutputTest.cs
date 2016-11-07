using Bridge.Translator.Logging;
using NUnit.Framework;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class OutputTest
    {
        private const string LogFileNameWithoutExtention = "testProjectsBuild";

        private const string BuildArguments = "/flp:Verbosity=diagnostic;LogFile=" + LogFileNameWithoutExtention + ".log;Append"
                                              + " /flp1:warningsonly;LogFile=" + LogFileNameWithoutExtention + "Warnings.log;Append"
                                              + " /flp2:errorsonly;LogFile=" + LogFileNameWithoutExtention + "Errors.log;Append";

        public string ProjectFileName
        {
            get;
            set;
        }

        public string ProjectFolder
        {
            get;
            set;
        }

        public string ProjectFilePath
        {
            get;
            set;
        }

        public string ReferenceFolder
        {
            get;
            set;
        }

        public string OutputFolder
        {
            get;
            set;
        }

        private static Dictionary<string, CompareMode> SpecialFiles = new Dictionary<string, CompareMode>
        {
            { "bridge.js", CompareMode.Presence },
            { "bridge.min.js", CompareMode.Presence }
        };

        private void GetPaths(string folder)
        {
            ProjectFileName = "test" + ".csproj";
            ProjectFolder = FileHelper.GetRelativeToCurrentDirPath(Path.Combine("..", "..", "TestProjects"), folder);

            ProjectFilePath = Path.Combine(ProjectFolder, ProjectFileName);

            OutputFolder = Path.Combine(ProjectFolder, "Bridge", "output");
            ReferenceFolder = Path.Combine(ProjectFolder, "Bridge", "reference");
        }

        [OneTimeSetUp]
        public void TestFixtureSetUp()
        {
            var currentFolder = Path.GetDirectoryName(FileHelper.GetExecutingAssemblyPath());

            Directory.SetCurrentDirectory(currentFolder);

            var logFiles = Directory.GetFiles(currentFolder, LogFileNameWithoutExtention + ".*", SearchOption.AllDirectories);

            foreach (var logFile in logFiles)
            {
                File.Delete(logFile);
            }
        }

        [TestCase("02", false, true, TestName = "OutputTest 02 - using GenerateScript Task Bridge.json outputFormatting Formatted, autoPropertyToField, combineScripts")]
        [TestCase("03", true, true, TestName = "OutputTest 03 - Bridge.json outputFormatting Minified")]
        [TestCase("04", true, true, TestName = "OutputTest 04 - Bridge.json outputBy Class ignoreCast fileNameCasing Lowercase")]
        [TestCase("05", true, true, TestName = "OutputTest 05 - Bridge.json outputBy Namespace ignoreCast default useTypedArrays default fileNameCasing CamelCase")]
        [TestCase("06", true, true, TestName = "OutputTest 06 - Attribute outputBy Project Bridge.json useTypedArrays CheckForOverflowUnderflow ")]
        [TestCase("07", true, true, TestName = "OutputTest 07 - Bridge.json module generateDocumentation Full")]
        [TestCase("10", true, true, TestName = "OutputTest 10 - Bridge.json fileNameCasing None generateDocumentation Basic")]
        [TestCase("11", true, true, TestName = "OutputTest 11 - Bridge.json generateTypeScript")]
        [TestCase("15", true, true, TestName = "OutputTest 15 - Bridge.json filename Define project constant #375")]
        [TestCase("16", true, true, TestName = "OutputTest 16 - Issues")]
        [TestCase("18", true, true, TestName = "OutputTest 18 - Features")]
#if UNIX
        [TestCase("19", true, true, TestName = "OutputTest 19 - Linked files feature #531 #562", Ignore = "It is not supported in Mono (Mono issue logged as #38224 at Mono's official BugZilla)")]
#else
        [TestCase("19", true, true, TestName = "OutputTest 19 - Linked files feature #531 #562")]
#endif
        public void Test(string folder, bool isToTranslate, bool useSpecialFileCompare)
        {
            var logDir = Path.GetDirectoryName(FileHelper.GetExecutingAssemblyPath());

            Directory.SetCurrentDirectory(logDir);

            var logger = new Logger(null, true, Contract.LoggerLevel.Warning, false, new FileLoggerWriter(logDir), new ConsoleLoggerWriter());

            logger.Info("Executing Bridge.Test.Runner...");

            GetPaths(folder);

            logger.Info("OutputTest Project " + folder);

            logger.Info("\tProjectFileName " + ProjectFileName);
            logger.Info("\tProjectFolder " + ProjectFolder);

            logger.Info("\tProjectFilePath " + ProjectFilePath);

            logger.Info("\tOutputFolder " + OutputFolder);
            logger.Info("\tReferenceFolder " + ReferenceFolder);
            logger.Info("\tExecutingAssemblyPath " + FileHelper.GetExecutingAssemblyPath());

            try
            {
                TranslateTestProject(isToTranslate, logger);
            }
            catch (System.Exception ex)
            {
                Assert.Fail("Could not {0} the project {1}. Exception occurred: {2}.", isToTranslate ? "translate" : "build", folder, ex.ToString());
            }

            try
            {
                CheckDifferenceBetweenReferenceAndOutput(folder, useSpecialFileCompare, logger);
            }
            catch (NUnit.Framework.AssertionException)
            {
                throw;
            }
            catch (System.Exception ex)
            {
                var message = string.Format("Could not compare the project {0} output. Exception occurred: {1}.", folder, ex.ToString());

                logger.Error(message);
                Assert.Fail(message);
            }
        }

        private void CheckDifferenceBetweenReferenceAndOutput(string folder, bool useSpecialFileCompare, Logger logger)
        {
            var folderComparer = new FolderComparer() { Logger = logger };

            var comparence = folderComparer.CompareFolders(this.ReferenceFolder, this.OutputFolder, useSpecialFileCompare ? SpecialFiles : null);

            if (comparence.Any())
            {
                var sb = new StringBuilder();

                foreach (var diff in comparence)
                {
                    sb.AppendLine(diff.ToString());
                }

                folderComparer.LogDifferences("Project " + folder + " differences:", comparence);

                Assert.Fail(sb.ToString());
            }
        }

        private void TranslateTestProject(bool isToTranslate, Logger logger)
        {
            var translator = new TranslatorRunner()
            {
                Logger = logger,
                ProjectLocation = ProjectFilePath,
                BuildArguments = OutputTest.BuildArguments
            };

            if (isToTranslate)
            {
                translator.Translate();
            }
            else
            {
                translator.Translate(true);
            }
        }
    }
}