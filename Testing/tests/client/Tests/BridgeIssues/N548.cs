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
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(18);

            var isSpecialTypeName = BrowserHelper.IsPhantomJs();

            var v1 = new Float32Array(1);
            var thisType = "Float32Array";
            assert.Ok(v1 != null, thisType + " created");
            var thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v1.GetClassName(), thisName, thisType + " class name");

            var v2 = new Float64Array(1);
            thisType = "Float64Array";
            assert.Ok(v2 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v2.GetClassName(), thisName, thisType + " class name");

            var v3 = new Int16Array(1);
            thisType = "Int16Array";
            assert.Ok(v3 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v3.GetClassName(), thisName, thisType + " class name");

            var v4 = new Int32Array(1);
            thisType = "Int32Array";
            assert.Ok(v4 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v4.GetClassName(), thisName, thisType + " class name");

            var v5 = new Int8Array(1);
            thisType = "Int8Array";
            assert.Ok(v5 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v5.GetClassName(), thisName, thisType + " class name");

            var v6 = new Uint16Array(1);
            thisType = "Uint16Array";
            assert.Ok(v6 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v6.GetClassName(), thisName, thisType + " class name");

            var v7 = new Uint32Array(1);
            thisType = "Uint32Array";
            assert.Ok(v7 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v7.GetClassName(), thisName, thisType + " class name");

            var v8 = new Uint8Array(1);
            thisType = "Uint8Array";
            assert.Ok(v8 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v8.GetClassName(), thisName, thisType + " class name");

            var v9 = new Uint8ClampedArray(1);
            thisType = "Uint8ClampedArray";
            assert.Ok(v9 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.Equal(v9.GetClassName(), thisName, thisType + " class name");
        }
    }
}
