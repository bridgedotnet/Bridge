using System;

namespace Bridge
{
    /// <summary>
    ///
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Enum | AttributeTargets.Struct | AttributeTargets.Interface)]
    [NonScriptable]
    public sealed class ModuleAttribute : Attribute
    {
        public ModuleAttribute()
        {
        }

        public ModuleAttribute(bool preventModuleName)
        {
        }

        public ModuleAttribute(string moduleName)
        {
        }

        public ModuleAttribute(string moduleName, bool preventModuleName)
        {
        }

        public ModuleAttribute(ModuleType type)
        {
        }

        public ModuleAttribute(ModuleType type, bool preventModuleName)
        {
        }

        public ModuleAttribute(ModuleType type, string moduleName)
        {
        }

        public ModuleAttribute(ModuleType type, string moduleName, bool preventModuleName)
        {
        }

        public string ExportAsNamespace
        {
            get; set;
        }

        public string Name
        {
            get; set;
        }
    }

    [NonScriptable]
    public enum ModuleType
    {
        AMD,
        CommonJS,
        UMD,
        ES6
    }
}