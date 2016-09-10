using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1059 - {0}")]
    public class Bridge1059
    {
        [Enum(Emit.Name)]
        public enum OverlayType1
        {
            CIRCLE = 1,
            marker = 2
        }

        [Enum(Emit.NamePreserveCase)]
        public enum OverlayType2
        {
            CIRCLE = 1,
            marker = 2
        }

        [Enum(Emit.NameLowerCase)]
        public enum OverlayType3
        {
            CIRCLE = 1,
            marker = 2
        }

        [Enum(Emit.NameUpperCase)]
        public enum OverlayType4
        {
            CIRCLE = 1,
            marker = 2
        }

        [Test]
        public static void TestEnumNameModes()
        {
            var t1 = typeof(OverlayType1);
            Assert.AreEqual(OverlayType1.CIRCLE, t1["CIRCLE"]);
            Assert.AreEqual(OverlayType1.marker, t1["marker"]);

            var t2 = typeof(OverlayType2);
            Assert.AreEqual(OverlayType2.CIRCLE, t2["CIRCLE"]);
            Assert.AreEqual(OverlayType2.marker, t2["marker"]);

            var t3 = typeof(OverlayType3);
            Assert.AreEqual(OverlayType3.CIRCLE, t3["circle"]);
            Assert.AreEqual(OverlayType3.marker, t3["marker"]);

            var t4 = typeof(OverlayType4);
            Assert.AreEqual(OverlayType4.CIRCLE, t4["CIRCLE"]);
            Assert.AreEqual(OverlayType4.marker, t4["MARKER"]);
        }
    }
}