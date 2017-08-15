using Bridge;

namespace Test.BridgeIssues.N644
{
    // #644
    [External]
    public partial class Bridge644External
    {
        public void DoSomething1() { }
    }

    [Name("Bridge644_With_Name_Attribute")]
    public partial class Bridge644Name
    {
        public void DoSomething1() { }
    }
}
