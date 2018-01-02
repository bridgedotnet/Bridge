using Bridge.Translator.Logging;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
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
            { "bridge.meta.min.js", CompareMode.Presence },
            { "bridge.d.ts", CompareMode.Presence }
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

            //Directory.SetCurrentDirectory(currentFolder);

            var logFiles = Directory.GetFiles(currentFolder, LogFileNameWithoutExtention + ".*", SearchOption.AllDirectories);

            foreach (var logFile in logFiles)
            {
                File.Delete(logFile);
            }
        }

        [TestCase("02", false, true, "TestProject.I2096.js", TestName = "IntegrationTest 02 - using GenerateScript Task Bridge.json outputFormatting Formatted, combineScripts and locales")]
        [TestCase("03", false, true, TestName = "IntegrationTest 03 - Bridge.json outputFormatting Minified")]
        [TestCase("04", false, true, TestName = "IntegrationTest 04 - Bridge.json outputBy Class ignoreCast fileNameCasing Lowercase")]
        [TestCase("05", false, true, TestName = "IntegrationTest 05 - Bridge.json outputBy Namespace ignoreCast default useTypedArrays default fileNameCasing CamelCase")]
        [TestCase("06", false, true, TestName = "IntegrationTest 06 - Attribute outputBy Project Bridge.json useTypedArrays CheckForOverflowUnderflow ")]
        [TestCase("07", false, true, TestName = "IntegrationTest 07 - Bridge.json module generateDocumentation Full")]
        [TestCase("08", false, true, TestName = "IntegrationTest 08 - Bridge.json combineScripts fileName typeScript")]
        [TestCase("10", false, true, TestName = "IntegrationTest 10 - Bridge.json fileNameCasing None generateDocumentation Basic")]
        [TestCase("11", false, true, TestName = "IntegrationTest 11 - Bridge.json generateTypeScript")]
        [TestCase("15", false, true, TestName = "IntegrationTest 15 - Bridge.json filename Define project constant #375")]
        [TestCase("16", false, true, TestName = "IntegrationTest 16 - Issues")]
        [TestCase("18", false, true, TestName = "IntegrationTest 18 - Features")]
#if UNIX
        [TestCase("19", false, true, TestName = "IntegrationTest 19 - Linked files feature #531 #562", Ignore = "It is not supported in Mono (Mono issue logged as #38224 at Mono's official BugZilla)")]
#else
        [TestCase("19", false, true, TestName = "IntegrationTest 19 - Linked files feature #531 #562")]
#endif
        [TestCase("20", false, true, TestName = "IntegrationTest 20 - Bridge.json autoProperty:plain")]
        [TestCase("22", false, true, TestName = "IntegrationTest 22 - Global Methods with nested classes")]
        [TestCase("23", false, true, TestName = "IntegrationTest 23 - Module in bridge.json")]
        [TestCase("24", false, true, TestName = "IntegrationTest 24 - Module as assembly attribute")]
        [TestCase("25", false, true, TestName = "IntegrationTest 25 - New csproj compilation")]
        public void Test(string folder, bool isToBuild, bool useSpecialFileCompare, string markedContentFiles = null)
        {
            var logDir = Path.GetDirectoryName(Helpers.FileHelper.GetExecutingAssemblyPath());

            //Directory.SetCurrentDirectory(logDir);

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

                if (folder == "11")
                {
                    specialFiles.Add("TestProject.meta.js", CompareMode.Presence);
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

        private class TestProjectInfo
        {
            public static MD5 MD5_Handle;
            public string ProjectFileName;
            public string ProjectFolder;
            public string ProjectFilePath;
            public string OutputFolder;

            // some variables for "caching" values
            public string[] OutputFiles;
            public List<FileInfo> OutputFilesInfo;
            public int OutputFileCount;
            public long OutputFolderSize;
            public Dictionary<string, byte[]> OutputMD5Sum;

            public void SyncTo(IntegrationTest testInstance)
            {
                testInstance.ProjectFileName = ProjectFileName;
                testInstance.ProjectFolder = ProjectFolder;
                testInstance.ProjectFilePath = ProjectFilePath;
                testInstance.OutputFolder = OutputFolder;
            }

            public void RefreshOutFiles()
            {
                // We do not care about subdirectories (for now).
                OutputFiles = Directory.GetFiles(OutputFolder);
                OutputFileCount = OutputFiles.Count();
            }

            public void RefreshOutSize()
            {
                var addFileInfo = false;
                OutputFolderSize = 0;

                if (OutputFiles == null)
                {
                    RefreshOutFiles();
                }

                if (OutputFilesInfo == null)
                {
                    addFileInfo = true;
                    OutputFilesInfo = new List<FileInfo>();
                }

                if (addFileInfo)
                {
                    foreach (var file in OutputFiles)
                    {
                        OutputFilesInfo.Add(new FileInfo(file));
                    }
                }

                foreach (var fileInfo in OutputFilesInfo)
                {
                    OutputFolderSize += fileInfo.Length;
                }
            }

            public void RefreshOutMD5Sum()
            {
                OutputMD5Sum = new Dictionary<string, byte[]>();

                if (OutputFilesInfo == null) RefreshOutSize();

                if (MD5_Handle == null) MD5_Handle = MD5.Create();

                foreach (var file in OutputFilesInfo)
                {
                    OutputMD5Sum.Add(file.Name, MD5_Handle.ComputeHash(file.OpenRead()));
                }
            }
        }

        /// <summary>
        /// This test consists in translating all directories within the
        /// integration folder and compare their output folder. All projects
        /// must output the exact same content in order to succeed the test.
        /// </summary>
        /// <remarks>
        /// Currently it only checks the root of the output folder for
        /// differences (does not recurse into subdirectories).
        /// </remarks>
        /// <param name="folder"></param>
        /// <param name="isToBuild"></param>
        [TestCase("01", false, TestName = "IntegrationTest 01 - Module set via assembly and bridge.json produces same output.")]
        public void CompareProjects(string folder, bool isToBuild)
        {
            var projectFileName = "test" + ".csproj";

            var logDir = Path.GetDirectoryName(Helpers.FileHelper.GetExecutingAssemblyPath());

            var logger = new Logger(null, true, Contract.LoggerLevel.Warning, false, new FileLoggerWriter(logDir), new ConsoleLoggerWriter());

            logger.Info("Processing projects within folder " + folder);

            var projectsPath = Directory.GetDirectories(Helpers.FileHelper.GetRelativeToCurrentDirPath(Path.Combine("..", "..", "TestProjects"), folder));

            var projects = new List<TestProjectInfo>();
            TestProjectInfo project;

            foreach (var pjFolder in projectsPath)
            {
                project = new TestProjectInfo()
                {
                    ProjectFileName = projectFileName,
                    ProjectFolder = pjFolder,
                    ProjectFilePath = Path.Combine(pjFolder, projectFileName),
                    OutputFolder = Path.Combine(pjFolder, "Bridge", "output"),
                };

                projects.Add(project);

                logger.Info("OutputTest Project " + pjFolder);

                logger.Info("\tProjectFileName " + project.ProjectFileName);
                logger.Info("\tProjectFolder " + project.ProjectFolder);

                logger.Info("\tProjectFilePath " + project.ProjectFilePath);

                logger.Info("\tOutputFolder " + project.OutputFolder);
                logger.Info("\tExecutingAssemblyPath " + Helpers.FileHelper.GetExecutingAssemblyPath());

                try
                {
                    project.SyncTo(this);
                    TranslateTestProject(isToBuild, logger);
                }
                catch (System.Exception ex)
                {
                    Assert.Fail("Could not {0} the project {1}. Exception occurred: {2}.", isToBuild ? "translate" : "build", folder, ex.ToString());
                }
            }

            try
            {
                if (projects.Count < 2)
                {
                    if (projects.Count == 0)
                    {
                        Assert.Fail("No project to compare output. Needs at least two.");
                    }
                    else
                    {
                        Assert.Fail("Not enough projects to compare. Needs at least two. (one project, '" + projects.First().OutputFolder + "'.");
                    }
                    return;
                }

                var baseProj = projects.First();
                byte[] md5_hash;

                baseProj.RefreshOutFiles();

                if (baseProj.OutputFileCount < 3)
                {
                    Assert.Fail("Base folder '" + baseProj.OutputFolder + "' has too few files to compare. (" +
                        baseProj.OutputFileCount + " file(s))");
                    return;
                }

#if FAST_PROJECT_COMPARISON
                // check by file count (fastest)
                for (var i =1; i < projects.Count; i++)
                {
                    project = projects[i];
                    project.RefreshOutFiles();

                    if (project.OutputFileCount != baseProj.OutputFileCount)
                    {
                        Assert.Fail("Compared folders' amount of files differ.\n" +
                            baseProj.OutputFileCount + " files on base folder: '" + baseProj.OutputFolder + "'\n" +
                            project.OutputFileCount + " files on compared folder: '" + project.OutputFolder + "'.");
                        return;
                    }
                }

                // check by output folder's size (fast)
                baseProj.RefreshOutSize();
                for (var i = 1; i < projects.Count; i++)
                {
                    project = projects[i];
                    project.RefreshOutSize();

                    if (project.OutputFolderSize != baseProj.OutputFolderSize)
                    {
                        Assert.Fail("Compared folders' size differ.\n" +
                            baseProj.OutputFolderSize + " bytes on base folder: '" + baseProj.OutputFolder + "'\n" +
                            project.OutputFolderSize + " bytes on compared folder: '" + project.OutputFolder + "'.");
                        return;
                    }
                }
#endif // FAST_PROJECT_COMPARISON

                // check by MD5 sum against main (slow)
                baseProj.RefreshOutMD5Sum();

                for (var i = 1; i < projects.Count; i++)
                {
                    project = projects[i];
                    project.RefreshOutMD5Sum();

                    foreach (var keyValPair in project.OutputMD5Sum)
                    {
                        if (!baseProj.OutputMD5Sum.TryGetValue(keyValPair.Key, out md5_hash))
                        {
                            Assert.Fail("File does not exist in base folder.\nFile: " + keyValPair.Key + "\n" +
                                "Base folder: " + baseProj.OutputFolder + "\nCompared folder: " + project.OutputFolder);
                            return;
                        }

                        if (!keyValPair.Value.SequenceEqual(md5_hash))
                        {
                            Assert.Fail("MD5 sum mismatch. File: " + keyValPair.Key + "\n" +
                                "Base folder: " + baseProj.OutputFolder + "\nCompared folder: " + project.OutputFolder);
                            return;
                        }
                    }
                }
            }
            catch (NUnit.Framework.AssertionException)
            {
                throw;
            }
            catch (System.Exception ex)
            {
                var message = string.Format("Could not compare the projects output. Exception raised: {1}.", folder, ex.ToString());

                logger.Error(message);
                Assert.Fail(message);
            }
        }
    }
}
