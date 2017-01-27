using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge;

namespace TestProject.Issues.N2198
{
    // #2198
    [Module("Module1")]
    public class N2198
    {
        [Init]
        public static void Main()
        {
            Console.WriteLine("Hello World!");
        }
    }
}
