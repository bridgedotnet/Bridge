using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge;

namespace TestProject.Issues.N2806
{
    // #2806
    [Module(ExportAsNamespace = "Module2806")]
    public class N2806
    {
        public int GetNumber()
        {
            return 1;
        }
    }
}
