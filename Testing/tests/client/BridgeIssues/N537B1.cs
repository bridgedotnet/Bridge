using Bridge;

namespace Bridge.ClientTest.BridgeIssues
{
    public partial class Bridge537B
    {
        public int GetCount()
        {
            return this.list.Count;
        }

        public static int TestB2()
        {
            var l = new Bridge537B();

            l.Add(new Bridge537A() { Id = 103 });

            return Bridge537B.GetCount(l);
        }
    }
}