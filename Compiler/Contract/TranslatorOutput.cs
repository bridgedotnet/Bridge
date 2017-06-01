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

        //public List<TranslatorOutputItem> GetItems(TranslatorOutputTypes outputType)
        //{
        //    var r = new List<TranslatorOutputItem>();

        //    r.AddRange(this.References.Where(x => x.OutputType == outputType));
        //    r.AddRange(this.Locales.Where(x => x.OutputType == outputType));
        //    r.AddRange(this.Main.Where(x => x.OutputType == outputType));

        //    return r;
        //}

        public TranslatorOutput()
        {
            Main = new List<TranslatorOutputItem>();
            References = new List<TranslatorOutputItem>();
            Locales = new List<TranslatorOutputItem>();
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

        public TranslatorOutputTypes OutputType
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

        public bool IsEmpty
        {
            get; set;
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
            get; set;
        }

        public string String
        {
            get; set;
        }

        public byte[] Buffer
        {
            get; set;
        }

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

    public enum TranslatorOutputTypes
    {
        None,
        JavaScript,
        TypeScript,
        StyleSheets
    }
}