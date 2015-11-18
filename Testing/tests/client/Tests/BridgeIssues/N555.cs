using Bridge;
using Bridge.QUnit;

using System;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#555]
    [FileName("testBridgeIssues.js")]
    internal class Bridge555
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(15);

            var s = "0123456789";

            assert.Equal(s.JsSubstring(-1), "0123456789", "JsSubstring(-1)");
            assert.Equal(s.JsSubstring(5), "56789", "JsSubstring(5)");
            assert.Equal(s.JsSubstring(10), "", "JsSubstring(10)");
            assert.Equal(s.JsSubstring(1, 2), "1", "JsSubstring(1, 2)");
            assert.Equal(s.JsSubstring(1, 10), "123456789", "JsSubstring(1, 10)");

            assert.Equal(s.Substring(-1), "9", "Substring(-1)");
            assert.Equal(s.Substring(5), "56789", "Substring(5)");
            assert.Equal(s.Substring(10), "", "Substring(10)");
            assert.Equal(s.Substring(1, 2), "12", "Substring(1, 2)");
            assert.Equal(s.Substring(1, 10), "123456789", "Substring(1, 10)");

            assert.Equal(s.Substr(-1), "9", "Substr(-1)");
            assert.Equal(s.Substr(5), "56789", "Substr(5)");
            assert.Equal(s.Substr(10), "", "Substr(10)");
            assert.Equal(s.Substr(1, 2), "12", "Substr(1, 2)");
            assert.Equal(s.Substr(1, 10), "123456789", "Substr(1, 10)");
        }
    }
}
