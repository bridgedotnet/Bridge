using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;

using Mono.Cecil;

using NSubstitute;

namespace Bridge.Translator.Tests.Helpers
{
    class MonoCecilTypeSystemHelper
    {
        private class OnlyBridgeAssemblyResolver : IAssemblyResolver
        {
            private static AssemblyDefinition BridgeAssemblyCache;

            private AssemblyDefinition GetBridgeAssembly()
            {
                if (BridgeAssemblyCache != null)
                {
                    return BridgeAssemblyCache;
                }

                using (var bridgeAssembly = ResourceHelper.GetBridgeAssembly())
                {
                    var assemblyDefinition = AssemblyDefinition.ReadAssembly(
                        bridgeAssembly,
                        new ReaderParameters()
                        {
                            ReadingMode = ReadingMode.Deferred
                        }
                    );

                    BridgeAssemblyCache = assemblyDefinition;

                    return assemblyDefinition;
                }
            }

            public AssemblyDefinition Resolve(AssemblyNameReference name)
            {
                return GetBridgeAssembly();
            }

            public AssemblyDefinition Resolve(string fullName)
            {
                return GetBridgeAssembly();
            }

            public AssemblyDefinition Resolve(AssemblyNameReference name, ReaderParameters parameters)
            {
                return GetBridgeAssembly();
            }

            public AssemblyDefinition Resolve(string fullName, ReaderParameters parameters)
            {
                return GetBridgeAssembly();
            }
        }

        public static AssemblyDefinition GetTestAssemlyDefinition()
        {
            using (var testAssembly = ResourceHelper.GetTestAssembly())
            {
                var assemblyDefinition = AssemblyDefinition.ReadAssembly(
                    testAssembly,
                    new ReaderParameters()
                    {
                        ReadingMode = ReadingMode.Deferred,
                        AssemblyResolver = new OnlyBridgeAssemblyResolver()
                    }
                );


                return assemblyDefinition;
            }
        }

        public static TypeDefinition FindType(IList<TypeDefinition> types, string fullTypeName)
        {
            if (types == null)
            {
                return null;
            }

            var type = types.FirstOrDefault(x => x.FullName.Replace('/', '.') == fullTypeName);

            if (type == null)
            {
                foreach (var t in types)
                {
                    type = FindType(t.NestedTypes, fullTypeName);

                    if (type != null)
                    {
                        break;
                    }
                }
            }

            return type;
        }

        public static IList<TypeDefinition> GetNestedTypes(AssemblyDefinition assemblyDefinition, string fullTypeName)
        {
            var parentType = FindType(assemblyDefinition.MainModule.Types, fullTypeName);

            if (parentType == null)
            {
                return new List<TypeDefinition>();
            }

            var nested = parentType.NestedTypes;

            return nested;
        }
    }
}
