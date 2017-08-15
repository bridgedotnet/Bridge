using Bridge;

namespace Test.BridgeIssues.N783
{
    public class App
    {
        public static void Main1()
        {
            var base1 = new Base();
            var base2 = new Base();

            // Casting will be ignored regardless of the bridge.json setting IgnoreCast
            var ignore = (Ignore)base1;

            // Default casting operation but it will be ignored due to the bridge.json setting IgnoreCast
            var dontIgnore = (DontIgnore)base2;
        }
    }

    public class Base { }

    [IgnoreCast]
    public class Ignore : Base { }

    public class DontIgnore : Base { }
}