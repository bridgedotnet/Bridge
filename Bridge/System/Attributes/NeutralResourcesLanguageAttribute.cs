using System.Runtime.InteropServices;
using Bridge;

namespace System.Resources
{
    [Serializable]
    [NonScriptable]
    [External]
    [ComVisible(true)]
    public enum UltimateResourceFallbackLocation
    {
        MainAssembly,
        Satellite
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [NonScriptable]
    [External]
    [ComVisible(true)]
    public sealed class NeutralResourcesLanguageAttribute : Attribute
    {
        public extern NeutralResourcesLanguageAttribute(string cultureName);

        public extern NeutralResourcesLanguageAttribute(String cultureName, UltimateResourceFallbackLocation location);

        public extern string CultureName { get; }

        public extern UltimateResourceFallbackLocation Location { get; }
    }
}