using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1058 - {0}")]
    public class Bridge1058
    {
        [Test]
        public static void TestNameLowerCase()
        {
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058+overlayType", typeof(OverlayType).FullName);
            Assert.AreEqual("MARKER", OverlayType.MARKER.ToString());
            Assert.AreEqual("$Bridge1058.Bridge1058+class1", typeof(Class1).FullName);
            Assert.AreEqual("Bridge1058+class2", typeof(Class2).FullName);
        }

        [Test]
        public static void TestNameNotChanged()
        {
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058+OverlayType_B", typeof(OverlayType_B).FullName);
            Assert.AreEqual("MARKER", OverlayType_B.MARKER.ToString());
            Assert.AreEqual("$Bridge1058.Bridge1058+Class1_B", typeof(Class1_B).FullName);
            Assert.AreEqual("Bridge1058+Class2_B", typeof(Class2_B).FullName);
        }

        // #2477!!!
        [Convention(Notation.CamelCase)]
        public enum OverlayType
        {
            CIRCLE,
            MARKER
        }

        // #2477!!!
        [Convention(Notation.CamelCase)]
        [Namespace("$Bridge1058")]
        public class Class1
        {
        }

        // #2477!!!
        [Convention(Notation.CamelCase)]
        [Namespace(false)]
        public class Class2
        {
        }

        public enum OverlayType_B
        {
            CIRCLE,
            MARKER
        }

        [Convention]
        [Namespace("$Bridge1058")]
        public class Class1_B
        {
        }

        [Convention]
        [Namespace(false)]
        public class Class2_B
        {
        }
    }
}