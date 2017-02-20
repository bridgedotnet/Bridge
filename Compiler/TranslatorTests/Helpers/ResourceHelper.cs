using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Reflection;

using Bridge.Contract;



namespace Bridge.Translator.Tests.Helpers
{
    class ResourceHelper
    {
        private const string TEST_ASSEMBLY = "Resources.Bridge.Translator.Tests.Assembly.dll";
        private const string BRIDGE_ASSEMBLY = "Resources.Bridge.dll";
        private const string RUN_JS_FILE = "Resources.run.js";

        public static Stream GetTestAssembly()
        {
            return Assembly.GetExecutingAssembly().GetManifestResourceStream(TEST_ASSEMBLY);
        }

        public static Stream GetBridgeAssembly()
        {
            return Assembly.GetExecutingAssembly().GetManifestResourceStream(BRIDGE_ASSEMBLY);
        }

        public static Stream GetRunJsFile()
        {
            return Assembly.GetExecutingAssembly().GetManifestResourceStream(RUN_JS_FILE);
        }

    }
}
