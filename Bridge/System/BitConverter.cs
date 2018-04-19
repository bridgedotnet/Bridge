namespace System
{
    /// <summary>
    /// Converts base data types to an array of bytes, and an array of bytes to base data types.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public static class BitConverter
    {
        /// <summary>
        /// This field indicates the "endianess" of the architecture.
        /// The value is set to true if the architecture is
        /// little endian; false if it is big endian.
        /// </summary>
        public static readonly bool IsLittleEndian = GetIsLittleEndian();

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
            var view = View(2);
            view.ToDynamic().setInt16(0, value);

            return GetViewBytes(view);
        }

        /// <summary>
        /// Returns the specified 32-bit signed integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 4.</returns>
        public static byte[] GetBytes(int value)
        {
            var view = View(4);
            view.ToDynamic().setInt32(0, value);

            return GetViewBytes(view);
        }

        /// <summary>
        /// Returns the specified 64-bit signed integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 8.</returns>
        public static byte[] GetBytes(long value)
        {
            var view = GetView(value);

            return GetViewBytes(view);
        }

        /// <summary>
        /// Returns the specified 16-bit unsigned integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 2.</returns>
        [CLSCompliant(false)]
        public static byte[] GetBytes(ushort value)
        {
            var view = View(2);
            view.ToDynamic().setUint16(0, value);

            return GetViewBytes(view);
        }

        /// <summary>
        /// Returns the specified 32-bit unsigned integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 4.</returns>
        [CLSCompliant(false)]
        public static byte[] GetBytes(uint value)
        {
            var view = View(4);
            view.ToDynamic().setUint32(0, value);

            return GetViewBytes(view);
        }

        /// <summary>
        /// Returns the specified 64-bit unsigned integer value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 8.</returns>
        [CLSCompliant(false)]
        public static byte[] GetBytes(ulong value)
        {
            var view = GetView((long)value);

            return GetViewBytes(view);
        }

        /// <summary>
        /// Returns the specified single-precision floating point value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 4.</returns>
        public static byte[] GetBytes(float value)
        {
            var view = View(4);
            view.ToDynamic().setFloat32(0, value);

            return GetViewBytes(view);
        }

        /// <summary>
        /// Returns the specified double-precision floating point value as an array of bytes.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>An array of bytes with length 8.</returns>
        public static byte[] GetBytes(double value)
        {
            if (double.IsNaN(value))
            {
                if (IsLittleEndian)
                {
                    return new byte[] { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF8, 0xFF };
                }
                else
                {
                    return new byte[] { 0xFF, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
                }
            }

            var view = View(8);
            view.ToDynamic().setFloat64(0, value);

            return GetViewBytes(view);
        }

        /// <summary>
        /// Returns a character converted from two bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A character formed by two bytes beginning at startIndex.</returns>
        public static char ToChar(byte[] value, int startIndex)
        {
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
            CheckArguments(value, startIndex, 2);

            var view = View(2);

            SetViewBytes(view, value, startIndex: startIndex);

            return view.ToDynamic().getInt16(0);
        }

        /// <summary>
        /// Returns a 32-bit signed integer converted from four bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 32-bit signed integer formed by four bytes beginning at startIndex.</returns>
        public static int ToInt32(byte[] value, int startIndex)
        {
            CheckArguments(value, startIndex, 4);

            var view = View(4);

            SetViewBytes(view, value, startIndex: startIndex);

            return view.ToDynamic().getInt32(0);
        }

        /// <summary>
        /// Returns a 64-bit signed integer converted from eight bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 64-bit signed integer formed by eight bytes beginning at startIndex.</returns>
        public static long ToInt64(byte[] value, int startIndex)
        {
            CheckArguments(value, startIndex, 8);

            var low = ToInt32(value, startIndex);
            var high = ToInt32(value, startIndex + 4);

            if (IsLittleEndian)
            {
                return CreateLong(low, high);
            }

            return CreateLong(high, low);
        }


        /// <summary>
        /// Returns a 16-bit unsigned integer converted from two bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">The array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 16-bit unsigned integer formed by two bytes beginning at startIndex.</returns>
        [CLSCompliant(false)]
        public static ushort ToUInt16(byte[] value, int startIndex)
        {
            return (ushort)ToInt16(value, startIndex);
        }

        /// <summary>
        /// Returns a 32-bit unsigned integer converted from four bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 32-bit unsigned integer formed by four bytes beginning at startIndex.</returns>
        [CLSCompliant(false)]
        public static uint ToUInt32(byte[] value, int startIndex)
        {
            return (uint)ToInt32(value, startIndex);
        }

        /// <summary>
        /// Returns a 64-bit unsigned integer converted from eight bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A 64-bit unsigned integer formed by the eight bytes beginning at startIndex.</returns>
        [CLSCompliant(false)]
        public static ulong ToUInt64(byte[] value, int startIndex)
        {
            var l = ToInt64(value, startIndex);

            return CreateULong(GetLongLow(l), GetLongHigh(l));
        }

        /// <summary>
        /// Returns a single-precision floating point number converted from four bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A single-precision floating point number formed by four bytes beginning at startIndex.</returns>
        public static float ToSingle(byte[] value, int startIndex)
        {
            CheckArguments(value, startIndex, 4);

            var view = View(4);

            SetViewBytes(view, value, startIndex: startIndex);

            return view.ToDynamic().getFloat32(0);
        }

        /// <summary>
        /// Returns a double-precision floating point number converted from eight bytes at a specified position in a byte array.
        /// </summary>
        /// <param name="value">An array of bytes.</param>
        /// <param name="startIndex">The starting position within value.</param>
        /// <returns>A double precision floating point number formed by eight bytes beginning at startIndex.</returns>
        public static double ToDouble(byte[] value, int startIndex)
        {
            CheckArguments(value, startIndex, 8);

            var view = View(8);

            SetViewBytes(view, value, startIndex: startIndex);

            return view.ToDynamic().getFloat64(0);
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
            CheckArguments(value, startIndex, 1);

            return (value[startIndex] == 0) ? false : true;
        }

        /// <summary>
        /// Converts the specified double-precision floating point number to a 64-bit signed integer.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>A 64-bit signed integer whose value is equivalent to value.</returns>
        public static long DoubleToInt64Bits(double value)
        {
            var view = View(8).ToDynamic();
            view.setFloat64(0, value);

            return Bridge.Script.Write<dynamic>("[view.getInt32(4), view.getInt32(0)]");
        }

        /// <summary>
        /// Converts the specified 64-bit signed integer to a double-precision floating point number.
        /// </summary>
        /// <param name="value">The number to convert.</param>
        /// <returns>A double-precision floating point number whose value is equivalent to value.</returns>
        public static double Int64BitsToDouble(long value)
        {
            var view = GetView(value);

            return view.ToDynamic().getFloat64(0);
        }

        private static char GetHexValue(int i)
        {
            if (i < 10)
            {
                return (char)(i + '0');
            }

            return (char)(i - 10 + 'A');
        }

        private static byte[] GetViewBytes(object view, int count = -1, int startIndex = 0)
        {
            if (count == -1)
            {
                count = view.ToDynamic().byteLength;
            }

            var r = new byte[count];

            if (IsLittleEndian)
            {
                for (int i = count - 1; i >= 0; i--)
                {
                    Bridge.Script.Write("r[System.Array.index(i, r)] = view.getUint8(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)));");
                }
            }
            else
            {
                for (int i = 0; i < count; i++)
                {
                    Bridge.Script.Write("r[System.Array.index(i1, r)] = view.getUint8(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)));");
                }
            }

            return r;
        }

        private static void SetViewBytes(object view, byte[] value, int count = -1, int startIndex = 0)
        {
            if (count == -1)
            {
                count = view.ToDynamic().byteLength;
            }

            if (IsLittleEndian)
            {
                for (int i = count - 1; i >= 0; i--)
                {
                    Bridge.Script.Write("view.setUint8(i, value[System.Array.index(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)), value)]);");
                }
            }
            else
            {
                for (int i = 0; i < count; i++)
                {
                    Bridge.Script.Write("view.setUint8(i1, value[System.Array.index(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)), value)]);");
                }
            }
        }

        private static object View(int length)
        {
            var buffer = Bridge.Script.Write<dynamic>("new ArrayBuffer(length)");
            var view = Bridge.Script.Write<dynamic>("new DataView(buffer)");

            return view;
        }

        private static object GetView(long value)
        {
            var view = View(8);

            Bridge.Script.Write("view.setInt32(4, value.value.low);");
            Bridge.Script.Write("view.setInt32(0, value.value.high);");

            return view;
        }

        private static bool GetIsLittleEndian()
        {
            var view = View(2);

            /*@
            view.setUint8(0, 170);
            view.setUint8(1, 187);

            if (view.getUint16(0) === 43707) {
                return true;
            }
            */

            return false;
        }

        private static void CheckArguments(byte[] value, int startIndex, int size)
        {
            if (value == null)
            {
                throw new ArgumentNullException("null");
            }

            if ((uint)startIndex >= value.Length)
            {
                throw new ArgumentOutOfRangeException("startIndex");
            }

            if (startIndex > value.Length - size)
            {
                throw new ArgumentException(Arg_ArrayPlusOffTooSmall);
            }
        }

        [Bridge.Template("{0}.value.high")]
        private static extern int GetLongHigh(long value);

        [Bridge.Template("{0}.value.low")]
        private static extern int GetLongLow(long value);

        [Bridge.Template("System.Int64([{0}, {1}])")]
        private static extern long CreateLong(int low, int high);

        [Bridge.Template("System.UInt64([{0}, {1}])")]
        private static extern ulong CreateULong(int low, int high);
    }
}
