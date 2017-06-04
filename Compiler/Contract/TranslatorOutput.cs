using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Contract
{
    public class TranslatorOutput
    {
        public List<TranslatorOutputItem> Main
        {
            get; private set;
        }

        public List<TranslatorOutputItem> References
        {
            get; private set;
        }

        public List<TranslatorOutputItem> Locales
        {
            get; private set;
        }

        public TranslatorOutputItem Combined
        {
            get; set;
        }

        public TranslatorOutputItem CombinedLocales
        {
            get; set;
        }

        public List<TranslatorOutputItem> Resources
        {
            get; private set;
        }

        public IEnumerable<TranslatorOutputItem> GetOutputs()
        {
            if (Combined != null)
            {
                if (!Combined.IsEmpty)
                {
                    yield return Combined;
                }

                if (Combined.MinifiedVersion != null && !Combined.MinifiedVersion.IsEmpty)
                {
                    yield return Combined.MinifiedVersion;
                }
            }

            foreach (var o in References)
            {
                if (!o.IsEmpty)
                {
                    yield return o;
                }

                if (o.MinifiedVersion != null && !o.MinifiedVersion.IsEmpty)
                {
                    yield return o.MinifiedVersion;
                }
            }

            if (CombinedLocales != null)
            {
                if (!CombinedLocales.IsEmpty)
                {
                    yield return CombinedLocales;
                }

                if (CombinedLocales.MinifiedVersion != null && !CombinedLocales.MinifiedVersion.IsEmpty)
                {
                    yield return CombinedLocales.MinifiedVersion;
                }
            }

            foreach (var o in Locales)
            {
                if (!o.IsEmpty)
                {
                    yield return o;
                }

                if (o.MinifiedVersion != null && !o.MinifiedVersion.IsEmpty)
                {
                    yield return o.MinifiedVersion;
                }
            }

            foreach (var o in Main)
            {
                if (!o.IsEmpty)
                {
                    yield return o;
                }

                if (o.MinifiedVersion != null && !o.MinifiedVersion.IsEmpty)
                {
                    yield return o.MinifiedVersion;
                }
            }
        }

        public TranslatorOutput()
        {
            Main = new List<TranslatorOutputItem>();
            References = new List<TranslatorOutputItem>();
            Locales = new List<TranslatorOutputItem>();
            Resources = new List<TranslatorOutputItem>();
        }
    }

    public class TranslatorOutputItem
    {
        public string Name
        {
            get; set;
        }

        public string Location
        {
            get; set;
        }

        public TranslatorOutputType OutputType
        {
            get; set;
        }

        public TranslatorOutputKind OutputKind
        {
            get; set;
        }

        public TranslatorOutputItemContent Content
        {
            get; set;
        }

        public bool IsMinified
        {
            get; set;
        }

        private bool isEmpty;
        public bool IsEmpty
        {
            get
            {
                return isEmpty;
            }
            set
            {
                isEmpty = value;

                if (value == true)
                {
                    Content.SetContent(null);
                }
            }
        }

        public TranslatorOutputItem MinifiedVersion
        {
            get; set;
        }

        public string GetOutputPath()
        {
            var item = this;

            if (item.IsEmpty)
            {
                item = item.MinifiedVersion;

                if (item.IsEmpty)
                {
                    return null;
                }
            }

            if (string.IsNullOrEmpty(item.Location))
            {
                return item.Name;
            }

            return Path.Combine(item.Location, item.Name);
        }
    }

    public class TranslatorOutputItemContent
    {
        public StringBuilder Builder
        {
            get; private set;
        }

        public string String
        {
            get; private set;
        }

        public byte[] Buffer
        {
            get; private set;
        }

        private Encoding OutputEncoding = new UTF8Encoding(false);

        public TranslatorOutputItemContent(StringBuilder content)
        {
            this.Builder = content;
        }

        public TranslatorOutputItemContent(string content)
        {
            this.String = content;
        }

        public TranslatorOutputItemContent(byte[] content)
        {
            this.Buffer = content;
        }

        public void SetContent(string s)
        {
            Builder = null;
            Buffer = null;
            String = s;
        }

        public object GetContent(bool stringableOnly = false)
        {
            if (Builder != null)
            {
                return Builder;
            }

            if (String != null)
            {
                return String;
            }

            if (Buffer != null)
            {
                if (stringableOnly)
                {
                    throw new InvalidOperationException("Cannot get stringable content as underlying data is Buffer.");
                }

                return Buffer;
            }

            return null;
        }

        public string GetContentAsString()
        {
            if (Builder != null)
            {
                return Builder.ToString();
            }

            if (String != null)
            {
                return String;
            }

            if (Buffer != null)
            {
                return OutputEncoding.GetString(Buffer);
            }

            return null;
        }

        public byte[] GetContentAsBytes()
        {
            if (Builder != null)
            {
                return GetBytesFromString(Builder.ToString());
            }

            if (String != null)
            {
                return GetBytesFromString(String);
            }

            if (Buffer != null)
            {
                return Buffer;
            }

            return new byte[0];
        }

        private byte[] GetBytesFromString(string s)
        {
            if (s == null)
            {
                return new byte[0];
            }

            return OutputEncoding.GetBytes(s);
        }

        public static implicit operator TranslatorOutputItemContent(StringBuilder content)
        {
            return new TranslatorOutputItemContent(content);
        }
        public static implicit operator TranslatorOutputItemContent(string content)
        {
            return new TranslatorOutputItemContent(content);
        }
        public static implicit operator TranslatorOutputItemContent(byte[] content)
        {
            return new TranslatorOutputItemContent(content);
        }
    }

    public enum TranslatorOutputType
    {
        None,
        JavaScript,
        TypeScript,
        StyleSheets
    }

    [Flags]
    public enum TranslatorOutputKind
    {
        None = 0,
        Reference = 1,
        Resource = 2,
        Locale = 4,
        ProjectOutput = 8,
        PluginOutput = 16,
        Minified = 32
    }
}