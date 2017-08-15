using Bridge;

namespace Test.BridgeIssues.N064
{
    // [#64]
    internal class Class64
    {
        public class Aux1
        {
        }

        public Class64()
        {
        }

        public Class64(Aux1 related)
        {
        }

        public void Test()
        {
            var aux = new Class64.Aux1();
            new Class64(aux);
        }
    }
}
