using Bridge;

namespace Test.BridgeIssues.N2717
{
    public class N2717
    {
        public void UseReferencedProjects()
        {
            // This is to force C# compiler to use references to projects A, B and C
            var a = new A.A();
            var b = new B.B();
            var c = new C.C();
        }
    }
}
