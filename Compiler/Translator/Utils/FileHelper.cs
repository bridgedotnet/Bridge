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
            if (fileName == null)
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
    }
}
