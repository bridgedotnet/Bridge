using Bridge;
using Bridge.QUnit;

using System;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#554]
    [FileName("testBridgeIssues.js")]
    internal class Bridge554
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            var s = "0123456789";

            assert.Equal(s.Remove(5), "01234", "Remove(5)");
            assert.Equal(s.Remove(10), "0123456789", "Remove(10)");
            assert.Equal(s.Remove(1, 2), "03456789", "Remove(1, 2)");
            assert.Equal(s.Remove(1, 10), "0", "Remove(1, 10)");
        }
    }
}
