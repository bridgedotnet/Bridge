using Bridge;

namespace Test.BridgeIssues.N059
{
    // Does not compile issue [#59]
    internal class Class59
    {
        public static void Method1()
        {
        }

        public void Method1(Aux1 d)
        {
        }

        public class Aux1
        {
        }
    }
}
