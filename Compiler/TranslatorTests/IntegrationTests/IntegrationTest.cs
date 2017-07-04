using Bridge.Translator.Logging;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class IntegrationTest
    {
        private const int MaxDiffLineCount = 30;
        private const int MaxDiffLineLength = 300;
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
            { "bridge.min.js", CompareMode.Presence },
            { "bridge.console.js", CompareMode.Presence },
            { "bridge.console.min.js", CompareMode.Presence },
            { "bridge.meta.js", CompareMode.Presence },
            { "bridge.meta.min.js", CompareMode.Presence }
        };

        private void GetPaths(string folder)
        {
            ProjectFileName = "test" + ".csproj";
            ProjectFolder = Helpers.FileHelper.GetRelativeToCurrentDirPath(Path.Combine("..", "..", "TestProjects"), folder);

            ProjectFilePath = Path.Combine(ProjectFolder, ProjectFileName);

            OutputFolder = Path.Combine(ProjectFolder, "Bridge", "output");
            ReferenceFolder = Path.Combine(ProjectFolder, "Bridge", "reference");
        }

        [OneTimeSetUp]
        public void TestFixtureSetUp()
        {
            var currentFolder = Path.GetDirectoryName(Helpers.FileHelper.GetExecutingAssemblyPath());

            Directory.SetCurrentDirectory(currentFolder);

            var logFiles = Directory.GetFiles(currentFolder, LogFileNameWithoutExtention + ".*", SearchOption.AllDirectories);

            foreach (var logFile in logFiles)
            {
                File.Delete(logFile);
            }
        }

        [TestCase("02", true, true, "TestProject.I2096.js", TestName = "IntegrationTest 02 - using GenerateScript Task Bridge.json outputFormatting Formatted, combineScripts and locales")]
        [TestCase("03", true, true, TestName = "IntegrationTest 03 - Bridge.json outputFormatting Minified")]
        [TestCase("04", true, true, TestName = "IntegrationTest 04 - Bridge.json outputBy Class ignoreCast fileNameCasing Lowercase")]
        [TestCase("05", true, true, TestName = "IntegrationTest 05 - Bridge.json outputBy Namespace ignoreCast default useTypedArrays default fileNameCasing CamelCase")]
        [TestCase("06", true, true, TestName = "IntegrationTest 06 - Attribute outputBy Project Bridge.json useTypedArrays CheckForOverflowUnderflow ")]
        [TestCase("07", true, true, TestName = "IntegrationTest 07 - Bridge.json module generateDocumentation Full")]
        [TestCase("08", true, true, TestName = "IntegrationTest 08 - Bridge.json combineScripts fileName typeScript")]
        [TestCase("10", true, true, TestName = "IntegrationTest 10 - Bridge.json fileNameCasing None generateDocumentation Basic")]
        [TestCase("11", true, true, TestName = "IntegrationTest 11 - Bridge.json generateTypeScript")]
        [TestCase("15", true, true, TestName = "IntegrationTest 15 - Bridge.json filename Define project constant #375")]
        [TestCase("16", true, true, TestName = "IntegrationTest 16 - Issues")]
        [TestCase("18", true, true, TestName = "IntegrationTest 18 - Features")]
#if UNIX
        [TestCase("19", true, true, TestName = "IntegrationTest 19 - Linked files feature #531 #562", Ignore = "It is not supported in Mono (Mono issue logged as #38224 at Mono's official BugZilla)")]
#else
        [TestCase("19", true, true, TestName = "IntegrationTest 19 - Linked files feature #531 #562")]
#endif
        public void Test(string folder, bool isToBuild, bool useSpecialFileCompare, string markedContentFiles = null)
        {
            var logDir = Path.GetDirectoryName(Helpers.FileHelper.GetExecutingAssemblyPath());

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
            logger.Info("\tExecutingAssemblyPath " + Helpers.FileHelper.GetExecutingAssemblyPath());

            try
            {
                TranslateTestProject(isToBuild, logger);
            }
            catch (System.Exception ex)
            {
                Assert.Fail("Could not {0} the project {1}. Exception occurred: {2}.", isToBuild ? "translate" : "build", folder, ex.ToString());
            }

            try
            {
                CheckDifferenceBetweenReferenceAndOutput(folder, useSpecialFileCompare, markedContentFiles, logger);
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

        private void CheckDifferenceBetweenReferenceAndOutput(string folder, bool useSpecialFileCompare, string markedContentFiles, Logger logger)
        {
            var folderComparer = new FolderComparer() { Logger = logger };

            var specialFiles = new Dictionary<string, CompareMode>();
            if (useSpecialFileCompare)
            {
                foreach (var item in SpecialFiles)
                {
                    specialFiles.Add(item.Key, item.Value);
                }
            }

            if (markedContentFiles != null)
            {
                var contentFiles = markedContentFiles.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);

                foreach (var fileName in contentFiles)
                {
                    specialFiles.Add(fileName, CompareMode.MarkedContent);
                }
            }

            var comparence = folderComparer.CompareFolders(this.ReferenceFolder, this.OutputFolder, specialFiles);

            if (comparence.Any())
            {
                var sb = new StringBuilder();

                var lineCount = 0;
                foreach (var diff in comparence)
                {
                    lineCount++;

                    if (lineCount > MaxDiffLineCount)
                    {
                        sb.AppendLine("The diff log cut off because of max lines limit of " + MaxDiffLineCount + " lines.");
                        break;
                    }

                    var diffReport = diff.ToString();

                    if (diffReport.Length > MaxDiffLineLength)
                    {
                        diffReport = diffReport.Remove(MaxDiffLineLength) + " ... the rest is removed due to too long";
                    }

                    sb.AppendLine(diffReport);
                }

                folderComparer.LogDifferences("Project " + folder + " differences:", comparence);

                Assert.Fail(sb.ToString());
            }
        }

        private void TranslateTestProject(bool isToBuild, Logger logger)
        {
            var translator = new TranslatorRunner()
            {
                Logger = logger,
                ProjectLocation = ProjectFilePath,
                BuildArguments = IntegrationTest.BuildArguments
            };

            if (isToBuild)
            {
                translator.Translate(true);
            }
            else
            {
                translator.Translate(false);
            }
        }
    }
}