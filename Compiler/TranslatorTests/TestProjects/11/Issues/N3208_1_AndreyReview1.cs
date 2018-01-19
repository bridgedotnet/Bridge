using Bridge;

namespace N3208_1_AndreyReview1
{
    public class App
    {
        public static void Main()
        {
            var welcomer = new N3208_TestModuleScope.Welcomer();
            welcomer.Hello("world");
        }
    }

    [Module(ModuleType.UMD, "N3208_TestModule")]
    public static class N3208_TestModuleScope
    {
        public class Welcomer
        {
            public void Hello(string name)
            {
                System.Console.WriteLine("Hello, "+ name + "!");
            }
        }
    }
}