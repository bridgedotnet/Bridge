using Bridge;
using Bridge.QUnit;

using System;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#578]
    [FileName("testBridgeIssues.js")]
    internal class Bridge578
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var s = "ab|abc&ab&abc|de&ef&";

            var r = s.Split('|', '&');
            var expected = new[] { "ab", "abc", "ab", "abc", "de", "ef", "" };

            assert.DeepEqual(r, expected, "#578 Split(params char[] separator)");
        }
    }
}