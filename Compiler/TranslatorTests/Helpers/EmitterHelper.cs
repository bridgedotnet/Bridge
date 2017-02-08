using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;
using Bridge.Translator.Tests.Helpers;


using NUnit.Framework;
using NSubstitute;

namespace Bridge.Translator.Tests.Helpers
{
    class EmitterHelper
    {
        public static IEmitter GetEmitter(BridgeTypes bridgeTypes = null, IAssemblyInfo assemblyInfo = null)
        {
            var emitter = Substitute.For<IEmitter>();

            emitter.Log = Substitute.For<ILogger>();

            emitter.AssemblyInfo = assemblyInfo;

            emitter.BridgeTypes = bridgeTypes;

            emitter.DisableDependencyTracking = false;

            emitter.CurrentDependencies = new List<IPluginDependency>();

            return emitter;
        }
    }
}
