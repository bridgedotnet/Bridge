namespace Test.BridgeIssues.N089
{
    //[#89]
    public class Class89
    {
        void Test(params object[] p)
        {
            var i = p[0];
        }
    }
}
