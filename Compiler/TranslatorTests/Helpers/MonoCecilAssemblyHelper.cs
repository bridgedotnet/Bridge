using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;

using Mono.Cecil;

using NSubstitute;

namespace Bridge.Translator.Tests.Helpers
{
    class MonoCecilAssemblyHelper
    {
        private const string BRIDGE_JS_RESOURCE_NAME = "bridge.js";

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

        public static AssemblyDefinition GetBridgeAssemlyDefinition()
        {
            using (var assembly = ResourceHelper.GetBridgeAssembly())
            {
                var assemblyDefinition = AssemblyDefinition.ReadAssembly(
                    assembly,
                    new ReaderParameters()
                    {
                        ReadingMode = ReadingMode.Deferred,
                    }
                );

                return assemblyDefinition;
            }
        }

        public static System.IO.Stream GetBridgeJs()
        {
            return GetAssemblyResource(GetBridgeAssemlyDefinition(), BRIDGE_JS_RESOURCE_NAME);
        }

        public static System.IO.Stream GetAssemblyResource(AssemblyDefinition assemblyDefinition, string resourceName)
        {
            var resource = assemblyDefinition.MainModule.Resources.FirstOrDefault(x => x.Name == resourceName);

            if (resource == null)
            {
                return null;
            }

            return ((EmbeddedResource)resource).GetResourceStream();
        }
    }
}
