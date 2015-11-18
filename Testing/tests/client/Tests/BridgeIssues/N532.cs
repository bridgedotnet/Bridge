using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System;
using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#532]
    [FileName("testBridgeIssues.js")]
    internal class Bridge532
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            var list = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 });

            assert.DeepEqual(list.GetRange(0, 2).ToArray(), new[] { 1, 2 }, "Bridge532 (0, 2)");
            assert.DeepEqual(list.GetRange(1, 2).ToArray(), new[] { 2, 3 }, "Bridge532 (1, 2)");
            assert.DeepEqual(list.GetRange(6, 3).ToArray(), new[] { 7, 8, 9 }, "Bridge532 (6, 3)");

        }
    }
}