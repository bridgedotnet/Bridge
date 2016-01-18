using ICSharpCode.NRefactory.CSharp;
using Mono.Cecil;
using System;
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

        string GetCode();

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

        System.Collections.Generic.Dictionary<string, string> Outputs
        {
            get;
        }

        bool Rebuild
        {
            get;
            set;
        }

        void SaveTo(string path, string defaultFileName);

        System.Collections.Generic.IList<string> SourceFiles
        {
            get;
        }

        System.Collections.Generic.Dictionary<string, string> Translate();

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

        string Configuration
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

        void Flush(string outputPath, string fileName);
    }
}
