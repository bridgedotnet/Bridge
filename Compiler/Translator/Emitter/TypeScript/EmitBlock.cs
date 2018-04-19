using Bridge.Contract;
using Bridge.Contract.Constants;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.TypeScript
{
    public class EmitBlock : TypeScriptBlock
    {
        private class OutputKey
        {
            public OutputKey(string key, Module module, string ns)
            {
                this.Key = key;
                this.Module = module;
                this.Namespace = ns;
            }

            public string Key
            {
                get;
                set;
            }

            public Module Module
            {
                get;
                set;
            }

            public string Namespace
            {
                get;
                set;
            }

            public override int GetHashCode()
            {
                unchecked
                {
                    return ((this.Key != null ? this.Key.GetHashCode() : 0) * 397) ^ (this.Module != null ? this.Module.GetHashCode() : 0);
                }
            }

            public override bool Equals(object obj)
            {
                var other = obj as OutputKey;

                return other == null ? false : this.Key == other.Key && (this.Module == null && other.Module == null || this.Module != null && this.Module.Equals(other.Module));
            }
        }

        // This ensures a constant line separator throughout the application
        private const char newLine = Bridge.Contract.XmlToJSConstants.DEFAULT_LINE_SEPARATOR;

        private Dictionary<OutputKey, StringBuilder> Outputs
        {
            get;
            set;
        }

        private string ns = null;
        private OutputKey outputKey = null;

        public EmitBlock(IEmitter emitter)
            : base(emitter, null)
        {
            this.Emitter = emitter;
        }

        protected virtual StringBuilder GetOutputForType(ITypeInfo typeInfo)
        {
            var info = BridgeTypes.GetNamespaceFilename(typeInfo, this.Emitter);
            var ns = info.Item1;
            var fileName = info.Item2;
            var module = info.Item3;

            StringBuilder output = null;
            OutputKey key = new OutputKey(fileName, module, ns);

            if (this.ns != null && (this.ns != ns || this.outputKey != null && !this.outputKey.Equals(key)))
            {
                this.EndBlock();
                this.WriteNewLine();
            }

            this.ns = ns;
            this.outputKey = key;

            if (this.Outputs.ContainsKey(key))
            {
                output = this.Outputs[key];
            }
            else
            {
                if (this.Emitter.Output != null)
                {
                    this.InsertDependencies(this.Emitter.Output);
                }

                output = new StringBuilder();
                this.Emitter.Output = output;

                if (ns != null)
                {
                    if (module == null || module.Type == ModuleType.UMD)
                    {
                        output.Append("declare ");
                    }

                    output.Append("namespace " + ns + " ");
                    this.BeginBlock();
                }

                this.Outputs.Add(key, output);
                this.Emitter.CurrentDependencies = new List<IPluginDependency>();
            }

            return output;
        }

        protected virtual void InsertDependencies(StringBuilder sb)
        {
            if (this.Emitter.CurrentDependencies != null && this.Emitter.CurrentDependencies.Count > 0)
            {
                StringBuilder depSb = new StringBuilder();
                foreach (var d in this.Emitter.CurrentDependencies)
                {
                    depSb.Append(@"/// <reference path=""./" + d.DependencyName + @".d.ts"" />");
                    depSb.Append(newLine);
                }

                sb.Insert(0, depSb.ToString() + newLine);
                this.Emitter.CurrentDependencies.Clear();
            }
        }

        private void TransformOutputs()
        {
            if (this.Emitter.Outputs.Count == 0)
            {
                return;
            }

            var withoutModuleOutputs = this.Outputs.Where(o => o.Key.Module == null).ToList();
            var withModuleOutputs = this.Outputs.Where(o => o.Key.Module != null).ToList();

            var nonModuleOutputs = withoutModuleOutputs.GroupBy(o => o.Key.Key).ToDictionary(t => t.Key, t => string.Join(newLine.ToString(), t.Select(r => r.Value.ToString()).ToList()));
            var outputs = withModuleOutputs.GroupBy(o => o.Key.Module).ToDictionary(t => t.Key, t => string.Join(newLine.ToString(), t.Select(r => r.Value.ToString()).ToList()));

            if (this.Emitter.AssemblyInfo.OutputBy == OutputBy.Project)
            {
                var fileName = Path.GetFileNameWithoutExtension(this.Emitter.Outputs.First().Key) + Files.Extensions.DTS;
                var e = new EmitterOutput(fileName);

                foreach (var item in nonModuleOutputs)
                {
                    e.NonModuletOutput.Append(item.Value.ToString() + newLine);
                }

                foreach (var item in outputs)
                {
                    e.NonModuletOutput.Append(WrapModule(item) + newLine);
                }

                this.Emitter.Outputs.Add(fileName, e);
            }
            else
            {
                foreach (var item in nonModuleOutputs)
                {
                    var fileName = item.Key + Files.Extensions.DTS;
                    var e = new EmitterOutput(fileName);
                    e.NonModuletOutput.Append(item.Value.ToString());
                    this.Emitter.Outputs.Add(fileName, e);
                }

                foreach (var item in outputs)
                {
                    var fileName = item.Key.ExportAsNamespace + Files.Extensions.DTS;
                    var e = new EmitterOutput(fileName);
                    e.NonModuletOutput.Append(WrapModule(item));
                    this.Emitter.Outputs.Add(fileName, e);
                }
            }
        }

        private string WrapModule(KeyValuePair<Module, string> item)
        {
            StringBuilder sb = new StringBuilder();

            if (item.Key.Type == ModuleType.AMD || item.Key.Type == ModuleType.CommonJS)
            {
                sb.Append("declare module \"" + item.Key.ExportAsNamespace + "\" {");
                sb.Append(Bridge.Translator.Emitter.NEW_LINE);
                sb.Append("    " + AbstractEmitterBlock.WriteIndentToString(item.Value, 1));
                sb.Append(Bridge.Translator.Emitter.NEW_LINE);
                sb.Append("}");
            }
            else if (item.Key.Type == ModuleType.UMD)
            {
                sb.Append(item.Value);
                sb.Append(Bridge.Translator.Emitter.NEW_LINE);
                sb.Append("declare module \"" + item.Key.ExportAsNamespace + "\" {");
                sb.Append(Bridge.Translator.Emitter.NEW_LINE);
                sb.Append("    export = " + item.Key.ExportAsNamespace + ";");
                sb.Append(Bridge.Translator.Emitter.NEW_LINE);
                sb.Append("}");
            }
            else
            {
                sb.Append(item.Value);
            }

            sb.Append(Bridge.Translator.Emitter.NEW_LINE);

            return sb.ToString();
        }

        protected override void DoEmit()
        {
            this.Emitter.Tag = "TS";
            this.Emitter.Writers = new Stack<IWriter>();
            this.Outputs = new Dictionary<OutputKey, StringBuilder>();

            var types = this.Emitter.Types.ToArray();
            Array.Sort(types, (t1, t2) =>
            {
                var t1ns = BridgeTypes.GetNamespaceFilename(t1, this.Emitter);
                var t2ns = BridgeTypes.GetNamespaceFilename(t2, this.Emitter);

                if (t1ns.Item1 == null && t2ns.Item1 == null)
                {
                    return 0;
                }

                if (t1ns.Item1 == null)
                {
                    return -1;
                }

                if (t2ns.Item1 == null)
                {
                    return 1;
                }

                var key1 = t1ns.Item1 + (t1ns.Item3 != null ? t1ns.Item3.ExportAsNamespace : "");
                var key2 = t2ns.Item1 + (t2ns.Item3 != null ? t2ns.Item3.ExportAsNamespace : "");

                return t1ns.Item1.CompareTo(t2ns.Item1);
            });
            this.Emitter.InitEmitter();

            bool nsExists = false;
            var last = types.LastOrDefault();
            foreach (var type in types)
            {
                if (!nsExists)
                {
                    var tns = BridgeTypes.GetNamespaceFilename(type, this.Emitter);

                    if (tns.Item1 != null)
                    {
                        nsExists = true;
                    }
                }

                if (type.ParentType != null)
                {
                    continue;
                }

                this.Emitter.Translator.EmitNode = type.TypeDeclaration;

                if (type.IsObjectLiteral)
                {
                    continue;
                }

                ITypeInfo typeInfo;

                if (this.Emitter.TypeInfoDefinitions.ContainsKey(type.Key))
                {
                    typeInfo = this.Emitter.TypeInfoDefinitions[type.Key];

                    type.Module = typeInfo.Module;
                    type.FileName = typeInfo.FileName;
                    type.Dependencies = typeInfo.Dependencies;
                    typeInfo = type;
                }
                else
                {
                    typeInfo = type;
                }

                this.Emitter.TypeInfo = type;
                type.JsName = BridgeTypes.ToJsName(type.Type, this.Emitter, true);

                this.Emitter.Output = this.GetOutputForType(typeInfo);
                var nestedTypes = types.Where(t => t.ParentType == type);
                new ClassBlock(this.Emitter, this.Emitter.TypeInfo, nestedTypes, types, this.ns).Emit();
                this.WriteNewLine();

                if (type != last)
                {
                    this.WriteNewLine();
                }
            }

            this.InsertDependencies(this.Emitter.Output);
            if (this.outputKey != null && nsExists)
            {
                this.EndBlock();
            }

            this.TransformOutputs();
        }
    }
}