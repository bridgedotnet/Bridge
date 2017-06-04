using Bridge.Contract;
using Bridge.Contract.Constants;
using Microsoft.Ajax.Utilities;
using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    class HtmlGenerator
    {
        public ILogger Log
        {
            get; set;
        }

        public IAssemblyInfo Config
        {
            get; set;
        }

        public TranslatorOutput Outputs
        {
            get; set;
        }

        public string AssemblyTitle
        {
            get; set;
        }

        public HtmlGenerator(ILogger logger, IAssemblyInfo config, TranslatorOutput outputs, string assemblyTitle)
        {
            this.Log = logger;
            this.Config = config;
            this.Outputs = outputs;
            this.AssemblyTitle = assemblyTitle;
        }

        public void GenerateHtml(string outputPath)
        {
            this.Log.Trace("GenerateHtml...");

            if (this.Config.Html.Disabled)
            {
                this.Log.Trace("GenerateHtml skipped as disabled in config.");
                return;
            }

            var htmlTemplate = ReadEmbeddedResource("Bridge.Translator.Resources.HtmlTemplate.html");
            this.Log.Trace("Applying default html template");

            var tokenTitle = "{title}";
            var tokenCss = "{css}";
            var tokenScript = "{script}";

            var needTitle = htmlTemplate.IndexOf(tokenTitle, StringComparison.InvariantCultureIgnoreCase) >= 0;
            var indexCss = htmlTemplate.IndexOf(tokenCss, StringComparison.InvariantCultureIgnoreCase);
            var indexScript = htmlTemplate.IndexOf(tokenScript, StringComparison.InvariantCultureIgnoreCase);

            var cssLinkTemplate = "<link rel=\"stylesheet\" href=\"{0}\">";
            var scriptTemplate = "<script src=\"{0}\"></script>";

            var indentCss = GetIndent(htmlTemplate, indexCss);
            var indentScript = GetIndent(htmlTemplate, indexScript);

            var cssBuffer = new StringBuilder();
            var jsBuffer = new StringBuilder();
            var jsMinBuffer = new StringBuilder();

            IEnumerable<TranslatorOutputItem> outputForHtml;

            if (this.Outputs.Resources.Count > 0)
            {
                outputForHtml = this.Outputs.Resources;
            }
            else
            {
                outputForHtml = this.Outputs.GetOutputs();
            }

            var firstJs = true;
            var firstMinJs = true;
            var firstCss = true;

            foreach (var output in outputForHtml)
            {
                if (output.OutputType == TranslatorOutputType.JavaScript && indexScript >= 0)
                {
                    if (output.IsMinified)
                    {
                        if (!firstMinJs)
                        {
                            jsMinBuffer.Append(indentScript);
                        }

                        firstMinJs = false;

                        jsMinBuffer.AppendLine(string.Format(scriptTemplate, output.GetOutputPath(outputPath, true)));
                    }
                    else
                    {
                        if (!firstJs)
                        {
                            jsBuffer.Append(indentScript);
                        }

                        firstJs = false;

                        jsBuffer.AppendLine(string.Format(scriptTemplate, output.GetOutputPath(outputPath, true)));
                    }
                } else if (output.OutputType == TranslatorOutputType.StyleSheets && indexCss >= 0)
                {
                    if (!firstCss)
                    {
                        cssBuffer.Append(indentCss);
                    }

                    firstCss = false;

                    cssBuffer.AppendLine(string.Format(cssLinkTemplate, output.GetOutputPath(outputPath, true)));
                }
            }

            var tokens = new Dictionary<string, string>()
            {
                { tokenTitle, this.AssemblyTitle },
                { tokenCss,  cssBuffer.ToString() },
                { tokenScript, jsBuffer.ToString() }
            };

            var configHelper = new ConfigHelper();
            var html = configHelper.ApplyTokens(tokens, htmlTemplate);

            var fileName = Path.Combine(outputPath, "index.html");
            File.WriteAllText(fileName, html, Translator.OutputEncoding);

            if (jsMinBuffer.Length > 0)
            {
                tokens[tokenScript] = jsMinBuffer.ToString();
                html = configHelper.ApplyTokens(tokens, htmlTemplate);

                fileName = Path.Combine(outputPath, "index.min.html");
                File.WriteAllText(fileName, html, Translator.OutputEncoding);
            }

            this.Log.Trace("GenerateHtml done");
        }

        private string GetIndent(string input, int index)
        {
            if (index <= 0 || input == null || index >= input.Length)
            {
                return "";
            }

            var indent = 0;

            while (index-- > 0)
            {
                if (input[index] != ' ')
                {
                    break;
                }

                indent++;
            }

            return new string(' ', indent);
        }

        private string ReadEmbeddedResource(string name)
        {
            var assembly = System.Reflection. Assembly.GetExecutingAssembly();

            using (Stream stream = assembly.GetManifestResourceStream(name))
            {
                using (StreamReader reader = new StreamReader(stream))
                {
                    return reader.ReadToEnd();
                }
            }
        }
    }
}