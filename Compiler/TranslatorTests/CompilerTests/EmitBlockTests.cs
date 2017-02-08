using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;
using Bridge.Translator.Tests.Helpers;


using NUnit.Framework;
using NSubstitute;

namespace Bridge.Translator.Tests
{
    class EmitBlockTests
    {
        private static TypeSystemHelper TypeSystem { get; } = new TypeSystemHelper();

        private static EmitBlock GetEmitBlock(bool configEnabled, TypeAccessibility? typeAccessibility, bool inThisAssembly, string typeName, string attribute = null, IEnumerable<object> positionalArguments = null)
        {
            return GetEmitBlock(configEnabled, typeAccessibility, new[] { new TypeDescriptor(typeName, inThisAssembly, attribute, positionalArguments) });
        }

        private static EmitBlock GetEmitBlock(bool configEnabled, TypeAccessibility? typeAccessibility, IEnumerable<TypeDescriptor> types)
        {
            var bridgeTypes = Substitute.For<BridgeTypes>();

            foreach (var type in types)
            {
                TypeSystem.AddBridgeType(bridgeTypes, type);
            }

            var emitter = EmitterHelper.GetEmitter(
                bridgeTypes: bridgeTypes,
                assemblyInfo: new AssemblyInfo()
                {
                    Reflection = new ReflectionConfig()
                    {
                        Enabled = configEnabled,
                        TypeAccessibility = typeAccessibility
                    }
                }
            );

            var block = new EmitBlock(emitter);
            return block;
        }

        [TestFixture]
        class GetReflectableTypesTests
        {
            [TestCase]
            public void GetReflectableTypes_ShouldSkip()
            {
                var types = new[]
                {
                    new TypeDescriptor("SomeClass1", attributeName: "Bridge.GlobalMethodsAttribute"),
                    new TypeDescriptor("SomeClass2", attributeName: "Bridge.NonScriptableAttribute"),
                    new TypeDescriptor("SomeClass3", attributeName: "Bridge.MixinAttribute")
                };

                var block = GetEmitBlock(true, null, types);
                var reflectableTypes = block.GetReflectableTypes();

                Assert.NotNull(reflectableTypes);
                Assert.AreEqual(0, reflectableTypes.Length);
            }

            [TestCase]
            public void GetReflectableTypes_NotEnabled()
            {
                var block = GetEmitBlock(false, null, true, "SomeClass", "Bridge.ReflectableAttribute");
                var reflectableTypes = block.GetReflectableTypes();

                Assert.NotNull(reflectableTypes);
                Assert.AreEqual(0, reflectableTypes.Length);
            }

            [TestCase]
            public void GetReflectableTypes_ShouldReturn()
            {
                TestByOneReflectableAttribute("Reflectable1", true, true);
                TestByOneReflectableAttribute("Reflectable2", true, true, true);
                TestByOneReflectableAttribute("Reflectable3", true, true, new object());
                TestByOneReflectableAttribute("Reflectable4", true, false, null, TypeAccessibility.Public);
            }

            [TestCase]
            // #2183
            public void GetReflectableTypes_2183()
            {
                TestByOneReflectableAttribute("Reflectable1", false, true);
                TestByOneReflectableAttribute("Reflectable2", false, true, true);
                TestByOneReflectableAttribute("Reflectable3", false, true, false);
                TestByOneReflectableAttribute("Reflectable4", false, true, new object());
                TestByOneReflectableAttribute("Reflectable5", false, false, null, TypeAccessibility.Public);
            }

            private void TestByOneReflectableAttribute(string typeName, bool inThisAssembly, bool hasArgument, object argument = null, TypeAccessibility? typeAccessibility = null)
            {
                var attribute = hasArgument ? "Bridge.ReflectableAttribute" : null;

                var block = GetEmitBlock(true, typeAccessibility, inThisAssembly, typeName, attribute, argument != null ? new object[] { argument} : null);
                var reflectableTypes = block.GetReflectableTypes();

                Assert.NotNull(reflectableTypes, typeName + " NotNull");

                var expectResult = inThisAssembly;

                if (expectResult)
                {
                    Assert.AreEqual(1, reflectableTypes.Length, typeName + " Count");
                    Assert.AreEqual(typeName, reflectableTypes[0].FullName, typeName + " FullName");
                }
                else
                {
                    Assert.AreEqual(0, reflectableTypes.Length, typeName + " Count");
                }
            }
        }
    }
}
