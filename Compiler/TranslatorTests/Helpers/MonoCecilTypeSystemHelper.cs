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
