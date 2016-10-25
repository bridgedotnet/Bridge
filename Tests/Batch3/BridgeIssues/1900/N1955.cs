using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1955 - {0}")]
    public class Bridge1955
    {
        [Script("return 10;")]
        public static extern int ScriptFunc();

        public Bridge1955()
        {
        }

        [Script("this.i = i;")]
        public extern Bridge1955(int i);

#pragma warning disable 169
#pragma warning disable 649
        private int i;
#pragma warning restore 649
#pragma warning restore 169

        [Test]
        public void TestCase()
        {
            Assert.AreEqual(10, Bridge1955.ScriptFunc());
            Assert.AreEqual(5, new Bridge1955(5).i);
        }
    }
}