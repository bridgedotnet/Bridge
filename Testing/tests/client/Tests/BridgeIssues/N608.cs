using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public struct Bridge608A
    {
        public readonly string field;

        public Bridge608A(string field)
        {
            this.field = field;
        }

        public override bool Equals(object obj)
        {
            return Equals(obj.ToString());
        }

        public bool Equals(string other)
        {
            return other == field;
        }

        public override int GetHashCode()
        {
            return this.field.GetHashCode();
        }
    }
    
    // Bridge[#608]
    [FileName("testBridgeIssues.js")]
    internal class Bridge608
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            var s = new Bridge608A("test");
            object o = "test";
            assert.Ok(s.Equals(o), "Bridge608 Object");
            assert.Ok(s.Equals("test"), "Bridge608 String");
        }
    }
}