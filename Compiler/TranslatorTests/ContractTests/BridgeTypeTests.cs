using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;
using Bridge.Translator.Tests.Helpers;


using NUnit.Framework;
using NSubstitute;

namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class BridgeTypeTests
    {
        public class CheckDependenciesTests
        {
            [Test] // #2312
            public void CheckDependenciesShouldNotAddDuplicateModuleDependency_2312()
            {
                var emitter = EmitterHelper.GetEmitter();

                emitter.DisableDependencyTracking = false;

                var currentTypeInfo = Substitute.For<ITypeInfo>();
                currentTypeInfo.Key = "Type1";
                currentTypeInfo.Module = new Module("Module1", null);

                var type = Substitute.For<BridgeType>("Type2");

                var moduleName = "Module2";
                var moduleType = ModuleType.ES6;
                var module = new Module(moduleName, moduleType, null);
                var moduleDependency = new ModuleDependency()
                {
                    DependencyName = module.Name,
                    Type = module.Type,
                    PreventName = module.PreventModuleName
                };

                emitter.CurrentDependencies.Add(moduleDependency);

                BridgeTypes.EnsureDependencies(type, emitter, currentTypeInfo, module);

                Assert.AreEqual(1, emitter.CurrentDependencies.Count, "Did not add ModuleDependency");

                var d = emitter.CurrentDependencies[0];

                Assert.AreSame(moduleDependency, d, "ModuleDependency reference is the same");
                Assert.AreEqual(moduleDependency.DependencyName, d.DependencyName, "Did not change Name");
                Assert.AreEqual(moduleDependency.Type, d.Type, "Did not change Type");
            }

            [Test]
            public void CheckDependenciesShouldAddModuleDependency()
            {
                var emitter = EmitterHelper.GetEmitter();

                emitter.DisableDependencyTracking = false;

                var currentTypeInfo = Substitute.For<ITypeInfo>();
                currentTypeInfo.Key = "Type1";
                currentTypeInfo.Module = new Module("Module1", null);

                var type = Substitute.For<BridgeType>("Type2");

                var moduleName = "Module2";
                var moduleType = ModuleType.ES6;
                var module = new Module(moduleName, moduleType, null);

                BridgeTypes.EnsureDependencies(type, emitter, currentTypeInfo, module);

                Assert.AreEqual(1, emitter.CurrentDependencies.Count, "Added ModuleDependency");

                var d = emitter.CurrentDependencies[0];

                Assert.AreEqual(module.Name, d.DependencyName, "Did not change Name");
                Assert.AreEqual(module.Type, d.Type, "Did not change Type");
            }
        }
    }
}
