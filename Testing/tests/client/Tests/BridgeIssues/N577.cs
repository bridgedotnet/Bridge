using Bridge;
using Bridge.QUnit;

using System;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#577]
    [FileName("testBridgeIssues.js")]
    internal class Bridge577
    {
        [FileName("testBridgeIssues.js")]
        public struct Bridge577UnitA
        {
        }

        [FileName("testBridgeIssues.js")]
        public struct Bridge577UnitB
        {
            public int Number { get; set; }
        }

        public static Bridge577UnitA SomeMethodA(int j)
        {
            return new Bridge577UnitA();
        }

        public static Bridge577UnitB SomeMethodB(int j)
        {
            var v = new Bridge577UnitB();
            v.Number = j;

            return v;
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            var a = SomeMethodA(1);
            assert.Ok(a, "#577 Bridge577UnitA created");

            var b = SomeMethodB(7);
            assert.Equal(b.Number, 7, "#577 Bridge577UnitB created");
        }
    }
}