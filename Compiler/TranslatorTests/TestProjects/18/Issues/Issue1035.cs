using Bridge;

//#1035
namespace TestIssue1035
{
    [Immutable]
    public struct StructBridge1035
    {
        // clone$ should not call constructor - $clone: function (to) { return this; }
        public int Data { get; set; }
    }
}
