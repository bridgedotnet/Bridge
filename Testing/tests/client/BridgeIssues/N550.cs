using Bridge;
using Bridge.Html5;
using Bridge.Test;

using Bridge.ClientTest.Utilities;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge [#550]
    // Testing if ArrayBufferView is an alias of TypedArrays and DataView.
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#550 - {0}")]
    public class Bridge550
    {
        public static void TestMethod(ArrayBufferView array, string name)
        {
            Assert.True(array != null, string.Format("ArrayBufferView is an alias of {0}", name));
        }

        [Test(ExpectedCount = 10)]
        public static void TestUseCase()
        {
            var array1 = new Int8Array(1);
            Bridge550.TestMethod(array1, "Int8Array");

            var array2 = new Uint8Array(1);
            Bridge550.TestMethod(array2, "Uint8Array");

            var array3 = new Uint8ClampedArray(1);
            Bridge550.TestMethod(array3, "Uint8ClampedArray");

            var array4 = new Int16Array(1);
            Bridge550.TestMethod(array4, "Int16Array");

            var array5 = new Uint16Array(1);
            Bridge550.TestMethod(array5, "Uint16Array");

            var array6 = new Int32Array(1);
            Bridge550.TestMethod(array6, "Int32Array");

            var array7 = new Uint32Array(1);
            Bridge550.TestMethod(array7, "Uint32Array");

            var array8 = new Float32Array(1);
            Bridge550.TestMethod(array8, "Float32Array");

            var array9 = new Float64Array(1);
            Bridge550.TestMethod(array9, "Float64Array");

            var array10 = new DataView(array9.Buffer);
            Bridge550.TestMethod(array10, "DataView");
        }
    }
}