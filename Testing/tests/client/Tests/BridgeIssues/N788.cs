using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#788]
    [FileName("testBridgeIssues.js")]
    internal class Bridge788
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            assert.Ok(Validation.Url("http://127.0.0.1"));
            assert.NotOk(Validation.Url("http://127.0.1"));
        }
    }
}