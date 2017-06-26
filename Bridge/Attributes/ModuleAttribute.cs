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
        public extern ModuleAttribute();

        public extern ModuleAttribute(bool preventModuleName);

        public extern ModuleAttribute(string moduleName);

        public extern ModuleAttribute(string moduleName, bool preventModuleName);

        public extern ModuleAttribute(ModuleType type);

        public extern ModuleAttribute(ModuleType type, bool preventModuleName);

        public extern ModuleAttribute(ModuleType type, string moduleName);

        public extern ModuleAttribute(ModuleType type, string moduleName, bool preventModuleName);

        public extern string ExportAsNamespace
        {
            get; set;
        }

        public extern string Name
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