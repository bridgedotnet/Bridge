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
        // This ensures a constant line separator throughout the application
        private const char newLine = Bridge.Contract.XmlToJSConstants.DEFAULT_LINE_SEPARATOR;

        private Dictionary<string, StringBuilder> Outputs
        {
            get;
            set;
        }

        private string ns = null;

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

            if (this.ns != null && this.ns != ns)
            {
                this.EndBlock();
                this.WriteNewLine();
            }

            this.ns = ns;

            StringBuilder output = null;

            if (this.Outputs.ContainsKey(fileName))
            {
                output = this.Outputs[fileName];
            }
            else
            {
                if (this.Emitter.Output != null)
                {
                    this.InsertDependencies(this.Emitter.Output);
                }

                output = new StringBuilder();
                this.Emitter.Output = output;
                output.Append(@"/// <reference path=""./bridge.d.ts"" />" + newLine + newLine);
                output.Append("declare module " + ns + " ");
                this.BeginBlock();
                this.Outputs.Add(fileName, output);
                this.Emitter.CurrentDependencies = new List<IPluginDependency>();
            }

            return output;
        }

        protected virtual void InsertDependencies(StringBuilder sb)
        {
            if (this.Emitter.CurrentDependencies != null && this.Emitter.CurrentDependencies.Count > 0)
            {
                StringBuilder depSb = new StringBuilder();
                var last = this.Emitter.CurrentDependencies.LastOrDefault();
                foreach (var d in this.Emitter.CurrentDependencies)
                {
                    depSb.Append(@"/// <reference path=""./" + d.DependencyName + @".d.ts"" />");

                    if (d != last)
                    {
                        depSb.Append(newLine);
                    }
                }

                var index = sb.ToString().IndexOf(Bridge.Translator.Emitter.NEW_LINE);

                sb.Insert(index, depSb.ToString());
                this.Emitter.CurrentDependencies.Clear();
            }
        }

        private void TransformOutputs()
        {
            if (this.Emitter.Outputs.Count == 0)
            {
                return;
            }

            if (this.Emitter.AssemblyInfo.OutputBy == OutputBy.Project)
            {
                var fileName = Path.GetFileNameWithoutExtension(this.Emitter.Outputs.First().Key) + Files.Extensions.DTS;
                var e = new EmitterOutput(fileName);

                foreach (var item in this.Outputs)
                {
                    e.NonModuletOutput.Append(item.Value.ToString() + newLine);
                }

                this.Emitter.Outputs.Add(fileName, e);
            }
            else
            {
                foreach (var item in this.Outputs)
                {
                    var fileName = item.Key + Files.Extensions.DTS;
                    var e = new EmitterOutput(fileName);
                    e.NonModuletOutput = item.Value;
                    this.Emitter.Outputs.Add(fileName, e);
                }
            }
        }

        protected override void DoEmit()
        {
            this.Emitter.Writers = new Stack<IWriter>();
            this.Outputs = new Dictionary<string, StringBuilder>();

            var types = this.Emitter.Types.ToArray();
            Array.Sort(types, (t1, t2) => BridgeTypes.GetNamespaceFilename(t1, this.Emitter).Item1.CompareTo(BridgeTypes.GetNamespaceFilename(t2, this.Emitter).Item1));
            this.Emitter.InitEmitter();

            var last = types.LastOrDefault();
            foreach (var type in types)
            {
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
                this.Emitter.Output = this.GetOutputForType(typeInfo);
                var nestedTypes = types.Where(t => t.ParentType == type);
                new ClassBlock(this.Emitter, this.Emitter.TypeInfo, nestedTypes, types).Emit();
                this.WriteNewLine();

                if (type != last)
                {
                    this.WriteNewLine();
                }
            }

            this.InsertDependencies(this.Emitter.Output);

            this.EndBlock();
            this.TransformOutputs();
        }
    }
}