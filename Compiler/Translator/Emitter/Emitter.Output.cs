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

namespace Bridge.Translator
{
    public partial class Emitter
    {
        public const string INDENT = "    ";
        public const string NEW_LINE = "\n";
        public const char NEW_LINE_CHAR = '\n';
        public const string CRLF = "\r\n";
        public const string TAB = "\t";

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

        protected virtual Dictionary<string, string> TransformOutputs()
        {
            this.Log.Info("Transforming outputs...");

            this.WrapToModules();

            var outputs = this.CombineOutputs();

            this.Log.Info("Transforming outputs done");

            return outputs;
        }

        protected virtual Dictionary<string, string> CombineOutputs()
        {
            this.Log.Trace("Combining outputs...");

            var result = new Dictionary<string, string>();

            var disableAsm = this.AssemblyInfo.Assembly.DisableInitAssembly;

            this.AssemblyJsDocWritten = false;

            foreach (var outputPair in this.Outputs)
            {
                var fileName = outputPair.Key;
                var output = outputPair.Value;

                this.Log.Trace("File name " + (fileName ?? ""));

                string extension = Path.GetExtension(fileName);
                bool isJs = extension == ('.' + Bridge.Translator.AssemblyInfo.JAVASCRIPT_EXTENSION);

                OutputModule(output);

                var tmp = new StringBuilder(output.TopOutput.Length + output.BottomOutput.Length + output.NonModuletOutput.Length + 1000);

                OutputTop(output, tmp);

                OutputNonModule(disableAsm, fileName, output, isJs, tmp);

                OutputBottom(output, tmp);

                result.Add(fileName, tmp.ToString());
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
            //  * @compiler Bridge.NET 15.3.0
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

        private void OutputModule(Contract.IEmitterOutput output)
        {
            foreach (var moduleOutput in output.ModuleOutput)
            {
                WriteNewLine(output.NonModuletOutput, moduleOutput.Value.ToString());
            }
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

            if (output.NonModuletOutput.Length > 0)
            {
                if (isJs)
                {
                    if (!disableAsm)
                    {
                        string asmName = this.AssemblyInfo.Assembly.FullName ?? this.Translator.AssemblyName;

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
                }

                var code = output.NonModuletOutput.ToString();

                tmp.Append(code);

                if (isJs && !disableAsm)
                {
                    WriteIndent(tmp, level);
                    tmp.Append("}");
                    WriteNewLine(tmp);

                    tmp.Append(");");
                    WriteNewLine(tmp);
                }
            }

            return metaDataWritten;
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

        protected virtual void WrapToModules()
        {
            this.Log.Trace("Wrapping to modules...");

            foreach (var outputPair in this.Outputs)
            {
                var output = outputPair.Value;

                foreach (var moduleOutputPair in output.ModuleOutput)
                {
                    var moduleName = moduleOutputPair.Key;
                    var moduleOutput = moduleOutputPair.Value;

                    this.Log.Trace("Module " + (moduleName ?? "") + " ...");

                    AbstractEmitterBlock.RemovePenultimateEmptyLines(moduleOutput, true);
                    var str = moduleOutput.ToString();
                    moduleOutput.Length = 0;

                    moduleOutput.Append(JS.Funcs.DEFINE + "(");

                    if (moduleName != Bridge.Translator.AssemblyInfo.DEFAULT_FILENAME)
                    {
                        moduleOutput.Append(this.ToJavaScript(moduleName));
                        moduleOutput.Append(", ");
                    }

                    moduleOutput.Append("[\"bridge\",");
                    if (output.ModuleDependencies.ContainsKey(moduleName) && output.ModuleDependencies[moduleName].Count > 0)
                    {
                        output.ModuleDependencies[moduleName].Each(md =>
                        {
                            moduleOutput.Append(this.ToJavaScript(md.DependencyName));
                            moduleOutput.Append(",");
                        });
                    }
                    moduleOutput.Remove(moduleOutput.Length - 1, 1); // remove trailing comma
                    moduleOutput.Append("], ");

                    moduleOutput.Append("function (_");

                    if (output.ModuleDependencies.ContainsKey(moduleName) && output.ModuleDependencies[moduleName].Count > 0)
                    {
                        moduleOutput.Append(", ");
                        output.ModuleDependencies[moduleName].Each(md =>
                        {
                            moduleOutput.Append(md.VariableName.IsNotEmpty() ? md.VariableName : md.DependencyName);
                            moduleOutput.Append(",");
                        });
                        moduleOutput.Remove(moduleOutput.Length - 1, 1); // remove trailing comma
                    }

                    WriteNewLine(moduleOutput, ") {");

                    string indent = str.StartsWith(INDENT) ? "" : INDENT;
                    moduleOutput.Append(INDENT);
                    WriteNewLine(moduleOutput, "var " + JS.Vars.EXPORTS + " = { };");
                    moduleOutput.Append(indent + str.Replace(NEW_LINE, NEW_LINE + indent));

                    if (!str.Trim().EndsWith(NEW_LINE))
                    {
                        WriteNewLine(moduleOutput);
                    }

                    WriteNewLine(moduleOutput, INDENT + "return " + JS.Vars.EXPORTS + ";");
                    WriteNewLine(moduleOutput, "});");
                }
            }

            this.Log.Trace("Wrapping to modules done");
        }
    }
}