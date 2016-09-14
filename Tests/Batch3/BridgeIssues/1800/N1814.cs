using ContentManagerBase = content.ContentManagerBase;
using Bridge.Test;


namespace achievements.content
{
    public class ContentAchievements : ContentManagerBase
    {
        public static string Method()
        {
            var a = PNG;
            return a;
        }
    }
}

namespace content
{
    public class ContentManagerBase
    {
        protected const string PNG = ".png";
    }
}

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1814 - {0}")]
    public class Bridge1814
    {
        [Test]
        public void TestCase()
        {
            Assert.AreEqual(".png", achievements.content.ContentAchievements.Method());
        }
    }
}