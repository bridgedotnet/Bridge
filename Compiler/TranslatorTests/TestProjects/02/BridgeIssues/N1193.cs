using Bridge;

namespace Test.BridgeIssues.N1193
{
    public class TopShouldbBOverAssemblyDescription
    {
        [Init(InitPosition.Top)]
        public static void Top()
        {
            Script.Write("// Should be at the top");
        }
    }
}
