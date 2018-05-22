using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.Contract
{
    public class ModuleDependency : IPluginDependency
    {
        public string DependencyName
        {
            get;
            set;
        }

        public string VariableName
        {
            get;
            set;
        }

        public ModuleType? Type
        {
            get; set;
        }

        public bool PreventName
        {
            get; set;
        }
    }

    public class Module
    {
        public Module(string name, ModuleType type, IEmitter emitter, bool preventModuleName = false)
        {
            this.Name = name;
            this.Type = type;
            this.PreventModuleName = preventModuleName;
            this.Emitter = emitter;
            this.InitName();
        }

        public Module(string name, IEmitter emitter, bool preventModuleName = false)
        {
            this.Name = name;
            this.Type = ModuleType.AMD;
            this.PreventModuleName = preventModuleName;
            this.Emitter = emitter;
            this.InitName();
        }

        public Module(bool preventModuleName, IEmitter emitter) : this(emitter)
        {
            this.PreventModuleName = preventModuleName;
        }

        public Module(IEmitter emitter)
        {
            this.Name = "";
            this.Type = ModuleType.AMD;
            this.PreventModuleName = false;
            this.Emitter = emitter;
            this.InitName();
        }

        public static string EscapeName(string value)
        {
            return Regex.Replace(value, "[^\\w_\\d]", "_");
        }

        private string _name;
        public string Name
        {
            get
            {
                return this._name;
            }
            set
            {
                this.OriginalName = value;
                this._name = EscapeName(value);
                this.NoName = false;
            }
        }

        public string OriginalName
        {
            get;
            private set;
        }

        public ModuleType Type
        {
            get;
            set;
        }

        public bool PreventModuleName
        {
            get;
            private set;
        }

        public IEmitter Emitter
        {
            get; set;
        }

        public bool NoName
        {
            get;
            private set;
        }

        private string _exportAsNamespace;
        public string ExportAsNamespace
        {
            get
            {
                var currentTypeInfo = this.Emitter?.TypeInfo;

                if (currentTypeInfo != null && currentTypeInfo.Module != null && currentTypeInfo.Module.Equals(this))
                {
                    return this.Name;
                }

                return this._exportAsNamespace ?? this.Name;
            }
            set
            {
                this._exportAsNamespace = Regex.Replace(value, "[^\\w_\\d]", "_");
            }
        }

        private static int counter = 0;
        private void InitName()
        {
            if (this.Name == "" || this.Name == "---")
            {
                this.NoName = true;
                this.Name = "$module" + ++Module.counter;
            }
        }

        protected bool Equals(Module other)
        {
            if (other == null)
            {
                return false;
            }
            return string.Equals(this.Name, other.Name) && this.Type == other.Type;
        }

        public override bool Equals(object obj)
        {
            if (object.ReferenceEquals(null, obj))
            {
                return false;
            }

            if (object.ReferenceEquals(this, obj))
            {
                return true;
            }

            if (obj.GetType() != this.GetType())
            {
                return false;
            }

            return this.Equals((Module) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((this.Name != null ? this.Name.GetHashCode() : 0)*397) ^ (int) this.Type;
            }
        }

        public static bool Equals(Module m1, Module m2)
        {
            if (m1 == null || m2 == null)
            {
                return false;
            }

            return m1.Equals(m2);
        }
    }

    public enum ModuleType
    {
        AMD,
        CommonJS,
        UMD,
        ES6
    }
}