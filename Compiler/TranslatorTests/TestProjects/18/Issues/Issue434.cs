using Bridge;

namespace TestIssue434
{
    public class Issue434A
    {
        [Init]
        public static void Method1()
        {
            DoSomething(1);
        }

        [Init(InitPosition.Before)]
        public static void Method2()
        {
            DoSomething(2);
        }

        [Init(InitPosition.After)]
        public static void Method3()
        {
            DoSomething(3);
        }

        [Init()]
        public static void Method4()
        {
            DoSomething(4);
        }

        private static void DoSomething(int i)
        {
            System.Console.WriteLine(i);
        }
    }

    public class Issue434B
    {
        [Init]
        public static void Method1()
        {
            DoSomething(1);
        }

        [Init(InitPosition.Before)]
        public static void Method2()
        {
            DoSomething(2);
        }

        [Init(InitPosition.After)]
        public static void Method3()
        {
            DoSomething(3);
        }

        [Init()]
        public static void Method4()
        {
            DoSomething(4);
        }

        private static void DoSomething(int i)
        {
            System.Console.WriteLine(i);
        }
    }

    public class Issue434C
    {
        [Init(InitPosition.Top)]
        public static void Top()
        {
            Script.Write("// Top");
        }

        [Init(InitPosition.Bottom)]
        public static void Bottom()
        {
            Script.Write("// Bottom");
        }
    }
}
