using Bridge;
using Bridge.Test;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge595A
    {
        private StringBuilder buffer;

        public Bridge595A(StringBuilder buffer)
        {
            this.buffer = buffer;
        }

        public void Render()
        {
            buffer.Append("Render0");
            Render(DateTime.Now);
        }

        private void Render(DateTime when)
        {
            buffer.Append("Render1");
        }
    }
    public class Bridge595B
    {
        private StringBuilder buffer;

        public Bridge595B(StringBuilder buffer)
        {
            this.buffer = buffer;
        }

        public void Render()
        {
            buffer.Append("Render0");
            Render(buffer);
        }

        private static void Render(StringBuilder buffer)
        {
            buffer.Append("Render1");
        }
    }

    // Bridge[#595]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#595 - {0}")]
    public class Bridge595
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            StringBuilder buffer = new StringBuilder();
            var a = new Bridge595A(buffer);
            a.Render();
            Assert.AreEqual(buffer.ToString(), "Render0Render1", "Bridge595 A");

            buffer.Clear();
            var b = new Bridge595B(buffer);
            b.Render();
            Assert.AreEqual(buffer.ToString(), "Render0Render1", "Bridge595 B");
        }
    }
}