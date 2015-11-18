using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System;
using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#538]
    [FileName("testBridgeIssues.js")]
    internal class Bridge538
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var srcString = "123";
            var destString = "4";

            destString += srcString[2];

            assert.DeepEqual(destString, "43", "Bridge538 '43'");
        }
    }
}