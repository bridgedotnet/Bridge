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

        protected virtual void WriteNewLine(StringBuilder sb)
        {
            sb.Append(NEW_LINE);
        }

        protected virtual void WriteNewLine(StringBuilder sb, string text)
        {
            sb.Append(text);
            sb.Append(NEW_LINE);
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

            Dictionary<string, string> result = new Dictionary<string, string>();
            bool metaDataWritten = false;
            var disableAsm = this.AssemblyInfo.Assembly.DisableInitAssembly;
            foreach (var outputPair in this.Outputs)
            {
                var fileName = outputPair.Key;
                var output = outputPair.Value;

                this.Log.Trace("File name " + (fileName ?? ""));

                string extension = Path.GetExtension(fileName);
                bool isJs = extension == ('.' + Bridge.Translator.AssemblyInfo.JAVASCRIPT_EXTENSION);

                foreach (var moduleOutput in output.ModuleOutput)
                {
                    WriteNewLine(output.NonModuletOutput, moduleOutput.Value.ToString());
                }

                var tmp = new StringBuilder(output.TopOutput.Length + output.BottomOutput.Length + output.NonModuletOutput.Length + 100);

                if (output.TopOutput.Length > 0)
                {
                    tmp.Append(output.TopOutput.ToString());
                    tmp.Append(NEW_LINE);
                }

                if (output.NonModuletOutput.Length > 0)
                {
                    if (isJs)
                    {
                        if (!disableAsm)
                        {
                            tmp.Append(JS.Types.Bridge.ASSEMBLY + "(");
                            string asmName = this.AssemblyInfo.Assembly.FullName ?? this.Translator.AssemblyName;
                            if (!string.IsNullOrEmpty(asmName))
                            {
                                tmp.Append("{");
                                tmp.AppendFormat(" name: \"{0}\"", asmName);

                                var assemblyVersionInfo = this.Translator.GetAssemblyVersion();

                                var assemblyVersion = assemblyVersionInfo != null && assemblyVersionInfo.ProductVersion != null
                                    ? assemblyVersionInfo.ProductVersion.ToString()
                                    : null;

                                if (assemblyVersion != null)
                                {
                                    tmp.AppendFormat(", version: \"{0}\"", assemblyVersion);
                                }

                                var compilerVersionInfo = this.Translator.GetCompilerVersion();

                                var compilerVersion = compilerVersionInfo != null && compilerVersionInfo.ProductVersion != null
                                    ? compilerVersionInfo.ProductVersion.ToString()
                                    : null;

                                if (compilerVersion != null)
                                {
                                    tmp.AppendFormat(", compiler: \"{0}\"", compilerVersion);
                                }

                                tmp.Append(" }");
                            }
                            else
                            {
                                tmp.Append("null");
                            }

                            tmp.Append(", ");

                            if (!metaDataWritten && (this.MetaDataOutputName == null || fileName == this.MetaDataOutputName))
                            {
                                var res = this.GetIncludedResources();

                                if (res != null)
                                {
                                    tmp.Append(res);
                                    tmp.Append(", ");
                                }

                                metaDataWritten = true;
                            }

                            tmp.Append("function ($asm, globals) {");
                            tmp.Append(NEW_LINE);
                            tmp.Append(INDENT);
                            tmp.Append(this.GetOutputHeader());
                            tmp.Append(NEW_LINE);
                        }
                    }

                    var code = output.NonModuletOutput.ToString();

                    if (isJs)
                    {
                        code = INDENT + AbstractEmitterBlock.WriteIndentToString(code, 1);
                    }

                    tmp.Append(code);

                    if (isJs && !disableAsm)
                    {
                        tmp.Append("});");
                        tmp.Append(NEW_LINE);
                    }
                }

                if (output.BottomOutput.Length > 0)
                {
                    tmp.Append(NEW_LINE);
                    tmp.Append(output.BottomOutput.ToString());
                }

                result.Add(fileName, tmp.ToString());
            }

            this.Log.Trace("Combining outputs done");

            return result;
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

            return "\"use strict\";" + NEW_LINE;
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

                    WriteNewLine(moduleOutput, "    return " + JS.Vars.EXPORTS + ";");
                    WriteNewLine(moduleOutput, "});");
                }
            }

            this.Log.Trace("Wrapping to modules done");
        }
    }
}