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

        private string variableName;

        public string VariableName
        {
            // The logic here should be compatible with Bridge.Contract.Module.ExportAsNamespace.get() below.
            get
            {
                // Ensure a valid variable name is returned even if not specified.
                if (string.IsNullOrWhiteSpace(this.variableName))
                {
                    this.variableName = this.DependencyName;
                }

                // Even after trying to tie DependencyName, if still invalid,
                // then throw an exception.
                if (string.IsNullOrWhiteSpace(this.variableName))
                {
                    throw new System.FieldAccessException("Tried to access ModuleDependency name and variable before both variable and module name had a valid value.");
                }

                return this.variableName;
            }
            set
            {
                this.variableName = value;
            }
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

        public Module(IEmitter emitter) : this()
        {
            this.Emitter = emitter;
        }

        public Module()
        {
            this.Name = "";
            this.Type = ModuleType.AMD;
            this.PreventModuleName = false;
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
            return string.Equals(this.Name, other.Name) && this.Type == other.Type && this._exportAsNamespace == other._exportAsNamespace;
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