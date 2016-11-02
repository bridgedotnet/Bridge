using System;

namespace Bridge.Translator
{
    public class BridgeOptions
    {
        public string Name { get; set; }

        public string ProjectLocation { get; set; }
        public string OutputLocation { get; set; }
        public string DefaultFileName { get; set; }
        public string BridgeLocation { get; set; }
        public bool Rebuild { get; set; }
        public bool ExtractCore { get; set; }
        public string Configuration { get; set; }
        public string Platform { get; set; }
        public string Source { get; set; }
        public string Folder { get; set; }
        public bool Recursive { get; set; }
        public string Lib { get; set; }
        public string DefinitionConstants { get; set; }
        public bool Help { get; set; }
        public bool? NoTimeStamp { get; set; }
        public bool FromTask { get; set; }
        public bool NoLoggerSetUp { get; set; }

        public bool IsFolderMode { get { return string.IsNullOrWhiteSpace(this.ProjectLocation); } }

        public BridgeOptions()
        {
            ExtractCore = true;
            Folder = Environment.CurrentDirectory;
        }
    }
}