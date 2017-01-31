using Bridge;

namespace Test.BridgeIssues.N1193
{
    public class TopShouldbBOverAssemblyDescription
    {
        [Init(InitPosition.Top)]
        public static void Top()
        {
            Script.Write("// @!!! Content begin mark. Should be at the top (issue 1193). This is also required to mark beginning of the file part to compare to the reference without bridge.js content");
        }
    }
}
