using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;
using Bridge.Translator.Tests.Helpers;


using NUnit.Framework;
using NSubstitute;

namespace Bridge.Translator.Tests
{
    class InlineArgumentsBlockTests
    {
        private static TypeSystemHelper TypeSystem { get; } = new TypeSystemHelper();

        private static InlineArgumentsBlock GetInlineArgumentsBlock(ModuleLoaderType moduleType)
        {
            var emitter = EmitterHelper.GetEmitter(
                assemblyInfo: new AssemblyInfo()
                {
                    Loader = new ModuleLoader
                    {
                        Type = moduleType
                    }
                }
            );

            var info = new ArgumentsInfo(emitter, new string[] { });

            var block = new InlineArgumentsBlock(emitter, info, null);

            return block;
        }

        [TestFixture]
        class AddModuleByTypeTests
        {
            private void AssertModule(string moduleName, ModuleLoaderType configLoaderType, ModuleType? moduleType, bool? isAmd)
            {
                var block = GetInlineArgumentsBlock(configLoaderType);

                var amd = new List<string>();
                var cjs = new List<string>();

                var module = moduleType.HasValue ? new Module(moduleName, moduleType.Value, null) : null;

                block.AddModuleByType(amd, cjs, module);

                var message = string.Format("{0} Config: {1} Module: {2} - ", moduleName, configLoaderType, moduleType);

                if (isAmd.HasValue)
                {
                    if (isAmd.Value)
                    {
                        Assert.AreEqual(0, cjs.Count, message + "cjs list should be empty");
                        Assert.AreEqual(1, amd.Count, message + "amd list should contain one element");
                        Assert.Contains(moduleName, amd, message + "amd list should countain the module name");
                    }
                    else
                    {
                        Assert.AreEqual(0, amd.Count, message + ":amd list should be empty");
                        Assert.AreEqual(1, cjs.Count, message + ":cjs list should contain one element");
                        Assert.Contains(moduleName, cjs, message + ":cjs list should countain the module name");
                    }
                }
                else
                {
                    Assert.AreEqual(0, amd.Count, message + ":amd list should be empty");
                    Assert.AreEqual(0, cjs.Count, message + ":cjs list should be empty");
                }
            }

            [TestCase("M1", ModuleLoaderType.AMD, ModuleType.AMD)]
            [TestCase("M2", ModuleLoaderType.CommonJS, ModuleType.AMD)]
            [TestCase("M3", ModuleLoaderType.ES6, ModuleType.AMD)]
            [TestCase("M4", ModuleLoaderType.Global, ModuleType.AMD)]
            [TestCase("M5", ModuleLoaderType.AMD, ModuleType.UMD)]
            public void ShouldAddAmdModuleTests(string moduleName, ModuleLoaderType configLoaderType, ModuleType moduleType)
            {
                AssertModule(moduleName, configLoaderType, moduleType, true);
            }

            [TestCase("M1", ModuleLoaderType.AMD, ModuleType.CommonJS)]
            [TestCase("M2", ModuleLoaderType.CommonJS, ModuleType.CommonJS)]
            [TestCase("M3", ModuleLoaderType.ES6, ModuleType.CommonJS)]
            [TestCase("M4", ModuleLoaderType.Global, ModuleType.CommonJS)]
            [TestCase("M5", ModuleLoaderType.AMD, ModuleType.ES6)]
            [TestCase("M6", ModuleLoaderType.CommonJS, ModuleType.ES6)]
            [TestCase("M7", ModuleLoaderType.ES6, ModuleType.ES6)]
            [TestCase("M8", ModuleLoaderType.Global, ModuleType.ES6)]
            [TestCase("M10", ModuleLoaderType.CommonJS, ModuleType.UMD)]
            [TestCase("M11", ModuleLoaderType.ES6, ModuleType.UMD)]
            public void ShouldAddCommonJSModuleTests(string moduleName, ModuleLoaderType configLoaderType, ModuleType moduleType)
            {
                AssertModule(moduleName, configLoaderType, moduleType, false);
            }


            [TestCase("M1", ModuleLoaderType.Global, ModuleType.UMD)]
            [TestCase("M2", ModuleLoaderType.AMD, null)]
            [TestCase("M3", ModuleLoaderType.CommonJS, null)]
            [TestCase("M4", ModuleLoaderType.ES6, null)]
            [TestCase("M5", ModuleLoaderType.Global, null)]
            public void ShouldNotAddModuleTests(string moduleName, ModuleLoaderType configLoaderType, ModuleType? moduleType)
            {
                AssertModule(moduleName, configLoaderType, moduleType, null);
            }



        }
    }
}
