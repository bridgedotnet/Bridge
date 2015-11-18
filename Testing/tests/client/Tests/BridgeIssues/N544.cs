using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using ClientTestLibrary.Utilities;

using System;
using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#544]
    [FileName("testBridgeIssues.js")]
    internal class Bridge544
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var o = JSON.Parse<bool>("true");
            assert.Equal(o, true, "Bridge544 bool");
        }

        public static void TestRelated(Assert assert)
        {
            assert.Expect(5);

            var i = JSON.Parse<int>("25");
            assert.Equal(i, 25, "Bridge544 int");

            var dbl = JSON.Parse<double>("26.1");
            assert.Equal(dbl, 26.1d, "Bridge544 double");

            var d = JSON.Parse<decimal>("27.2");
            DecimalHelper.AssertIsDecimalAndEqualTo(assert, d, 27.2, "Bridge544 decimal");

            var s = JSON.Parse<string>("\"Some string\"");
            assert.Equal(s, "Some string", "Bridge544 string");
        }
    }
}
