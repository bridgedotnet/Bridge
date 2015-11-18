using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public static class Bridge615A
    {
        public static string Method1(this object o)
        {
            return "object";
        }

        public static string Method1(this int i)
        {
            return "int";
        }
    }

    // Bridge[#615]
    [FileName("testBridgeIssues.js")]
    internal class Bridge615
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            int i = 0;
            object o = null;

            assert.Equal(o.Method1(), "object", "Bridge615 object");
            assert.Equal(i.Method1(), "int", "Bridge615 int");
        }
    }
}