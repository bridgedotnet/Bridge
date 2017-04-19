using Bridge;

namespace Test.BridgeIssues.N2277
{
    // #2277
    class N2277
    {
        public void DoSomething()
        {

        }

        [Init(InitPosition.Top)]
        public static void InitShouldNotAddStaticsSection()
        {
        }

        [External]
        public static void ExternalShouldNotAddStaticsSection()
        {
        }
    }
}