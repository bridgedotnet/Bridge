using Bridge;

using System;
using System.Collections.Generic;
using System.Linq;

//#1303
namespace TestIssue1303
{
    public class App
    {
        [Bridge.Ready]
        public static void NotMain()
        {
            //Should be in config.init
        }

        [Bridge.Ready]
        public static void Main()
        {
            //Should be in config.init
        }

    }

    public class App1
    {
        [Bridge.Ready]
        public static void NotMain()
        {
            //Should be in config.init
        }

        public static void Main()
        {
            //Should be in config.init
        }
    }

    public class App2
    {
        [Bridge.Ready]
        public static void Main()
        {
            //Should be in config.init
        }
    }
}
