using Bridge.Test.NUnit;

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

        private static GameState state = GameState.New;
#pragma warning disable 649
        private static GameState state1;
#pragma warning restore 649

        [Test]
        public static void TestClassEnumPropertiesInitialization()
        {
            Assert.AreEqual("new", Bridge2033.state);
            Assert.AreEqual("new", Bridge2033.state1);
        }
    }
}