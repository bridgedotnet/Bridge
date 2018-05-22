using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Linq;
using Bridge.Translator.Utils;
using Microsoft.Build.Evaluation;

namespace Bridge.Translator.Tests.Helpers
{
    internal static class FileHelper
    {
        public static string GetExecutingAssemblyPath()
        {
            return System.Reflection.Assembly.GetExecutingAssembly().Location;
        }

        public static string CombineRelativePath(string absolutePath, string relativePath)
        {
            var di = new DirectoryInfo(Path.Combine(absolutePath, relativePath));

            return di.FullName;
        }

        public static string GetRelativeToCurrentDirPath(string relativePath)
        {
            var location = GetExecutingAssemblyPath();

            location = Path.GetDirectoryName(location);

            return FileHelper.CombineRelativePath(location, relativePath);
        }

        public static string GetRelativeToCurrentDirPath(params string[] relativePaths)
        {
            return FileHelper.GetRelativeToCurrentDirPath(Path.Combine(relativePaths));
        }

        public static string ReadProjectOutputFolder(string configurationName, string platform, string projectFileFullName)
        {
            var properties = new Dictionary<string, string>
            {
                ["Configuration"] = configurationName,
                ["Platform"] = platform
            };
            var project = Translator.OpenProject(projectFileFullName, properties);

            var node = (from n in project.AllEvaluatedProperties
                        where n.Name == "OutputPath"
                        select n).LastOrDefault();

            if (node == null)
            {
                return null;
            }

            var path = AdjustPath(node.EvaluatedValue);

            return path;
        }

        public static string AdjustPath(string path)
        {
            if (path == null)
            {
                return null;
            }

            path = path.Replace('\\', Path.DirectorySeparatorChar);
            path = path.Replace('/', Path.DirectorySeparatorChar);

            return path;
        }

        public static string FindFile(string fileName, DirectoryInfo currentPath = null, HashSet<string> processed = null)
        {
            processed = processed ?? new HashSet<string>();
            currentPath = currentPath ?? new DirectoryInfo(Directory.GetCurrentDirectory());

            var result = SearchSubfolders(fileName, currentPath, processed);

            if (result != null)
            {
                return result;
            }

            if (currentPath.Parent == null)
            {
                return null;
            }

            processed.Add(currentPath.FullName);

            return FindFile(fileName, currentPath.Parent, processed);
        }

        public static string SearchSubfolders(string fileName, DirectoryInfo currentPath, HashSet<string> processed)
        {
            foreach (var file in currentPath.EnumerateFiles("*", SearchOption.TopDirectoryOnly))
            {
                if (string.Compare(file.Name, fileName, true) == 0)
                {
                    return file.FullName;
                }
            }

            foreach (var dir in currentPath.EnumerateDirectories("*", SearchOption.TopDirectoryOnly))
            {
                if (processed.Contains(dir.FullName))
                {
                    continue;
                }

                var r = SearchSubfolders(fileName, dir, processed);

                if (r != null)
                {
                    return r;
                }
            }

            return null;
        }

        public static void WriteStreamAsFile(Stream stream, string filePath)
        {
            if (stream == null)
            {
                throw new ArgumentNullException("stream");
            }

            if (filePath == null)
            {
                throw new ArgumentNullException("filePath");
            }

            stream.Seek(0, SeekOrigin.Begin);

            var fileInfo = new FileInfo(filePath);

            using (Stream file = fileInfo.Create())
            {
                CopyStream(stream, file);
            }
        }

        public static void WriteTextFile(string text, string filePath)
        {
            if (text == null)
            {
                throw new ArgumentNullException("text");
            }

            if (filePath == null)
            {
                throw new ArgumentNullException("filePath");
            }

            var fileInfo = new FileInfo(filePath);

            using (var file = fileInfo.CreateText())
            {
                file.Write(text);
            }
        }

        private static void CopyStream(Stream input, Stream output)
        {
            byte[] buffer = new byte[8 * 1024];
            int len;
            while ((len = input.Read(buffer, 0, buffer.Length)) > 0)
            {
                output.Write(buffer, 0, len);
            }
        }
    }
}