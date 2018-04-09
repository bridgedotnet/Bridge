using System;

namespace Bridge
{
    /// <summary>
    /// The option to manage JavaScript output folders and files.
    /// See TypesSplit enum for more details.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Assembly)]
    public sealed class OutputByAttribute : Attribute
    {
        public OutputByAttribute(OutputBy outputBy)
        {
        }

        public OutputByAttribute(OutputBy outputBy, int startIndexInName)
        {
        }
    }

    /// <summary>
    /// The options to manage JavaScript output folders and files.
    /// </summary>
    [NonScriptable]
    public enum OutputBy
    {
        /// <summary>
        /// The class name will be the file name. If there are classes with same names in different namespaces, the generated JavaScript will be combined into one file. For example, if the class name is "Helpers", the file name will be "Helpers.js".
        /// </summary>
        Class = 1,

        /// <summary>
        /// A folder hierarchy is created using the class name, and a folder is created for each unique word (split by '.') in the class namespace. For example, if the class "Helpers" is within the "Demo" namespace, the file path and name will be "Demo/Helpers.js".
        /// </summary>
        ClassPath = 2,

        /// <summary>
        /// The ModuleAttribute value is used as the file name if set on a class. For example, if [Module("MyModuleName")] is set, the file name will be "MyModuleName.js".
        /// </summary>
        Module = 3,

        /// <summary>
        /// The full namespace is used as the file name. For example, if "Demo.Utilities" is the namespace, the file name will be "Demo.Utilities.js".
        /// </summary>
        Namespace = 4,

        /// <summary>
        /// The class namespace is split (by '.') and a folder is created for each individual value, except the last value which becomes the file name. For example, if "Demo.Utilities" is the namespace, the file path and name will be "/Demo/Utilities.js".
        /// </summary>
        NamespacePath = 5,

        /// <summary>
        /// All generated JavaScript for the project is added to one [ProjectName].js file. For example, if the project name is "MyUtilities", the file name will be "MyUtilities.js".
        /// This can be overridden by setting the fileName option within bridge.json, or by using the [FileName] Attribute on the assembly or class levels.
        /// </summary>
        Project = 6
    }
}