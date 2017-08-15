using Bridge;
using Bridge.Html5;

using System;
using System.Collections.Generic;
using System.Linq;

//#1303
namespace TestIssue1303
{
    public class App
    {
        [Ready]
        public static void NotMain()
        {
            //Should be in config.init
        }

        [Ready]
        public static void Main()
        {
            //Should be in config.init
        }

    }

    public class App1
    {
        [Ready]
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
        [Ready]
        public static void Main()
        {
            //Should be in config.init
        }
    }
}
