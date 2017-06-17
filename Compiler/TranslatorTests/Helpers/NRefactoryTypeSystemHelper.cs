using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Threading;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.TypeSystem;
using ICSharpCode.NRefactory.Documentation;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using ICSharpCode.NRefactory.Utils;
using Mono.Cecil;

namespace Bridge.Translator.Tests.Helpers
{
    class NRefactoryTypeSystemHelper
    {
        public static IList<ITypeDefinition> GetNestedTypes(AssemblyDefinition assemblyDefinition, string fullTypeName)
        {
            var loader = new CecilLoader();

            loader.IncludeInternalMembers = true;

            var bridgeAssemblyDefinition = MonoCecilAssemblyHelper.GetBridgeAssemlyDefinition();
            var bridgeAssembly = loader.LoadAssembly(bridgeAssemblyDefinition);

            IProjectContent project = new CSharpProjectContent();
            project = project.AddAssemblyReferences(bridgeAssembly);

            var compilation = project.CreateCompilation();

            var ctx = new SimpleTypeResolveContext(compilation);

            var unresolvedAssembly = loader.LoadAssembly(assemblyDefinition);
            var assembly = unresolvedAssembly.Resolve(ctx);

            var parentType = assembly.GetAllTypeDefinitions().FirstOrDefault(x => x.FullName == fullTypeName);

            if (parentType == null)
            {
                return new List<ITypeDefinition>();
            }

            var nested = parentType.NestedTypes;

            return nested;
        }
    }
}
