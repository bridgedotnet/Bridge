using System;

namespace Bridge
{
    /// <summary>
    ///
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Enum | AttributeTargets.Struct | AttributeTargets.Interface, AllowMultiple = true)]
    [NonScriptable]
    public sealed class ModuleDependencyAttribute : Attribute
    {
        public extern ModuleDependencyAttribute(string dependencyName);

        public extern ModuleDependencyAttribute(string dependencyName, string variableName);
    }
}