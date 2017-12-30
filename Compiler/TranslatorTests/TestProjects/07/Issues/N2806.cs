using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge;

namespace TestProject.Issues.N2806
{
    // #2806. On output file shows scope as $module3 if all tests run at once
    // but shows $module2 if the test was run individually.
    [Module(ExportAsNamespace = "Module2806")]
    public class N2806
    {
        public int GetNumber()
        {
            return 1;
        }
    }
}
