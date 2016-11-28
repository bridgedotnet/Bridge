using Bridge.Contract;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    public class EmitterOutput : IEmitterOutput
    {
        public EmitterOutput(string fileName)
        {
            this.FileName = fileName;
            this.ModuleOutput = new Dictionary<string, StringBuilder>();
            this.NonModuletOutput = new StringBuilder();
            this.TopOutput = new StringBuilder();
            this.BottomOutput = new StringBuilder();
            this.ModuleDependencies = new Dictionary<string, List<IPluginDependency>>();
        }

        public string FileName
        {
            get;
            set;
        }

        public StringBuilder TopOutput
        {
            get;
            set;
        }

        public StringBuilder BottomOutput
        {
            get;
            set;
        }

        public StringBuilder NonModuletOutput
        {
            get;
            set;
        }

        public Dictionary<string, StringBuilder> ModuleOutput
        {
            get;
            set;
        }

        public Dictionary<string, List<IPluginDependency>> ModuleDependencies
        {
            get;
            set;
        }

        public bool IsDefaultOutput
        {
            get
            {
                return this.FileName == AssemblyInfo.DEFAULT_FILENAME;
            }
        }
    }

    public class EmitterOutputs : Dictionary<string, IEmitterOutput>, IEmitterOutputs
    {
        public IEmitterOutput FindModuleOutput(string moduleName)
        {
            if (this.Any(o => o.Value.ModuleOutput.ContainsKey(moduleName)))
            {
                return this.First(o => o.Value.ModuleOutput.ContainsKey(moduleName)).Value;
            }

            return null;
        }

        public IEmitterOutput DefaultOutput
        {
            get
            {
                return this.First(o => o.Value.IsDefaultOutput).Value;
            }
        }
    }
}