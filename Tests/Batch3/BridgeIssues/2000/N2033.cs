using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2033 - {0}")]
    public class Bridge2033
    {
        [Enum(Emit.StringNameLowerCase)]
        public enum GameState
        {
            New, Playing, Finished
        }

        static GameState state = GameState.New;
#pragma warning disable 649
        static GameState state1;
#pragma warning restore 649

        [Test]
        public static void TestCase()
        {
            Assert.AreEqual("new", Bridge2033.state);
            Assert.AreEqual("new", Bridge2033.state1);
        }
    }
}