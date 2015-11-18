using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using ClientTestLibrary.Utilities;

using System;

namespace ClientTestLibrary
{
    /// <summary>
    /// This test will check whether TypedArray types correctly inherit from
    /// the prototype common methods and fields. [#549]
    /// </summary>
    [FileName("testBridgeIssues.js")]
    internal class Bridge549
    {
        public static void TestUseCase(Assert assert)
        {
            var isToStringToTypeNameLogic = !BrowserHelper.IsChrome();

            assert.Expect(153);

            var v1 = new Float32Array(10);
            assert.Ok(v1 != null, "Float32Array created");

            v1[1] = 11;
            v1[5] = 5;
            v1[9] = 99;
            assert.Equal(v1[1], 11, "Float32Array indexier works 1");
            assert.Equal(v1[9], 99, "Float32Array indexier works 9");

            // Check just a select number of references inside the Prototype inheritance.
            assert.Ok(v1.Buffer != null, "Float32Array Buffer");
            assert.Equal(v1.ByteLength, 40, "Float32Array ByteLength");
            assert.Equal(v1.ByteOffset, 0, "Float32Array ByteOffset");
            assert.Equal(v1.Length, 10, "Float32Array Length");

            /*
             * Commented out. Reason: Only Firefox implements them.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
            var mA = v1.Join();
            v1.Reverse();
            var mB = v1.Slice();
            var mC = v1.Sort();
             */

            var expectedToStringFloat32Array1 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v1.ToLocaleString(), expectedToStringFloat32Array1, "Float32Array ToLocaleString");
            assert.Equal(v1.ToString(), expectedToStringFloat32Array1, "Float32Array ToString");

            // Some browsers do not support SubArray() with no parameters.
            // At least 'begin' must be provided.
            var subArray11 = v1.SubArray(1);
            var expectedToStringFloat32Array2 = isToStringToTypeNameLogic ? "[object Float32Array]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray11 != null, "Float32Array SubArray1");
            assert.Equal(subArray11.Length, 9, "Float32Array SubArray1 Length");
            assert.Equal(subArray11.ToString(), expectedToStringFloat32Array2, "Float32Array SubArray1 ToString");
            assert.Equal(subArray11.ByteOffset, 4, "Float32Array SubArray1 ByteOffset");

            var subArray12 = subArray11.SubArray(2, 6);
            var expectedToStringFloat32Array3 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,0,5,0";
            assert.Ok(subArray12 != null, "Float32Array SubArray2");
            assert.Equal(subArray12.Length, 4, "Float32Array SubArray2 Length");
            assert.Equal(subArray12.ToString(), expectedToStringFloat32Array3, "Float32Array SubArray2 ToString");
            assert.Equal(subArray12.ByteOffset, 12, "Float32Array SubArray2 ByteOffset");

            var v2 = new Float64Array(10);
            assert.Ok(v2 != null, "Float64Array created");

            v2[1] = 11;
            v2[5] = 5;
            v2[9] = 99;
            assert.Equal(v2[1], 11, "Float64Array indexier works 1");
            assert.Equal(v2[9], 99, "Float64Array indexier works 9");

            assert.Ok(v2.Buffer != null, "Float64Array Buffer");
            assert.Equal(v2.ByteLength, 80, "Float64Array ByteLength");
            assert.Equal(v2.ByteOffset, 0, "Float64Array ByteOffset");
            assert.Equal(v2.Length, 10, "Float64Array Length");

            var expectedToStringFloat64Array1 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v2.ToLocaleString(), expectedToStringFloat64Array1, "Float64Array ToLocaleString");
            assert.Equal(v2.ToString(), expectedToStringFloat64Array1, "Float64Array ToString");

            var subArray21 = v2.SubArray(1);
            var expectedToStringFloat64Array2 = isToStringToTypeNameLogic ? "[object Float64Array]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray21 != null, "Float64Array SubArray1");
            assert.Equal(subArray21.Length, 9, "Float64Array SubArray1 Length");
            assert.Equal(subArray21.ToString(), expectedToStringFloat64Array2, "Float64Array SubArray1 ToString");
            assert.Equal(subArray21.ByteOffset, 8, "Float64Array SubArray1 ByteOffset");

            var subArray22 = subArray21.SubArray(2, 6);
            var expectedToStringFloat64Array3 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,0,5,0";
            assert.Ok(subArray22 != null, "Float64Array SubArray2");
            assert.Equal(subArray22.Length, 4, "Float64Array SubArray2 Length");
            assert.Equal(subArray22.ToString(), expectedToStringFloat64Array3, "Float64Array SubArray2 ToString");
            assert.Equal(subArray22.ByteOffset, 24, "Float64Array SubArray2 ByteOffset");

            var v3 = new Int16Array(10);
            assert.Ok(v3 != null, "Int16Array created");

            v3[1] = 11;
            v3[5] = 5;
            v3[9] = 99;
            assert.Equal(v3[1], 11, "Int16Array indexier works 1");
            assert.Equal(v3[9], 99, "Int16Array indexier works 9");

            assert.Ok(v3.Buffer != null, "Int16Array Buffer");
            assert.Equal(v3.ByteLength, 20, "Int16Array ByteLength");
            assert.Equal(v3.ByteOffset, 0, "Int16Array ByteOffset");
            assert.Equal(v3.Length, 10, "Int16Array Length");

            var expectedToStringInt16Array1 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v3.ToLocaleString(), expectedToStringInt16Array1, "Int16Array ToLocaleString");
            assert.Equal(v3.ToString(), expectedToStringInt16Array1, "Int16Array ToString");

            var subArray31 = v3.SubArray(1);
            var expectedToStringInt16Array2 = isToStringToTypeNameLogic ? "[object Int16Array]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray31 != null, "Int16Array SubArray1");
            assert.Equal(subArray31.Length, 9, "Int16Array SubArray1 Length");
            assert.Equal(subArray31.ToString(), expectedToStringInt16Array2, "Int16Array SubArray1 ToString");
            assert.Equal(subArray31.ByteOffset, 2, "Int16Array SubArray1 ByteOffset");

            var subArray32 = subArray31.SubArray(2, 6);
            var expectedToStringInt16Array3 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,0,5,0";
            assert.Ok(subArray32 != null, "Int16Array SubArray2");
            assert.Equal(subArray32.Length, 4, "Int16Array SubArray2 Length");
            assert.Equal(subArray32.ToString(), expectedToStringInt16Array3, "Int16Array SubArray2 ToString");
            assert.Equal(subArray32.ByteOffset, 6, "Int16Array SubArray2 ByteOffset");

            var v4 = new Int32Array(10);
            assert.Ok(v4 != null, "Int32Array created");

            v4[1] = 11;
            v4[5] = 5;
            v4[9] = 99;
            assert.Equal(v4[1], 11, "Int32Array indexier works 1");
            assert.Equal(v4[9], 99, "Int32Array indexier works 9");

            assert.Ok(v4.Buffer != null, "Int32Array Buffer");
            assert.Equal(v4.ByteLength, 40, "Int32Array ByteLength");
            assert.Equal(v4.ByteOffset, 0, "Int32Array ByteOffset");
            assert.Equal(v4.Length, 10, "Int32Array Length");

            var expectedToStringInt32Array1 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v4.ToLocaleString(), expectedToStringInt32Array1, "Int32Array ToLocaleString");
            assert.Equal(v4.ToString(), expectedToStringInt32Array1, "Int32Array ToString");

            var subArray41 = v4.SubArray(1);
            var expectedToStringInt32Array2 = isToStringToTypeNameLogic ? "[object Int32Array]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray41 != null, "Int32Array SubArray1");
            assert.Equal(subArray41.Length, 9, "Int32Array SubArray1 Length");
            assert.Equal(subArray41.ToString(), expectedToStringInt32Array2, "Int32Array SubArray1 ToString");
            assert.Equal(subArray41.ByteOffset, 4, "Int32Array SubArray1 ByteOffset");

            var subArray42 = subArray41.SubArray(2, 6);
            var expectedToStringInt32Array3 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,0,5,0";
            assert.Ok(subArray42 != null, "Int32Array SubArray2");
            assert.Equal(subArray42.Length, 4, "Int32Array SubArray2 Length");
            assert.Equal(subArray42.ToString(), expectedToStringInt32Array3, "Int32Array SubArray2 ToString");
            assert.Equal(subArray42.ByteOffset, 12, "Int32Array SubArray2 ByteOffset");

            var v5 = new Int8Array(10);
            assert.Ok(v5 != null, "Int8Array created");

            v5[1] = 11;
            v5[5] = 5;
            v5[9] = 99;
            assert.Equal(v5[1], 11, "Int8Array indexier works 1");
            assert.Equal(v5[9], 99, "Int8Array indexier works 9");

            assert.Ok(v5.Buffer != null, "Int8Array Buffer");
            assert.Equal(v5.ByteLength, 10, "Int8Array ByteLength");
            assert.Equal(v5.ByteOffset, 0, "Int8Array ByteOffset");
            assert.Equal(v5.Length, 10, "Int8Array Length");

            var expectedToStringInt8Array1 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v5.ToLocaleString(), expectedToStringInt8Array1, "Int8Array ToLocaleString");
            assert.Equal(v5.ToString(), expectedToStringInt8Array1, "Int8Array ToString");

            var subArray51 = v5.SubArray(1);
            var expectedToStringInt8Array2 = isToStringToTypeNameLogic ? "[object Int8Array]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray51 != null, "Int8Array SubArray1");
            assert.Equal(subArray51.Length, 9, "Int8Array SubArray1 Length");
            assert.Equal(subArray51.ToString(), expectedToStringInt8Array2, "Int8Array SubArray1 ToString");
            assert.Equal(subArray51.ByteOffset, 1, "Int8Array SubArray1 ByteOffset");

            var subArray52 = subArray51.SubArray(2, 6);
            var expectedToStringInt8Array3 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,0,5,0";
            assert.Ok(subArray52 != null, "Int8Array SubArray2");
            assert.Equal(subArray52.Length, 4, "Int8Array SubArray2 Length");
            assert.Equal(subArray52.ToString(), expectedToStringInt8Array3, "Int8Array SubArray2 ToString");
            assert.Equal(subArray52.ByteOffset, 3, "Int8Array SubArray2 ByteOffset");

            var v6 = new Uint16Array(10);
            assert.Ok(v6 != null, "Uint16Array created");

            v6[1] = 11;
            v6[5] = 5;
            v6[9] = 99;
            assert.Equal(v6[1], 11, "Uint16Array indexier works 1");
            assert.Equal(v6[9], 99, "Uint16Array indexier works 9");

            assert.Ok(v6.Buffer != null, "Uint16Array Buffer");
            assert.Equal(v6.ByteLength, 20, "Uint16Array ByteLength");
            assert.Equal(v6.ByteOffset, 0, "Uint16Array ByteOffset");
            assert.Equal(v6.Length, 10, "Uint16Array Length");

            var expectedToStringUint16Array1 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v6.ToLocaleString(), expectedToStringUint16Array1, "Uint16Array ToLocaleString");
            assert.Equal(v6.ToString(), expectedToStringUint16Array1, "Uint16Array ToString");

            var subArray61 = v6.SubArray(1);
            var expectedToStringUint16Array2 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray61 != null, "Uint16Array SubArray1");
            assert.Equal(subArray61.Length, 9, "Uint16Array SubArray1 Length");
            assert.Equal(subArray61.ToString(), expectedToStringUint16Array2, "Uint16Array SubArray1 ToString");
            assert.Equal(subArray61.ByteOffset, 2, "Uint16Array SubArray1 ByteOffset");

            var subArray62 = subArray61.SubArray(2, 6);
            var expectedToStringUint16Array3 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,0,5,0";
            assert.Ok(subArray62 != null, "Uint16Array SubArray2");
            assert.Equal(subArray62.Length, 4, "Uint16Array SubArray2 Length");
            assert.Equal(subArray62.ToString(), expectedToStringUint16Array3, "Uint16Array SubArray2 ToString");
            assert.Equal(subArray62.ByteOffset, 6, "Uint16Array SubArray2 ByteOffset");

            var v7 = new Uint32Array(10);
            assert.Ok(v7 != null, "Uint32Array created");

            v7[1] = 11;
            v7[5] = 5;
            v7[9] = 99;
            assert.Equal(v7[1], 11, "Uint32Array indexier works 1");
            assert.Equal(v7[9], 99, "Uint32Array indexier works 9");

            assert.Ok(v7.Buffer != null, "Uint32Array Buffer");
            assert.Equal(v7.ByteLength, 40, "Uint32Array ByteLength");
            assert.Equal(v7.ByteOffset, 0, "Uint32Array ByteOffset");
            assert.Equal(v7.Length, 10, "Uint32Array Length");

            var expectedToStringUint32Array1 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v7.ToLocaleString(), expectedToStringUint32Array1, "Uint32Array ToLocaleString");
            assert.Equal(v7.ToString(), expectedToStringUint32Array1, "Uint32Array ToString");

            var subArray71 = v7.SubArray(1);
            var expectedToStringUint32Array2 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray71 != null, "Uint32Array SubArray1");
            assert.Equal(subArray71.Length, 9, "Uint32Array SubArray1 Length");
            assert.Equal(subArray71.ToString(), expectedToStringUint32Array2, "Uint32Array SubArray1 ToString");
            assert.Equal(subArray71.ByteOffset, 4, "Uint32Array SubArray1 ByteOffset");

            var subArray72 = subArray71.SubArray(2, 6);
            var expectedToStringUint32Array3 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,0,5,0";
            assert.Ok(subArray72 != null, "Uint32Array SubArray2");
            assert.Equal(subArray72.Length, 4, "Uint32Array SubArray2 Length");
            assert.Equal(subArray72.ToString(), expectedToStringUint32Array3, "Uint32Array SubArray2 ToString");
            assert.Equal(subArray72.ByteOffset, 12, "Uint32Array SubArray2 ByteOffset");

            var v8 = new Uint8Array(10);
            assert.Ok(v8 != null, "Uint8Array created");

            v8[1] = 11;
            v8[5] = 5;
            v8[9] = 99;
            assert.Equal(v8[1], 11, "Uint8Array indexier works 1");
            assert.Equal(v8[9], 99, "Uint8Array indexier works 9");

            assert.Ok(v8.Buffer != null, "Uint8Array Buffer");
            assert.Equal(v8.ByteLength, 10, "Uint8Array ByteLength");
            assert.Equal(v8.ByteOffset, 0, "Uint8Array ByteOffset");
            assert.Equal(v8.Length, 10, "Uint8Array Length");

            var expectedToStringUint8Array1 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v8.ToLocaleString(), expectedToStringUint8Array1, "Uint8Array ToLocaleString");
            assert.Equal(v8.ToString(), expectedToStringUint8Array1, "Uint8Array ToString");

            var subArray81 = v8.SubArray(1);
            var expectedToStringUint8Array2 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray81 != null, "Uint8Array SubArray1");
            assert.Equal(subArray81.Length, 9, "Uint8Array SubArray1 Length");
            assert.Equal(subArray81.ToString(), expectedToStringUint8Array2, "Uint8Array SubArray1 ToString");
            assert.Equal(subArray81.ByteOffset, 1, "Uint8Array SubArray1 ByteOffset");

            var subArray82 = subArray81.SubArray(2, 6);
            var expectedToStringUint8Array3 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,0,5,0";
            assert.Ok(subArray82 != null, "Uint8Array SubArray2");
            assert.Equal(subArray82.Length, 4, "Uint8Array SubArray2 Length");
            assert.Equal(subArray82.ToString(), expectedToStringUint8Array3, "Uint8Array SubArray2 ToString");
            assert.Equal(subArray82.ByteOffset, 3, "Uint8Array SubArray2 ByteOffset");

            var v9 = new Uint8ClampedArray(10);
            assert.Ok(v9 != null, "Uint8ClampedArray created");

            v9[1] = 11;
            v9[5] = 5;
            v9[9] = 99;
            assert.Equal(v9[1], 11, "Uint8ClampedArray indexier works 1");
            assert.Equal(v9[9], 99, "Uint8ClampedArray indexier works 9");

            assert.Ok(v9.Buffer != null, "Uint8ClampedArray Buffer");
            assert.Equal(v9.ByteLength, 10, "Uint8ClampedArray ByteLength");
            assert.Equal(v9.ByteOffset, 0, "Uint8ClampedArray ByteOffset");
            assert.Equal(v9.Length, 10, "Uint8ClampedArray Length");

            var expectedToStringUint8ClampedArray1 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,11,0,0,0,5,0,0,0,99";
            assert.Equal(v9.ToLocaleString(), expectedToStringUint8ClampedArray1, "Uint8ClampedArray ToLocaleString");
            assert.Equal(v9.ToString(), expectedToStringUint8ClampedArray1, "Uint8ClampedArray ToString");

            var subArray91 = v9.SubArray(1);
            var expectedToStringUint8ClampedArray2 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "11,0,0,0,5,0,0,0,99";
            assert.Ok(subArray91 != null, "Uint8ClampedArray SubArray1");
            assert.Equal(subArray91.Length, 9, "Uint8ClampedArray SubArray1 Length");
            assert.Equal(subArray91.ToString(), expectedToStringUint8ClampedArray2, "Uint8ClampedArray SubArray1 ToString");
            assert.Equal(subArray91.ByteOffset, 1, "Uint8ClampedArray SubArray1 ByteOffset");

            var subArray92 = subArray91.SubArray(2, 6);
            var expectedToStringUint8ClampedArray3 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,0,5,0";
            assert.Ok(subArray92 != null, "Uint8ClampedArray SubArray2");
            assert.Equal(subArray92.Length, 4, "Uint8ClampedArray SubArray2 Length");
            assert.Equal(subArray92.ToString(), expectedToStringUint8ClampedArray3, "Uint8ClampedArray SubArray2 ToString");
            assert.Equal(subArray92.ByteOffset, 3, "Uint8ClampedArray SubArray2 ByteOffset");
        }
    }
}