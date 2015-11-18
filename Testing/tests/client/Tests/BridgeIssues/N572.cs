using Bridge;
using Bridge.QUnit;

using System;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#572]
    [FileName("testBridgeIssues.js")]
    internal class Bridge572
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            var d1 = new Dictionary<int, string>();

            var d = d1 as IDictionary<int, string>;

            d.Add(1, "One");
            d.Add(2, "Two");

            assert.Equal(d[1], "One", "#572 getItem One");
            assert.Equal(d[2], "Two", "#572 getItem Two");

            d[1] = "New one";
            d[2] = "New two";

            assert.Equal(d[1], "New one", "#572 setItem New one");
            assert.Equal(d[2], "New two", "#572 setItem New two");
        }
    }
}