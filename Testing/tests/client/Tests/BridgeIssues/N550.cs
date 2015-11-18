using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using ClientTestLibrary.Utilities;

using System;

namespace ClientTestLibrary
{
    // Bridge [#550]
    // Testing if ArrayBufferView is an alias of TypedArrays and DataView.
    [FileName("testBridgeIssues.js")]
    internal class Bridge550
    {
        public static void TestMethod(ArrayBufferView array, string name, Assert assert)
        {
            assert.Ok(array != null, string.Format("ArrayBufferView is an alias of {0}", name));
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(10);

            var array1 = new Int8Array(1);
            Bridge550.TestMethod(array1, "Int8Array", assert);

            var array2 = new Uint8Array(1);
            Bridge550.TestMethod(array2, "Uint8Array", assert);

            var array3 = new Uint8ClampedArray(1);
            Bridge550.TestMethod(array3, "Uint8ClampedArray", assert);

            var array4 = new Int16Array(1);
            Bridge550.TestMethod(array4, "Int16Array", assert);

            var array5 = new Uint16Array(1);
            Bridge550.TestMethod(array5, "Uint16Array", assert);

            var array6 = new Int32Array(1);
            Bridge550.TestMethod(array6, "Int32Array", assert);

            var array7 = new Uint32Array(1);
            Bridge550.TestMethod(array7, "Uint32Array", assert);

            var array8 = new Float32Array(1);
            Bridge550.TestMethod(array8, "Float32Array", assert);

            var array9 = new Float64Array(1);
            Bridge550.TestMethod(array9, "Float64Array", assert);

            var array10 = new DataView(array9.Buffer);
            Bridge550.TestMethod(array10, "DataView", assert);
        }
    }
}