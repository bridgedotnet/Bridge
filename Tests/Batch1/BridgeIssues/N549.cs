using Bridge;
using Bridge.Html5;
using Bridge.Test;

using Bridge.ClientTest.Utilities;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    /// <summary>
    /// This test will check whether TypedArray types correctly inherit from
    /// the prototype common methods and fields. [#549]
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#549 - {0}")]
    public class Bridge549
    {
        [Test(ExpectedCount = 153)]
        public static void TestUseCase()
        {
            var isToStringToTypeNameLogic = !BrowserHelper.IsChrome();

            var v1 = new Float32Array(10);
            Assert.True(v1 != null, "Float32Array created");

            v1[1] = 11;
            v1[5] = 5;
            v1[9] = 99;
            Assert.AreEqual(11, v1[1], "Float32Array indexier works 1");
            Assert.AreEqual(99, v1[9], "Float32Array indexier works 9");

            // Check just a select number of references inside the Prototype inheritance.
            Assert.True(v1.Buffer != null, "Float32Array Buffer");
            Assert.AreEqual(40, v1.ByteLength, "Float32Array ByteLength");
            Assert.AreEqual(0, v1.ByteOffset, "Float32Array ByteOffset");
            Assert.AreEqual(10, v1.Length, "Float32Array Length");

            /*
             * Commented out. Reason: Only Firefox implements them.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
            var mA = v1.Join();
            v1.Reverse();
            var mB = v1.Slice();
            var mC = v1.Sort();
             */

            var expectedToStringFloat32Array1 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringFloat32Array1, v1.ToLocaleString(), "Float32Array ToLocaleString");
            Assert.AreEqual(expectedToStringFloat32Array1, v1.ToString(), "Float32Array ToString");

            // Some browsers do not support SubArray() with no parameters.
            // At least 'begin' must be provided.
            var subArray11 = v1.SubArray(1);
            var expectedToStringFloat32Array2 = isToStringToTypeNameLogic ? "[object Float32Array]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray11 != null, "Float32Array SubArray1");
            Assert.AreEqual(9, subArray11.Length, "Float32Array SubArray1 Length");
            Assert.AreEqual(expectedToStringFloat32Array2, subArray11.ToString(), "Float32Array SubArray1 ToString");
            Assert.AreEqual(4, subArray11.ByteOffset, "Float32Array SubArray1 ByteOffset");

            var subArray12 = subArray11.SubArray(2, 6);
            var expectedToStringFloat32Array3 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,0,5,0";
            Assert.True(subArray12 != null, "Float32Array SubArray2");
            Assert.AreEqual(4, subArray12.Length, "Float32Array SubArray2 Length");
            Assert.AreEqual(expectedToStringFloat32Array3, subArray12.ToString(), "Float32Array SubArray2 ToString");
            Assert.AreEqual(12, subArray12.ByteOffset, "Float32Array SubArray2 ByteOffset");

            var v2 = new Float64Array(10);
            Assert.True(v2 != null, "Float64Array created");

            v2[1] = 11;
            v2[5] = 5;
            v2[9] = 99;
            Assert.AreEqual(11, v2[1], "Float64Array indexier works 1");
            Assert.AreEqual(99, v2[9], "Float64Array indexier works 9");

            Assert.True(v2.Buffer != null, "Float64Array Buffer");
            Assert.AreEqual(80, v2.ByteLength, "Float64Array ByteLength");
            Assert.AreEqual(0, v2.ByteOffset, "Float64Array ByteOffset");
            Assert.AreEqual(10, v2.Length, "Float64Array Length");

            var expectedToStringFloat64Array1 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringFloat64Array1, v2.ToLocaleString(), "Float64Array ToLocaleString");
            Assert.AreEqual(expectedToStringFloat64Array1, v2.ToString(), "Float64Array ToString");

            var subArray21 = v2.SubArray(1);
            var expectedToStringFloat64Array2 = isToStringToTypeNameLogic ? "[object Float64Array]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray21 != null, "Float64Array SubArray1");
            Assert.AreEqual(9, subArray21.Length, "Float64Array SubArray1 Length");
            Assert.AreEqual(expectedToStringFloat64Array2, subArray21.ToString(), "Float64Array SubArray1 ToString");
            Assert.AreEqual(8, subArray21.ByteOffset, "Float64Array SubArray1 ByteOffset");

            var subArray22 = subArray21.SubArray(2, 6);
            var expectedToStringFloat64Array3 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,0,5,0";
            Assert.True(subArray22 != null, "Float64Array SubArray2");
            Assert.AreEqual(4, subArray22.Length, "Float64Array SubArray2 Length");
            Assert.AreEqual(expectedToStringFloat64Array3, subArray22.ToString(), "Float64Array SubArray2 ToString");
            Assert.AreEqual(24, subArray22.ByteOffset, "Float64Array SubArray2 ByteOffset");

            var v3 = new Int16Array(10);
            Assert.True(v3 != null, "Int16Array created");

            v3[1] = 11;
            v3[5] = 5;
            v3[9] = 99;
            Assert.AreEqual(11, v3[1], "Int16Array indexier works 1");
            Assert.AreEqual(99, v3[9], "Int16Array indexier works 9");

            Assert.True(v3.Buffer != null, "Int16Array Buffer");
            Assert.AreEqual(20, v3.ByteLength, "Int16Array ByteLength");
            Assert.AreEqual(0, v3.ByteOffset, "Int16Array ByteOffset");
            Assert.AreEqual(10, v3.Length, "Int16Array Length");

            var expectedToStringInt16Array1 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringInt16Array1, v3.ToLocaleString(), "Int16Array ToLocaleString");
            Assert.AreEqual(expectedToStringInt16Array1, v3.ToString(), "Int16Array ToString");

            var subArray31 = v3.SubArray(1);
            var expectedToStringInt16Array2 = isToStringToTypeNameLogic ? "[object Int16Array]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray31 != null, "Int16Array SubArray1");
            Assert.AreEqual(9, subArray31.Length, "Int16Array SubArray1 Length");
            Assert.AreEqual(expectedToStringInt16Array2, subArray31.ToString(), "Int16Array SubArray1 ToString");
            Assert.AreEqual(2, subArray31.ByteOffset, "Int16Array SubArray1 ByteOffset");

            var subArray32 = subArray31.SubArray(2, 6);
            var expectedToStringInt16Array3 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,0,5,0";
            Assert.True(subArray32 != null, "Int16Array SubArray2");
            Assert.AreEqual(4, subArray32.Length, "Int16Array SubArray2 Length");
            Assert.AreEqual(expectedToStringInt16Array3, subArray32.ToString(), "Int16Array SubArray2 ToString");
            Assert.AreEqual(6, subArray32.ByteOffset, "Int16Array SubArray2 ByteOffset");

            var v4 = new Int32Array(10);
            Assert.True(v4 != null, "Int32Array created");

            v4[1] = 11;
            v4[5] = 5;
            v4[9] = 99;
            Assert.AreEqual(11, v4[1], "Int32Array indexier works 1");
            Assert.AreEqual(99, v4[9], "Int32Array indexier works 9");

            Assert.True(v4.Buffer != null, "Int32Array Buffer");
            Assert.AreEqual(40, v4.ByteLength, "Int32Array ByteLength");
            Assert.AreEqual(0, v4.ByteOffset, "Int32Array ByteOffset");
            Assert.AreEqual(10, v4.Length, "Int32Array Length");

            var expectedToStringInt32Array1 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringInt32Array1, v4.ToLocaleString(), "Int32Array ToLocaleString");
            Assert.AreEqual(expectedToStringInt32Array1, v4.ToString(), "Int32Array ToString");

            var subArray41 = v4.SubArray(1);
            var expectedToStringInt32Array2 = isToStringToTypeNameLogic ? "[object Int32Array]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray41 != null, "Int32Array SubArray1");
            Assert.AreEqual(9, subArray41.Length, "Int32Array SubArray1 Length");
            Assert.AreEqual(expectedToStringInt32Array2, subArray41.ToString(), "Int32Array SubArray1 ToString");
            Assert.AreEqual(4, subArray41.ByteOffset, "Int32Array SubArray1 ByteOffset");

            var subArray42 = subArray41.SubArray(2, 6);
            var expectedToStringInt32Array3 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,0,5,0";
            Assert.True(subArray42 != null, "Int32Array SubArray2");
            Assert.AreEqual(4, subArray42.Length, "Int32Array SubArray2 Length");
            Assert.AreEqual(expectedToStringInt32Array3, subArray42.ToString(), "Int32Array SubArray2 ToString");
            Assert.AreEqual(12, subArray42.ByteOffset, "Int32Array SubArray2 ByteOffset");

            var v5 = new Int8Array(10);
            Assert.True(v5 != null, "Int8Array created");

            v5[1] = 11;
            v5[5] = 5;
            v5[9] = 99;
            Assert.AreEqual(11, v5[1], "Int8Array indexier works 1");
            Assert.AreEqual(99, v5[9], "Int8Array indexier works 9");

            Assert.True(v5.Buffer != null, "Int8Array Buffer");
            Assert.AreEqual(10, v5.ByteLength, "Int8Array ByteLength");
            Assert.AreEqual(0, v5.ByteOffset, "Int8Array ByteOffset");
            Assert.AreEqual(10, v5.Length, "Int8Array Length");

            var expectedToStringInt8Array1 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringInt8Array1, v5.ToLocaleString(), "Int8Array ToLocaleString");
            Assert.AreEqual(expectedToStringInt8Array1, v5.ToString(), "Int8Array ToString");

            var subArray51 = v5.SubArray(1);
            var expectedToStringInt8Array2 = isToStringToTypeNameLogic ? "[object Int8Array]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray51 != null, "Int8Array SubArray1");
            Assert.AreEqual(9, subArray51.Length, "Int8Array SubArray1 Length");
            Assert.AreEqual(expectedToStringInt8Array2, subArray51.ToString(), "Int8Array SubArray1 ToString");
            Assert.AreEqual(1, subArray51.ByteOffset, "Int8Array SubArray1 ByteOffset");

            var subArray52 = subArray51.SubArray(2, 6);
            var expectedToStringInt8Array3 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,0,5,0";
            Assert.True(subArray52 != null, "Int8Array SubArray2");
            Assert.AreEqual(4, subArray52.Length, "Int8Array SubArray2 Length");
            Assert.AreEqual(expectedToStringInt8Array3, subArray52.ToString(), "Int8Array SubArray2 ToString");
            Assert.AreEqual(3, subArray52.ByteOffset, "Int8Array SubArray2 ByteOffset");

            var v6 = new Uint16Array(10);
            Assert.True(v6 != null, "Uint16Array created");

            v6[1] = 11;
            v6[5] = 5;
            v6[9] = 99;
            Assert.AreEqual(11, v6[1], "Uint16Array indexier works 1");
            Assert.AreEqual(99, v6[9], "Uint16Array indexier works 9");

            Assert.True(v6.Buffer != null, "Uint16Array Buffer");
            Assert.AreEqual(20, v6.ByteLength, "Uint16Array ByteLength");
            Assert.AreEqual(0, v6.ByteOffset, "Uint16Array ByteOffset");
            Assert.AreEqual(10, v6.Length, "Uint16Array Length");

            var expectedToStringUint16Array1 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringUint16Array1, v6.ToLocaleString(), "Uint16Array ToLocaleString");
            Assert.AreEqual(expectedToStringUint16Array1, v6.ToString(), "Uint16Array ToString");

            var subArray61 = v6.SubArray(1);
            var expectedToStringUint16Array2 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray61 != null, "Uint16Array SubArray1");
            Assert.AreEqual(9, subArray61.Length, "Uint16Array SubArray1 Length");
            Assert.AreEqual(expectedToStringUint16Array2, subArray61.ToString(), "Uint16Array SubArray1 ToString");
            Assert.AreEqual(2, subArray61.ByteOffset, "Uint16Array SubArray1 ByteOffset");

            var subArray62 = subArray61.SubArray(2, 6);
            var expectedToStringUint16Array3 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,0,5,0";
            Assert.True(subArray62 != null, "Uint16Array SubArray2");
            Assert.AreEqual(4, subArray62.Length, "Uint16Array SubArray2 Length");
            Assert.AreEqual(expectedToStringUint16Array3, subArray62.ToString(), "Uint16Array SubArray2 ToString");
            Assert.AreEqual(6, subArray62.ByteOffset, "Uint16Array SubArray2 ByteOffset");

            var v7 = new Uint32Array(10);
            Assert.True(v7 != null, "Uint32Array created");

            v7[1] = 11;
            v7[5] = 5;
            v7[9] = 99;
            Assert.AreEqual(11, v7[1], "Uint32Array indexier works 1");
            Assert.AreEqual(99, v7[9], "Uint32Array indexier works 9");

            Assert.True(v7.Buffer != null, "Uint32Array Buffer");
            Assert.AreEqual(40, v7.ByteLength, "Uint32Array ByteLength");
            Assert.AreEqual(0, v7.ByteOffset, "Uint32Array ByteOffset");
            Assert.AreEqual(10, v7.Length, "Uint32Array Length");

            var expectedToStringUint32Array1 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringUint32Array1, v7.ToLocaleString(), "Uint32Array ToLocaleString");
            Assert.AreEqual(expectedToStringUint32Array1, v7.ToString(), "Uint32Array ToString");

            var subArray71 = v7.SubArray(1);
            var expectedToStringUint32Array2 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray71 != null, "Uint32Array SubArray1");
            Assert.AreEqual(9, subArray71.Length, "Uint32Array SubArray1 Length");
            Assert.AreEqual(expectedToStringUint32Array2, subArray71.ToString(), "Uint32Array SubArray1 ToString");
            Assert.AreEqual(4, subArray71.ByteOffset, "Uint32Array SubArray1 ByteOffset");

            var subArray72 = subArray71.SubArray(2, 6);
            var expectedToStringUint32Array3 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,0,5,0";
            Assert.True(subArray72 != null, "Uint32Array SubArray2");
            Assert.AreEqual(4, subArray72.Length, "Uint32Array SubArray2 Length");
            Assert.AreEqual(expectedToStringUint32Array3, subArray72.ToString(), "Uint32Array SubArray2 ToString");
            Assert.AreEqual(12, subArray72.ByteOffset, "Uint32Array SubArray2 ByteOffset");

            var v8 = new Uint8Array(10);
            Assert.True(v8 != null, "Uint8Array created");

            v8[1] = 11;
            v8[5] = 5;
            v8[9] = 99;
            Assert.AreEqual(11, v8[1], "Uint8Array indexier works 1");
            Assert.AreEqual(99, v8[9], "Uint8Array indexier works 9");

            Assert.True(v8.Buffer != null, "Uint8Array Buffer");
            Assert.AreEqual(10, v8.ByteLength, "Uint8Array ByteLength");
            Assert.AreEqual(0, v8.ByteOffset, "Uint8Array ByteOffset");
            Assert.AreEqual(10, v8.Length, "Uint8Array Length");

            var expectedToStringUint8Array1 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringUint8Array1, v8.ToLocaleString(), "Uint8Array ToLocaleString");
            Assert.AreEqual(expectedToStringUint8Array1, v8.ToString(), "Uint8Array ToString");

            var subArray81 = v8.SubArray(1);
            var expectedToStringUint8Array2 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray81 != null, "Uint8Array SubArray1");
            Assert.AreEqual(9, subArray81.Length, "Uint8Array SubArray1 Length");
            Assert.AreEqual(expectedToStringUint8Array2, subArray81.ToString(), "Uint8Array SubArray1 ToString");
            Assert.AreEqual(1, subArray81.ByteOffset, "Uint8Array SubArray1 ByteOffset");

            var subArray82 = subArray81.SubArray(2, 6);
            var expectedToStringUint8Array3 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,0,5,0";
            Assert.True(subArray82 != null, "Uint8Array SubArray2");
            Assert.AreEqual(4, subArray82.Length, "Uint8Array SubArray2 Length");
            Assert.AreEqual(expectedToStringUint8Array3, subArray82.ToString(), "Uint8Array SubArray2 ToString");
            Assert.AreEqual(3, subArray82.ByteOffset, "Uint8Array SubArray2 ByteOffset");

            var v9 = new Uint8ClampedArray(10);
            Assert.True(v9 != null, "Uint8ClampedArray created");

            v9[1] = 11;
            v9[5] = 5;
            v9[9] = 99;
            Assert.AreEqual(11, v9[1], "Uint8ClampedArray indexier works 1");
            Assert.AreEqual(99, v9[9], "Uint8ClampedArray indexier works 9");

            Assert.True(v9.Buffer != null, "Uint8ClampedArray Buffer");
            Assert.AreEqual(10, v9.ByteLength, "Uint8ClampedArray ByteLength");
            Assert.AreEqual(0, v9.ByteOffset, "Uint8ClampedArray ByteOffset");
            Assert.AreEqual(10, v9.Length, "Uint8ClampedArray Length");

            var expectedToStringUint8ClampedArray1 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,11,0,0,0,5,0,0,0,99";
            Assert.AreEqual(expectedToStringUint8ClampedArray1, v9.ToLocaleString(), "Uint8ClampedArray ToLocaleString");
            Assert.AreEqual(expectedToStringUint8ClampedArray1, v9.ToString(), "Uint8ClampedArray ToString");

            var subArray91 = v9.SubArray(1);
            var expectedToStringUint8ClampedArray2 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "11,0,0,0,5,0,0,0,99";
            Assert.True(subArray91 != null, "Uint8ClampedArray SubArray1");
            Assert.AreEqual(9, subArray91.Length, "Uint8ClampedArray SubArray1 Length");
            Assert.AreEqual(expectedToStringUint8ClampedArray2, subArray91.ToString(), "Uint8ClampedArray SubArray1 ToString");
            Assert.AreEqual(1, subArray91.ByteOffset, "Uint8ClampedArray SubArray1 ByteOffset");

            var subArray92 = subArray91.SubArray(2, 6);
            var expectedToStringUint8ClampedArray3 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,0,5,0";
            Assert.True(subArray92 != null, "Uint8ClampedArray SubArray2");
            Assert.AreEqual(4, subArray92.Length, "Uint8ClampedArray SubArray2 Length");
            Assert.AreEqual(expectedToStringUint8ClampedArray3, subArray92.ToString(), "Uint8ClampedArray SubArray2 ToString");
            Assert.AreEqual(3, subArray92.ByteOffset, "Uint8ClampedArray SubArray2 ByteOffset");
        }
    }
}