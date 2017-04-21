//#1009
namespace Test.BridgeIssues.N1009
{
    using Bridge;

    public class Class1009
    {
        [Init(InitPosition.Top)]
        public static void Top()
        {
            /*
                A custom comment
            */
        }

        [Init(InitPosition.Bottom)]
        public static void Bottom()
        {
            /*
             *  A custom comment
             */
        }
    }
}
