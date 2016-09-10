using System;

namespace Bridge
{
    /// <summary>
    /// Specifies a custom namespace for the built entity.
    /// Use 'false' (without quotes) to suppress namespace binding (usually with [External] attribute).
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface)]
    [NonScriptable]
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