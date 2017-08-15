using Bridge;

namespace Test.BridgeIssues.N065
{
    // [#65]
    internal class Class65_1
    {
        public class Nested
        {
        }
    }
    internal class Class65_2 : Class65_1.Nested
    {
    }
}
