using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace CopyOutputToReference
{
    class Program
    {
        static void Main(string[] args)
        {
            string testFolderPath = GetTestFolderPath();

            var exceptionFolders = new[] { "01" };
            var exceptionFiles = new[] { "bridge.js", "bridge.min.js", "bridge.console.js", "bridge.console.min.js", "bridge.meta.js", "bridge.meta.min.js", "bridge.d.ts" };

            var testProjectFolders = Directory.EnumerateDirectories(testFolderPath, "*", SearchOption.TopDirectoryOnly);

            foreach (var folderPath in testProjectFolders)
            {
                Console.WriteLine("Handling " + folderPath);

                var paths = folderPath.Split(Path.DirectorySeparatorChar);
                var folderName = paths[paths.Length - 1];
                var exceptions = !exceptionFolders.Contains(folderName) ? exceptionFiles : null;

                if (exceptions != null)
                {
                    Console.WriteLine("\tSpecial logic files: " + string.Join(",", exceptions));
                }

                var sourcePath = folderPath + @"\bridge\output";
                var sourceFiles = GetSourceFiles(sourcePath, exceptions);

                if (sourceFiles != null)
                {
                    var targetPath = folderPath + @"\bridge\reference";
                    CopyToTargetDirectory(folderPath, targetPath, sourcePath, sourceFiles, exceptions);
                }
                else
                {
                    Console.WriteLine("\tSkipping as sourcePath does not exist " + sourcePath);
                }
            }

            Console.ReadLine();

        }

        private static string GetTestFolderPath()
        {
            //var testFolderPath = @"\Bridge\Compiler\TranslatorTests\TestProjects";
            var directory = new DirectoryInfo(Directory.GetCurrentDirectory() + @"\..\..\..\TestProjects");
            if (!directory.Exists)
            {
                throw new Exception(@"Cannot find the TestProject folder (\Bridge\Compiler\TranslatorTests\TestProjects). But found " + directory.FullName);
            }

            var testFolderPath = directory.FullName;
            return testFolderPath;
        }

        private static List<FileInfo> GetSourceFiles(string path, string[] exceptions)
        {
            var di = new DirectoryInfo(path);

            if (!di.Exists)
            {
                return null;
            }

            var files = di.EnumerateFiles("*", SearchOption.AllDirectories);
            if (exceptions != null)
            {
                files = files.Where(x => !exceptions.Contains(x.Name));
            }

            return files.ToList();
        }

        private static void CopyToTargetDirectory(string basePath, string targetPath, string sourcePath,  List<FileInfo> sourceFiles, string[] exceptions)
        {
            EnsurePathExists(targetPath, basePath);

            var targetDirectory = new DirectoryInfo(targetPath);

            if (!targetDirectory.Exists)
            {

                throw new InvalidOperationException("Could not find source directory " + targetPath);
            }

            var files = targetDirectory.EnumerateFiles("*", SearchOption.AllDirectories);
            foreach (var file in files)
            {
                if (exceptions == null || !exceptions.Contains(file.Name))
                {
                    Console.Write("\tdeleting " + file.Name + " ...");
                    file.Delete();
                    Console.WriteLine(" OK");
                }
            }

            var folders = targetDirectory.EnumerateDirectories("*", SearchOption.AllDirectories);
            foreach (var folder in folders)
            {
                if (folder.EnumerateFiles("*", SearchOption.TopDirectoryOnly).Any(x => exceptions.Contains(x.Name)))
                {
                    continue;
                }

                Console.Write("\tdeleting " + folder.Name + "\\ ...");
                folder.Delete();
                Console.WriteLine(" OK");
            }

            foreach (var file in sourceFiles)
            {
                var targetFileName = file.FullName.Replace(sourcePath, targetPath);

                var pathWithinTargetPath = file.FullName.Replace(sourcePath, string.Empty).TrimStart(Path.DirectorySeparatorChar);

                EnsurePathExists(Path.GetDirectoryName(pathWithinTargetPath), targetPath);

                Console.Write("\tcopying " + pathWithinTargetPath + " ...");
                file.CopyTo(targetFileName, true);
                Console.WriteLine(" OK");
            }

        }

        private static void EnsurePathExists(string path, string baseFolderPath)
        {
            var childPath = path.Replace(baseFolderPath, string.Empty);
            var subdirectories = childPath.Split(new char[] { Path.DirectorySeparatorChar }, StringSplitOptions.RemoveEmptyEntries);
            var currentDirectory = baseFolderPath;
            var currentDirectoryForReport = string.Empty;
            foreach (var subdirectory in subdirectories)
            {
                currentDirectory = Path.Combine(currentDirectory, subdirectory);
                currentDirectoryForReport += Path.Combine(currentDirectoryForReport, subdirectory);
                if (!Directory.Exists(currentDirectory))
                {
                    Console.Write("\tcreating " + currentDirectoryForReport + " ...");
                    Directory.CreateDirectory(currentDirectory);
                    Console.WriteLine(" OK");
                }
            }
        }
    }
}
