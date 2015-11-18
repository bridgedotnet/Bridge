using Bridge;
using Bridge.QUnit;

using ClientTestLibrary.Utilities;

using System;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    internal class Bridge586A
    {
        [External]
        public int SomeData { get; set; }

        [External]
        public string DoSomething()
        {
            return string.Empty;
        }

        [External]
        public static decimal SomeDataStatic { get; set; }

        [External]
        public static bool DoSomethingStatic()
        {
            return true;
        }
    }

    [FileName("testBridgeIssues.js")]
    [External]
    internal class Bridge586B
    {
        [External]
        public int SomeData { get; set; }

        [External]
        public string DoSomething()
        {
            return string.Empty;
        }

        [External]
        public static decimal SomeDataStatic { get; set; }

        [External]
        public static bool DoSomethingStatic()
        {
            return true;
        }
    }

    // Bridge[#586]
    [FileName("testBridgeIssues.js")]
    internal class Bridge586
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            assert.Throws(() => { Bridge586A.SomeDataStatic = 4; }, "a.SomeDataStatic is external");
            assert.Throws(() => { Bridge586A.DoSomethingStatic(); }, "a.DoSomethingStatic() is external");

            assert.Throws(() => { Bridge586B.SomeDataStatic = 4; }, "b.SomeDataStatic is external");
            assert.Throws(() => { Bridge586B.DoSomethingStatic(); }, "b.DoSomethingStatic() is external");
        }
    }
}