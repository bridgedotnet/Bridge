using Bridge;
using Bridge.QUnit;
using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Html5;

namespace ClientTestLibrary
{
    // Bridge[#580]
    [FileName("testBridgeIssues.js")]
    internal class Bridge580
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(10);

            string[] arrs = new string[] { "s1", "s2" };

            int intIndex;

            string[] dst = new string[2];
            intIndex = 0;
            arrs.CopyTo(dst, intIndex);

            assert.Equal(dst.Length, 2, "Bridge580 Length Int");
            assert.Equal(dst[0], arrs[0], "Bridge580 0 Int");
            assert.Equal(dst[1], arrs[1], "Bridge580 1 Int");

            dst = new string[1];
            intIndex = 1;
            arrs.CopyTo(dst, intIndex);

            assert.Equal(dst.Length, 1, "Bridge580 Length 1 Int");
            assert.Equal(dst[0], arrs[1], "Bridge580 1_1 Int");

            long longIndex;

            dst = new string[2];
            longIndex = 0;
            arrs.CopyTo(dst, longIndex);

            assert.Equal(dst.Length, 2, "Bridge580 Length Long");
            assert.Equal(dst[0], arrs[0], "Bridge580 0 Long");
            assert.Equal(dst[1], arrs[1], "Bridge580 1 Long");

            dst = new string[1];
            longIndex = 1;
            arrs.CopyTo(dst, longIndex);

            assert.Equal(dst.Length, 1, "Bridge580 Length 1 Long");
            assert.Equal(dst[0], arrs[1], "Bridge580 1_1 Long");
        }
    }
}