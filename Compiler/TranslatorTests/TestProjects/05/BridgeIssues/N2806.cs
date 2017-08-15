using Bridge;

namespace Test.BridgeIssues.N2806
{
    [Module("Module2806", ExportAsNamespace = "Module2806Export")]
    class N2806
    {
        public void DoSomething()
        {
        }
    }

    class N2806UsingModule
    {
        private static void CallModule2806()
        {
            var c = new N2806();
            c.DoSomething();
        }
    }
}