using Bridge.Contract;

using System;
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

        public string ContentMarker
        {
            get; set;
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
        Content = 2,
        MarkedContent = 3
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
                    var contents = GetFileContents(diff.File1FullPath, diff.File2FullPath, diff.ContentMarker);

                    if (contents.Item1 != null)
                    {
                        sb.AppendLine(string.Format("DIFF Could not get detailed diff " + contents.Item1));
                        continue;
                    }

                    var file1Content = contents.Item2;

                    if (file1Content == null)
                    {
                        sb.AppendLine(string.Format("DIFF Could not get detailed diff for {0}. Content is null.}", diff.File1FullPath));
                        continue;
                    }

                    var file2Content = contents.Item3;

                    if (file2Content == null)
                    {
                        sb.AppendLine(string.Format("DIFF Could not get detailed diff for {0}. Content is null.}", diff.File2FullPath));
                        continue;
                    }

                    var patches = differ.patch_make(file1Content, file2Content);

                    var patchText = differ.patch_toText(patches);

                    sb.AppendLine();
                    sb.AppendLine("DIFF for " + diff.ToString());
                    sb.AppendLine();
                    sb.AppendLine(patchText);
                    //sb.AppendLine();
                    //sb.AppendLine("|" + diffText + "|");
                    //sb.AppendLine("-------------------File 1 content:");
                    //sb.AppendLine(file1Content);
                    //sb.AppendLine("-------------------File 2 content:");
                    //sb.AppendLine(file2Content);
                }
                catch (System.Exception ex)
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

                if (specialFiles != null && specialFiles.Count > 0)
                {
                    CompareMode specialFileMode;

                    if (specialFiles.TryGetValue(file.Name, out specialFileMode))
                    {
                        if (specialFileMode == CompareMode.MarkedContent)
                        {
                            cd.ContentMarker = Constansts.CONTENT_MARKER;
                        }
                        else
                        {
                            cd.Result = CompareResult.TheSame;

                            return;
                        }
                    }
                }

                cd.Result = CompareResult.HasContentDifferences;

                cd.Difference = AnyDifference(cd.File1FullPath, cd.File2FullPath, cd.ContentMarker);

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

        private static Tuple<string, string, string> GetFileContents(string file1, string file2, string contentMarker = null)
        {
            var s1 = File.ReadAllText(file1, Constansts.Encoding);
            var s2 = File.ReadAllText(file2, Constansts.Encoding);

            if (contentMarker != null)
            {
                var markerPosition1 = s1.IndexOf(contentMarker);
                if (markerPosition1 >= 0)
                {
                    s1 = s1.Remove(0, markerPosition1);
                }

                var markerPosition2 = s2.IndexOf(contentMarker);
                if (markerPosition2 >= 0)
                {
                    s2 = s2.Remove(0, markerPosition2);
                }

                if (markerPosition1 < 0 || markerPosition2 < 0)
                {
                    var error = "Content marker position not found either for file1 or file2:";

                    error += string.Format(" for file {0} at position {1}", file1, markerPosition1);
                    error += string.Format(" for file {0} at position {1}", file2, markerPosition2);

                    return Tuple.Create(error, (string)null, (string)null);
                }
            }

            return Tuple.Create((string)null, s1, s2);
        }

        private static string AnyDifference(string file1, string file2, string contentMarker = null)
        {
            var contents = GetFileContents(file1, file2, contentMarker);

            if (contents.Item1 != null)
            {
                return contents.Item1;
            }

            var s1 = contents.Item2;
            var s2 = contents.Item3;

            if (s1.Length != s2.Length)
            {
                return string.Format("Length difference {0} vs {1}", s2.Length, s1.Length);
            }

            int i = 0;

            while (i < s1.Length)
            {
                var b1 = s1[i];
                var b2 = s2[i];

                if (b1 != b2)
                {
                    return string.Format("Content difference found at symbol {0} with `{1}` vs `{2}`", i, b2, b1);
                }

                i++;
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