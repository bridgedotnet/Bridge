using System;

namespace Bridge
{
    /// <summary>
    ///
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Enum | AttributeTargets.Struct | AttributeTargets.Interface, AllowMultiple = true)]
    public sealed class ModuleDependencyAttribute : Attribute
    {
        public ModuleDependencyAttribute(string dependencyName)
        {
        }

        public ModuleDependencyAttribute(string dependencyName, string variableName)
        {
        }
    }
}