// https://referencesource.microsoft.com/#mscorlib/system/bitconverter.cs

namespace System
{
    using Bridge;
    using Bridge.Internal.Html5;
    /// <summary>
    /// Converts base data types to an array of bytes, and an array of bytes to base data types.
    /// </summary>
    public static class BitConverter
    {
        /// <summary>
        /// This field indicates the "endianess" of the architecture.
        /// The value is set to true if the architecture is
        /// little endian; false if it is big endian.
        /// </summary>
        public static readonly bool IsLittleEndian = true;

        private static string Arg_ArrayPlusOffTooSmall = "Destination array is not long enough to copy all the items in the collection. Check array index and length.";

        /// <summary>
        /// Returns the specified Boolean value as a byte array.
        /// </summary>
        /// <param name="value">A Boolean value.</param>
        /// <returns>A byte array with length 1.</returns>
        public static byte[] GetBytes(bool value)
        {
            return value ? new byte[] { 1 } : new byte[] { 0 };
        }

        /// <summary>
        /// Returns the specified character value as an array of bytes.
        /// </summary>
        /// <param name="value">A character to convert.</param>
        /// <returns>An array of bytes with length 2.</returns>
        public static byte[] GetBytes(char value)
        {
            return GetBytes((short)value);
        }

        /// <summary>
        /// Returns the specified 16-bit signed integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 2.</returns>
        public static byte[] GetBytes(short value)
        {
            return new byte[] { unchecked((byte)value), unchecked((byte)(value >> 0x8)) };
        }

        /// <summary>
        /// Returns the specified 32-bit signed integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 4.</returns>
        public static byte[] GetBytes(int value)
        {
            return new byte[] { unchecked((byte)value), unchecked((byte)(value >> 0x8)), unchecked((byte)(value >> 0x10)), unchecked((byte)(value >> 0x18)) };
        }

        /// <summary>
        /// Returns the specified 64-bit signed integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 8.</returns>
        public static byte[] GetBytes(long value)
        {
            return new byte[] { ToByte(value), ToByte(value, 1), ToByte(value, 2), ToByte(value, 3), ToByte(value, 4), ToByte(value, 5), ToByte(value, 6), ToByte(value, 7) };
        }

        /// <summary>
        /// Returns the specified 16-bit unsigned integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 2.</returns>
        public static byte[] GetBytes(ushort value)
        {
            return new byte[] { unchecked((byte)value), unchecked((byte)(value >> 0x8)) };
        }

        /// <summary>
        /// Returns the specified 32-bit unsigned integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 4.</returns>
        public static byte[] GetBytes(uint value)
        {
            return new byte[] { unchecked((byte)value), unchecked((byte)(value >> 0x8)), unchecked((byte)(value >> 0x10)), unchecked((byte)(value >> 0x18)) };
        }

        /// <summary>
        /// Returns the specified 64-bit unsigned integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 8.</returns>
        public static byte[] GetBytes(ulong value)
        {
            return new byte[] { ToByte(value), ToByte(value, 1), ToByte(value, 2), ToByte(value, 3), ToByte(value, 4), ToByte(value, 5), ToByte(value, 6), ToByte(value, 7) };
        }

        /// <summary>
        /// Returns the specified single-precision floating point value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 4.</returns>
        public static byte[] GetBytes(float value)
        {
            var buffer = new ArrayBuffer(8);
            var view = new DataView(buffer);
            view.SetFloat32(0, value);

            return new byte[] { view.GetUint8(3), view.GetUint8(2), view.GetUint8(1), view.GetUint8(0) };
        }

        /// <summary>
        /// Returns the specified double-precision floating point value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 8.</returns>
        public static byte[] GetBytes(double value)
        {
            var buffer = new ArrayBuffer(8);
            var view = new DataView(buffer);
            view.SetFloat64(0, value);

            return new byte[] {
                view.GetUint8(7), view.GetUint8(6), view.GetUint8(5), view.GetUint8(4),
                view.GetUint8(3), view.GetUint8(2), view.GetUint8(1), view.GetUint8(0)};
        }

        /// <summary>
        /// Returns a character converted from two bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A character formed by two bytes beginning at startIndex.</returns>
        public static char ToChar(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 2)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            return (char)ToInt16(value, startIndex);
        }

        /// <summary>
        /// Returns a 16-bit signed integer converted from two bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 16-bit signed integer formed by two bytes beginning at startIndex.</returns>
        public static short ToInt16(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 2)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            var buffer = new ArrayBuffer();
            var view = new DataView(buffer);

            if (startIndex % 2 == 0)
            {
                // data is aligned
                return *((short*)pbyte);
            }
            else
            {
                if (IsLittleEndian)
                {
                    return (short)((*pbyte) | (*(pbyte + 1) << 8));
                }
                else
                {
                    return (short)((*pbyte << 8) | (*(pbyte + 1)));
                }
            }


            return ((value[startIndex].As<double>()) + ((value[(startIndex.As<double>() + 1).As<int>()] << 0x8).As<double>())).As<short>();
        }

        //function checkEndian()
        //{
        //    var arrayBuffer = new ArrayBuffer(2);
        //    var uint8Array = new Uint8Array(arrayBuffer);
        //    var uint16array = new Uint16Array(arrayBuffer);
        //    uint8Array[0] = 0xAA; // set first byte
        //    uint8Array[1] = 0xBB; // set second byte
        //    if (uint16array[0] === 0xBBAA) return "little endian";
        //    if (uint16array[0] === 0xAABB) return "big endian";
        //    else throw new Error("Something crazy just happened");
        //}

        /// <summary>
        /// Returns a 32-bit signed integer converted from four bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 32-bit signed integer formed by four bytes beginning at startIndex.</returns>
        public static int ToInt32(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 4)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            //if (startIndex % 4 == 0)
            //{ // data is aligned
            //    return *((int*)pbyte);
            //}
            //else
            //{
            //    if (IsLittleEndian)
            //    {
            //        return (*pbyte) | (*(pbyte + 1) << 8) | (*(pbyte + 2) << 16) | (*(pbyte + 3) << 24);
            //    }
            //    else
            //    {
            //        return (*pbyte << 24) | (*(pbyte + 1) << 16) | (*(pbyte + 2) << 8) | (*(pbyte + 3));
            //    }
            //}

            return (value[startIndex].As<double>()
                + (value[(startIndex.As<double>() + 1).As<int>()] << 0x8).As<double>()
                + (value[(startIndex.As<double>() + 2).As<int>()] << 0x10).As<double>()
                + (value[(startIndex.As<double>() + 3).As<int>()] << 0x18).As<double>()).As<int>();
        }

        /// <summary>
        /// Returns a 64-bit signed integer converted from eight bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 64-bit signed integer formed by eight bytes beginning at startIndex.</returns>
        public static long ToInt64(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 8)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            //if (startIndex % 8 == 0)
            //{ // data is aligned
            //    return *((long*)pbyte);
            //}
            //else
            //{
            //    if (IsLittleEndian)
            //    {
            //        int i1 = (*pbyte) | (*(pbyte + 1) << 8) | (*(pbyte + 2) << 16) | (*(pbyte + 3) << 24);
            //        int i2 = (*(pbyte + 4)) | (*(pbyte + 5) << 8) | (*(pbyte + 6) << 16) | (*(pbyte + 7) << 24);
            //        return (uint)i1 | ((long)i2 << 32);
            //    }
            //    else
            //    {
            //        int i1 = (*pbyte << 24) | (*(pbyte + 1) << 16) | (*(pbyte + 2) << 8) | (*(pbyte + 3));
            //        int i2 = (*(pbyte + 4) << 24) | (*(pbyte + 5) << 16) | (*(pbyte + 6) << 8) | (*(pbyte + 7));
            //        return (uint)i2 | ((long)i1 << 32);
            //    }
            //}

            return value[startIndex]
                + ((long)value[(startIndex.As<double>() + 1).As<int>()] << 0x8)
                + ((long)value[(startIndex.As<double>() + 2).As<int>()] << 0x10)
                + ((long)value[(startIndex.As<double>() + 3).As<int>()] << 0x18)
                + ((long)value[(startIndex.As<double>() + 4).As<int>()] << 0x20)
                + ((long)value[(startIndex.As<double>() + 5).As<int>()] << 0x28)
                + ((long)value[(startIndex.As<double>() + 6).As<int>()] << 0x30)
                + ((long)value[(startIndex.As<double>() + 7).As<int>()] << 0x38);
        }


        /// <summary>
        /// Returns a 16-bit unsigned integer converted from two bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">The array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 16-bit unsigned integer formed by two bytes beginning at startIndex.</returns>
        public static ushort ToUInt16(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 2)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            //return (ushort)ToInt16(value, startIndex);
            return ((value[startIndex].As<double>()) + ((value[(startIndex.As<double>() + 1).As<int>()] << 0x8).As<double>())).As<ushort>();
        }

        /// <summary>
        /// Returns a 32-bit unsigned integer converted from four bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 32-bit unsigned integer formed by four bytes beginning at startIndex.</returns>
        public static uint ToUInt32(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 4)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            //return (uint)ToInt32(value, startIndex);
            return (value[startIndex].As<double>()
                + (value[(startIndex.As<double>() + 1).As<uint>()] << 0x8).As<double>()
                + (value[(startIndex.As<double>() + 2).As<uint>()] << 0x10).As<double>()
                + (value[(startIndex.As<double>() + 3).As<uint>()] << 0x18).As<double>()).As<uint>();
        }

        /// <summary>
        /// Returns a 64-bit unsigned integer converted from eight bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 64-bit unsigned integer formed by the eight bytes beginning at startIndex.</returns>
        public static ulong ToUInt64(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 8)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            return value[startIndex]
                + ((ulong)value[(startIndex.As<double>() + 1).As<int>()] << 0x8)
                + ((ulong)value[(startIndex.As<double>() + 2).As<int>()] << 0x10)
                + ((ulong)value[(startIndex.As<double>() + 3).As<int>()] << 0x18)
                + ((ulong)value[(startIndex.As<double>() + 4).As<int>()] << 0x20)
                + ((ulong)value[(startIndex.As<double>() + 5).As<int>()] << 0x28)
                + ((ulong)value[(startIndex.As<double>() + 6).As<int>()] << 0x30)
                + ((ulong)value[(startIndex.As<double>() + 7).As<int>()] << 0x38);
        }

        /// <summary>
        /// Returns a single-precision floating point number converted from four bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A single-precision floating point number formed by four bytes beginning at startIndex.</returns>
        public static float ToSingle(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 4)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            var buffer = new ArrayBuffer(4);
            var view = new DataView(buffer);
            view.SetUint8(0, value[startIndex + 3]);
            view.SetUint8(1, value[startIndex + 2]);
            view.SetUint8(2, value[startIndex + 1]);
            view.SetUint8(3, value[startIndex + 0]);

            return view.GetFloat32(0);
        }

        /// <summary>
        /// Returns a double-precision floating point number converted from eight bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A double precision floating point number formed by eight bytes beginning at startIndex.</returns>
        public static double ToDouble(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("value");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 8)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            var buffer = new ArrayBuffer(8);
            var view = new DataView(buffer);
            view.SetUint8(0, value[startIndex + 7]);
            view.SetUint8(1, value[startIndex + 6]);
            view.SetUint8(2, value[startIndex + 5]);
            view.SetUint8(3, value[startIndex + 4]);
            view.SetUint8(4, value[startIndex + 3]);
            view.SetUint8(5, value[startIndex + 2]);
            view.SetUint8(6, value[startIndex + 1]);
            view.SetUint8(7, value[startIndex + 0]);

            return view.GetFloat64(0);
        }

        private static char GetHexValue(int i)
        {
            if (i < 10)
            {
                return (char)(i + '0');
            }

            return (char)(i - 10 + 'A');
        }

        /// <summary>
        /// Converts the numeric value of each element of a specified subarray of bytes to its equivalent hexadecimal string representation.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <param name="length">The number of array elements in value to convert.</param>
        /// <returns></returns>
        public static String ToString(byte[] value, int startIndex, int length)
        {
            if (value == null)
            {
                throw new ArgumentNullException("value");
            }

            if (startIndex < 0 || startIndex >= value.Length && startIndex > 0)
            {  // Don't throw for a 0 length array.
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (length < 0)
            {
                throw new ArgumentOutOfRangeException("length");
            }

            if (startIndex > value.Length - length)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }

            if (length == 0)
            {
                return string.Empty;
            }

            if (length > (Int32.MaxValue / 3))
            {
                // (Int32.MaxValue / 3) == 715,827,882 Bytes == 699 MB
                throw new ArgumentOutOfRangeException("length", (Int32.MaxValue / 3).ToString());
            }

            int chArrayLength = length * 3;

            char[] chArray = new char[chArrayLength];
            int i = 0;
            int index = startIndex;
            for (i = 0; i < chArrayLength; i += 3)
            {
                byte b = value[index++];
                chArray[i] = GetHexValue(b / 16);
                chArray[i + 1] = GetHexValue(b % 16);
                chArray[i + 2] = '-';
            }

            // We don't need the last '-' character
            return new String(chArray, 0, chArray.Length - 1);
        }

        /// <summary>
        /// Converts the numeric value of each element of a specified array of bytes to its equivalent hexadecimal string representation.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <returns>A string of hexadecimal pairs separated by hyphens, where each pair represents the corresponding element in value; for example, "7F-2C-4A-00".</returns>
        public static String ToString(byte[] value)
        {
            if (value == null)
            {
                throw new ArgumentNullException("value");
            }

            return ToString(value, 0, value.Length);
        }

        /// <summary>
        /// Converts the numeric value of each element of a specified subarray of bytes to its equivalent hexadecimal string representation.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A string of hexadecimal pairs separated by hyphens, where each pair represents the corresponding element in a subarray of value; for example, "7F-2C-4A-00".</returns>
        public static String ToString(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("value");
            }

            return ToString(value, startIndex, value.Length - startIndex);
        }

        /// <summary>
        /// Returns a Boolean value converted from the byte at a specified position in a byte array.
        /// </summary>
        /// <param name="value">A byte array.</param>
        /// <param name="startIndex">The index of the byte within value.</param>
        /// <returns>true if the byte at startIndex in value is nonzero; otherwise, false.</returns>
        public static bool ToBoolean(byte[] value, int startIndex)
        {
            if (value == null)
            {
                throw new ArgumentNullException("value");
            }

            if (startIndex < 0)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - 1)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            return (value[startIndex] == 0) ? false : true;
        }

        /// <summary>
        /// Converts the specified double-precision floating point number to a 64-bit signed integer.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>A 64-bit signed integer whose value is equivalent to value.</returns>
        public static long DoubleToInt64Bits(double value)
        {
            var buf = new ArrayBuffer(8);
            (new Float64Array(buf))[0] = value;
            var uintArray = new Uint32Array(buf);

            return CreateLong(uintArray[0], uintArray[1]);
        }

        /// <summary>
        /// Converts the specified 64-bit signed integer to a double-precision floating point number.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>A double-precision floating point number whose value is equivalent to value.</returns>
        public static double Int64BitsToDouble(long value)
        {
            ArrayBuffer buffer = new ArrayBuffer(8);
            Int32Array int32View = new Int32Array(buffer);
            Float64Array doubleView = new Float64Array(buffer);
            int32View[0] = value.ToDynamic().value.low;
            int32View[1] = value.ToDynamic().value.high;

            return doubleView[0];
        }

        [Template("System.Int64([{0}, {1}])")]
        static extern long CreateLong(uint low, uint high);

        [Template("({0}.shr({1} * 8).value.low & 255)")]
        public static extern byte ToByte(this long value, int bitRight = 0);

        [Template("({0}.shr({1} * 8).value.low & 255)")]
        public static extern byte ToByte(this ulong value, int bitRight = 0);
    }
}
