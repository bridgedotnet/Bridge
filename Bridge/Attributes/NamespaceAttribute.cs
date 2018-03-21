using System;

namespace Bridge
{
    /// <summary>
    /// Specifies a custom namespace for the built entity.
    /// Use 'false' (without quotes) to suppress namespace binding (usually with [External] attribute).
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface)]
    public sealed class NamespaceAttribute : Attribute
    {
        public NamespaceAttribute(bool includeNamespace)
        {
        }

        public NamespaceAttribute(string ns)
        {
        }
    }
}