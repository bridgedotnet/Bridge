using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    using static IssueBridge3197.pixi_js;
    using static IssueBridge3197_1.phaser;

    /// <summary>
    /// This tests consists in ensuring static references from 'using static'
    /// are handled correctly by Bridge to nested references.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3197 - {0}")]
    public class Bridge3197
    {
        /// <summary>
        /// Will check whether an instance of an external, nested, class,
        /// and also static properties' access works.
        /// </summary>
        [Test]
        public void TestUsingStatic()
        {
            var bunny = PIXI.Sprite.fromImage("bunny.png");
            Assert.NotNull(bunny, "Returned instance from external and nested class is not null.");
            Assert.AreEqual(1, Phaser.Physics.ARCADE, "Using static reference to static double is valid.");
        }
    }
}

namespace IssueBridge3197
{
    /// <summary>
    /// Test, static and external (other namespace) class with nested subclasses.
    /// </summary>
    public static class pixi_js
    {
        /// <summary>
        ///
        /// </summary>
        public static class PIXI
        {
            /// <summary>
            ///
            /// </summary>
            public class Sprite
            {
                /// <summary>
                /// Stub method
                /// </summary>
                /// <param name="url"></param>
                /// <returns></returns>
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
    /// <summary>
    /// Remote, static, external and nested property to check against access.
    /// </summary>
    public static class phaser
    {
        /// <summary>
        ///
        /// </summary>
        public class Phaser
        {
            /// <summary>
            ///
            /// </summary>
            public class Physics
            {
                /// <summary>
                ///
                /// </summary>
                public static double ARCADE { get; set; } = 1;
            }
        }
    }
}