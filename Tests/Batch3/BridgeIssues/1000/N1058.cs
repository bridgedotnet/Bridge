using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1058 - {0}")]
    public class Bridge1058
    {
        [Test]
        public static void TestNameTrue()
        {
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.overlayType", typeof(OverlayType).FullName);
            Assert.AreEqual("$Bridge1058.Bridge1058.class1", typeof(Class1).FullName);
            Assert.AreEqual("Bridge1058.class2", typeof(Class2).FullName);
        }

        [Test]
        public static void TestNameFales()
        {
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.OverlayType_B", typeof(OverlayType_B).FullName);
            Assert.AreEqual("$Bridge1058.Bridge1058.Class1_B", typeof(Class1_B).FullName);
            Assert.AreEqual("Bridge1058.Class2_B", typeof(Class2_B).FullName);
        }

        [Name(true)]
        public enum OverlayType
        {
            CIRCLE,
            MARKER
        }

        [Name(true)]
        [Namespace("$Bridge1058")]
        public class Class1
        {
        }

        [Name(true)]
        [Namespace(false)]
        public class Class2
        {
        }

        [Name(false)]
        public enum OverlayType_B
        {
            CIRCLE,
            MARKER
        }

        [Name(false)]
        [Namespace("$Bridge1058")]
        public class Class1_B
        {
        }

        [Name(false)]
        [Namespace(false)]
        public class Class2_B
        {
        }
    }
}