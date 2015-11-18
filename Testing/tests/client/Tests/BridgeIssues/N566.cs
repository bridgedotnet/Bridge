using Bridge;
using Bridge.QUnit;

using System;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public abstract class Bridge566A
    {
        public string Data { get; set; }

        protected Bridge566A()
        {
            Data = GetName();
        }

        protected abstract string GetName();
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge566B : Bridge566A
    {
        protected override string GetName() { return "Ted"; }
    }

    // Bridge[#566]
    [FileName("testBridgeIssues.js")]
    internal class Bridge566
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var ted = new Bridge566B();
            assert.Equal(ted.Data, "Ted", "#566 Ted");
        }
    }
}