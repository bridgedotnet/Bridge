using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Transpiled.System
{
    [Namespace("System")]
    public static class BitConverter
    {
        public static byte[] GetBytes(bool value)
        {
            return value ? new byte[] { 1 } : new byte[] { 0 };
        }

        public static byte[] GetBytes(char value)
        {
            return GetBytes(value.As<ushort>());
        }

        public static byte[] GetBytes(ushort value)
        {
            return new byte[] { unchecked((byte)value), unchecked((byte)(value >> 0x8)) };
        }

        public static byte[] GetBytes(short value)
        {
            return new byte[] { unchecked((byte)value), unchecked((byte)(value >> 0x8)) };
        }

        public static byte[] GetBytes(float value)
        {
            var buffer = new ArrayBuffer(4);
            var intView = new Int32Array(buffer);
            var floatView = new Float32Array(buffer);
            floatView[0] = value;
            return GetBytes((int)intView.ToDynamic()[0]);
        }

        public static byte[] GetBytes(double value)
        {
            var buf = new ArrayBuffer(8);
            (new Float64Array(buf))[0] = value;
            var uintArray = new Uint32Array(buf);
            return GetBytes(uintArray[0]).Concat(GetBytes(uintArray[1])).As<byte[]>();
        }

        public static byte[] GetBytes(int value)
        {
            return new byte[] { unchecked((byte)value), unchecked((byte)(value >> 0x8)), unchecked((byte)(value >> 0x10)), unchecked((byte)(value >> 0x18)) };
        }

        public static byte[] GetBytes(uint value)
        {
            return new byte[] { unchecked((byte)value), unchecked((byte)(value >> 0x8)), unchecked((byte)(value >> 0x10)), unchecked((byte)(value >> 0x18)) };
        }

        public static byte[] GetBytes(long value)
        {
            return new byte[] { ToByte(value), ToByte(value, 1), ToByte(value, 2), ToByte(value, 3), ToByte(value, 4), ToByte(value, 5), ToByte(value, 6), ToByte(value, 7) };
        }

        public static byte[] GetBytes(ulong value)
        {
            return new byte[] { ToByte(value), ToByte(value, 1), ToByte(value, 2), ToByte(value, 3), ToByte(value, 4), ToByte(value, 5), ToByte(value, 6), ToByte(value, 7) };
        }

        public static bool ToBoolean(byte[] value, int index)
        {
            return value[index] != 0;
        }

        public static double ToDouble(byte[] value, int index)
        {
            var buffer = new ArrayBuffer(8);
            var byteArray = new Uint8Array(buffer);
            var doubleView = new Float64Array(buffer);
            for (; index < value.Length; index++)
                byteArray[index] = value[index];
            return doubleView[0];
        }

        public static float ToSingle(byte[] value, int index)
        {
            var buffer = new ArrayBuffer(4);
            var byteArray = new Uint8Array(buffer);
            var floatView = new Float32Array(buffer);
            for (; index < value.Length; index++)
                byteArray[index] = value[index];
            return floatView[0];
        }

        public static string ToString(byte[] value, int startIndex = 0, int length = -1)
        {
            length = length == -1 ? value.Length - startIndex : length;
            string result = "";
            while (true)
            {
                var item = value[startIndex];
                result += item.ToString(16).PadLeft(2, '0');
                if (startIndex++ > length)
                    return result;
                result += '-';
            }
        }

        public static long DoubleToInt64Bits(double value)
        {
            var buf = new ArrayBuffer(8);
            (new Float64Array(buf))[0] = value;
            var uintArray = new Int32Array(buf);
            return CreateLong(uintArray[0], uintArray[1]);
        }

        public static double Int64BitsToDouble(long value)
        {
            ArrayBuffer buffer = new ArrayBuffer(8);
            Int32Array int32View = new Int32Array(buffer);
            Float64Array doubleView = new Float64Array(buffer);
            int32View[0] = value.ToDynamic().value.low;
            int32View[1] = value.ToDynamic().value.high;
            return doubleView[0];
        }

        [Template("Bridge.Long([{0}, {1}])")]
        static extern long CreateLong(int low, int high);

        public static int ToInt32(byte[] value, int index)
        {
            return (value[index].As<double>() + (value[(index.As<double>() + 1).As<int>()] << 0x8).As<double>() + (value[(index.As<double>() + 2).As<int>()] << 0x10).As<double>() + (value[(index.As<double>() + 3).As<int>()] << 0x18).As<double>()).As<int>();
        }

        public static uint ToUInt32(byte[] value, int index)
        {
            return (value[index].As<double>() + (value[(index.As<double>() + 1).As<uint>()] << 0x8).As<double>() + (value[(index.As<double>() + 2).As<uint>()] << 0x10).As<double>() + (value[(index.As<double>() + 3).As<uint>()] << 0x18).As<double>()).As<uint>();
        }

        public static long ToInt64(byte[] value, int index)
        {
            return value[index] + ((long)value[(index.As<double>() + 1).As<int>()] << 0x8) + ((long)value[(index.As<double>() + 2).As<int>()] << 0x10) + ((long)value[(index.As<double>() + 3).As<int>()] << 0x18) + ((long)value[(index.As<double>() + 4).As<int>()] << 0x20) + ((long)value[(index.As<double>() + 5).As<int>()] << 0x28) + ((long)value[(index.As<double>() + 6).As<int>()] << 0x30) + ((long)value[(index.As<double>() + 7).As<int>()] << 0x38);
        }

        public static ulong ToUInt64(byte[] value, int index)
        {
            return value[index] + ((ulong)value[(index.As<double>() + 1).As<int>()] << 0x8) + ((ulong)value[(index.As<double>() + 2).As<int>()] << 0x10) + ((ulong)value[(index.As<double>() + 3).As<int>()] << 0x18) + ((ulong)value[(index.As<double>() + 4).As<int>()] << 0x20) + ((ulong)value[(index.As<double>() + 5).As<int>()] << 0x28) + ((ulong)value[(index.As<double>() + 6).As<int>()] << 0x30) + ((ulong)value[(index.As<double>() + 7).As<int>()] << 0x38);
        }

        public static short ToInt16(byte[] value, int index)
        {
            return ((value[index].As<double>()) + ((value[(index.As<double>() + 1).As<int>()] << 0x8).As<double>())).As<short>();
        }

        public static ushort ToUInt16(byte[] value, int index)
        {
            return ((value[index].As<double>()) + ((value[(index.As<double>() + 1).As<int>()] << 0x8).As<double>())).As<ushort>();
        }

        public static char ToChar(byte[] value, int index)
        {
            return (char)ToUInt16(value, index);
        }

        [Template("({0}.shr({1} * 8).value.low & 255)")]
        public static extern byte ToByte(this long value, int bitRight = 0);

        [Template("({0}.shr({1} * 8).value.low & 255)")]
        public static extern byte ToByte(this ulong value, int bitRight = 0);
    }
}