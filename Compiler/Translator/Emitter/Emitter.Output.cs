using Bridge.Contract.Constants;
using Mono.Cecil;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Object.Net.Utilities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Bridge.Contract;

namespace Bridge.Translator
{
    public partial class Emitter
    {
        public const string INDENT = "    ";
        public const string NEW_LINE = "\n";
        public const char NEW_LINE_CHAR = '\n';
        public const string CRLF = "\r\n";

        protected StringBuilder Write(StringBuilder dest, string s, int? position = null)
        {
            if (!position.HasValue)
            {
                dest.Append(s);
            }
            else
            {
                dest.Insert(position.Value, s);
            }

            return dest;
        }

        protected virtual void WriteNewLine(StringBuilder sb)
        {
            sb.Append(NEW_LINE);
        }

        protected virtual void WriteNewLine(StringBuilder sb, string text)
        {
            sb.Append(text);
            sb.Append(NEW_LINE);
        }

        public virtual void WriteIndented(string s, int? position = null)
        {
            var level = position.HasValue && position.Value == 0 ? this.InitialLevel : this.Level;

            var indented = new StringBuilder(AbstractEmitterBlock.WriteIndentToString(s, level));

            this.WriteIndent(indented, level, 0);

            this.Write(this.Output, indented.ToString(), position);
        }

        protected virtual void WriteIndent(StringBuilder sb, int level, int? position = null)
        {
            for (var i = 0; i < level; i++)
            {
                this.Write(sb, INDENT, position);
            }
        }

        protected virtual List<TranslatorOutputItem> TransformOutputs()
        {
            this.Log.Info("Transforming outputs...");

            this.WrapToModules();

            var outputs = this.CombineOutputs();

            this.Log.Info("Transforming outputs done");

            return outputs;
        }

        protected virtual List<TranslatorOutputItem> CombineOutputs()
        {
            this.Log.Trace("Combining outputs...");

            var result = new List<TranslatorOutputItem>();

            var disableAsm = this.AssemblyInfo.Assembly.DisableInitAssembly;

            this.AssemblyJsDocWritten = false;

            var fileHelper = new FileHelper();

            foreach (var outputPair in this.Outputs)
            {
                var fileName = outputPair.Key;
                var output = outputPair.Value;

                this.Log.Trace("File name " + (fileName ?? ""));

                bool isJs = fileHelper.IsJS(fileName);

                var tmp = new StringBuilder(output.TopOutput.Length + output.BottomOutput.Length + output.NonModuletOutput.Length + 1000);

                OutputTop(output, tmp);

                OutputNonModule(disableAsm, fileName, output, isJs, tmp);

                OutputBottom(output, tmp);

                var outputKind = TranslatorOutputKind.ProjectOutput;

                if (output.IsMetadata)
                {
                    outputKind = outputKind | TranslatorOutputKind.Metadata;
                }

                Emitter.AddOutputItem(result, fileName, tmp, outputKind, null);
            }

            this.Log.Trace("Combining outputs done");

            return result;
        }

        private void OutputAssemblyComment(StringBuilder tmp)
        {
            // /**
            //  * [AssemblyDescription]
            //  * @version 1.2.3.4
            //  * @author [AssemblyCompany]
            //  * @copyright [AssemblyCopyright]
            //  * @compiler Bridge.NET 0.0.0
            //  */

            if (this.AssemblyJsDocWritten)
            {
                return;
            }

            var versionContext = this.Translator.GetVersionContext();

            string description = versionContext.Assembly.Description;
            string version = versionContext.Assembly.Version != null && versionContext.Assembly.Version != JS.Types.System.Reflection.Assembly.Config.DEFAULT_VERSION
                                ? versionContext.Assembly.Version
                                : null;
            string author = versionContext.Assembly.CompanyName;
            string copyright = versionContext.Assembly.Copyright;
            string compiler = "Bridge.NET " + versionContext.Compiler.Version;

            WriteNewLine(tmp, "/**");

            if (!string.IsNullOrWhiteSpace(description))
            {
                WriteNewLine(tmp, " * " + description);
            }

            if (!string.IsNullOrWhiteSpace(version))
            {
                WriteNewLine(tmp, " * @version " + version);
            }

            if (!string.IsNullOrWhiteSpace(author))
            {
                WriteNewLine(tmp, " * @author " + author);
            }

            if (!string.IsNullOrWhiteSpace(copyright))
            {
                WriteNewLine(tmp, " * @copyright " + copyright);
            }

            WriteNewLine(tmp, " * @compiler " + compiler);

            WriteNewLine(tmp, " */");

            this.AssemblyJsDocWritten = true;
        }

        private void OutputTop(Contract.IEmitterOutput output, StringBuilder tmp)
        {
            if (output.TopOutput.Length > 0)
            {
                tmp.Append(output.TopOutput.ToString());
                WriteNewLine(tmp);
            }
        }

        private bool OutputNonModule(bool disableAsm, string fileName, Contract.IEmitterOutput output, bool isJs, StringBuilder tmp)
        {
            bool metaDataWritten = false;

            var level = this.InitialLevel;
            StringBuilder endOutput = new StringBuilder();

            if (output.NonModuletOutput.Length > 0 || output.ModuleOutput.Count > 0)
            {
                if (isJs)
                {
                    if (!disableAsm)
                    {
                        string asmName = this.AssemblyInfo.Assembly.FullName ??
                                         this.Translator.ProjectProperties.AssemblyName;

                        OutputAssemblyComment(tmp);

                        tmp.Append(JS.Types.Bridge.ASSEMBLY + "(");

                        tmp.AppendFormat("\"{0}\"", asmName);

                        tmp.Append(",");

                        if (!metaDataWritten && (this.MetaDataOutputName == null || fileName == this.MetaDataOutputName))
                        {
                            var res = this.GetIncludedResources();

                            if (res != null)
                            {
                                tmp.Append(" ");
                                tmp.Append(res);
                                tmp.Append(",");
                            }

                            metaDataWritten = true;
                        }

                        tmp.Append(" ");
                        tmp.Append("function ($asm, globals) {");
                        WriteNewLine(tmp);
                        WriteIndent(tmp, level);
                        tmp.Append(this.GetOutputHeader());
                        WriteNewLine(tmp);
                        WriteNewLine(tmp);
                    }

                    level = this.AddDependencies(level, output, tmp, endOutput);
                }
                else
                {
                    string newLine = Bridge.Contract.XmlToJSConstants.DEFAULT_LINE_SEPARATOR.ToString();
                    tmp.Insert(0, @"/// <reference path=""./bridge.d.ts"" />" + newLine + newLine);
                }

                var code = output.NonModuletOutput.ToString();

                if (code.Length > 0)
                {
                    tmp.Append(level > this.InitialLevel ? Emitter.INDENT + code.Replace(Emitter.NEW_LINE, Emitter.NEW_LINE + Emitter.INDENT) : code);
                }

                if (endOutput.Length > 0)
                {
                    tmp.Append(endOutput.ToString());
                }

                if (output.ModuleOutput.Any())
                {
                    if (code.Length > 0)
                    {
                        this.WriteNewLine(tmp);
                    }

                    foreach (var moduleOutput in output.ModuleOutput)
                    {
                        WriteNewLine(tmp, moduleOutput.Value.ToString());
                    }
                }

                if (isJs && !disableAsm)
                {
                    tmp.Append("});");
                    WriteNewLine(tmp);
                }
            }

            return metaDataWritten;
        }

        private int AddDependencies(int level, Contract.IEmitterOutput output, StringBuilder tmp, StringBuilder endOutput)
        {
            var loader = this.AssemblyInfo.Loader;
            var dependencies = output.NonModuleDependencies;
            if (dependencies != null && dependencies.Count > 0)
            {
                var disabledDependecies = dependencies.Where(d => loader.IsManual(d.DependencyName)).ToList();
                dependencies = dependencies.Where(d => !loader.IsManual(d.DependencyName)).ToList();

                if (disabledDependecies.Count > 0 && !loader.SkipManualVariables)
                {
                    this.WriteIndent(tmp, level);
                    this.Write(tmp, "var ");
                    for (int i = 0; i < disabledDependecies.Count; i++)
                    {
                        var d = disabledDependecies[i];
                        if (i != 0)
                        {
                            this.WriteIndent(tmp, level + 1);
                        }

                        this.Write(tmp, d.VariableName.IsNotEmpty() ? d.VariableName : d.DependencyName);
                        this.Write(tmp, i == (disabledDependecies.Count - 1) ? ";" : ",");
                        this.WriteNewLine(tmp);
                    }

                    this.WriteNewLine(tmp);
                }

                var type = loader.Type;
                var amd = dependencies.Where(d => d.Type == ModuleType.AMD || ((d.Type == null || d.Type == ModuleType.UMD) && type == ModuleLoaderType.AMD)).ToList();
                var cjs = dependencies.Where(d => d.Type == ModuleType.CommonJS || ((d.Type == null || d.Type == ModuleType.UMD) && type == ModuleLoaderType.CommonJS)).ToList();
                var es6 = dependencies.Where(d => d.Type == ModuleType.ES6 || (d.Type == null && type == ModuleLoaderType.ES6)).ToList();

                if (amd.Count > 0)
                {
                    this.WriteIndent(tmp, level);
                    tmp.Append(loader.FunctionName ?? "require");
                    tmp.Append("([");

                    amd.Each(md =>
                    {
                        tmp.Append(this.ToJavaScript(md.DependencyName));
                        tmp.Append(",");
                    });
                    tmp.Remove(tmp.Length - 1, 1); // remove trailing comma
                    tmp.Append("], function (");

                    amd.Each(md =>
                    {
                        tmp.Append(md.VariableName.IsNotEmpty() ? md.VariableName : md.DependencyName);
                        tmp.Append(",");
                    });
                    tmp.Remove(tmp.Length - 1, 1); // remove trailing comma

                    this.WriteNewLine(tmp, ") {");

                    this.WriteIndent(endOutput, level);
                    this.WriteNewLine(endOutput, JS.Types.Bridge.INIT + "();");
                    this.WriteIndent(endOutput, level);
                    this.WriteNewLine(endOutput, "});");
                    level++;
                }

                if (cjs.Count > 0)
                {
                    cjs.Each(md =>
                    {
                        this.WriteIndent(tmp, level);
                        tmp.AppendFormat("var {0} = require(\"{1}\");", md.VariableName.IsNotEmpty() ? md.VariableName : md.DependencyName, md.DependencyName);
                        this.WriteNewLine(tmp);
                    });

                    if (es6.Count == 0)
                    {
                        this.WriteNewLine(tmp);
                    }
                }

                if (es6.Count > 0)
                {
                    es6.Each(md =>
                    {
                        this.WriteIndent(tmp, level);
                        this.WriteNewLine(tmp, "import " + (md.VariableName.IsNotEmpty() ? md.VariableName : md.DependencyName) + " from " + this.ToJavaScript(md.DependencyName) + ";");
                    });

                    this.WriteNewLine(tmp);
                }
            }

            return level;
        }

        private void OutputBottom(Contract.IEmitterOutput output, StringBuilder tmp)
        {
            if (output.BottomOutput.Length > 0)
            {
                WriteNewLine(tmp);
                tmp.Append(output.BottomOutput.ToString());
            }
        }

        private string GetIncludedResources()
        {
            var resources = this.Translator.AssemblyDefinition.MainModule.Resources.Where(r => r.ResourceType == ResourceType.Embedded && r.IsPublic && !r.Name.EndsWith(".dll")).Cast<EmbeddedResource>().ToArray();
            JObject obj = new JObject();

            foreach (var embeddedResource in resources)
            {
                obj.Add(embeddedResource.Name, Convert.ToBase64String(Emitter.ReadResource(embeddedResource)));
            }

            return obj.Count > 0 ? obj.ToString(Formatting.None) : null;
        }

        private static byte[] ReadResource(EmbeddedResource r)
        {
            using (var ms = new MemoryStream())
            using (var s = r.GetResourceStream())
            {
                s.CopyTo(ms);
                return ms.ToArray();
            }
        }

        protected string GetOutputHeader()
        {
            if (this.Translator.NoStrictMode)
            {
                return string.Empty;
            }

            return "\"use strict\";";
        }
    }
}