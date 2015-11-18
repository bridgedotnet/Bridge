using Bridge;

namespace Test.BridgeIssues.N527
{
    [Module("Bridge527_A")]
    public class Bridge527_A
    {
        public string GetName()
        {
            var c = new Bridge527_B();
            return "Test";
        }
    }

    [Module("Bridge527_B")]
    public class Bridge527_B
    {

    }
}
