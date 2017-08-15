using Bridge;

namespace Test.BridgeIssues.N770
{
    public interface IBase
    {
        float Prop { get; set; }
    }

    public class Impl : IBase
    {
        public float Prop { get; set; }
    }
}
