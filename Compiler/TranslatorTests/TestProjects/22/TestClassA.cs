using Bridge;

namespace TestProject1
{
    public class Program
    {
        public Root.A Prop { get; set; }

        public Root2.A Prop2 { get; set; }

        public static void Main()
        {
            var a = new Root.A();
            var a2 = new Root2.A();
        }
    }

    [GlobalMethods]
    public static class Root
    {
        public class A
        {
        }
    }

    [Module("m2")]
    public class Root2
    {
        public class A
        {
        }
    }
}