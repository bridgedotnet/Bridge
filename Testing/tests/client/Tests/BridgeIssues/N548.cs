using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using ClientTestLibrary.Utilities;

using System;
using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    /// <summary>
    /// This test will check whether TypedArray types are emitted to JavaScript
    /// the right way. [#548]
    /// </summary>
    [FileName("testBridgeIssues.js")]
    internal class Bridge548
    {
        [Ready]
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(9);
            var v1 = new Float32Array(1);
            assert.Ok(v1);
            var v2 = new Float64Array(1);
            assert.Ok(v2);
            var v3 = new Int16Array(1);
            assert.Ok(v3);
            var v4 = new Int32Array(1);
            assert.Ok(v4);
            var v5 = new Int8Array(1);
            assert.Ok(v5);
            var v6 = new Uint16Array(1);
            assert.Ok(v6);
            var v7 = new Uint32Array(1);
            assert.Ok(v7);
            var v8 = new Uint8Array(1);
            assert.Ok(v8);
            var v9 = new Uint8ClampedArray(1);
            assert.Ok(v9);
        }
    }
}
