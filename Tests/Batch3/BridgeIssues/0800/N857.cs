using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    internal enum Bridge857A : ulong
    {
        All = 0xFFFFFFFF,
    }

    internal enum Bridge857B : long
    {
        All = 0xFFFFFFFF,
    }

    internal enum Bridge857C : uint
    {
        All1,
        All2,
        All = 0xFFFFFFFF,
    }

    [Flags]
    internal enum Bridge857D : ulong
    {
        All1,
        All2,
        All = 0xFFFFFFFF,
    }

    // Bridge[#857]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#857 - {0}")]
    public class Bridge857
    {
        [Test(ExpectedCount = 8)]
        public static void TestUseCase()
        {
            Assert.True(0xFFFFFFFF == (ulong)Bridge857A.All, "Bridge857 Bridge857A");
            Assert.True(0xFFFFFFFF == (long)Bridge857B.All, "Bridge857 Bridge857B");
            Assert.AreEqual(0xFFFFFFFF, Bridge857C.All, "Bridge857 Bridge857C All");
            Assert.AreEqual(0, Bridge857C.All1, "Bridge857 Bridge857C All1");
            Assert.AreEqual(1, Bridge857C.All2, "Bridge857 Bridge857C All2");
            Assert.True(0xFFFFFFFF == (ulong)Bridge857D.All, "Bridge857 Bridge857D All");
            Assert.True(0 == (ulong)Bridge857D.All1, "Bridge857 Bridge857D All1");
            Assert.True(1 == (ulong)Bridge857D.All2, "Bridge857 Bridge857D All2");
        }
    }
}