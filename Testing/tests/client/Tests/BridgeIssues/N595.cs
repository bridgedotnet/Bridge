using Bridge;
using Bridge.QUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
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

    [FileName("testBridgeIssues.js")]
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
    [FileName("testBridgeIssues.js")]
    internal class Bridge595
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            StringBuilder buffer = new StringBuilder();
            var a = new Bridge595A(buffer);
            a.Render();
            assert.Equal(buffer.ToString(), "Render0Render1", "Bridge595 A");

            buffer.Clear();
            var b = new Bridge595B(buffer);
            b.Render();
            assert.Equal(buffer.ToString(), "Render0Render1", "Bridge595 B");
        }
    }
}