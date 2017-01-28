using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge;

namespace TestProject.Issues.N2217
{
    // #2217
    [Module(ModuleType.AMD, "Module2217_AMD")]
    public class N2217_AMD
    {
        public int GetNumber()
        {
            return 1;
        }
    }

    [Module(ModuleType.CommonJS, "Module2217_CommonJS")]
    public class N2217_CommonJS
    {
        public int GetNumber()
        {
            return 2;
        }
    }

    [Module(ModuleType.ES6, "Module2217_ES6")]
    public class N2217_ES6
    {
        public int GetNumber()
        {
            return 3;
        }
    }

    [Module(ModuleType.UMD, "Module2217_UMD")]
    public class N2217_UMD
    {
        public int GetNumber()
        {
            return 4;
        }
    }

    [Module("Module2217_Manual")]
    public class N2217_Manual
    {
    }

    [Module("Module2217_Auto")]
    public class N2217_Auto
    {
    }

    public class N2217_Loader
    {
        public void LoadManualModule()
        {
            // N2217_Loader Should NOT be wrapped by module N2217_Manual
            var manual = new N2217_Manual();

            // N2217_Loader Should be wrapped by module N2217_Auto
            var auto = new N2217_Auto();
        }

        public async void Load()
        {
            await Module.Load(typeof(N2217_AMD));
            await Module.Load(typeof(N2217_CommonJS));
            await Module.Load(typeof(N2217_ES6));
            await Module.Load(typeof(N2217_UMD));
        }
    }
}
