using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace Bridge.Translator.Tests
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

        public static string ReadProjectOutputFolder(string configurationName, string projectFileFullName)
        {
            var doc = XDocument.Load(projectFileFullName, LoadOptions.SetLineInfo);

//            var opnodes = from n in doc.Descendants()
//                          where n.Name.LocalName == "OutputPath"
//                          select n;

            var nodes = from n in doc.Descendants()
                        where n.Name.LocalName == "OutputPath" &&
                              n.Parent.Attribute("Condition").Value.Contains(configurationName)
                        select n;

            if (nodes.Count() != 1)
            {
                return null;
            }

            var path = AgjustPath(nodes.First().Value);

            return path;
        }

        public static string AgjustPath(string path)
        {
            if (path == null)
            {
                return null;
            }

            path = path.Replace('\\', Path.DirectorySeparatorChar);
            path = path.Replace('/', Path.DirectorySeparatorChar);

            return path;
        }
    }
}