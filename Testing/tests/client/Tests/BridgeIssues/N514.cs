using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System;
using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#514]
    [FileName("testBridgeIssues.js")]
    internal class Bridge514
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            double d1 = 5.43;
            assert.Equal(Math.Sign(d1), 1, "Bridge514 Sign(double 5.43)");

            double d2 = -7.1;
            assert.Equal(Math.Sign(d2), -1, "Bridge514 Sign(double -7.1)");
        }

        public static void TestRelated(Assert assert)
        {
            assert.Expect(2);

            decimal d1 = 5.43M;
            assert.Equal(Math.Sign(d1), 1, "Bridge514 Sign(decimal 5.43)");

            decimal d2 = -7.1M;
            assert.Equal(Math.Sign(d2), -1, "Bridge514 Sign(decimal -7.1)");
        }
    }
}
