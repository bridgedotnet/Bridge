using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    using static IssueBridge3197.pixi_js;
    using static IssueBridge3197_1.phaser;

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3197 - {0}")]
    public class Bridge3197
    {
        [Test]
        public void TestUsingStatic()
        {
            var bunny = PIXI.Sprite.fromImage("bunny.png");
            Assert.NotNull(bunny);
            Assert.AreEqual(1, Phaser.Physics.ARCADE);
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

namespace IssueBridge3197_1
{
    public static class phaser
    {
        public class Phaser
        {
            public class Physics
            {
                public static double ARCADE { get; set; } = 1;
            }
        }
    }
}