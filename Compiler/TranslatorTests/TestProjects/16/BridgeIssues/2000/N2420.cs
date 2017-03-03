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
            var externalOption = Options.ExternalFormat.one;

            // Bridge boxes external enum value for Console.WriteLine(Enum value)
            // but it is not required because Template handles it. It produces unnecessary code.
            // Expected Bridge.Console.log(System.Enum.toString(...Options.format, externalOption));
            Console.WriteLine(externalOption);

            var option = Options.Format.one;

            // Bridge boxes enum value for Console.WriteLine(Enum value)
            // Expected Bridge.Console.log(...box);
            Console.WriteLine(option);
        }
    }

    public static class Options
    {
        [Enum(Emit.StringName)]
        public enum Format
        {
            one,
            two
        }

        [External]
        [Enum(Emit.StringName)]
        public enum ExternalFormat
        {
            one,
            two
        }
    }
}