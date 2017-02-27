using Bridge;
using System;
using System.Collections.Generic;

namespace Test.BridgeIssues.N2420
{
    // #2420
    public class N2420
    {
        public static void Output()
        {
            var option = Options.format.one;

            // Bridge box enum value for Console.WriteLine(Enum value) but it is not required because Template handles it. It produces unnecessary code.
            // Expected Bridge.Console.log(System.Enum.toString(...Options.format, option));
            Console.WriteLine(option);
        }
    }

    public static class Options
    {
        [Enum(Emit.StringName)]
        public enum format
        {
            one,
            two
        }
    }
}