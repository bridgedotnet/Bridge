using Bridge;
using Bridge.QUnit;
using System;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#479]
    [FileName("testBridgeIssues.js")]
    internal class Bridge479
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            var pair = new KeyValuePair<int, string>(1, "value");
            assert.Equal(pair.Key, 1, "Bridge479 Key");
            assert.Equal(pair.Value, "value", "Bridge479 Value");
            assert.Equal(pair.ToString(), "[1, value]", "Bridge479 ToString");
        }
    }
}