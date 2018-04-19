using Bridge;

namespace Issue3309
{
    /// <summary>
    /// This will check against output of non-public class members as reported
    /// in github issue bridgedotnet/Bridge#3309.
    /// </summary>
    public class Program
    {
        public string TestPropPub { get; }
        protected string TestPropProt { get; }
        private string TestPropPriv { get; }

        public string TestFieldPub = "public";
        protected string TestFieldProt = "protected";
        private string TestFieldPriv = "private";

        public void TestMethodPub() { }
        protected void TestMethodProt() { }
        private void TestMethodPriv() { }
    }
}
