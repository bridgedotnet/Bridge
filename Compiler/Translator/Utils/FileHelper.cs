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

        public TranslatorOutputTypes GetOutputType(string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                return TranslatorOutputTypes.None;
            }

            if (IsJS(fileName))
            {
                return TranslatorOutputTypes.JavaScript;
            }

            if (IsDTS(fileName))
            {
                return TranslatorOutputTypes.TypeScript;
            }

            if (IsCSS(fileName))
            {
                return TranslatorOutputTypes.StyleSheets;
            }

            return TranslatorOutputTypes.None;
        }

        public string CheckFileNameAndOutputType(string fileName, TranslatorOutputTypes outputType, bool isMinified = false)
        {
            if (outputType == TranslatorOutputTypes.None)
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
                case TranslatorOutputTypes.JavaScript:
                    if (IsMinJS(fileName))
                    {
                        changeExtention = Files.Extensions.MinJS;
                    }
                    else
                    {
                        changeExtention = Files.Extensions.JS;
                    }
                    break;
                case TranslatorOutputTypes.TypeScript:
                    changeExtention = Files.Extensions.DTS;
                    break;
                case TranslatorOutputTypes.StyleSheets:
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
                case TranslatorOutputTypes.JavaScript:
                    if (isMinified)
                    {
                        fileName = fileName + Files.Extensions.MinJS;
                    }
                    else
                    {
                        fileName = fileName + Files.Extensions.JS;
                    }

                    return fileName;
                case TranslatorOutputTypes.TypeScript:
                    return fileName + Files.Extensions.DTS;
                case TranslatorOutputTypes.StyleSheets:
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
    }
}
