using Object.Net.Utilities;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Bridge.Contract;
using Mono.Cecil;

namespace Bridge.Translator
{
    public partial class Emitter
    {
        protected virtual void WriteNewLine(StringBuilder sb)
        {
            sb.Append("\n");
        }

        protected virtual void WriteNewLine(StringBuilder sb, string text)
        {
            sb.Append(text);
            sb.Append("\n");
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
                    tmp.Append("\n");
                }

                if (output.NonModuletOutput.Length > 0)
                {
                    if (isJs)
                    {
                        tmp.Append("(function (globals) {");
                        tmp.Append("\n");
                        tmp.Append("    ");
                        tmp.Append(this.GetOutputHeader());
                        tmp.Append("\n");
                    }

                    var code = output.NonModuletOutput.ToString() + (isJs ? "\n\nBridge.init();" : "");

                    if (isJs)
                    {
                        code = "    " + AbstractEmitterBlock.WriteIndentToString(code, 1);
                    }

                    tmp.Append(code);

                    if (isJs)
                    {
                        tmp.Append("\n");
                        tmp.Append("})(this);");
                        tmp.Append("\n");
                    }
                }

                if (output.BottomOutput.Length > 0)
                {
                    tmp.Append("\n");
                    tmp.Append(output.BottomOutput.ToString());
                }

                result.Add(fileName, tmp.ToString());
            }

            this.Log.Trace("Combining outputs done");

            return result;
        }

        protected string GetOutputHeader()
        {
            if (this.Translator.NoStrictMode)
            {
                return string.Empty;
            }

            return "\"use strict\";\n";
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

                    moduleOutput.Append("define(");

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

                    string indent = str.StartsWith("    ") ? "" : "    ";
                    moduleOutput.Append("    ");
                    WriteNewLine(moduleOutput, "var exports = { };");
                    moduleOutput.Append(indent + str.Replace("\n", "\n" + indent));

                    if (!str.Trim().EndsWith("\n"))
                    {
                        WriteNewLine(moduleOutput);
                    }

                    WriteNewLine(moduleOutput, "    return exports;");
                    WriteNewLine(moduleOutput, "});");
                }
            }

            this.Log.Trace("Wrapping to modules done");
        }
    }
}
