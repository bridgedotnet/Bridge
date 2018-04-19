using System;

namespace Bridge
{
    /// <summary>
    /// The file name where JavaScript is generated to.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Enum | AttributeTargets.Struct | AttributeTargets.Interface)]
    public sealed class FileNameAttribute : Attribute
    {
        public FileNameAttribute(string filename)
        {
        }
    }
}