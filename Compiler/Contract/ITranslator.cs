using ICSharpCode.NRefactory.CSharp;
using Mono.Cecil;
using System.Collections.Generic;

namespace Bridge.Contract
{
    public interface ITranslator
    {
        Mono.Cecil.AssemblyDefinition AssemblyDefinition
        {
            get;
            set;
        }

        IAssemblyInfo AssemblyInfo
        {
            get;
            set;
        }

        string AssemblyLocation
        {
            get;
        }

        string BridgeLocation
        {
            get;
            set;
        }

        ProjectProperties ProjectProperties
        {
            get;
            set;
        }

        string DefaultNamespace
        {
            get;
            set;
        }

        string Location
        {
            get;
        }

        ILogger Log
        {
            get;
            set;
        }

        string MSBuildVersion
        {
            get;
            set;
        }

        TranslatorOutput Outputs
        {
            get;
        }

        bool Rebuild
        {
            get;
            set;
        }

        void Save(string path, string defaultFileName);

        System.Collections.Generic.IList<string> SourceFiles
        {
            get;
        }

        void Translate();

        System.Collections.Generic.Dictionary<string, ITypeInfo> TypeInfoDefinitions
        {
            get;
            set;
        }

        System.Collections.Generic.List<ITypeInfo> Types
        {
            get;
        }

        IValidator Validator
        {
            get;
        }

        IPlugins Plugins
        {
            get;
            set;
        }

        BridgeTypes BridgeTypes
        {
            get;
            set;
        }

        AstNode EmitNode
        {
            get;
            set;
        }

        EmitterException CreateExceptionFromLastNode();

        bool FolderMode
        {
            get;
            set;
        }

        string Source
        {
            get;
            set;
        }

        bool Recursive
        {
            get;
            set;
        }

        List<string> DefineConstants
        {
            get;
            set;
        }

        IEnumerable<AssemblyDefinition> References
        {
            get;
            set;
        }

        /// <summary>
        /// Indicates whether strict mode will be added to generated script files
        /// </summary>
        bool NoStrictMode
        {
            get;
            set;
        }

        VersionContext GetVersionContext();
    }
}