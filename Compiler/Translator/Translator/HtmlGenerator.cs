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

            ILogger outputLogger = this.Log;

            foreach (var output in outputForHtml)
            {
                if (output.OutputType == TranslatorOutputType.JavaScript && indexScript >= 0)
                {
                    if (output.IsMinified)
                    {
                        if (!firstMinJs)
                        {
                            jsMinBuffer.Append(Emitter.NEW_LINE);
                            jsMinBuffer.Append(indentScript);
                        }

                        firstMinJs = false;

                        jsMinBuffer.Append(string.Format(scriptTemplate, output.GetOutputPath(outputPath, true, outputLogger)));
                    }
                    else
                    {
                        if (!firstJs)
                        {
                            jsBuffer.Append(Emitter.NEW_LINE);
                            jsBuffer.Append(indentScript);
                        }

                        firstJs = false;

                        jsBuffer.Append(string.Format(scriptTemplate, output.GetOutputPath(outputPath, true, outputLogger)));
                    }
                } else if (output.OutputType == TranslatorOutputType.StyleSheets && indexCss >= 0)
                {
                    if (!firstCss)
                    {
                        cssBuffer.Append(Emitter.NEW_LINE);
                        cssBuffer.Append(indentCss);
                    }

                    firstCss = false;

                    cssBuffer.Append(string.Format(cssLinkTemplate, output.GetOutputPath(outputPath, true, outputLogger)));
                }
            }

            var tokens = new Dictionary<string, string>()
            {
                { tokenTitle, this.AssemblyTitle },
                { tokenCss,  cssBuffer.ToString() },
                { tokenScript, jsBuffer.ToString() }
            };

            string htmlName = null;
            string htmlMinName = null;

            if (jsBuffer.Length > 0 || cssBuffer.Length > 0)
            {
                htmlName = "index.html";
            }

            if (jsMinBuffer.Length > 0)
            {
                htmlMinName = htmlName == null ? "index.html" : "index.min.html";
            }

            var configHelper = new ConfigHelper();

            if (htmlName != null)
            {
                var html = configHelper.ApplyTokens(tokens, htmlTemplate);

                htmlName = Path.Combine(outputPath, htmlName);
                File.WriteAllText(htmlName, html, Translator.OutputEncoding);
            }

            if (htmlMinName != null)
            {
                tokens[tokenScript] = jsMinBuffer.ToString();
                var html = configHelper.ApplyTokens(tokens, htmlTemplate);

                htmlMinName = Path.Combine(outputPath, htmlMinName);
                File.WriteAllText(htmlMinName, html, Translator.OutputEncoding);
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