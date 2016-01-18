using Bridge.Contract;

using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.Tests
{
    internal class Comparence
    {
        public string Name
        {
            get;
            set;
        }

        public string File1FullPath
        {
            get;
            set;
        }

        public string File2FullPath
        {
            get;
            set;
        }

        public bool InReference
        {
            get;
            set;
        }

        public string Difference
        {
            get;
            set;
        }

        public CompareResult Result
        {
            get;
            set;
        }

        public override string ToString()
        {
            var fromTo = new string[2];

            if (InReference)
            {
                fromTo[0] = "Output";
                fromTo[1] = "Reference";
            }
            else
            {
                fromTo[1] = "Output";
                fromTo[0] = "Reference";
            }

            string difference;

            switch (Result)
            {
                case CompareResult.DoesNotExist:
                    difference = string.Empty;
                    break;

                case CompareResult.HasContentDifferences:
                    difference = " Difference: " + Difference + ".";
                    break;

                case CompareResult.TheSame:
                    difference = string.Empty;
                    break;

                default:
                    difference = string.Empty;
                    break;
            }

            return string.Format("{0} file {1} compared with {2} file {3}.{4}", fromTo[0], Name, fromTo[1], Result, difference);
        }
    }

    internal enum CompareMode
    {
        Default = 0,
        Presence = 1,
        Content = 2
    }

    internal enum CompareResult
    {
        DoesNotExist = 0,
        HasContentDifferences = 1,
        TheSame = 2
    }

    internal class FolderComparer
    {
        public ILogger Logger { get; set; }

        public List<Comparence> CompareFolders(string referenceFolder, string outputFolder, Dictionary<string, CompareMode> specialFiles)
        {
            var referenceDirectory = new DirectoryInfo(referenceFolder);
            var referenceFiles = referenceDirectory.GetFiles("*", SearchOption.AllDirectories);

            var outputDirectory = new DirectoryInfo(outputFolder);
            var outputFiles = outputDirectory.GetFiles("*", SearchOption.AllDirectories);

            var comparence = new Dictionary<string, Comparence>(referenceFiles.Length > outputFiles.Length ? referenceFiles.Length : outputFiles.Length);

            foreach (var file in referenceFiles)
            {
                HandleFile(referenceFolder, outputFolder, specialFiles, comparence, file, true);
            }

            foreach (var file in outputFiles)
            {
                HandleFile(outputFolder, referenceFolder, specialFiles, comparence, file, false);
            }

            return comparence.Values.Where(x => x.Result != CompareResult.TheSame).ToList();
        }

        public void LogDifferences(string diffName, List<Comparence> comparence)
        {
            var differ = new DiffMatchPatch.diff_match_patch();
            differ.Diff_Timeout = 10;

            var sb = new StringBuilder(diffName);
            sb.AppendLine();

            foreach (var diff in comparence)
            {
                if (diff.Result != CompareResult.HasContentDifferences)
                {
                    continue;
                }

                try
                {
                    var file1Content = FolderComparer.ReadFile(diff.File1FullPath);

                    if (file1Content == null)
                    {
                        sb.AppendLine(string.Format("DIFF Could not get detailed diff for {0}. Content is null.}", diff.File1FullPath));

                        continue;
                    }

                    var file2Content = FolderComparer.ReadFile(diff.File2FullPath);

                    if (file2Content == null)
                    {
                        sb.AppendLine(string.Format("DIFF Could not get detailed diff for {0}. Content is null.}", diff.File2FullPath));
                        continue;
                    }

                    var differences = differ.diff_main(file1Content, file2Content);
                    var diffText = differ.DiffText(differences, true);

                    sb.AppendLine();
                    sb.AppendLine("DIFF for " + diff.ToString());
                    sb.AppendLine();
                    sb.AppendLine("|" + diffText + "|");
                }
                catch (Exception ex)
                {
                    sb.AppendLine(string.Format("DIFF Could not get detailed diff for {0}. Exception: {1}", diff.ToString(), ex.Message));
                }
            }

            Logger.Warn(string.Empty);
            Logger.Warn(sb.ToString());
        }

        private void HandleFile(string folder1, string folder2, Dictionary<string, CompareMode> specialFiles, Dictionary<string, Comparence> comparence, FileInfo file, bool inReference, bool ignoreSame = true)
        {
            if (comparence.ContainsKey(file.Name))
            {
                return;
            }

            var cd = new Comparence
            {
                Name = file.Name,
                File1FullPath = file.FullName,
                Result = CompareResult.DoesNotExist,
                InReference = inReference
            };

            var file2FullName = cd.File1FullPath.Replace(folder1, folder2);
            if (File.Exists(file2FullName))
            {
                cd.File2FullPath = file2FullName;

                if (specialFiles != null)
                {
                    CompareMode specialFileMode;

                    if (specialFiles.TryGetValue(file.Name, out specialFileMode))
                    {
                        cd.Result = CompareResult.TheSame;

                        return;
                    }
                }

                cd.Result = CompareResult.HasContentDifferences;

                cd.Difference = AnyDifference(cd.File1FullPath, cd.File2FullPath);

                if (cd.Difference == null)
                {
                    if (ignoreSame)
                    {
                        return;
                    }

                    cd.Result = CompareResult.TheSame;
                }
            }

            comparence.Add(file.Name, cd);
        }

        private static string AnyDifference(string file1, string file2)
        {
            using (Stream s1 = new FileStream(file1, FileMode.Open, FileAccess.Read, FileShare.Read))
            {
                using (Stream s2 = new FileStream(file2, FileMode.Open, FileAccess.Read, FileShare.Read))
                {
                    if (s1.Length != s2.Length)
                    {
                        return string.Format("Length difference {0} vs {1}", s2.Length, s1.Length);
                    }

                    int i = 0;

                    while (i < s1.Length)
                    {
                        var b1 = s1.ReadByte();
                        var b2 = s2.ReadByte();

                        if (b1 != b2)
                        {
                            return string.Format("Content difference found at {0} with {1} vs {2}", i, b2, b1);
                        }

                        i++;
                    }
                }
            }

            return null;
        }

        public static string ReadFile(string fullFileName)
        {
            if (!File.Exists(fullFileName))
            {
                return null;
            }

            using (Stream stream = new FileStream(fullFileName, FileMode.Open, FileAccess.Read, FileShare.Read))
            {
                using (StreamReader reader = new StreamReader(stream))
                {
                    return reader.ReadToEnd();
                }
            }
        }
    }
}
