using Object.Net.Utilities;
using System.Collections.Generic;
using System.IO;
using System.Text;

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
            this.WrapToModules();
            return this.CombineOutputs();
        }

        protected virtual Dictionary<string, string> CombineOutputs()
        {
            Dictionary<string, string> result = new Dictionary<string, string>();
            foreach (var outputPair in this.Outputs)
            {
                var fileName = outputPair.Key;
                var output = outputPair.Value;

                string extension = Path.GetExtension(fileName);
                bool isJs = extension == ('.' + Bridge.Translator.AssemblyInfo.JAVASCRIPT_EXTENSION);

                foreach (var moduleOutput in output.ModuleOutput)
                {
                    WriteNewLine(output.NonModuletOutput, moduleOutput.Value.ToString());
                }

                result.Add(fileName, output.NonModuletOutput.ToString() + (isJs ? "\n\nBridge.init();" : ""));
            }

            return result;
        }

        protected virtual void WrapToModules()
        {
            foreach (var outputPair in this.Outputs)
            {
                var output = outputPair.Value;

                foreach (var moduleOutputPair in output.ModuleOutput)
                {
                    var moduleName = moduleOutputPair.Key;
                    var moduleOutput = moduleOutputPair.Value;
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
        }
    }
}
