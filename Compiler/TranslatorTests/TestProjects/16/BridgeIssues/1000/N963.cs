//#963
namespace Test.BridgeIssues.N963
{
    using Bridge;

    public class Class963
    {
        public static void Main1()
        {
            int i = 5;
            i++;
        }

        [Init(InitPosition.Before)]
        public static void Before()
        {
            // One line above the method
            int before = 5;
            before++;
            // One line below the method
        }
    }
}
