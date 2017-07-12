using Bridge.Contract;
using Bridge.Contract.Constants;

using Object.Net.Utilities;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    public class FileHelper
    {
        public string GetMinifiedJSFileName(string fileName)
        {
            if (string.IsNullOrEmpty(fileName) || IsMinJS(fileName))
            {
                return fileName;
            }

            var s = fileName.ReplaceLastInstanceOf(Files.Extensions.JS, Files.Extensions.MinJS);

            if (!IsMinJS(s))
            {
                s = fileName.ReplaceLastInstanceOf(Files.Extensions.JS.ToUpper(), Files.Extensions.MinJS);
            }

            return s;
        }

        public string GetNonMinifiedJSFileName(string fileName)
        {
            if (string.IsNullOrEmpty(fileName) || !IsMinJS(fileName))
            {
                return fileName;
            }

            var s = fileName.ReplaceLastInstanceOf(Files.Extensions.MinJS, Files.Extensions.JS);

            if (IsMinJS(s))
            {
                s = fileName.ReplaceLastInstanceOf(Files.Extensions.MinJS.ToUpper(), Files.Extensions.JS);
            }

            return s;
        }

        public bool IsJS(string fileName)
        {
            if (fileName == null)
            {
                return false;
            }

            return fileName.EndsWith(Files.Extensions.JS, StringComparison.InvariantCultureIgnoreCase);
        }

        public bool IsMinJS(string fileName)
        {
            if (fileName == null)
            {
                return false;
            }

            return fileName.EndsWith(Files.Extensions.MinJS, StringComparison.InvariantCultureIgnoreCase);
        }

        public bool IsDTS(string fileName)
        {
            if (fileName == null)
            {
                return false;
            }

            return fileName.EndsWith(Files.Extensions.DTS, StringComparison.InvariantCultureIgnoreCase);
        }

        public bool IsCSS(string fileName)
        {
            if (fileName == null)
            {
                return false;
            }

            return fileName.EndsWith(Files.Extensions.CSS, StringComparison.InvariantCultureIgnoreCase);
        }

        public TranslatorOutputType GetOutputType(string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                return TranslatorOutputType.None;
            }

            if (IsJS(fileName))
            {
                return TranslatorOutputType.JavaScript;
            }

            if (IsDTS(fileName))
            {
                return TranslatorOutputType.TypeScript;
            }

            if (IsCSS(fileName))
            {
                return TranslatorOutputType.StyleSheets;
            }

            return TranslatorOutputType.None;
        }

        public string CheckFileNameAndOutputType(string fileName, TranslatorOutputType outputType, bool isMinified = false)
        {
            if (outputType == TranslatorOutputType.None)
            {
                return null;
            }

            var outputTypeByFileName = GetOutputType(fileName);

            if (outputTypeByFileName == outputType)
            {
                return null;
            }

            string changeExtention = null;

            switch (outputTypeByFileName)
            {
                case TranslatorOutputType.JavaScript:
                    if (IsMinJS(fileName))
                    {
                        changeExtention = Files.Extensions.MinJS;
                    }
                    else
                    {
                        changeExtention = Files.Extensions.JS;
                    }
                    break;
                case TranslatorOutputType.TypeScript:
                    changeExtention = Files.Extensions.DTS;
                    break;
                case TranslatorOutputType.StyleSheets:
                    changeExtention = Files.Extensions.CSS;
                    break;
                default:
                    break;
            }

            if (changeExtention != null)
            {
                fileName = fileName.ReplaceLastInstanceOf(changeExtention, string.Empty);
            }

            if (fileName[fileName.Length - 1] == '.')
            {
                fileName = fileName.Remove(fileName.Length - 1);
            }

            switch (outputType)
            {
                case TranslatorOutputType.JavaScript:
                    if (isMinified)
                    {
                        fileName = fileName + Files.Extensions.MinJS;
                    }
                    else
                    {
                        fileName = fileName + Files.Extensions.JS;
                    }

                    return fileName;
                case TranslatorOutputType.TypeScript:
                    return fileName + Files.Extensions.DTS;
                case TranslatorOutputType.StyleSheets:
                    return fileName + Files.Extensions.CSS;
                default:
                    return null;
            }
        }

        public FileInfo CreateFileDirectory(string outputPath, string fileName)
        {
            return CreateFileDirectory(Path.Combine(outputPath, fileName));
        }

        public FileInfo CreateFileDirectory(string path)
        {
            var file = new System.IO.FileInfo(path);

            if (!file.Directory.Exists)
            {
                file.Directory.Create();
            }

            return file;
        }

        /// <summary>
        /// Splits a path into directory and file name. Not fully qualified file name considered as directory path.
        /// </summary>
        /// <param name="path">The path of a file or directory.</param>
        /// <returns>Returns directory at index 0 (null if no directory part) and file name at index 1 (null if no file name path).</returns>
        public string[] GetDirectoryAndFilenamePathComponents(string path)
        {
            var r = new string[2];

            var directory = Path.GetDirectoryName(path);
            var fileNameWithoutExtention = Path.GetFileNameWithoutExtension(path);
            var fileExtention = Path.GetExtension(path);

            if (string.IsNullOrEmpty(fileNameWithoutExtention) || string.IsNullOrEmpty(fileExtention))
            {
                r[0] = Path.Combine(directory, fileNameWithoutExtention, fileExtention);
                r[1] = null;
            }
            else
            {
                r[0] = directory;
                r[1] = fileNameWithoutExtention + fileExtention;
            }

            return r;
        }
    }
}
