using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    using static IssueBridge3197.pixi_js;

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3197 - {0}")]
    public class Bridge3197
    {
        [Test]
        public void TestUsingStatic()
        {
            var bunny = PIXI.Sprite.fromImage("bunny.png");
            Assert.NotNull(bunny);
        }
    }
}

namespace IssueBridge3197
{
    public static class pixi_js
    {
        public static class PIXI
        {
            public class Sprite
            {
                public static Sprite fromImage(string url)
                {
                    return new Sprite();
                }
            }
        }
    }
}