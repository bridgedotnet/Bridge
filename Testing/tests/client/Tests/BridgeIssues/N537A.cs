using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public sealed class Bridge537A
    {
        public int Id;
    }

    // Bridge[#537]
    [FileName("testBridgeIssues.js")]
    internal class Bridge537
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            assert.Equal(Bridge537B.TestB1(), 2, "Bridge537 TestB1");

            assert.Equal(Bridge537B.TestB2(), 1, "Bridge537 TestB2");
        }
    }
}